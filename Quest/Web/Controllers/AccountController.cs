﻿using AutoMapper;
using Core.Services.EncryptorService;
using DAL;
using DAL.Models.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Web.DTO;

namespace Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationContext _db;

        private readonly IConfiguration _config;
        private readonly IEncryptorService _encryptorService;
        private readonly IMapper _mapper;

        public AccountController(ApplicationContext db,
            IConfiguration config,
            IEncryptorService encryptorService,
            IMapper mapper)
        {
            _db = db;
            _config = config;
            _encryptorService = encryptorService;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult Login([FromBody]CreditionalDto login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { userName = $"{user.LastName} {user.Name}", token = tokenString });
            }

            return response;
        }

        public UserDto GetUser([FromBody] string token)
        {
            var readToken = new JwtSecurityTokenHandler().ReadJwtToken(token);
            var userId = new Guid(readToken.Id);
            var model = _mapper.Map<UserDto>(_db.Users.First(x => x.Id == userId));
            return model;
        }

        public IActionResult CreateUser(UserDto user)
        {
            _db.Users.Add(new UserEntity
            {
                Id = Guid.NewGuid(),
                BirthDate = user.BirthDate,
                Email = user.Email,
                LastName = user.LastName,
                Name = user.Name,
                Password = _encryptorService.Encrypt(user.Password),
                Patronymic = user.Patronymic,
                CreatedDate = DateTime.Now,
                EditedDate = DateTime.Now,
                IsDeleted = false
            });
            _db.SaveChanges();

            return Ok();
        }

        public IActionResult SaveUser(UserDto userDto, string token)
        {
            var readToken = new JwtSecurityTokenHandler().ReadJwtToken(token);
            var userId = new Guid(readToken.Id);
            var user = _db.Users.FirstOrDefault(x => x.Id == userId);

            user.LastName = userDto.LastName;
            user.Name = userDto.Name;
            user.Patronymic = userDto.Patronymic;
            user.BirthDate = userDto.BirthDate;
            user.EditedDate = DateTime.Now;
            _db.SaveChanges();

            return Ok();
        }

        private string GenerateJSONWebToken(UserEntity userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userInfo.Name),
                new Claim(JwtRegisteredClaimNames.Email, userInfo.Email),
                //new Claim("DateOfJoing", userInfo.DateOfJoing.ToString("yyyy-MM-dd")),
                new Claim(JwtRegisteredClaimNames.Jti, userInfo.Id.ToString())
                };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"],
            claims,
            expires: DateTime.Now.AddMinutes(120),
            signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private UserEntity AuthenticateUser(CreditionalDto creditional)
        {
            var hashPassword = _encryptorService.Encrypt(creditional.Password);

            return _db.Users.FirstOrDefault(x => x.Password == hashPassword && x.Email == creditional.Email);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.DTO;

namespace Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly ApplicationContext _db;
        private readonly IMapper _mapper;

        public UserController(ApplicationContext db,
              IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        [HttpGet]
        public UserDto GetUser()
        {
            var userId = new Guid(User.Identity.Name);
            var model = _mapper.Map<UserDto>(_db.Users.First(x => x.Id == userId));
            return model;
        }

        [HttpPut]
        public IActionResult SaveUser(UserDto userDto)
        {
            var userId = new Guid(User.Identity.Name);
            var user = _db.Users.FirstOrDefault(x => x.Id == userId);

            user.LastName = userDto.LastName;
            user.Name = userDto.Name;
            user.Patronymic = userDto.Patronymic;
            user.BirthDate = userDto.BirthDate;
            user.EditedDate = DateTime.Now;
            _db.SaveChanges();

            return Ok("Данные успешно изменены.");
        }
    }
}
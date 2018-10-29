using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Web.DTO.Quest;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestController : ControllerBase
    {
        private readonly ApplicationContext _db;
        private readonly IMapper _mapper;

        public QuestController(ApplicationContext db,
            IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        [HttpGet("[action]")]
        public IEnumerable<QuestDto> GetQuests()
        {
            var result = _mapper.Map<IEnumerable<QuestDto>>(_db.Quests.Include(x => x.Images).Where(x => !x.IsDeleted));

            return result;
        }
    }
}
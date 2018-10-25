using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Web.DTO.Quest;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestController : ControllerBase
    {
        [HttpGet("[action]")]
        public IEnumerable<QuestDto> GetQuests()
        {
            var result = new List<QuestDto>();
            result.Add(new QuestDto { Id = Guid.NewGuid(), Name = "Квест 1", ShortDescription = "Описание первого квеста!" });
            return result;
        }
    }
}
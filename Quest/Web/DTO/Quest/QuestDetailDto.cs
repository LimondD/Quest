using System.Collections.Generic;

namespace Web.DTO.Quest
{
    public class QuestDetailDto : QuestDto
    {
        public string Description { get; set; }
        public List<string> Images { get; set; }
    }
}

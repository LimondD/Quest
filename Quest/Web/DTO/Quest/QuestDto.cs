using System;

namespace Web.DTO.Quest
{
    public class QuestDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string ImageName { get; set; }
    }
}

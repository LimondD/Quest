using DAL.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities.Quest
{
    [Table("Quests")]
    public class QuestEntity : BaseEntity
    {
        [Required]
        [MaxLength(256)]
        public string Name { get; set; }

        [Required]
        [MaxLength(512)]
        public string ShortDescription { get; set; }

        [Required]
        public string Description { get; set; }

        public ICollection<QuestImageEntity> Images { get; set; }
    }
}

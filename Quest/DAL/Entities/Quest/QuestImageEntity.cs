using DAL.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities.Quest
{
    [Table("QuestImages")]
    public class QuestImageEntity : BaseEntity
    {
        [Required]
        [MaxLength(64)]
        public string Name { get; set; }

        [Required]
        public bool IsMain { get; set; }

        [Required]
        public Guid QuestId { get; set; }

        public QuestEntity Quest { get; set; }
    }
}

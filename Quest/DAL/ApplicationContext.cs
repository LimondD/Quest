using DAL.Entities.Quest;
using DAL.Models.User;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options) { }

        public DbSet<UserEntity> Users { get; set; }
        public DbSet<QuestEntity> Quests { get; set; }
    }
}

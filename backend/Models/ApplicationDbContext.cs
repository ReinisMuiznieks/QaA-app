using Microsoft.EntityFrameworkCore;

namespace QaAAppBackend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Question> Questions { get; set; } 
    }
}

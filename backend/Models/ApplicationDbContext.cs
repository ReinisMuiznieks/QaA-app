using Microsoft.EntityFrameworkCore;

namespace QaAAppBackend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Define DbSet properties for your entities
        // For example:
        // public DbSet<User> Users { get; set; }
        public DbSet<User> Users { get; set; }
    }
}

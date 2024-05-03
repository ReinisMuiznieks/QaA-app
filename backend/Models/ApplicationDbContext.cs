using Microsoft.EntityFrameworkCore;
using QaAAppBackend.Models;

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
        public DbSet<Reply> Replies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        modelBuilder.Entity<Reply>()
            .HasOne(e => e.Question)
            .WithMany(e => e.Replies)
            .HasForeignKey(e => e.QuestionId)
            .IsRequired();
        }
    }
}

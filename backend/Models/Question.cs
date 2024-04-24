using System.ComponentModel.DataAnnotations;

namespace QaAAppBackend.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Content { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}

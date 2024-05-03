namespace QaAAppBackend.Models
{
public class Question
{
    public int Id { get; set; }
    public string Content { get; set; }
    public int UserId { get; set; } 
    public DateTime PostedAt { get; set; }

    public ICollection<Reply> Replies { get; } = new List<Reply>();
}

}

namespace QaAAppBackend.Models
{
public class Reply
{
    public int Id { get; set; }
    // public int UserID { get; set; }
    public string Content { get; set; }
    public DateTime PostedAt { get; set; }
    public int QuestionId { get; set; }
   public Question Question { get; set; } = null!;
    
}
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QaAAppBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace QaAAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReplyController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReplyController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Reply
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reply>>> GetReplies()
        {
            return await _context.Replies.ToListAsync();
        }

        // GET: api/Reply/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reply>> GetReply(int id)
        {
            var reply = await _context.Replies.FindAsync(id);

            if (reply == null)
            {
                return NotFound();
            }

            return reply;
        }

    /// <summary>
    /// Create a new reply
    /// </summary>
    /// <remarks>
    /// Sample request:
    ///
    ///     POST /api/replies
    ///     {
    ///         "content": "testtt",
    ///         "questionId": 8
    ///     }
    ///
    /// </remarks>
    /// <param name="reply">The reply to create.</param>
    /// <returns>The newly created reply.</returns>
        [HttpPost]
        public async Task<ActionResult<Reply>> PostReply(Reply reply)
        {
            try
            {
                var questionExists = await _context.Questions.AnyAsync(q => q.Id == reply.QuestionId);
                if (!questionExists)
                {
                    return BadRequest("Question does not exist.");
                }
                reply.PostedAt = DateTime.UtcNow; 
                _context.Replies.Add(reply);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetReply), new { id = reply.Id }, reply);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating reply: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while creating the reply.");
            }
        }

        // DELETE: api/Reply/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReply(int id)
        {
            var reply = await _context.Replies.FindAsync(id);
            if (reply == null)
            {
                return NotFound();
            }

            _context.Replies.Remove(reply);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReplyExists(int id)
        {
            return _context.Replies.Any(e => e.Id == id);
        }
    }
}

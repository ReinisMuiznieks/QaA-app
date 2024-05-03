using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedReply : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Replies_Questions_QuestionID",
                table: "Replies");

            migrationBuilder.RenameColumn(
                name: "QuestionID",
                table: "Replies",
                newName: "QuestionId");

            migrationBuilder.RenameIndex(
                name: "IX_Replies_QuestionID",
                table: "Replies",
                newName: "IX_Replies_QuestionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Replies_Questions_QuestionId",
                table: "Replies",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Replies_Questions_QuestionId",
                table: "Replies");

            migrationBuilder.RenameColumn(
                name: "QuestionId",
                table: "Replies",
                newName: "QuestionID");

            migrationBuilder.RenameIndex(
                name: "IX_Replies_QuestionId",
                table: "Replies",
                newName: "IX_Replies_QuestionID");

            migrationBuilder.AddForeignKey(
                name: "FK_Replies_Questions_QuestionID",
                table: "Replies",
                column: "QuestionID",
                principalTable: "Questions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

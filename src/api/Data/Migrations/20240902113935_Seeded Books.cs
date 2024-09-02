using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BokRegister.Api.Data.Migrations
{
    /// <inheritdoc />
    public partial class SeededBooks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Isbn", "Author", "Title" },
                values: new object[,]
                {
                    { "9780061120084", "Harper Lee", "To Kill a Mockingbird" },
                    { "9780316769488", "J.D. Salinger", "The Catcher in the Rye" },
                    { "9780451524935", "George Orwell", "1984" },
                    { "9780743273565", "F. Scott Fitzgerald", "The Great Gatsby" },
                    { "9781503290563", "Jane Austen", "Pride and Prejudice" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Isbn",
                keyValue: "9780061120084");

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Isbn",
                keyValue: "9780316769488");

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Isbn",
                keyValue: "9780451524935");

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Isbn",
                keyValue: "9780743273565");

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Isbn",
                keyValue: "9781503290563");
        }
    }
}

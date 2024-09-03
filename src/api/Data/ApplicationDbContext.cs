using BokRegister.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BokRegister.Api.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Book> Books { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        SeedBooks(modelBuilder);
    }
    private void SeedBooks(ModelBuilder builder)
    {
        builder.Entity<Book>().HasData([
            new Book{ Isbn = "9780061120084", Title = "To Kill a Mockingbird", Author = "Harper Lee" },
            new Book{Isbn = "9780451524935", Title = "1984", Author = "George Orwell"},
            new Book{Isbn = "9780743273565", Title = "The Great Gatsby", Author = "F. Scott Fitzgerald"},
            new Book{Isbn = "9781503290563", Title = "Pride and Prejudice", Author = "Jane Austen"},
            new Book{Isbn = "9780316769488",Title = "The Catcher in the Rye",Author = "J.D. Salinger"}
        ]);
    }
}
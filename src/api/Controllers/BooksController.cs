using BokRegister.Api.Data;
using BokRegister.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BokRegister.Api.Controllers;

[ApiController]
[Route("/books")]
public class BooksController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public BooksController(ApplicationDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> AllBooks()
    {
        List<Book> books = await _db.Books.AsNoTracking().ToListAsync();

        if (books is null || books.Count == 0)
        {
            return NotFound("The books could not be found");
        }

        return Ok(books);
    }

    [HttpPost]
    public async Task<IActionResult> AddBook([FromBody] Book book)
    {
        var existingBook = await _db.Books.FirstOrDefaultAsync(b => b.Isbn == book.Isbn);

        if (existingBook is not null)
        {
            return Conflict("A book with the same ISBN already exists.");
        }

        _db.Books.Add(book);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(GetIndividualBook), new { isbn = book.Isbn }, book);
    }

    [HttpGet("{isbn}")]
    public async Task<IActionResult> GetIndividualBook(string isbn)
    {
        var book = await _db.Books.FirstOrDefaultAsync(b => b.Isbn == isbn);

        if (book is null)
        {
            return NotFound($"Book not found with isbn: {isbn}");
        }

        return Ok(book);
    }

}
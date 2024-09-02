using BokRegister.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BokRegister.Api.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Book> Books { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

}
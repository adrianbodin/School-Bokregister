using System.ComponentModel.DataAnnotations;

namespace BokRegister.Api.Models;

public class Book
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public required string Title { get; set; }

    [Required]
    [MaxLength(100)]
    public required string Author { get; set; }

    [Required]
    [MaxLength(100)]
    public required string Isbn { get; set; }
}
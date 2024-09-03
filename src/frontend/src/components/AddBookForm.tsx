import {Book} from "../types/book.ts";
import {addBook} from "../fetching/books.ts";

interface AddBookFormProps {
  addBookToState: (book: Book) => void;
}

const AddBookForm = ({addBookToState}: AddBookFormProps) => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newBook: Book = {
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      author: (form.elements.namedItem('author') as HTMLInputElement).value,
      isbn: (form.elements.namedItem('isbn') as HTMLInputElement).value,
    };
    await addBook(newBook);
    addBookToState(newBook)
    form.reset();
  };

  return (
    <div>
      <h2>Lägg till en bok</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Animal Farm"
          />
        </div>
        <div className="input-group">
          <label htmlFor="author">Författare:</label>
          <input
            type="text"
            id="author"
            name="author"
            required
            placeholder="George Orwell"
          />
        </div>
        <div className="input-group">
          <label htmlFor="isbn">ISBN nummer:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            required
            pattern="^\d{13}$"
            placeholder="9780061120084"
            title="ISBN måste ha rätt format, tex 1581587723489"
          />
        </div>
        <button type="submit">Lägg till bok</button>
      </form>
    </div>
  );
};

export default AddBookForm;
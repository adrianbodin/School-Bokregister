import {useState} from "react";
import {Book} from "../types/book.ts";
import '../css/home.css'
import {Link} from "react-router-dom";

const Home = () => {
  //pull these from the api later
  const [books, setBooks] = useState<Book[]>([
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0061120084"
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "978-0451524935"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-0743273565"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "978-1503290563"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "978-0316769488"
    }
  ])
  return (
    <section className="book-section">
      <div>
        <h1>Alla böcker</h1>
        <table>
          <thead className="table-head">
          <tr>
            <th scope="col">Boktitel</th>
            <th scope="col">Författare</th>
            <th scope="col">ISBN</th>
          </tr>
          </thead>
          <tbody className="table-body">
          {books.map(book => (
            <tr className="book-row" key={book.isbn}>
              <td>
                <Link
                  to={`/books/${book.isbn}`}
                  state={{book}}
                >{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Lägg till en bok</h2>
        <hr/>
        <form>
          <div className="input-group">
            <label htmlFor="title">Titel:</label>
            <input type="text" id="title" name="title" required/>
          </div>
          <div className="input-group">
            <label htmlFor="author">Författare:</label>
            <input type="text" id="author" name="author" required/>
          </div>
          <div className="input-group">
            <label htmlFor="isbn">ISBN nummer: (Rätt format)</label>
            <input type="text" id="isbn" name="isbn" required pattern="^\d{3}-\d{10}$"/>
          </div>
          <button>Lägg till bok</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
import {useEffect, useState} from "react";
import {Book} from "../types/book.ts";
import '../css/home.css'
import {Link} from "react-router-dom";
import {deleteBook, getAllBooks} from "../fetching/books.ts";
import AddBookForm from "../components/AddBookForm.tsx";

const Home = () => {
  //pull these from the api later
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        setBooks(data)
      })
  }, []);

  const addBookToState = (newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const removeBook = (isbn: string) => async () => {
    const answer = confirm("Are you sure you want to delete the book?");

    if(answer){
      await deleteBook(isbn);
      setBooks((prevBooks) => prevBooks.filter(book => book.isbn !== isbn));
    }
  };

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
            <th scope="col"></th>
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
              <td><button onClick={removeBook(book.isbn)}>Ta bort</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <AddBookForm addBookToState={addBookToState}/>
    </section>
  );
};

export default Home;
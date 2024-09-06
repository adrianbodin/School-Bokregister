import {useEffect, useState} from "react";
import {Book} from "../types/book.ts";
import '../css/home.css'
import {Link} from "react-router-dom";
import { getAllBooks, SortBy} from "../fetching/books.ts";
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

  const sortBooks = async (value: SortBy) => {
    if (value) {
      const sortedBooks = await getAllBooks(value);
      setBooks(sortedBooks);
    }
  };

  //This is not optimal, it hits the api very many times, would need a look at.
  const filterBooks = async (value: string) => {
    if (value) {
      const filteredBooks = await getAllBooks(undefined, value);
      setBooks(filteredBooks);
    }
    else{
      const books = await getAllBooks();
      setBooks(books)
    }
  };

  return (
    <section className="book-section">
      <div>
        <h1>Alla böcker</h1>
        <hr/>
        <div className="filter-container">
          <select onChange={(e) => sortBooks(e.target.value as SortBy)} name="sort" id="sort-select">
            <option value="">Sortera efter:</option>
            <option value="title">Titel</option>
            <option value="author">Författare</option>
          </select>
          <search className="search-group">
            <label htmlFor="search-input">Sök:</label>
            <input onChange={(e) => filterBooks(e.target.value)} name="search-input" id="search-input" type="text" placeholder="Sökterm"/>
          </search>
        </div>
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
      <AddBookForm addBookToState={addBookToState}/>
    </section>
  );
};

export default Home;
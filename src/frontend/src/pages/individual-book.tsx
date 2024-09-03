import { useLocation, useNavigate} from "react-router-dom";
import {deleteBook} from "../fetching/books.ts";
import {useState} from "react";
import '../css/main.css'

const IndividualBook = () => {
  const [editing, setEditing] = useState<boolean>(false)

  //This is used to pass data from one route to another with react router
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  const removeBook = (isbn: string) => async () => {
    const answer = confirm("Are you sure you want to delete the book?");

    if(answer){
      await deleteBook(isbn);
      navigate("/");
    }
  };



  if(!book) return <div>Book not found</div>

  return (
    <section>
      {editing ? (
        <div>
          <form>
            <div className="edit-title-container">
              <label htmlFor="title"><h1>Titel: </h1></label>
              <input name="title" id="title" value={book.title} type="text"/>
            </div>
            <div className="edit-author-container">
              <label htmlFor="author"><h2>Författare: </h2></label>
              <input name="author" id="author" value={book.author} type="text"/>
            </div>
            <div className="edit-isbn-container">
              <label htmlFor="isbn"><h3>ISBN: </h3></label>
              <input name="isbn" id="isbn" value={book.isbn} type="text"/>
            </div>
            <button type="submit">Ändra</button>
          </form>
        </div>
      ) : (
        <div className="book-info-container">
          <h1>Titel: <span>- {book.title}</span></h1>
          <h2>Författare: <span>- {book.author}</span></h2>
          <h3>ISBN: <span>- {book.isbn}</span></h3>
        </div>
      )}
      <button onClick={() => setEditing(prev => !prev)}>
        {editing ? "Avbryt redigering" : "Redigera"}
      </button>
      <button onClick={removeBook(book.isbn)}>Ta bort</button>
    </section>
  );
};

export default IndividualBook;
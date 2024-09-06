import { useLocation, useNavigate} from "react-router-dom";
import {deleteBook, updateBook} from "../fetching/books.ts";
import {useState} from "react";
import '../css/main.css'
import '../css/individual-book.css'


//todo, maybe fetch the book here, because if i update a book, the values dont seem right.
const IndividualBook = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [editing, setEditing] = useState<boolean>(false)
  const [book, setBook] = useState(location.state?.book || {});

  const removeBook = (isbn: string) => async () => {
    const answer = confirm("Är du säker på att du vill ta bort boken?");

    if(answer){
      await deleteBook(isbn);
      navigate("/");
    }
  };

  const editBook = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const updatedBook = {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      isbn: formData.get('isbn') as string,
    };

    await updateBook(updatedBook);
    setEditing(false);
    setBook(updatedBook);
  }

  if(!book) return <div>Book not found</div>

  return (
    <section>
      {editing ? (
        <div className="book-info-container">
          <form onSubmit={(e) => editBook(e)}>
            <div className="edit-title-container">
              <label htmlFor="title"><h1>Titel: </h1></label>
              <input name="title" id="title" defaultValue={book.title} type="text"/>
            </div>
            <div className="edit-author-container">
              <label htmlFor="author"><h2>Författare: </h2></label>
              <input name="author" id="author" defaultValue={book.author} type="text"/>
            </div>
            <div className="edit-isbn-container">
              <label htmlFor="isbn"><h3>ISBN: </h3></label>
              <input name="isbn" id="isbn" defaultValue={book.isbn} type="text"/>
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
      <div className="button-container">
        <button onClick={() => setEditing(prev => !prev)}>
          {editing ? "Avbryt redigering" : "Redigera"}
        </button>
        <button onClick={removeBook(book.isbn)}>Ta bort</button>
      </div>
    </section>
  );
};

export default IndividualBook;
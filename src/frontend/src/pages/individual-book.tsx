import { useLocation, useNavigate} from "react-router-dom";
import {deleteBook} from "../fetching/books.ts";

const IndividualBook = () => {
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
      <h1>{book.title}</h1>
      <h2>Skriven av: {book.author}</h2>
      <h3>ISBN: {book.isbn}</h3>
      <button onClick={removeBook(book.isbn)}>Ta bort</button>
    </section>
  );
};

export default IndividualBook;
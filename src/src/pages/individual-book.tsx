import {useLocation} from "react-router-dom";

const IndividualBook = () => {
  //This is used to pass data from one route to another with react router
  const location = useLocation();
  const { book } = location.state || {};

  if(!book) return <div>Book not found</div>

  return (
    <section>
      <h1>{book.title}</h1>
      <h2>Skriven av: {book.author}</h2>
      <h3>ISBN: {book.isbn}</h3>
    </section>
  );
};

export default IndividualBook;
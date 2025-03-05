import PropTypes from "prop-types";
import BookRow from "./BookRow";

function Booklist({searchTerm, books, onFeatureBook}) {
  const rows = [];
  books.forEach(book => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow key={book.id} book = {book} onFeatureBook = {onFeatureBook}/>);
  });

  return (
    <div className="space-y-4">
      {rows}
    </div>
  )
}

Booklist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
}

export default Booklist
import BookRow from "./BookRow"
import PropTypes from "prop-types";

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
    
    // <ul className="space-y-4">
    //     {
    //       books.map((book) => (
    //         <li 
    //           key={book.id}
    //           className="flex items-center justify-between p-4 border bg-white shadow rounded"
    //         >
    //           <BookRow book = {book}/>
    //         </li>
    //       ))
    //     }
    // </ul>
  )
}

Booklist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
}

export default Booklist
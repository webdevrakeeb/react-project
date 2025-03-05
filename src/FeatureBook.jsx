import { Star } from "lucide-react"
import PropTypes from "prop-types";

function FeatureBook({book, onFeatureBook}) {
  return (
    <div className="border p-2 rounded">
      <button
        onClick={() => onFeatureBook(book.id)}
      >
        <Star color={book.featured ? "Red" : "Black"} fill={book.featured ? "Red" : "White"}/>
      </button>
    </div>
    
  )
}

FeatureBook.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired
}

export default FeatureBook
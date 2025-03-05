import PropTypes from "prop-types";

function BookDetails({title, author}) {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500">{author}</p>
    </div>
  )
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default BookDetails
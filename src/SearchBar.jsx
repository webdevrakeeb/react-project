import PropTypes from "prop-types";

function SearchBar({searchTerm, onSearchBook}) {
  return (
    <div>
      <form>
        <input 
          type="text"
          value={searchTerm}
          placeholder="Search Books....."
          onChange={(event) => onSearchBook(event.target.value)}
          className="mb-4 border rounded w-full py-2 px-3 focus:outline-none"
        />
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm : PropTypes.string.isRequired,
  onSearchBook : PropTypes.func.isRequired,
}

export default SearchBar
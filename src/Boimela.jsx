import Booklist from "./BookList";
import Header from "./Header"
import SearchBar from "./SearchBar"


import { useState } from "react"

const BOOKS = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    featured: false
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jone Austin",
    featured: false
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false
  },
]

function Boimela() {
  const [books, setBooks] = useState(BOOKS); 
  const [searchTerm, setSearchTerm] = useState("");
  console.log(books);

  const toggleFeatured = (id) =>{
      setBooks(books.map((book) => book.id === id ? {...book, featured : !book.featured} : book
    ));
  }
  return (
    <div className="max-w-[800px] mx-auto p-4">
      <Header/>
      <SearchBar searchTerm={searchTerm} onSearchBook = {setSearchTerm}/>
      <Booklist searchTerm={searchTerm} books = {books} onFeatureBook = {toggleFeatured}/>
    </div>
  )
}

export default Boimela
import React, { useContext, useState } from 'react'
import { BookContext } from "../contexts/BookContext";
import { addBook } from "../actions/bookActions";

const BookForm = () => {
  // const { addBook } = useContext(BookContext)
  const { dispatch } = useContext(BookContext)

  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // addBook(title, author)
    dispatch(addBook(title, author))
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='book title' required value={title} onChange={e => setTitle(e.target.value)}/>
      <input type="text" placeholder='book author' required value={author} onChange={e => setAuthor(e.target.value)}/>
      <input type="submit" value="add book"/>
    </form>
  )
}

export default BookForm

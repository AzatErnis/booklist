// import React, { createContext, useState} from 'react'
import React, { createContext, useReducer } from 'react'
import { bookReducer } from "../reducers/bookReducer";
// import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  // const [ books, setBooks ] = useState([
  //   { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
  //   { title: 'the final erpire', author: 'brandon sanderson', id: 2 }
  // ])

  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuidv4()}])
  // }
  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id))
  // }

  const [books, dispatch ] = useReducer(bookReducer, [])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      { children }
    </BookContext.Provider>
  )
}

export default BookContextProvider

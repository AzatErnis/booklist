import React, { createContext, useState} from 'react'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const [ books, setBooks ] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final erpire', author: 'brandon sanderson', id: 2 }
  ])
  return (
    <BookContext.Provider value={books}>
      { children }
    </BookContext.Provider>
  )
}

export default BookContextProvider

export const addBook = (title, author) => ({
  type: 'ADD_BOOK',
  title,
  author
})

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id
})
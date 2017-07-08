export function selectBook(book) {
  // selectBook is an action creater. It needs to return an action.
  // An action is an object with a property of "type".
  // Also sometimes (or rather, usually) has a second property, a "payload", which is data that specifies the conditions of the action.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
import * as actionTypes from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (deletedBook) => {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: deletedBook,
  };
};
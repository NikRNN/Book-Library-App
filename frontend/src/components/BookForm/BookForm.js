import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/bookSlice";
import { createBookWithId } from "../../utils/createBookWithId";
import { setError } from "../../redux/slices/errorSlice";

import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handlerAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    const finallyRandomBook = createBookWithId(randomBook, "random");

    dispatch(addBook(finallyRandomBook));
  };

  const handleAddRandomBookViaApi = () => {
    dispatch(fetchBook("http://localhost:5000/random-book"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = createBookWithId({ title, author }, "manual");

      dispatch(addBook(book));

      setTitle("");
      setAuthor("");
    } else {
      const error = "Заполните поля с именем автора и названием книги";
      dispatch(setError(error));
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Добавьте новую книгу</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Заголовок: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="author">Автор: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>

        <button type="submit">Добавить книгу</button>
        <button type="button" onClick={handlerAddRandomBook}>
          Добавьте случайную книгу
        </button>
        <button type="button" onClick={handleAddRandomBookViaApi}>
          Добавьте случайную книгу через API
        </button>
      </form>
    </div>
  );
};

export default BookForm;

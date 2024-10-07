import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import { v4 as uuidv4 } from "uuid";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handlerAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];

    const finallyRandomBook = {
      ...randomBook,
      isFavorite: false,
      id: uuidv4(),
    };

    dispatch(addBook(finallyRandomBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = { title, author, id: uuidv4(), isFavorite: false };

      dispatch(addBook(book));

      setTitle("");
      setAuthor("");
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
      </form>
    </div>
  );
};

export default BookForm;

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import { toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector((state) => state.filter.title);
  const authorFilter = useSelector((state) => state.filter.author);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const deletedBook = books.find((book) => book.id === id);

    dispatch(deleteBook(deletedBook));
  };

  const toggleFavoriteHandler = (id) => {
    const book = books.find((book) => book.id === id);

    const favoriteBook = { ...book, isFavorite: true };

    dispatch(toggleFavorite(favoriteBook));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    return matchesAuthor && matchesTitle;
  });

  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        "Нет доступных книг"
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by {book.author}
              </div>

              {book.isFavorite ? (
                <BsBookmarkStarFill
                  className="star-icon"
                  onClick={() => toggleFavoriteHandler(book.id)}
                />
              ) : (
                <BsBookmarkStar
                  className="star-icon"
                  onClick={() => toggleFavoriteHandler(book.id)}
                />
              )}
              <div className="book-actions">
                <button
                  onClick={() => {
                    deleteHandler(book.id);
                  }}
                >
                  Удалить
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;

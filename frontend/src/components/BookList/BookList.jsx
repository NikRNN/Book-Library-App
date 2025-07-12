import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/slices/bookSlice";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  const titleFilter = useSelector((state) => state.filter.title);
  const authorFilter = useSelector((state) => state.filter.author);
  const favoriteFilter = useSelector((state) => state.filter.favorite);

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

    const matchesFavorite = favoriteFilter ? book.isFavorite : true;

    return matchesAuthor && matchesTitle && matchesFavorite;
  });

  const highlightMatch = (text, filter) => {
    if (!filter) {
      return text;
    }
    const regex = new RegExp(`(${filter})`, "gi");

    return text.split(regex).map((item, index) => {
      if (item.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {item}
          </span>
        );
      }
      return item;
    });
  };

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
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                {highlightMatch(book.author, authorFilter)} ({book.source})
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

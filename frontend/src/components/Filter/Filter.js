import {
  setFilterTitle,
  resetFilters,
  setFilterAuthor,
  setFavoriteFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();

  const titleFilter = useSelector((state) => state.filter.title);
  const authorFilter = useSelector((state) => state.filter.author);
  const favoriteFilter = useSelector((state) => state.filter.favorite);

  const handlerTitleFilterChange = (e) => {
    dispatch(setFilterTitle(e.target.value));
  };

  const handlerAuthorFilterChange = (e) => {
    dispatch(setFilterAuthor(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleFilterFavoriteBook = () => {
    dispatch(setFavoriteFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handlerTitleFilterChange}
            type="text"
            placeholder="Фильтр по названию"
            value={titleFilter}
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handlerAuthorFilterChange}
            type="text"
            placeholder="Фильтр по автору"
            value={authorFilter}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handleFilterFavoriteBook}
            />
            Только избранные
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Убрать фильтры
        </button>
      </div>
    </div>
  );
};

export default Filter;

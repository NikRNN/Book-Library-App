import { setFilterTitle } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();

  const titleFilter = useSelector((state) => state.filter.title);

  const handlerTitleFilterChange = (e) => {
    dispatch(setFilterTitle(e.target.value));
  };

  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          onChange={handlerTitleFilterChange}
          type="text"
          placeholder="Фильтр по названию"
          value={titleFilter}
        />
      </div>
    </div>
  );
};

export default Filter;

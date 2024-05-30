import "./CheckBoxFilter.scss";

type Props = {
  filters: any;
  setFilters: any;
};

const CheckBoxFilter = ({ filters, setFilters }: Props) => {
  const handleFilterChange = (e: any) => {
    const { name, checked } = e.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: checked,
      all: false,
    }));
  };

  const handleAllFilterChange = () => {
    setFilters({
      all: true,
      nonStop: false,
      oneStop: false,
      twoStops: false,
      threeStops: false,
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-title">Кількість пересадок</div>
      <ul className="check-filter">
        <li className="check__item">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              name="all"
              checked={filters.all}
              onChange={handleAllFilterChange}
            />
            <span className="check__box"></span>
            <span className="check__title">Всі</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              name="nonStop"
              checked={filters.nonStop}
              onChange={handleFilterChange}
            />
            <span className="check__box"></span>
            <span className="check__title">Без пересадок</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              name="oneStop"
              checked={filters.oneStop}
              onChange={handleFilterChange}
            />
            <span className="check__box"></span>
            <span className="check__title">1 пересадка</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              name="twoStops"
              checked={filters.twoStops}
              onChange={handleFilterChange}
            />
            <span className="check__box"></span>
            <span className="check__title">2 пересадки</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input
              className="check__input"
              type="checkbox"
              name="threeStops"
              checked={filters.threeStops}
              onChange={handleFilterChange}
            />
            <span className="check__box"></span>
            <span className="check__title">3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default CheckBoxFilter;

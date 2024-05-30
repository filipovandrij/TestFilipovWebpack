import "./CheckBoxFilter.scss";

type Props = {};

const CheckBoxFilter = (props: Props) => {
  return (
    <div className="filter-container">
      <div className="filter-title">Кількість пересадок</div>
      <ul className="check-filter">
        <li className="check__item">
          <label className="check">
            <input className="check__input" type="checkbox" value="1" />
            <span className="check__box"></span>
            <span className="check__title">Всі</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input className="check__input" type="checkbox" value="2" />
            <span className="check__box"></span>
            <span className="check__title">Без пересадок</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input className="check__input" type="checkbox" value="3" />
            <span className="check__box"></span>
            <span className="check__title">1 пересадка</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input className="check__input" type="checkbox" value="4" />
            <span className="check__box"></span>
            <span className="check__title">2 пересадки</span>
          </label>
        </li>
        <li className="check__item">
          <label className="check">
            <input className="check__input" type="checkbox" value="5" />
            <span className="check__box"></span>
            <span className="check__title">3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
export default CheckBoxFilter;

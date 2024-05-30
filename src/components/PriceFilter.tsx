import "./PriceFilter.scss";

type Props = {
  sort: string;
  setSort: (sort: string) => void;
};

export default function PriceFilter({ sort, setSort }: Props) {
  return (
    <div className="sort-buttons-container">
      <button
        className={sort === "price" ? "active" : ""}
        onClick={() => setSort("price")}
      >
        Найдешевший
      </button>
      <button
        className={sort === "time" ? "active" : ""}
        onClick={() => setSort("time")}
      >
        Найшвидший
      </button>
      <button
        className={sort === "optimal" ? "active" : ""}
        onClick={() => setSort("optimal")}
      >
        ОптимальнИй
      </button>
    </div>
  );
}

import "./PriceFilter.scss";

type Props = {
  sort: string;
  setSort: (sort: string) => void;
};

export default function PriceFilter({ sort, setSort }: Props) {
  return (
    <div className="sort-buttons">
      <button
        className={sort === "price" ? "active" : ""}
        onClick={() => setSort("price")}
      >
        Most affordable
      </button>
      <button
        className={sort === "time" ? "active" : ""}
        onClick={() => setSort("time")}
      >
        Fastest
      </button>
      <button
        className={sort === "optimal" ? "active" : ""}
        onClick={() => setSort("optimal")}
      >
        Optimal
      </button>
    </div>
  );
}

import { useState } from "react";
import CheckBoxFilter from "../components/CheckBoxFilter";
import ListOfTickets from "../components/ListOfTickets";

type Props = {};

export default function Main({}: Props) {
  const [filters, setFilters] = useState({
    all: false,
    nonStop: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <CheckBoxFilter filters={filters} setFilters={setFilters} />
        <ListOfTickets filters={filters} />
      </div>
    </>
  );
}

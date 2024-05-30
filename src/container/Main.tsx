import { useState } from "react";
import CheckBoxFilter from "../components/CheckBoxFilter";
import ListOfTickets from "../components/ListOfTickets";
import "./Main.scss";

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
      <main className="main">
        <CheckBoxFilter filters={filters} setFilters={setFilters} />
        <ListOfTickets filters={filters} />
      </main>
    </>
  );
}

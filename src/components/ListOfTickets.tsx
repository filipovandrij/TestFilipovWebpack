import PriceFilter from "./PriceFilter";
import flights from "../mock/flightsArray";
import { useState } from "react";
import { FlightsType } from "../models/flights";

type Props = { filters: any };

export default function ListOfTickets({ filters }: Props) {
  const [sort, setSort] = useState("price");

  const applyFilters = () => {
    const { nonStop, oneStop, twoStops, threeStops } = filters;
    if (!nonStop && !oneStop && !twoStops && !threeStops) return flights;

    return flights.filter((flight) => {
      if (nonStop && flight.transplants.length === 0) return true;
      if (oneStop && flight.transplants.length === 1) return true;
      if (twoStops && flight.transplants.length === 2) return true;
      if (threeStops && flight.transplants.length === 3) return true;
      return false;
    });
  };
  console.log("sort", sort);
  const applySorting = (filterArray: any) => {
    switch (sort) {
      case "price":
        console.log("tab1");
        return filterArray.sort((a: any, b: any) => a.price - b.price);
      case "time":
        console.log("tab12");
        return filterArray.sort(
          (a: any, b: any) =>
            a.there.time + a.back.time - (b.there.time + b.back.time)
        );
      case "optimal":
        console.log("tab13");
        return filterArray.sort((a: any, b: any) => {
          const timeA = a.there.time + a.back.time;
          const timeB = b.there.time + b.back.time;
          if (timeA !== timeB) return timeA - timeB;
          if (a.transplants.length !== b.transplants.length)
            return a.transplants.length - b.transplants.length;
          return a.price - b.price;
        });
      default:
        return filterArray;
    }
  };

  const filteredFlights = applyFilters();
  const sortedFlights = applySorting(filteredFlights);
  console.log("sortedFlights", sortedFlights);

  return (
    <div>
      <PriceFilter sort={sort} setSort={setSort} />
      <ul>
        {sortedFlights.map((flight: FlightsType) => (
          <li key={flight.id}>
            <h2>Flight {flight.id}</h2>
            <p>Price: {flight.price}</p>
            <p>
              There: {flight.there.value}, Time: {flight.there.time}
            </p>
            <p>
              Back: {flight.back.value}, Time: {flight.back.time}
            </p>
            <p>Transplants: {flight.transplants.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

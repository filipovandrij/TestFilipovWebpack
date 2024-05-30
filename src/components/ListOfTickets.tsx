import PriceFilter from "./PriceFilter";
import flights from "../mock/flightsArray";
import { useState } from "react";
import { FlightsType } from "../models/flights";
import "./ListOfTickets.scss";
import COMPANYLOGO from "../img/companyLogo.svg";

type Props = { filters: any };

export default function ListOfTickets({ filters }: Props) {
  const [sort, setSort] = useState("price");
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

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

  function convertTimeToMinutes(timeStr: any) {
    const [hours, minutes] = timeStr.split(" ").map((part: any, index: any) => {
      if (index === 0) {
        return parseInt(part.replace("г", "").trim(), 10) * 60;
      } else {
        return parseInt(part.replace("хв", "").trim(), 10);
      }
    });
    return hours + minutes;
  }
  const applySorting = (filterArray: any) => {
    switch (sort) {
      case "price":
        console.log("tab1");
        return filterArray.sort((a: any, b: any) => a.price - b.price);
      case "time":
        console.log("tab12");
        return filterArray.sort((a: any, b: any) => {
          const timeA =
            convertTimeToMinutes(a.there.time) +
            convertTimeToMinutes(a.back.time);
          const timeB =
            convertTimeToMinutes(b.there.time) +
            convertTimeToMinutes(b.back.time);
          return timeA - timeB;
        });
      case "optimal":
        console.log("tab13");
        return filterArray.sort((a: any, b: any) => {
          const timeA =
            convertTimeToMinutes(a.there.time) +
            convertTimeToMinutes(a.back.time);
          const timeB =
            convertTimeToMinutes(b.there.time) +
            convertTimeToMinutes(b.back.time);
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
        {sortedFlights.slice(0, visibleCount).map((flight: FlightsType) => (
          <li className="ticked-card" key={flight.id}>
            <div className="ticked-card__title-info">
              <p> {flight.price.toLocaleString("ru-RU")} $</p>
              <img src={COMPANYLOGO} alt="Company LOgo" />
            </div>
            <div className="ticked-card__subblock-info">
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">{flight.there.value}</p>
                <p className="ticked-card__value">{flight.there.start}</p>
              </div>
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">В ДОРОЗІ</p>
                <p className="ticked-card__value">{flight.there.time}</p>
              </div>
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">
                  {flight.transplants.length > 1
                    ? `${flight.transplants.length} пересадки`
                    : flight.transplants.length === 1
                    ? `${flight.transplants.length} пересадка`
                    : "Без пересадок"}
                </p>
                <p className="ticked-card__value">
                  {flight.transplants.join(", ")}
                </p>
              </div>
            </div>
            <div className="ticked-card__subblock-info">
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">{flight.back.value}</p>
                <p className="ticked-card__value">{flight.back.start}</p>
              </div>
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">В ДОРОЗІ</p>
                <p className="ticked-card__value">{flight.back.time}</p>
              </div>
              <div className="subblock-info__info-block">
                <p className="ticked-card__suptitle">
                  {flight.transplants.length > 1
                    ? `${flight.transplants.length} пересадки`
                    : flight.transplants.length === 1
                    ? `${flight.transplants.length} пересадка`
                    : "Без пересадок"}
                </p>
                <p className="ticked-card__value">
                  {flight.transplants.join(", ")}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {visibleCount < sortedFlights.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Показати ще 5 квитків
        </button>
      )}
    </div>
  );
}

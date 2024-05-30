import CheckBoxFilter from "../components/CheckBoxFilter";
import ListOfTickets from "../components/ListOfTickets";

type Props = {};

export default function Main({}: Props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <CheckBoxFilter />
        <ListOfTickets />
      </div>
    </>
  );
}

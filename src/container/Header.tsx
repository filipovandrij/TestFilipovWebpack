import LOGO from "../img/LogoPlane.svg";
import "./Header.scss";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header">
      <a href="#">
        <img src={LOGO} alt="Logo" />
      </a>
    </header>
  );
}

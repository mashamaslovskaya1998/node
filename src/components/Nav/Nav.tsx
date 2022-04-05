import "./Nav.scss";
import svg from "../../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={svg} alt="logo"></img>
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#">Features</a>
        </li>
        <li className="nav__item">
          <a href="">Partners</a>
        </li>
        <li className="nav__item">
          <a href="">Stories</a>
        </li>
      </ul>
      <button className="nav__button">Download for free</button>
    </nav>
  );
};
export default Nav;

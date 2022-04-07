import "./Nav.scss";
import logo from "../../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <a href="#" className="nav__logo">
        <img src={logo} alt="logo"></img>
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Stories
          </a>
        </li>
      </ul>
      <button className="nav__button" type="button">
        Download for free
      </button>
    </nav>
  );
};
export default Nav;

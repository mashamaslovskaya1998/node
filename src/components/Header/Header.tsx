import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__slider--title">The Power of Simplicity</h1>
      <p className="header__slider--text">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </p>
      <button className="header__slider--btn">Learn</button>
      <ul className="slider__controls">
        <li className="slider__dot">
          <a href="#"></a>
        </li>
        <li className="slider__dot">
          <a href="#"></a>
        </li>
        <li className="slider__dot slider__dot--active">
          <a href="#"></a>
        </li>
        <li className="slider__dot">
          <a href="#"></a>
        </li>
        <li className="slider__dot">
          <a href="#"></a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

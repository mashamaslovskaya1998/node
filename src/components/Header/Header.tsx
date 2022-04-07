import "./Header.scss";

const Header = () => {
  return (
    <header className="slider">
      <h1 className="slider__title">The Power of Simplicity</h1>
      <p className="slider__text">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </p>
      <button className="slider__btn" type="button">
        Learn
      </button>
      <ul className="slider__controls">
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot slider__dot--active"></li>
        <li className="slider__dot"></li>
        <li className="slider__dot"></li>
      </ul>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">
            Home
          </a>
          {/* <Link to={"/"} className="menu__link">
            Home
          </Link> */}
        </li>
        <li>
          <a href="#" className="menu__link">
            Form
          </a>
          {/* <Link to={"/form"} className="menu__link">
            Form
          </Link> */}
        </li>
        <li>
          <a href="#" className="menu__link">
            List
          </a>
          {/* <Link to={"/list"} className="menu__link">
            List
          </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Header;

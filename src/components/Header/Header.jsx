import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to={"/"} className="menu__link">
            Home
          </Link>
          <Link to={"/form"} className="menu__link">
            Form
          </Link>
          <Link to={"/list"} className="menu__link">
            List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

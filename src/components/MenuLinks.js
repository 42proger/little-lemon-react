import { NavLink } from "react-router-dom";

const MenuLinks = () => {
  return (
    <ul className="menu-items">
      <li>
        <NavLink to="/" className="active-links">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="active-links">
          Our Story
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="active-links">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservations" className="active-links">
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className="active-links">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuLinks;

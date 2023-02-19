import { NavLink } from "react-router-dom";
import "./styles/Header.css";
import Logo from "./assets/logo.jpg";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img src={Logo} className="logo-img" alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

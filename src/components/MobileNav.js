import { useState } from "react";
import "./styles/MobileNav.css";
import { GrMenu, GrClose } from "react-icons/gr";
import MenuLinks from "./MenuLinks";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = (
    <GrMenu className="hamburger" size="28px" onClick={() => setOpen(!open)} />
  );
  const openMenu = (
    <GrClose
      className="hamburger close-menu"
      size="28px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenuOnClick = () => setOpen(false);

  return (
    <nav className="mobile-nav">
      {open ? openMenu : closeMenu}
      {open && (
        <MenuLinks isMobile={true} closeMobileMenu={closeMobileMenuOnClick} />
      )}
    </nav>
  );
};

export default MobileNav;

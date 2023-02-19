import { NavLink } from "react-router-dom";
import "./styles/TopSection.css";
import TopImage from "./assets/little-lemon.jpg";

const TopSection = () => {
  return (
    <div className="top-section-background">
      <div className="top-section-container">
        <div className="section-left">
          <h1>Little Lemon</h1>
          <h2>New-York</h2>
          <p>
            Inspired by the rustic cooking of Rome and the season’s freshest
            local produce, Little Lemon is known for family-style roasts,
            grilled seafood, and vegetables cooked over an open fire, alongside
            thin, crackly-crusted pizzas.
          </p>
          <NavLink to="/reservations">
            <button className="btn">Book a Table</button>
          </NavLink>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img src={TopImage} alt="Little Lemon Pizza" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

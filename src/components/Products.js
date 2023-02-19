import { NavLink } from "react-router-dom";
import "./styles/Products.css";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="product-section-container">
      <div className="product-section-title">
        <h1>This Week's Specials</h1>
        <div className="btn-container">
          <NavLink to="/menu">
            <button className="btn btn-menu">Our Menu</button>
          </NavLink>
        </div>
      </div>
      <ProductItem />
    </div>
  );
};

export default Products;

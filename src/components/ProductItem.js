import "./styles/ProductItem.css";
import Product1 from "./assets/margherita_pizza.jpg";
import Product2 from "./assets/beer_brined_half_chicken.jpg";
import Product3 from "./assets/branzino_fillet.jpg";
import Product4 from "./assets/pork_and_provolone_sausage.jpg";

const ProductItem = () => {
  const Menus = [
    {
      image: Product1,
      title: "Margherita Pizza",
      price: "$20.99",
      description: "Tomato, Mozzarella, Basil",
    },
    {
      image: Product2,
      title: "Beer Brined Half Chicken",
      price: "$27.99",
      description: "Delicata Squash Agrodolce",
    },
    {
      image: Product3,
      title: "Branzino Fillet",
      price: "$25.99",
      description: "Grilled Broccolini, Salmoriglio, Garlic Chili",
    },
    {
      image: Product4,
      title: "Pork and Provolone Sausage",
      price: "$24.99",
      description: "Braised Italian Butter Beans",
    },
  ];

  const MenusItems = Menus.map((menu, index) => (
    <div className="product-card-container" key={index}>
      <div className="image-container">
        <img src={menu.image} alt={menu.title} />
      </div>
      <div className="product-card-text">
        <div className="product-card-title">
          <h4>{menu.title}</h4>
          <span className="price-tag">{menu.price}</span>
        </div>
        <p>{menu.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="product-card">{MenusItems}</div>
    </div>
  );
};

export default ProductItem;

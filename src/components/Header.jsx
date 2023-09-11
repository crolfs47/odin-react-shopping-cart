import "../styles/Header.css";
import { Link } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.png";
import plantIcon from "../assets/plants.png";

const Header = ({ cart, cartOpen, setCartOpen }) => {
  const displayCartModal = () => {
    setCartOpen(!cartOpen);
  };

  const cartQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <div className="header-container">
        <Link to="home">
          <div className="header-logo">
            <img src={plantIcon} alt="plant-icon" />
            <h1>Plant People</h1>
          </div>
        </Link>
        <div className="header-links">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <button className="cart-button" onClick={displayCartModal}>
            <img src={cartIcon} alt="cart-icon" /> {cartQuantity}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

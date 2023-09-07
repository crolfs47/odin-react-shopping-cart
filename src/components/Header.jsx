import "../styles/Header.css";
import { Link } from "react-router-dom";
import cartImage from "../assets/shopping-cart.png"

const Header = ({ cart, cartOpen, setCartOpen }) => {

  const displayCartModal = () => {
    setCartOpen(!cartOpen);
  }

  const cartQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  
  return (
    <>
      <div className="header-container">
        <h1>Plant Shop</h1>
        <div className="header-links">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <button className="cart-button" onClick={displayCartModal}><img src={cartImage} alt="" /> {cartQuantity}</button>
        </div>
      </div>
    </>
  );
};

export default Header;

import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>Plant Shop</h1>
        <div className="header-links">
          <Link to="home">Home</Link>
          <Link to="products">Shop</Link>
          <div>Cart</div>
        </div>
      </div>
    </>
  )
}

export default Header;
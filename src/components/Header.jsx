import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>Plant Shop</h1>
        <div className="header-links">
          <div>Home</div>
          <div>Shop</div>
          <div>Cart</div>
        </div>
      </div>
    </>
  )
}

export default Header;
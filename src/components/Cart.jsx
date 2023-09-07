import "../styles/Cart.css";

const Cart = ({ cart }) => {
  const totalCost = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <>
      Cart
      <div className="cart-container">
        {cart.map((item) => {
          const cost = item.product.price * item.quantity;

          return (
            <div className="cart-item-card" key={item.product.id}>
              <img src={item.product.image} alt="" />
              <div className="product-details">
                <div className="product-name-price">
                  <h5>{item.product.name}</h5>
                  <h5>${cost}</h5>
                </div>
                <div className="product-quantity">
                  <div className="qty-div">
                    <button className="qty-button">-</button>
                    <span className="qty-input">{item.quantity}</span>
                    <button className="qty-button">+</button>
                  </div>
                  <button className="remove-button">REMOVE</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="subtotal">Subtotal: ${totalCost}</div>
      </div>
    </>
  );
};

export default Cart;

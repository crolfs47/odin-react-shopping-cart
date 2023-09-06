import "../styles/Cart.css";

const Cart = ({ cart }) => {
  const totalCost = cart.reduce((total, item) => {
    return total + (item.product.price * item.quantity)
  }, 0)

  return (
    <>
      Cart
      <div className="cart-container">
        {cart.map((item) => {
          const cost = item.product.price * item.quantity;

          return (
            <div className="cart-item-card" key={item.product.id}>
              <img src={item.product.image} alt="" />
              <div>
                <h5>{item.product.name}</h5>
                <span>${cost}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>${totalCost}</div>
    </>
  );
};

export default Cart;

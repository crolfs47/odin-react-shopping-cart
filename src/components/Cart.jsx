import "../styles/Cart.css";
import closeImage from "../assets/close.png";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateCart, cartOpen, setCartOpen }) => {
  const totalCost = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const removeFromCart = (cartItem) => {
    const newCart = cart.filter((item) => item !== cartItem);
    updateCart(newCart);
  };

  const updateCartQuantity = (cartItem, qty) => {
    if (cartItem.quantity + qty < 1) {
      removeFromCart(cartItem);
    } else {
      const newCart = cart.map((item) => {
        if (item === cartItem) {
          return { product: item.product, quantity: item.quantity + qty };
        }
        return item;
      });
      updateCart(newCart);
    }
  };

  const resetCart = () => {
    setCartOpen(!cartOpen);
    updateCart([]);
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button
            className="close-button"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <img src={closeImage} alt="" />
          </button>
        </div>
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
                    <button
                      className="qty-button"
                      onClick={() => updateCartQuantity(item, -1)}
                    >
                      -
                    </button>
                    <span className="qty-input">{item.quantity}</span>
                    <button
                      className="qty-button"
                      onClick={() => updateCartQuantity(item, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="subtotal">
          <div>Subtotal:</div>
          <div>${totalCost}</div>
        </div>
        <Link to="checkout" className={"checkout-link"} onClick={resetCart}><button className="checkout-button">Checkout</button></Link>
      </div>
    </>
  );
};

export default Cart;

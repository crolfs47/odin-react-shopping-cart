import "../styles/Product.css";
import { useState } from "react";

const Product = ({ item, updateCart, cart }) => {
  const [quantity, setQuantity] = useState(1);
  console.log(cart);

  const updateQuantity = (qty) => {
    if (qty > 0) {
      setQuantity(qty);
    } else {
      qty = 1;
    }
  };

  const addToCart = (id, qty) => {
    const idFound = cart.filter((item) => item.id === id);
    if (idFound.length < 1) {
      const newCart = [...cart, {id: id, quantity: qty }];
      updateCart(newCart);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { id: id, quantity: item.quantity + qty };
        }
        return item;
      });
      updateCart(newCart);
    }
  };

  return (
    <>
      <div className="product-card">
        <img src={item.image} alt="" />
        <div className="product-info-div">
          <h4>{item.name}</h4>
          <span>${item.price}</span>
        </div>
        <div className="add-to-cart-div">
          <div className="qty-div">
            <button
              className="qty-button"
              onClick={() => updateQuantity(quantity - 1)}
            >
              -
            </button>
            <span className="qty-input">{quantity}</span>
            <button
              className="qty-button"
              onClick={() => updateQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="cart-button"
            onClick={() => addToCart(item.id, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

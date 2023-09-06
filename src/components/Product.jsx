import "../styles/Product.css";
import { useState } from "react";

const Product = ({ item, updateCart }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (qty) => {
    if (qty > 0) {
      setQuantity(qty);
    } else {
      qty = 1;
    }
  };

  const addToCart = () => {
    const newCart = [{ id: 1, quantity: 1 }];
    updateCart(newCart);
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
          <button className="cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

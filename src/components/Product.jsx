import "../styles/Product.css";
import { useState } from "react";

const Product = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (qty) => {
    if (qty > 0) {
      setQuantity(qty)
    }
    else {
      qty = 1
    }
  }

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
          <button className="cart-button">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;

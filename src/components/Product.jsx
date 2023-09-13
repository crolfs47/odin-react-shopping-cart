import "../styles/Product.css";
import { useState } from "react";

const Product = ({ item, updateCart, cart }) => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (qty) => {
    if (qty > 0) {
      setQuantity(qty);
    } else {
      qty = 1;
    }
  };

  const addToCart = (product, qty) => {
    const idFound = cart.filter((item) => item.product === product);
    if (idFound.length < 1) {
      const newCart = [...cart, {product: product, quantity: qty }];
      updateCart(newCart);
    } else {
      const newCart = cart.map((item) => {
        if (item.product === product) {
          return { product: item.product, quantity: item.quantity + qty };
        }
        return item;
      });
      updateCart(newCart);
    }
    updateQuantity(1);
  };

  return (
    <>
      <div className="product-card">
        <img src={item.image} alt={item.name} />
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
            <span className="qty-input" data-testid="qty-input">{quantity}</span>
            <button
              className="qty-button"
              onClick={() => updateQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(item, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

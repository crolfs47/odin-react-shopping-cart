import "../styles/Cart.css";
import productList from "../helpers/productList";

const Cart = ({ cart }) => {
  const products = productList;

  return (
    <>
      Cart
      <div className="cart-container">
        {cart.map((item) => {
          const product = products.filter((prod) => prod.id === item.id);
          const cost = product[0].price * item.quantity;

          return (
            <div className="cart-item-card" key={item.id}>
              <img src={product[0].image} alt="" />
              <div>
                <h5>{product[0].name}</h5>
                <span>${cost}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;

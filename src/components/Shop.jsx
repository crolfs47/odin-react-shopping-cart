import "../styles/Products.css";
import Product from "./Product";
import productList from "../helpers/productList";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useOutletContext();
  const products = productList;
  console.log(cart);

  return (
    <>
      <div className="product-container">
        {products.map((product) => {
          return (
            <Product
              item={product}
              key={product.id}
              cart={cart}
              updateCart={(newCart) => setCart(newCart)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;

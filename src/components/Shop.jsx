import "../styles/Products.css";
import Product from "./Product";
import productList from "../helpers/productList";

const Shop = (cart, updateCart) => {
  const products = productList;
  console.log(cart);

  return (
    <>
      <div className="product-container">
        {products.map((product) => {
          return (
            <Product item={product} key={product.id} updateCart={updateCart} />
          );
        })}
      </div>
    </>
  );
};

export default Shop;

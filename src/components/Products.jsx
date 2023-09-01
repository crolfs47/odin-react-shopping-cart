import "../styles/Products.css";
import Product from "./Product";
import productList from "../helpers/productList";

const Products = () => {
  const products = productList;

  return (
    <>
      <div className="product-container">
        {products.map((product) => {
          return <Product item={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Products;

import "../styles/Products.css";
import Product from "./Product";
import productList from '../helpers/productList';

const Products = () => {
  const products = productList;
  console.log(products);

  return (
    <>
      <div>Products</div>
      <Product />
    </>
  )
}

export default Products;
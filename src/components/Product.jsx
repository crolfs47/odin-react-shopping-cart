import "../styles/Product.css";

const Product = ({ item }) => {
  return (
    <>
      <div className="product-card">
        <img src={item.image} alt="" />
        <div className="product-info-div">
          <h4>{item.name}</h4>
          <span>${item.price}</span>
        </div>
        <div className="product-button-div">
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;

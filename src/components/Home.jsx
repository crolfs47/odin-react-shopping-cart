import "../styles/Home.css";
import home from "../assets/home.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-image-div">
          <img src={home} alt="" />
          <div className="image-text">
            <h1>Become a Plant Person</h1>
            <Link to="../shop">
              <button className="shop-plants-button">Shop Plants</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

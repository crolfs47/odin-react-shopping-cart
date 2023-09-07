import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart}/>
      <div>
        <Outlet context={[cart, setCart]} />
      </div>
      <div>
        <Cart cart={cart} updateCart={(newCart) => setCart(newCart)} />
      </div>
    </>
  );
}

export default App;

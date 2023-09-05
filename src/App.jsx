import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <div>
        <Outlet cart={cart} updateCart={(newCart) => setCart(newCart)} />
      </div>
    </>
  );
}

export default App;

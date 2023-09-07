import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div>
        <Outlet context={[cart, setCart]} />
      </div>
      {cartOpen && (
        <div className="modal" id="cartModal">
          <div className="modal-content">
            <Cart
              cart={cart}
              updateCart={(newCart) => setCart(newCart)}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

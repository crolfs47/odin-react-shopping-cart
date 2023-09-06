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
        <Outlet context={[cart, setCart]} />
      </div>
    </>
  );
}

export default App;

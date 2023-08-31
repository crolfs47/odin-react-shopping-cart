import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const products = [];
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import { Route, Routes } from "react-router";
import OrderForm from "./pages/OrderForm/OrderForm";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order_form" element={<OrderForm/>} />
      </Routes>
    </div>
  );
}

export default App;

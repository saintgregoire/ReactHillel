import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import { Route, Routes } from "react-router";
import OrderForm from "./pages/OrderForm/OrderForm";
import OrderStatus from "./pages/OrderStatus/OrderStatus";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order_form" element={<OrderForm/>} />
        <Route path="/order_status" element={<OrderStatus/>} />
      </Routes>
    </div>
  );
}

export default App;

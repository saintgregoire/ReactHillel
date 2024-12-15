import { NavLink } from "react-router";
import Input from "../Input/Input";
import "./Header.css";
import { useContext } from "react";
import { NameContext } from "../../context/NameContext";

function Header() {

  const {userName} = useContext(NameContext);

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          PIZZA DAY
        </NavLink>
        <NavLink to="/menu" className="logo">Menu</NavLink>
        <NavLink to="/cart" className="logo">Cart</NavLink>
        <NavLink to="/order_form" className="logo">Order Form</NavLink>
        <NavLink to="/order_status" className="logo">Order Status</NavLink>
      </nav>
      <Input
        type="text"
        className="search-bar"
        placeholder="Search for the order #"
      />
      <div className="username">{userName}</div>
    </header>
  );
}

export default Header;

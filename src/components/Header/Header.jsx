import { NavLink } from "react-router";
import Input from "../Input/Input";

import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          PIZZA DAY
        </NavLink>
        <NavLink to="/menu" className="logo">Menu</NavLink>
        <NavLink to="/cart" className="logo">Cart</NavLink>
      </nav>
      <Input
        type="text"
        className="search-bar"
        placeholder="Search for the order #"
      />
      <div className="username">VLAD</div>
    </header>
  );
}

export default Header;

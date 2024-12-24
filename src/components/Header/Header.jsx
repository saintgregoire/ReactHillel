import { NavLink, useNavigate } from "react-router";
import Input from "../Input/Input";
import "./Header.css";
import { useContext, useState } from "react";
import { NameContext } from "../../context/NameContext";

function Header() {
  const { userName } = useContext(NameContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    navigate(`/orders/${inputValue}`);
    setInputValue('');
  }

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          PIZZA DAY
        </NavLink>
        {/* <NavLink to="/menu" className="logo">
          Menu
        </NavLink> */}
        {/* <NavLink to="/cart" className="logo">
          Cart
        </NavLink> */}
      </nav>
      <form onSubmit={formSubmit}>
        <Input
          type="text"
          className="search-bar"
          placeholder="Search for the order #"
          value={inputValue}
          onChange={changeInputValue}
        />
      </form>
      {userName && <div className="username">{userName}</div> }
    </header>
  );
} 

export default Header;

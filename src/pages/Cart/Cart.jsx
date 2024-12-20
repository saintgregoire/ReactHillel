import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";

import "./Cart.css";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { NameContext } from "../../context/NameContext";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Margherita",
      price: 12.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Romana",
      price: 15.0,
      quantity: 2,
    },
    {
      id: 3,
      name: "Prosciutto e Rucola",
      price: 16.0,
      quantity: 1,
    },
  ];

  const {userName} = useContext(NameContext);
  
  const navigate = useNavigate();
  
  const makeOrder = () => {
    navigate('/order_form');
  }

  return (
    <div className="container-cart">
      <Link to="/menu" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart, {userName}</h1>

      <div className="cart-items">
        {cartItems.map((item)=> (
          <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
        <div className="cart-actions">
            <Button className={"order-btn"} text={'Order pizzas'} onClick={makeOrder} />
            <Button className={"clear-btn"} text={'Clear cart'} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

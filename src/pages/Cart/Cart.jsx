import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import "./Cart.css";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const { cartItems, onClear } = useContext(CartContext);

  const { userName } = useContext(NameContext);

  const navigate = useNavigate();

  const makeOrder = () => {
    navigate("/order_form");
  };

  return (
    <div className="container-cart">
      <Link to="/menu" className="back-link">
        ← Back to menu
      </Link>
      <h1 className="cart-title">Your cart, {userName}</h1>

      <div className="cart-items">
        {cartItems.cartItems.length === 0 ? (
          <h2>Your cart is still empty. Start adding some pizzas.</h2>
        ) : (
          <>
            {cartItems.cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.qty}
              />
            ))}
            <div className="cart-actions">
              <Button
                className={"order-btn"}
                text={"Order pizzas"}
                onClick={makeOrder}
              />
              <Button
                className={"clear-btn"}
                text={"Clear cart"}
                onClick={onClear}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

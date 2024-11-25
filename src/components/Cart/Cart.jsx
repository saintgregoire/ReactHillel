import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

import "./Cart.css";

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

  return (
    <div className="container-cart">
      <a href="#" className="back-link">
        ← Back to menu
      </a>
      <h1 className="cart-title">Your cart, vlad</h1>

      <div className="cart-items">
        {cartItems.map((item)=> (
          <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
        <div className="cart-actions">
            <Button className={"order-btn"} text={'Order pizzas'} />
            <Button className={"clear-btn"} text={'Clear cart'} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

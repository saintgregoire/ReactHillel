import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import "./CartWidget.css";

function CartWidget() {

  const { cartItems } = useContext(CartContext);

  const { totalQty, totalPrice } = useMemo(() => {
    return cartItems.cartItems.reduce(
      (acc, item) => ({
        totalQty: acc.totalQty + item.qty,
        totalPrice: acc.totalPrice + item.price,
      }),
      { totalQty: 0, totalPrice: 0 }
    );
  }, [cartItems.cartItems]);

  return (
    <div className={totalQty > 0 ? "widget" : "hidden"}>
      <div className="widget_left">
        <p>{totalQty} pizzas</p>
        <p>€{totalPrice}.00</p>
      </div>
      <Link to="/cart" className="widget_link">
        Open Cart
      </Link>
    </div>
  );
}

export default CartWidget;

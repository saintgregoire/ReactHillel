import { memo, useContext, useMemo } from "react";
import Button from "../Button/Button";
import "./PizzaItem.css";
import { CartContext } from "../../context/CartContext";

function PizzaItem(props) {
  const { data } = props;
  const { id, name, imageUrl, ingredients, unitPrice, soldOut } = data;

  const { onAdd, onIncrement, onDecrement, cartItems } =
    useContext(CartContext);

  const count = useMemo(() => {
    const item = cartItems.cartItems.find((item) => item.id === id);
    if (item) {
      return item.qty;
    } else {
      return 0;
    }
  }, [cartItems.cartItems, id]);

  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={`${name} Pizza`} className="pizza-image" />
      <div className="pizza-cart-components">
        <div className="pizza-info">
          <h2>{name}</h2>
          <p className="ingredients">{ingredients.join(", ")}</p>
          {!soldOut ? (
            <p className="price">{`€${unitPrice}.00`}</p>
          ) : (
            <p className="sold-out">SOLD OUT</p>
          )}
        </div>
        {!soldOut && (
          <div className="cart-controls">
            <Button
              text="ADD TO CART"
              className={count > 0 ? "hidden" : "add-to-cart"}
              onClick={() => onAdd(data)}
            />
            <div className={count > 0 ? "counter" : "hidden"}>
              <Button
                text="-"
                ariaLabel="Decrease quantity"
                className="decrement"
                onClick={() => onDecrement(id)}
              />
              <span>{count}</span>
              <Button
                text="+"
                ariaLabel="Increase quantity"
                className="increment"
                onClick={() => onIncrement(id)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(PizzaItem);

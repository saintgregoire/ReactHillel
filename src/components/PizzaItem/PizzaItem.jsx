import { useState } from "react";

import Button from "../Button/Button";
import "./PizzaItem.css";

function PizzaItem(props) {
  const { data } = props;
  const { name, imageUrl, ingredients, unitPrice, soldOut } = data;

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={`${name} Pizza`} className="pizza-image" />
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
            onClick={incrementCounter}
          />
          <div
            className={count > 0 ? "counter" : "hidden"}
          >
            <Button
              text="-"
              ariaLabel="Decrease quantity"
              className="decrement"
              onClick={decrementCounter}
            />
            <span>{count}</span>
            <Button
              text="+"
              ariaLabel="Increase quantity"
              className="increment"
              onClick={incrementCounter}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PizzaItem;

import { useState } from "react";

import "./PizzaItem.css";

function PizzaItem(props) {
  const { data } = props;
  const { name, imageUrl, ingredients, unitPrice, soldOut } = data;

  const [isFlex, setIsFlex] = useState(false);
  const [isBlock, setIsBlock] = useState(true);
  const [count, setCount] = useState(1);

  const handleClickShowCounter = () => {
    setIsBlock(false);
    setIsFlex(true);
  };

  const decrementCounter = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setIsFlex(false);
      setIsBlock(true);
    }
  };

  const incrementCounter = () => {
    setCount(count + 1);
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
          <button
            className="add-to-cart"
            style={{ display: isBlock ? "block" : "none" }}
            onClick={handleClickShowCounter}
          >
            ADD TO CART
          </button>
          <div
            className="counter"
            style={{ display: isFlex ? "flex" : "none" }}
          >
            <button
              className="decrement"
              aria-label="Decrease quantity"
              onClick={decrementCounter}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="increment"
              aria-label="Increase quantity"
              onClick={incrementCounter}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PizzaItem;

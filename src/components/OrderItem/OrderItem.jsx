import { memo } from "react";
import "./OrderItem.css";

function OrderItem(props) {

  const {quantity, name, price, ingredients} = props;

  return (
    <div className="order-item">
      <div className="order-item-header">
        <span className="order-item-name">{quantity}× {name}</span>
        <span className="order-item-price">€{price}</span>
      </div>
      <div className="order-item-ingredients">{ingredients}</div>
    </div>
  );
}

export default memo(OrderItem);

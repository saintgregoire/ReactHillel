import "./OrderStatus.css";
import Badge from "../../components/Badge/Badge";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function OrderStatus() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://react-fast-pizza-api.onrender.com/api/order/${id}`
  );

  const {cartItems} = useContext(CartContext);

  const estimatedDate = new Date(data.estimatedDelivery);
  const dateNow = new Date();

  const timeLeftInMs = estimatedDate - dateNow;
  const timeLeftInMinutes = Math.floor(timeLeftInMs / (1000 * 60));

  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = estimatedDate.toLocaleString("en-US", options);

  if (loading) {
    return (
      <div className="order_status-container order-container-with-error">
        <h1>Loading...</h1>
      </div>
    );
  } else if (error) {
    <div className="order_status-container order-container-with-error">
      <h1>{error}</h1>
    </div>;
  } else {
    return (
      <div className="order_status-container">
        <div className="order_status-header">
          <h1 className="order-title">
            Order #{id} status: {data.status}
          </h1>
          <div className="badges">
            {data.priority && (
              <Badge className="badge badge-priority" text="PRIORITY" />
            )}
            {data.status === "preparing" && (
              <Badge className="badge badge-preparing" text="PREPARING ORDER" />
            )}
          </div>
        </div>

        <div className="time-banner">
          <div className="time-left">Only {timeLeftInMinutes} minutes left 😃</div>
          <div className="estimated-time">(Estimated delivery: {formattedDate})</div>
        </div>

        <div className="order-details">
          {data.cart &&
            data.cart.map((item) => (
              <OrderItem
                key={item.pizzaId}
                name={item.name}
                quantity={item.quantity}
                price={`${item.totalPrice}.00`}
                ingredients={cartItems.items[item.pizzaId].ingredients.join(', ')}
              />
            ))}
        </div>

        <div className="price-breakdown">
          <div className="price-item">
            <span className="price-label">Price pizza:</span>
            <span className="price-value">€{data.orderPrice}.00</span>
          </div>
          {data.priority && (
            <div className="price-item">
              <span className="price-label">Price priority:</span>
              <span className="price-value">€{data.priorityPrice}.00</span>
            </div>
          )}
          <div className="price-item">
            <span className="price-label">To pay on delivery:</span>
            <span className="price-value">
              €{data.orderPrice + data.priorityPrice}.00
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderStatus;

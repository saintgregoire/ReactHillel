import "./OrderStatus.css";
import Badge from '../../components/Badge/Badge'
import OrderItem from "../../components/OrderItem/OrderItem";
import { useParams } from "react-router";

function OrderStatus() {

  const {id} = useParams();

  return (
    <div className="order_status-container">
      <div className="order_status-header">
        <h1 className="order-title">Order #{id} status: preparing</h1>
        <div className="badges">
          <Badge className="badge badge-priority" text="PRIORITY" />
          <Badge className="badge badge-preparing" text="PREPARING ORDER" />
        </div>
      </div>

      <div className="time-banner">
        <div className="time-left">Only 49 minutes left 😃</div>
        <div className="estimated-time">(Estimated delivery: Dec 12, 01:37 PM)</div>
      </div>

      <div className="order-details">
        <OrderItem quantity="1" name='Margherita' price="12.00" ingredients='Tomato, Mozzarella, Basil' />
      </div>

      <div className="price-breakdown">
        <div className="price-item">
          <span className="price-label">Price pizza:</span>
          <span className="price-value">€12.00</span>
        </div>
        <div className="price-item">
          <span className="price-label">Price priority:</span>
          <span className="price-value">€2.00</span>
        </div>
        <div className="price-item">
          <span className="price-label">To pay on delivery:</span>
          <span className="price-value">€14.00</span>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;

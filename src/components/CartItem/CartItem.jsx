import { useContext } from 'react';
import Button from '../Button/Button'
import './CartItem.css';
import { CartContext } from '../../context/CartContext';

function CartItem(props){

  const {id, name, price, quantity} = props;

  const {onDelete, onDecrement, onIncrement} = useContext(CartContext);

  return(
    <div className="cart-item">
          <span className="quantity-text">{`${quantity}×`}</span>
          <span>{name}</span>
          <span className="price">{`€${price}.00`}</span>
          <div className="quantity-controls">
              <Button className={"quantity-btn"} text={'-'} onClick={() => onDecrement(id)} />
              <span>{quantity}</span>
              <Button className={"quantity-btn"} text={'+'} onClick={() => onIncrement(id)} />
              <Button className={"delete-btn"} text={'DELETE'} onClick={() => onDelete(id)} />
          </div>
      </div>
  )
}

export default CartItem
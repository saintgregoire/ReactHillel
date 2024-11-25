import Button from '../Button/Button'

import './CartItem.css';

function CartItem(props){

  const {name, price, quantity} = props;

  return(
    <div className="cart-item">
          <span className="quantity-text">{`${quantity}×`}</span>
          <span>{name}</span>
          <span className="price">{`€${price}.00`}</span>
          <div className="quantity-controls">
              <Button className={"quantity-btn"} text={'-'} />
              <span>{quantity}</span>
              <Button className={"quantity-btn"} text={'+'} />
              <Button className={"delete-btn"} text={'DELETE'} />
          </div>
      </div>
  )
}

export default CartItem
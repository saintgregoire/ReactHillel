import "./PizzaItem.css";

function PizzaItem(props) {

  const {data} = props;
  const {name, imageUrl, ingredients, unitPrice, soldOut} = data;

  return (
    <div className="pizza-item">
      <img
        src={imageUrl}
        alt={`${name} Pizza`}
        className="pizza-image"
      />
      <div className="pizza-info">
        <h2>{name}</h2>
        <p className="ingredients">{ingredients.join(', ')}</p>
        {!soldOut ? (
          <p className="price">{`€${unitPrice}.00`}</p>
        ) : (
          <p className="sold-out">SOLD OUT</p>
        )}
      </div>
      {!soldOut && <button className="add-to-cart">ADD TO CART</button>}
    </div>
  );
}

export default PizzaItem
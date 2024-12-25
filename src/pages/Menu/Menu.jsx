import { useContext, useEffect } from "react";
import PizzaItem from "../../components/PizzaItem/PizzaItem";
import "./Menu.css";
import { CartContext } from "../../context/CartContext";

function Menu() {

  const { onInit, cartItems } = useContext(CartContext);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const resp = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!resp.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await resp.json();
        onInit(data.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getPizzas();
  }, [onInit]);

  return (
    <div className="menu-container">
      {cartItems.items.map((pizza) => (
        <PizzaItem key={pizza.id} data={pizza} />
      ))}
    </div>
  );
}

export default Menu;

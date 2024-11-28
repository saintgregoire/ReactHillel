import { useEffect, useState } from "react";
import PizzaItem from "../../components/PizzaItem/PizzaItem";
import "./Menu.css";

function Menu() {
  const [pizzasData, setPizzasData] = useState([]);

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
        setPizzasData(data.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getPizzas();
  }, []);

  return (
    <div className="menu-container">
      {pizzasData.map((pizza) => (
        <PizzaItem key={pizza.id} data={pizza} />
      ))}
    </div>
  );
}

export default Menu;

import PizzaItem from "../../components/PizzaItem/PizzaItem";
import useFetch from "../../hooks/useFetch";
import "./Menu.css";

function Menu() {

  const { data, loading, error } = useFetch("https://react-fast-pizza-api.onrender.com/api/menu") ;

  if(loading){
    return (
      <h1>Loading ...</h1>
    )
  }
  return (
    <div className="menu-container">
      {error && <h1>{error}</h1>}
      {data.map((pizza) => (
        <PizzaItem key={pizza.id} data={pizza} />
      ))}
    </div>
  );
}

export default Menu;

import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";
import { NameContext } from "../../context/NameContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Home() {
  const [nameInputValue, setNameInputValue] = useState("");
  const {userName, setUserName} = useContext(NameContext);

  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setNameInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setUserName(nameInputValue);
    navigate("/menu");
  };

  if(userName.trim() === ""){
    return (
      <main>
        <h1 className="title_home">The best pizza.</h1>
        <p className="subtitle">Straight out of the oven, straight to you.</p>
        <p className="welcome">
          👉 Welcome! Please start by telling us your name:
        </p>
        <form className="home_form" onSubmit={handleClick}>
        <Input
          placeholder={"Your full name"}
          ariaLabel={"Your full name"}
          className={"input-home"}
          value={nameInputValue}
          onChange={handleChangeValue}
        />
        <Button text={"Start Order"} className={nameInputValue.trim() === "" ? "hidden" : "btn"} type={"submit"} />
      </form>
      </main>
    );
  }
  return(
    <main>
      <h1 className="title_home">The best pizza.</h1>
      <Button text={`Start Order, ${userName}`} className={"btn"} onClick={() => navigate("/menu")} />
    </main>
  )
}

export default Home;

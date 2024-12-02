import { useState } from "react";
import { useNavigate } from "react-router";

import Form from "../../components/Form/Form";
import "./Home.css";


function Home() {
  const [nameInputValue, setNameInputValue] = useState("");
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setNameInputValue(e.target.value);
  };

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <main>
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Form
        placeholder="Your full name"
        inputAriaLabel="Your full name"
        inputClassName="input-home"
        value={nameInputValue}
        onChange={handleChangeValue}
        btnText="Start Order"
        onClick={handleClick}
        btnClassName="btn"
      />
    </main>
  );
}

export default Home;

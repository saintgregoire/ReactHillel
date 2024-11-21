import { useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./Home.css";

function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
  };

  return (
    <main>
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Input
        placeholder="Your full name"
        ariaLabel="Your full name"
        className="input-home"
        value={inputValue}
        onChange={handleChangeValue}
      />
      <Button text="Start Order" className="btn" onClick={handleClick} />
    </main>
  );
}

export default Home;

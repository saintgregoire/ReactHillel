import Input from "../Input/Input";
import Button from "../Button/Button";
import "./MainContent.css";

function MainContent() {
  return (
    <main>
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
      <Input placeholder="Your full name" ariaLabel="Your full name"/>
      <Button text="Start Order"/>
    </main>
  );
}

export default MainContent
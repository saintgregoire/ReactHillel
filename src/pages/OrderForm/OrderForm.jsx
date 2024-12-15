import { useContext, useMemo, useState } from "react";
import "./OrderForm.css";
import Input from "../../components/Input/Input";
import { NameContext } from "../../context/NameContext";
import Button from "../../components/Button/Button";

function OrderForm() {
  const { userName } = useContext(NameContext);
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [addressInputValue, setAddressInputValue] = useState("");

  const changePhoneValue = (e) => {
    setPhoneInputValue(e.target.value);
  };

  const changeAddressValue = (e) => {
    setAddressInputValue(e.target.value);
  };

  return (
    <div className="container-order">
      <h1>Ready to order? Let's go!</h1>
      <form>
        <fieldset className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Input id="firstName" defaultValue={userName} readOnly={true} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="phone">Phone number</label>
          <Input
            type="tel"
            id="phone"
            value={phoneInputValue}
            onChange={changePhoneValue}
            required={true}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="address">Address</label>
          <div className="input-wrapper">
            <Input
              id="address"
              value={addressInputValue}
              onChange={changeAddressValue}
              required={true}
            />
          </div>
        </fieldset>

        <fieldset className="checkbox-group">
          <div className="checkbox-wrapper">
            <Input type="checkbox" id="priority" />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </fieldset>

        <Button
          text="Order now for €12.00"
          type="submit"
          className="order-btn"
        />
      </form>
    </div>
  );
}

export default OrderForm;

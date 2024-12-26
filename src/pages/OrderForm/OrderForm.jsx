import { useContext, useState } from "react";
import "./OrderForm.css";
import InputControl from "../../components/Input/InputControl";
import { NameContext } from "../../context/NameContext";
import { CartContext } from "../../context/CartContext";
import Button from "../../components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";

const schema = z.object({
  firstName: z
    .string({ message: "Must to be string" })
    .min(1, { message: "Cannot be empty" }),
  phone: z
    .string({ message: "Must to be string" })
    .min(1, { message: "Cannot be empty" })
    .regex(
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}([-.\s]?\d{1,4}){1,3}$/,
      { message: "Invalid phone number format" }
    ),
  address: z
    .string({ message: "Must to be string" })
    .min(1, { message: "Cannot be empty" }),
  checkbox: z.boolean({ message: "Must to be boolean" }),
});

function OrderForm() {
  const { userName } = useContext(NameContext);
  const { cartItems, onClear } = useContext(CartContext);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const form = useForm({
    mode: "onBlur",
    defaultValues: { firstName: userName, phone: "", address: "", checkbox: false  },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (orderData) => {
    const cart = cartItems.cartItems.map((item) => ({
      ...item,
      pizzaId: item.id,
      quantity: item.qty,
      totalPrice: item.price,
    }));

    try {
      const resp = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            address: orderData.address,
            customer: orderData.firstName,
            phone: orderData.phone,
            priority: orderData.checkbox,
            position: "",
            cart: cart,
          }),
        }
      );

      const { status, data, message } = await resp.json();

      if (status === "success") {
        form.reset();
        onClear();
        navigate(`/orders/${data.id}`);
      } else {
        console.error("Error:", message);
        setErrorMessage("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (errorMessage) {
    return (
      <div className="container-order container-with-error">
        <h1>{errorMessage}</h1>
        <Button
          text="Go to Menu"
          className="order-btn"
          onClick={() => navigate("/menu")}
        />
      </div>
    );
  }

  return (
    <div className="container-order">
      <h1>Ready to order? Let&apos;s go!</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="form-group">
            <label htmlFor="firstName">First Name</label>
            <InputControl
              id="firstName"
              name="firstName"
              control={form.control}
              readOnly={true}
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="phone">Phone number</label>
            <InputControl
              name="phone"
              control={form.control}
              type="tel"
              id="phone"
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <InputControl
                id="address"
                name="address"
                control={form.control}
              />
            </div>
          </fieldset>

          <fieldset className="checkbox-group">
            <div className="checkbox-wrapper">
              <InputControl
                type="checkbox"
                id="priority"
                name="checkbox"
                control={form.control}
              />
              <label htmlFor="priority">
                Want to give your order priority?
              </label>
            </div>
          </fieldset>

          <Button
            text="Order now for €12.00"
            type="submit"
            className="order-btn"
          />
        </form>
      </FormProvider>
    </div>
  );
}

export default OrderForm;

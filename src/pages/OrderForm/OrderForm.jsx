import { useContext } from "react";
import "./OrderForm.css";
import Input from "../../components/Input/Input";
import { NameContext } from "../../context/NameContext";
import Button from "../../components/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
});

function OrderForm() {
  const { userName } = useContext(NameContext);

  const form = useForm({
    mode: "onBlur",
    defaultValues: { firstName: "Исправить на контекст" },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset();
  };

  return (
    <div className="container-order">
      <h1>Ready to order? Let's go!</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              control={form.control}
              readOnly={true}
            />
            {form.formState.errors.firstName && (
              <p>{form.formState.errors.firstName.message}</p>
            )}
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="phone">Phone number</label>
            <Input name="phone" control={form.control} type="tel" id="phone" />
            {form.formState.errors.phone && (
              <p>{form.formState.errors.phone.message}</p>
            )}
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="address">Address</label>
            <div className="input-wrapper">
              <Input id="address" name="address" control={form.control} />
              {form.formState.errors.address && (
                <p>{form.formState.errors.address.message}</p>
              )}
            </div>
          </fieldset>

          <fieldset className="checkbox-group">
            <div className="checkbox-wrapper">
              <Input
                type="checkbox"
                id="priority"
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

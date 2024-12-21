import "./Input.css";
import { useController } from "react-hook-form";

function InputControl(props) {
  const { type = "text", className, id, readOnly, name, control } = props;

  const { field, fieldState } = useController({ name, control });

  return (
    <>
      <input
        type={type}
        className={className}
        id={id}
        readOnly={readOnly}
        {...field}
      ></input>
      {fieldState.error && <p>{fieldState.error.message}</p>}
    </>
  );
}

export default InputControl;

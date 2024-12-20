import "./Input.css";
import { useController } from "react-hook-form";

function InputControl(props) {
  const {
    type = "text",
    className,
    id,
    readOnly,
    name,
    control
  } = props;

  const { field } = useController({name, control});

  return (
    <input
      type={type}
      className={className}
      id={id}
      readOnly={readOnly}
      {...field}
    ></input>
  );
}

export default InputControl;

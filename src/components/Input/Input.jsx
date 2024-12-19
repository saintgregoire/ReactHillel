import { memo } from "react";
import "./Input.css";
import { useController } from "react-hook-form";

function Input(props) {
  const {
    type = "text",
    placeholder,
    ariaLabel,
    className,
    value,
    onChange,
    id,
    readOnly,
    name,
    control
  } = props;

  const { field } = useController({name});

  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={className}
      value={value}
      onChange={onChange}
      id={id}
      readOnly={readOnly}
      {...field}
    ></input>
  );
}

export default memo(Input);

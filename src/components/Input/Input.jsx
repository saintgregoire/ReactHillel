import { memo } from "react";
import "./Input.css";

function Input(props) {
  const { type = "text", placeholder, ariaLabel, className, value, onChange, id, defaultValue, readOnly, required } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={className}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      id={id}
      readOnly={readOnly}
      required={required}
    ></input>
  );
}

export default memo(Input);

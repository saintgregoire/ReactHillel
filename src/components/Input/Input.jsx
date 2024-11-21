import "./Input.css";

function Input(props) {
  const { type = "text", placeholder, ariaLabel, className, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className={className}
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default Input;

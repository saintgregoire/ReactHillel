import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.css";

const Form = (props) => {
  const {
    action,
    inputType = "text",
    placeholder,
    inputAriaLabel,
    inputClassName,
    value,
    onChange,
    btnText,
    onClick,
    btnClassName,
    btnType="submit"
  } = props;

  return (
    <form action={action}>
      <Input
        placeholder={placeholder}
        ariaLabel={inputAriaLabel}
        className={inputClassName}
        value={value}
        onChange={onChange}
        type={inputType}
      />
      <Button text={btnText} className={btnClassName} onClick={onClick} type={btnType} />
    </form>
  );
};

export default Form;

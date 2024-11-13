import './Input.css';

function Input(props) {

  const {type="text", placeholder, ariaLabel} = props;

  return (
    <input type={type} placeholder={placeholder} aria-label={ariaLabel}></input>
  )
}

export default Input
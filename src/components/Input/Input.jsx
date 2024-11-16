import './Input.css';

function Input(props) {

  const {type="text", placeholder, ariaLabel, className} = props;

  return (
    <input type={type} placeholder={placeholder} aria-label={ariaLabel} className={className}></input>
  )
}

export default Input
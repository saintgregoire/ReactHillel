import './Button.css'

function Button(props){

  const {text, onClick, className, ariaLabel} = props;

  return(
    <button className={className} aria-label={ariaLabel} onClick={onClick}>{text}</button>
  )
}

export default Button
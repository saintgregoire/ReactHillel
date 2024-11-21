import './Button.css'

function Button(props){

  const {text, onClick, className} = props;

  return(
    <button className={className} onClick={onClick}>{text}</button>
  )
}

export default Button
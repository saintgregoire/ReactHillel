import { memo } from 'react';
import './Button.css'

function Button(props){

  const {text, onClick, className, ariaLabel, type= "button"} = props;

  return(
    <button className={className} aria-label={ariaLabel} onClick={onClick} type={type}>{text}</button>
  )
}

export default memo(Button);
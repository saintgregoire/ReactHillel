import { memo } from 'react'
import './Badge.css'

function Badge({className, text}) {
  return (
    <span className={className}>{text}</span>
  )
}

export default memo(Badge)
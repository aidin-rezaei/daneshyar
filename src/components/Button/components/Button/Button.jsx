
import { useNavigate } from 'react-router'

const Button = ({
  click,
  idx,
  sx,
  children,
  link,
  disabled,
  className,
  nodelay
}) => {
  const navigate = useNavigate()
  const onclicked = () => {
    if (link !== undefined){
      if(nodelay === undefined)
        setTimeout(() => {
          navigate(`${link}`)
        }, 500)
        else{
          navigate(`${link}`)
        }
    }
    if (click !== undefined)
      setTimeout(() => {
        click()
      }, 100)
  }
  return (
    <button
      className={`btn effect-click ${className}`}
      onClick={onclicked}
      id={idx}
      style={sx}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

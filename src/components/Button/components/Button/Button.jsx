
import { useNavigate } from 'react-router'

const Button = ({
  click,
  idx,
  sx,
  children,
  link,
  disabled,
}) => {
  const navigate = useNavigate()
  const onclicked = () => {
    if (link !== undefined)
      setTimeout(() => {
        navigate(`${link}`)
      }, 500)
    if (click !== undefined)
      setTimeout(() => {
        click()
      }, 100)
  }
  return (
    <button
      className="btn effect-click"
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

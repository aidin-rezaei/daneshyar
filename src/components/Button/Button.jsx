import { ButtonFunc } from './Button.biz'
import './Button.scss'
import Btn from './components/Button/Button'
const Button = ({
  sx,
  click,
  idx,
  link,
  children,
  disabled,
}) => {
  ButtonFunc()
  return (
    <Btn click={click} idx={idx} link={link} sx={sx} disabled={disabled}>
      {children}
    </Btn>
  )
}

export default Button

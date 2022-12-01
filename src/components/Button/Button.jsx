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
  className,
  nodelay
}) => {
  ButtonFunc()
  return (
    <Btn click={click} nodelay={nodelay} idx={idx} className={className} link={link} sx={sx} disabled={disabled}>
      {children}
    </Btn>
  )
}

export default Button

import { useEffect } from 'react'

const ButtonFunc = () => {
  useEffect(() => {
    const element = document.querySelectorAll('.effect-click')
    element.forEach((el, key) => {
      el.addEventListener('click', (e) => {
        const circle = document.createElement('span')
        circle.classList.add('ripple')

        var bodyRect = document.body.getBoundingClientRect(),
          elemRect = el.getBoundingClientRect(),
          top = elemRect.top - bodyRect.top,
          left = elemRect.left - bodyRect.left
        var posX = e.clientX + window.scrollX - left
        var posY = e.clientY + window.scrollY - top
        const diameter = Math.max(e.target.clientWidth, e.target.clientHeight)
        const radius = diameter / 2
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.top = `${posY - radius}px`
        circle.style.left = `${posX - radius}px`

        const ripple = e.target.getElementsByClassName('ripple')[0]

        if (ripple) {
          ripple.remove()
        }
        e.target.appendChild(circle)
      })
    })
  }, [])
}
export { ButtonFunc }

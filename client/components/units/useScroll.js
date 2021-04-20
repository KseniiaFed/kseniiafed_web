import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export default () => {
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  const [scrollY, setScrollY] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("")

  const listener = debounce(() => {
    const rect = document.body.getBoundingClientRect()
    setBodyOffset(rect)
    setScrollY(-rect.top)
    setScrollX(-rect.left)
    setScrollDirection(bodyOffset.top > rect.top ? "down" : "up")
  }, 200)

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [bodyOffset])
  return {
    scrollY,
    scrollX,
    scrollDirection
  }
}
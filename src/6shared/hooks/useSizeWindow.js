import { useEffect, useLayoutEffect, useState } from 'react'
export function useSizeWindow() {
  const [size, setSize] = useState(false)

  function resize() {
    setSize(window.innerWidth)
  }

  useLayoutEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return size
}

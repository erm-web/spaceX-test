import { useEffect, useLayoutEffect, useState } from 'react'
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  function resize() {
    if (window.innerWidth < 1008) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useLayoutEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return isMobile
}

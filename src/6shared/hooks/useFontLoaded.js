import { useEffect, useState } from 'react'

export function useFontLoaded(params) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    document.fonts.ready
      .then(() => {
        setLoaded(true)
      })
      .catch((e) => {
        console.error('Ошибка загрузки шрифтов.', e)
      })
  }, [])
  return loaded
}

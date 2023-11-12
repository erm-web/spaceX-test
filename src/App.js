import './1app/style/index.css'
import LayoutApp from './1app/layout'
import { useEffect } from 'react'
import { appSliceActions } from './1app/store/sliceApp'
import { useDispatch } from 'react-redux'
import { useIsMobile } from './6shared/hooks'

function App() {
  const isMobile = useIsMobile()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(appSliceActions.setMobile(isMobile))
  }, [isMobile])

  return (
    <div className="App">
      <LayoutApp />
    </div>
  )
}

export default App

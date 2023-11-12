import { Route, Routes } from 'react-router-dom'
import Main from '../2pages/main'
import { LINKS_ADMIN } from '../6shared/consts'
import { useSelector } from 'react-redux'

import Auth from '../2pages/auth'
import PrivatRoute from './privatRoute'
export default function RoutesApp({ prop }) {
  const links = useSelector((state) => state.app.initNav.links)

  return (
    <Routes>
      {Object.values(links).map((elem, index) => {
        const element = () => {
          switch (elem.elem) {
            case 'Main':
              return <Main />
            default:
              return null
          }
        }
        return <Route key={index} path={elem.href} element={element()}></Route>
      })}

      <Route path={LINKS_ADMIN.auth.href} element={<Auth />}></Route>
      <Route element={<PrivatRoute />}>
        <Route path={LINKS_ADMIN.admin.href} element={<Main />}></Route>
      </Route>
    </Routes>
  )
}

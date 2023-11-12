import clsx from 'clsx'
import classes from './style.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useFontLoaded } from '../../6shared/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeIcon } from '../../6shared/icon'
import { InputAdminChange } from '../../6shared/input'
import AdminButton from '../../6shared/adminButton'
import { apiNav } from './modal'

export default function Navigation({ prop }) {
  const dispatch = useDispatch()
  const flag = useFontLoaded()
  const auth = useSelector((store) => store.app.auth)
  const { status, links } = useSelector((store) => store.app.initNav)

  const accentElement = useRef()
  const refNav = useRef()
  const timers = useRef({
    first: null,
    second: null,
  })
  const refLastLink = useRef()

  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [linksNow, setLinksNow] = useState({})

  const location = useLocation().pathname

  useEffect(() => {
    dispatch(apiNav.getNav())
  }, [])

  useEffect(() => {
    if (accentElement.current && status !== 'pending') {
      const array = refNav.current.children
      for (let index = 0; index < array.length; index++) {
        const elem = array[index]
        if (elem.dataset.navlink && elem.classList.contains('active')) {
          const pathPx =
            elem.getBoundingClientRect().x - accentElement.current.getBoundingClientRect().x
          clearTimeout(timers.current.first)
          if (pathPx >= 0) {
            setWidth(pathPx + elem.offsetWidth)
            timers.current.first = setTimeout(() => {
              setWidth(elem.offsetWidth)
              setLeft(elem.offsetLeft)
            }, 500)
          } else {
            setWidth(Math.abs(pathPx) + refLastLink.current?.offsetWidth)
            setLeft(elem.offsetLeft)
            timers.current.first = setTimeout(() => {
              setWidth(elem.offsetWidth)
            }, 1000)
          }
          refLastLink.current = elem
        }
      }
    }
  }, [flag, location, status])

  useEffect(() => {
    if (links) {
      setLinksNow(links)
    }
  }, [links])

  function onChangeAdminInput(e) {
    setLinksNow((state) =>
      Object.values(state).map((elem) => {
        if (elem.id === e.target.dataset.key) {
          return {
            ...elem,
            name:
              e.target.value.length < 20
                ? e.target.value.replace(/#/g, '').replace(/\^/g, '')
                : elem.name,
          }
        }
        return elem
      })
    )
  }
  function onChandeAdminShow(e) {
    setLinksNow((state) =>
      Object.values(state).map((elem) => {
        if (elem.id === e.target.dataset.key) {
          return {
            ...elem,
            flag: elem.flag === '1' ? '0' : '1',
          }
        }
        return elem
      })
    )
  }

  function adminOnSave(links) {
    dispatch(apiNav.setNav({ data: Object.values(links) }))
  }

  return (
    <nav ref={refNav} className={clsx(classes.nav)}>
      {isChange && (
        <div
          style={{
            zIndex: 11,
            position: 'absolute',
            top: 40,
            right: 350,
            display: 'flex',
            rowGap: 10,
            flexDirection: 'column',
          }}
        >
          {Object.values(linksNow).map((elem, index) => {
            const flag = elem.flag === '1'
            return (
              <div key={elem.id}>
                <AdminButton
                  datakey={elem.id}
                  onClick={(e) => onChandeAdminShow(e)}
                  title={flag ? 'скрыть' : 'открыть'}
                />
                <InputAdminChange
                  onChange={(e) => onChangeAdminInput(e)}
                  datakey={elem.id}
                  style={{ width: 200 }}
                  value={elem.name}
                />
              </div>
            )
          })}
        </div>
      )}
      {Object.values(linksNow).map((elem, index) => {
        const flag = elem.flag === '1'
        return (
          <>
            <NavLink
              data-navlink
              style={{ opacity: !flag && 0, display: !flag && 'none' }}
              className={clsx(classes.NavLinks)}
              to={elem.href}
              key={elem.id}
            >
              {elem.name}
            </NavLink>
          </>
        )
      })}
      {flag && (
        <div
          style={{ width: width, left: left }}
          ref={accentElement}
          className={clsx(classes.accentElement)}
        ></div>
      )}
      {auth && (
        <ChangeIcon
          onSave={() => adminOnSave(linksNow)}
          isChange={isChange}
          onCLick={() => setIsChange((state) => !state)}
          style={{ top: -20 }}
        />
      )}
    </nav>
  )
}

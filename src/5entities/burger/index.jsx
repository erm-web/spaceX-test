import clsx from 'clsx'
import classes from './style.module.css'
import Menu from '../../6shared/menu/menu'
import { Link, useLocation } from 'react-router-dom'
import LinksBurger from './links'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Burger({}) {
  const [isMenu, setIsMenu] = useState(false)
  const links = useSelector((store) => store.app.initNav.links)

  const location = useLocation().pathname
  return (
    <div>
      <Menu
        isMenu={isMenu}
        onClick={(e) => {
          setIsMenu((state) => !state)
        }}
      />
      {/* выпадающие меню как у меня в проекте +  еще сделать хедер адаптивный на refah */}
      {isMenu && (
        <>
          <div
            className={classes.modalBackground}
            onTouchStart={(e) => {
              setIsMenu((state) => !state)
            }}
            onClick={(e) => {
              setIsMenu((state) => !state)
            }}
          ></div>
          <div className={classes.contenerMobileMenu}>
            <ul>
              {Object.values(links).map((elem, index) => {
                return (
                  elem.flag === '1' && (
                    <LinksBurger elem={elem} key={index} setIsMenu={setIsMenu} nameLoc={location} />
                  )
                )
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

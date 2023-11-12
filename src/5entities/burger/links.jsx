import clsx from 'clsx'
import classes from './style.module.css'
import { Link } from 'react-router-dom'

/**
 * @param nameLoc название локации
 * @param setIsMenu скрыть меню
 */

export default function LinksBurger({ setIsMenu, elem, nameLoc, index }) {
  return (
    <Link
      className={classes.navigation_link}
      key={index + elem.href}
      onClick={() => setIsMenu((state) => !state)}
      to={`${elem.href}`}
    >
      <li className={clsx(nameLoc === elem.href && classes.activLink)}>{elem.name}</li>
    </Link>
  )
}

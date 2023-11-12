import clsx from 'clsx'
import classes from './style.module.css'

export default function Menu({ prop, onClick, isMenu }) {
  return (
    <div onClick={onClick} className={clsx(classes.menu, isMenu && classes.activ)}>
      <div className={clsx(classes.item)}></div>
      <div className={clsx(classes.item)}></div>
      <div className={clsx(classes.item)}></div>
    </div>
  )
}

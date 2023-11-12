import clsx from 'clsx'
import classes from './style.module.css'

/**
 * @param title Надпись на кнопке.
 */

export default function ButtonAccent({ disabled, style, title, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ ...style, opacity: disabled && 0.5, cursor: disabled && 'not-allowed' }}
      className={clsx(classes.buttonAccent)}
      onClick={onClick}
    >
      {title}
      <div className={clsx(classes.border, classes.top)}></div>
      <div className={clsx(classes.border, classes.bottom)}></div>
      <div className={clsx(classes.border, classes.left)}></div>
      <div className={clsx(classes.border, classes.right)}></div>
      <div className={clsx(classes.item, classes.vertical, classes.leftItem)}></div>
      <div className={clsx(classes.item, classes.vertical, classes.rightItem)}></div>
      <div className={clsx(classes.item, classes.gorizont, classes.leftItem)}></div>
      <div className={clsx(classes.item, classes.gorizont, classes.rightItem)}></div>
    </button>
  )
}

import clsx from 'clsx'
import classes from './style.module.css'

export default function AdminButton({ style, title, onClick, datakey }) {
  return (
    <button data-key={datakey} className={clsx(classes.button)} style={style} onClick={onClick}>
      {title}
    </button>
  )
}

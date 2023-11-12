import clsx from 'clsx'
import classes from './style.module.css'
import RocetBg from '../../5entities/bgRocet/bgRocet'

export default function MainBg({ callback }) {
  return (
    <div className={clsx(classes.mainBgBox)}>
      <RocetBg callback={callback} />
      <div className={clsx(classes.bgItemBlur)}></div>
    </div>
  )
}

import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Logo from '../../6shared/logo'
import classes from './style.module.css'
// import { LINKS_APP } from '../../6shared/consts'
import { useSelector } from 'react-redux'
export default function LinkLogo({ prop }) {
  const links = useSelector((state) => state.app.initNav.links)

  return (
    <div className={clsx(classes.box)}>
      <Link to={links?.main?.href}>
        <Logo />
      </Link>
      <div className={clsx(classes.logoItemsBorder)}></div>
      <div className={clsx(classes.logoItemsBorder, classes.second)}></div>
      <div className={clsx(classes.logoItemsBorder, classes.third)}></div>
      <div className={clsx(classes.logoItemsBorder)}></div>
    </div>
  )
}

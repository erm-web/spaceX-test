import clsx from 'clsx'
import classes from './style.module.css'
import LinkLogo from '../../5entities/linkLogo'
import Navigation from '../../3widgets/navigation'
import Layout from './layout'
import Burger from '../../5entities/burger'
import { useIsMobile } from '../../6shared/hooks'
import { useSelector } from 'react-redux'

export default function Header({ prop }) {
  const isMobile = useSelector((store) => store.app.mobile)
  return (
    <header>
      <div className={clsx('container')}>
        <div className={clsx(classes.header)}>
          <Layout
            components={{
              logo: <LinkLogo />,
              nav: <Navigation />,
              burger: <Burger />,
            }}
            isMobile={isMobile}
          />
        </div>
      </div>
    </header>
  )
}

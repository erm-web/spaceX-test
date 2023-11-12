import clsx from 'clsx'
import classes from './style.module.css'
import LinkLogo from '../../5entities/linkLogo'
import Navigation from '../../3widgets/navigation'
import Layout from './layout'
import Burger from '../../5entities/burger'
import { useIsMobile } from '../../6shared/hooks'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

export default function Header({ prop }) {
  const isMobile = useSelector((store) => store.app.mobile)
  const idKey = useRef({
    a: crypto.randomUUID(),
    b: crypto.randomUUID(),
    c: crypto.randomUUID(),
  })

  return (
    <header>
      <div className={clsx('container')}>
        <div className={clsx(classes.header)}>
          <Layout
            components={{
              logo: <LinkLogo key={idKey.current.a} />,
              nav: <Navigation key={idKey.current.b} />,
              burger: <Burger key={idKey.current.c} />,
            }}
            isMobile={isMobile}
          />
        </div>
      </div>
    </header>
  )
}

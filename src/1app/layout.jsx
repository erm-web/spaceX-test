import clsx from 'clsx'
import Header from '../2pages/header'
import RoutesApp from './routes'
import Footer from '../2pages/footer/footer'

export default function LayoutApp({ prop }) {
  return (
    <>
      <Header />
      <main>
        <RoutesApp />
      </main>
      <Footer />
    </>
  )
}

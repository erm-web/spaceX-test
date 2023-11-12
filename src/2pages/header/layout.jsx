import clsx from 'clsx'
import classes from './style.module.css'

/**
 * @param components
 * @param isMobile
 * @param components.nav
 * @param components.logo
 * @param components.burger
 */

export default function Layout({ components, isMobile }) {
  const variant = isMobile ? 'mobile' : 'desktop'
  const templates = {
    desktop: [components.logo, components.nav],
    mobile: [components.logo, components.burger],
  }[variant]
  return <>{templates}</>
}

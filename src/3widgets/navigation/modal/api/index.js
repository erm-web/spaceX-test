import { process_getNav } from './getNav.js'
import { process_setNav } from './setNav.js'

export { getNav } from './getNav.js'
export { setNav } from './setNav.js'

export const process = {
  ...process_getNav,
  ...process_setNav,
}

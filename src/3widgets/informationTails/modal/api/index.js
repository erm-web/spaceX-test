import { process_getTails } from './getTails.js'
import { process_setTails } from './setTails.js'

export { getTails } from './getTails.js'
export { setTails } from './setTails.js'

export const process = {
  ...process_getTails,
  ...process_setTails,
}

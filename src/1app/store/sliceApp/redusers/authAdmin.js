import { PASS } from '../../../../6shared/consts'

export function authAdmin(state, action) {
  if (action.payload.value === PASS) {
    state.auth = true
  }
}

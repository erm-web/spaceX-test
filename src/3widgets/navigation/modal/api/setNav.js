import { createAsyncThunk, current } from '@reduxjs/toolkit'
import { LINK_API } from '../../../../6shared/consts'
import { apiNav } from '..'

export const setNav = createAsyncThunk(
  'appSlice/setNav',
  async function (payload, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(LINK_API, {
        method: 'POST',
        body: JSON.stringify({
          type: 'setNav',
          data: payload.data, // сервер примет только массив
        }),
      })
      if (!response.ok) {
        throw new Error('Fetch failed')
      }
      dispatch(apiNav.getNav())
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const process_setNav = {
  [setNav.pending]: (state) => {
    state.initNav.status = 'pending'
    state.initNav.error = null
  },
  [setNav.fulfilled]: (state, action) => {},
  [setNav.rejected]: (state, action) => {
    state.initNav.status = 'rejected'
    state.initNav.error = action.payload
  },
}

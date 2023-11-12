import { createAsyncThunk, current } from '@reduxjs/toolkit'
import { LINK_API } from '../../../../6shared/consts'
import { apiTails } from '..'

export const setTails = createAsyncThunk(
  'appSlice/setTails',
  async function (payload, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(LINK_API, {
        method: 'POST',
        body: JSON.stringify({
          type: 'setTails',
          data: {
            id: payload.id,
            data: payload.data,
          },
        }),
      })
      if (!response.ok) {
        throw new Error('Fetch failed')
      }
      dispatch(apiTails.getTails())
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const process_setTails = {
  [setTails.pending]: (state) => {
    state.infTails.status = 'pending'
    state.infTails.error = null
  },
  [setTails.fulfilled]: (state, action) => {
    state.infTails.status = 'resolve'
  },
  [setTails.rejected]: (state, action) => {
    state.infTails.status = 'rejected'
    state.infTails.error = action.payload
  },
}

import { createAsyncThunk, current } from '@reduxjs/toolkit'
import { LINK_API } from '../../../../6shared/consts'
import Main from '../../../../2pages/main'

export const getNav = createAsyncThunk(
  'appSlice/getNav',
  async function (payload, { rejectWithValue }) {
    try {
      const response = await fetch(LINK_API, {
        method: 'POST',
        body: JSON.stringify({
          type: 'getNav',
        }),
      })
      if (!response.ok) {
        throw new Error('Fetch failed')
      }
      const dataReponse = await response.json()
      //из массива в obj, что бы были ключи
      const links = dataReponse.reduce((accum, elem) => {
        accum = {
          ...accum,
          [elem.key]: {
            ...elem,
            elem: 'Main',
          },
        }
        return accum
      }, {})
      return { data: links }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const process_getNav = {
  [getNav.pending]: (state) => {
    state.initNav.status = 'pending'
    state.initNav.error = null
  },
  [getNav.fulfilled]: (state, action) => {
    state.initNav.status = 'resolve'
    state.initNav.links = action.payload.data
  },
  [getNav.rejected]: (state, action) => {
    state.initNav.status = 'rejected'
    state.initNav.error = action.payload
  },
}

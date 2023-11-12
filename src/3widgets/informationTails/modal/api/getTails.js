import { createAsyncThunk, current } from '@reduxjs/toolkit'
import { LINK_API } from '../../../../6shared/consts'

export const getTails = createAsyncThunk(
  'appSlice/getTails',
  async function (payload, { rejectWithValue }) {
    try {
      const response = await fetch(LINK_API, {
        method: 'POST',
        body: JSON.stringify({
          type: 'getTails',
        }),
      })
      if (!response.ok) {
        throw new Error('Fetch failed')
      }
      const dataReponse = await response.json()
      if (dataReponse.response === 'accept' && dataReponse) {
        const initArry = dataReponse.data
        let objects = []
        initArry.forEach((element) => {
          const arra = element.split('#')
          const obj = {
            title: arra[1],
            sub: arra[2],
            value: { value: arra[3], add: arra[4] === '0' ? null : arra[4] },
            id: arra[0],
          }
          objects.push(obj)
        })
        return { data: objects }
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
export const process_getTails = {
  [getTails.pending]: (state) => {
    state.infTails.status = 'pending'
    state.infTails.error = null
  },
  [getTails.fulfilled]: (state, action) => {
    state.infTails.status = 'resolve'
    state.infTails.data = action.payload.data
  },
  [getTails.rejected]: (state, action) => {
    state.infTails.status = 'rejected'
    state.infTails.error = action.payload
  },
}

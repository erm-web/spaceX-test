import { createSlice } from '@reduxjs/toolkit'
import { infTails, process_infoTails } from '../../../3widgets/informationTails/modal'
const appSlice = createSlice({
  name: 'main',
  initialState: {
    infTails,
  },
  reducers: {},
  extraReducers: {
    ...process_infoTails,
  },
})
export const appSliceActions = appSlice.actions
export default appSlice.reducer

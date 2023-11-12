import { createSlice, current } from '@reduxjs/toolkit'
import * as reducersApp from './redusers'
import { apiNav, initNav, redusersNav } from '../../../3widgets/navigation/modal'
const sliceApp = createSlice({
  name: 'app',
  initialState: {
    mobile: null,
    auth: false,
    initNav,
  },
  reducers: {
    ...reducersApp,
    ...redusersNav,
  },
  extraReducers: {
    ...apiNav.process,
  },
})
export const appSliceActions = sliceApp.actions
export default sliceApp.reducer

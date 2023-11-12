import { configureStore } from '@reduxjs/toolkit'
import sliceApp from './sliceApp'
import sliceMain from '../../2pages/main/modal/sliceMain'

export default configureStore({
  reducer: {
    app: sliceApp,
    main: sliceMain,
  },
})

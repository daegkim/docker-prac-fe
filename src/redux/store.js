import { configureStore } from '@reduxjs/toolkit'
import { memoReducer } from './memo/memoSlice'

export default configureStore({
  reducer: {
    memo: memoReducer
  }
})
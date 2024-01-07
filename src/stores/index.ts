/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 11:54 (GMT+0900)
 */
import { configureStore } from '@reduxjs/toolkit'
import { boardSlice } from './boardSlice'

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
})

export { boardSlice }

export default store

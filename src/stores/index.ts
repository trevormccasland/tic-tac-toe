/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 11:54 (GMT+0900)
 */
import { configureStore } from '@reduxjs/toolkit'
import { ticTacToeSlice } from './ticTacToeSlice'

const store = configureStore({
  reducer: {
    tictactoe: ticTacToeSlice.reducer,
  },
})

export { ticTacToeSlice }

export default store

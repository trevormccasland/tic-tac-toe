import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Value = 'X' | 'O' | ''
export type Board = [[Value, Value, Value], [Value, Value, Value], [Value, Value, Value]]

const defaultValue: Value = ''

interface TicTacToeState {
  values: Board
  winner: Value
}

const initialState: TicTacToeState = {
  values: [
    [defaultValue, defaultValue, defaultValue],
    [defaultValue, defaultValue, defaultValue],
    [defaultValue, defaultValue, defaultValue],
  ],
  winner: defaultValue,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setValue: (state: TicTacToeState, { payload }: PayloadAction<{ row: 0 | 1 | 2; col: 0 | 1 | 2 }>) => {
      // X goes first
      const value: Value =
        state.values.reduce((res, row) => {
          res += row.filter((v) => v !== defaultValue).length
          return res
        }, 0) %
          2 ===
        0
          ? 'X'
          : 'O'
      state.values[payload.row][payload.col] = value
    },
  },
})

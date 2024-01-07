import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Value = 'X' | 'O' | ''
export type Board = [[Value, Value, Value], [Value, Value, Value], [Value, Value, Value]]

export const defaultValue: Value = ''

interface TicTacToeState {
  values: Board
  result: string
}

const initialState: TicTacToeState = {
  values: [
    [defaultValue, defaultValue, defaultValue],
    [defaultValue, defaultValue, defaultValue],
    [defaultValue, defaultValue, defaultValue],
  ],
  result: defaultValue,
}

export const ticTacToeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    playAgain: (state: TicTacToeState) => {
      state.values = initialState.values
      state.result = initialState.result
    },
    setValue: (state: TicTacToeState, { payload }: PayloadAction<{ row: 0 | 1 | 2; col: 0 | 1 | 2 }>) => {
      // X goes first
      const count = state.values.reduce((res, row) => {
        res += row.filter((v) => v !== defaultValue).length
        return res
      }, 0)
      const value: Value = count % 2 === 0 ? 'X' : 'O'
      state.values[payload.row][payload.col] = value
      if (count + 1 >= 5 && state.result === defaultValue) {
        if (
          (state.values[0][0] === state.values[0][1] && state.values[0][1] === state.values[0][2]) || // top row
          (state.values[1][0] === state.values[1][1] && state.values[1][1] === state.values[1][2]) || // mid row
          (state.values[2][0] === state.values[2][1] && state.values[2][1] === state.values[2][2]) || // bot row
          (state.values[0][0] === state.values[1][0] && state.values[1][0] === state.values[2][0]) || // left col
          (state.values[0][1] === state.values[1][1] && state.values[1][1] === state.values[2][1]) || // mid col
          (state.values[0][2] === state.values[1][2] && state.values[1][2] === state.values[2][2]) || // right col
          (state.values[0][0] === state.values[1][1] && state.values[1][1] === state.values[2][2]) || // diag
          (state.values[2][0] === state.values[1][1] && state.values[1][1] === state.values[0][2]) // diag
        ) {
          state.result = `${value} Wins!`
        } else if (count + 1 === 9) {
          state.result = 'Draw!'
        }
      }
    },
  },
})

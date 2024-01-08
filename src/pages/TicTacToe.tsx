/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 12:14 (GMT+0900)
 */
import React from 'react'
import { useSelector } from 'react-redux'
import store, { ticTacToeSlice } from '@/stores'
import { RootState } from '@/types'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, ButtonProps, Paper, Typography } from '@mui/material'
import './TicTacToe.css'
import { Board, defaultValue } from '@/stores/ticTacToeSlice'

const TttButton = ({ sx, children, ...rest }: ButtonProps) => (
  <Button
    id="TttButton"
    variant="text"
    sx={{
      '&:hover': { backgroundColor: 'transparent' },
      borderRadius: 0,
      border: 1,
      borderColor: 'text.primary',
      minWidth: '5rem',
      maxWidth: '5rem',
      minHeight: '5rem',
      maxHeight: '5rem',
      fontSize: '28px',
      ...sx,
    }}
    {...rest}>
    {children}
  </Button>
)

export default function TicTacToe() {
  const values = useSelector<RootState, Board>((state) => state.tictactoe.values)
  const result = useSelector<RootState, string>((state) => state.tictactoe.result)
  return (
    <div className="tictactoeContainer">
      <div className="headerContainer">
        <Typography variant="h2">Tic Tac Toe</Typography>
      </div>
      {result && (
        <div>
          <Typography variant="h4" sx={{ width: 'max-content', marginLeft: 'auto', marginRight: 'auto' }}>
            {result}
          </Typography>
          <div className="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'ghostwhite',
                '&:hover': { backgroundColor: 'green' },
                color: 'black',
                fontSize: '28px',
              }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.playAgain())}>
              Play Again
            </Button>
          </div>
        </div>
      )}
      <Paper sx={{ backgroundColor: 'ghostwhite' }}>
        <Grid className="grid" container direction="column">
          <div id="hr" />
          <Grid container>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[0][0])}
              sx={{ borderTop: 0, borderLeft: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 0, col: 0 }))}>
              {values[0][0]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[0][1])}
              sx={{ borderTop: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 0, col: 1 }))}>
              {values[0][1]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[0][2])}
              sx={{ borderTop: 0, borderRight: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 0, col: 2 }))}>
              {values[0][2]}
            </TttButton>
          </Grid>
          <Grid container>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[1][0])}
              sx={{ borderLeft: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 1, col: 0 }))}>
              {values[1][0]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[1][1])}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 1, col: 1 }))}>
              {values[1][1]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[1][2])}
              sx={{ borderRight: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 1, col: 2 }))}>
              {values[1][2]}
            </TttButton>
          </Grid>
          <Grid container>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[2][0])}
              sx={{ borderBottom: 0, borderLeft: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 2, col: 0 }))}>
              {values[2][0]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[2][1])}
              sx={{ borderBottom: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 2, col: 1 }))}>
              {values[2][1]}
            </TttButton>
            <TttButton
              disabled={result !== defaultValue || Boolean(values[2][2])}
              sx={{ borderBottom: 0, borderRight: 0 }}
              onClick={() => store.dispatch(ticTacToeSlice.actions.setValue({ row: 2, col: 2 }))}>
              {values[2][2]}
            </TttButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

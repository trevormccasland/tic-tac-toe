/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 12:14 (GMT+0900)
 */
import React from 'react'
import { useSelector } from 'react-redux'
import store, { boardSlice } from '@/stores'
import { RootState } from '@/types'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, ButtonProps } from '@mui/material'
import './Home.css'
import { Board } from '@/stores/boardSlice'

const TttButton = ({ sx, children, ...rest }: ButtonProps) => (
  <Button
    id={'TttButton'}
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

export default function Home() {
  const values = useSelector<RootState, Board>((state) => state.board.values)
  return (
    <div>
      <h1>Home</h1>
      <Grid container direction="column">
        <Grid container>
          <TttButton
            disabled={Boolean(values[0][0])}
            sx={{ borderTop: 0, borderLeft: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 0, col: 0 }))}>
            {values[0][0]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[0][1])}
            sx={{ borderTop: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 0, col: 1 }))}>
            {values[0][1]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[0][2])}
            sx={{ borderTop: 0, borderRight: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 0, col: 2 }))}>
            {values[0][2]}
          </TttButton>
        </Grid>
        <Grid container>
          <TttButton
            disabled={Boolean(values[1][0])}
            sx={{ borderLeft: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 1, col: 0 }))}>
            {values[1][0]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[1][1])}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 1, col: 1 }))}>
            {values[1][1]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[1][2])}
            sx={{ borderRight: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 1, col: 2 }))}>
            {values[1][2]}
          </TttButton>
        </Grid>
        <Grid container>
          <TttButton
            disabled={Boolean(values[2][0])}
            sx={{ borderBottom: 0, borderLeft: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 2, col: 0 }))}>
            {values[2][0]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[2][1])}
            sx={{ borderBottom: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 2, col: 1 }))}>
            {values[2][1]}
          </TttButton>
          <TttButton
            disabled={Boolean(values[2][2])}
            sx={{ borderBottom: 0, borderRight: 0 }}
            onClick={() => store.dispatch(boardSlice.actions.setValue({ row: 2, col: 2 }))}>
            {values[2][2]}
          </TttButton>
        </Grid>
      </Grid>
    </div>
  )
}

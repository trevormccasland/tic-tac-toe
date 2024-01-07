/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 12:14 (GMT+0900)
 */
import React from 'react'
import { useSelector } from 'react-redux'
import store, { counterSlice } from '@/stores'
import { RootState } from '@/types'
import Grid from '@mui/material/Unstable_Grid2'
import { Button, ButtonProps } from '@mui/material'

const TttButton = ({ sx, children, ...rest }: ButtonProps) => (
  <Button
    variant="text"
    sx={{
      '&:hover': { backgroundColor: 'transparent' },
      borderRadius: 0,
      border: 1,
      borderColor: 'text.primary',
      ...sx,
    }}
    {...rest}>
    {children}
  </Button>
)

export default function Home() {
  const count = useSelector<RootState>((state) => state.counter.count) as number
  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => store.dispatch(counterSlice.actions.increase(1))} className={`mr20`}>
          increase
        </button>
        <button onClick={() => store.dispatch(counterSlice.actions.decrease(1))}>decrease</button>
      </div>
      <Grid container direction="column">
        <Grid container>
          <TttButton disabled sx={{ borderTop: 0, borderLeft: 0 }}>
            1
          </TttButton>
          <TttButton sx={{ borderTop: 0 }}>2</TttButton>
          <TttButton sx={{ borderTop: 0, borderRight: 0 }}>3</TttButton>
        </Grid>
        <Grid container>
          <TttButton sx={{ borderLeft: 0 }}>1</TttButton>
          <TttButton>2</TttButton>
          <TttButton sx={{ borderRight: 0 }}>3</TttButton>
        </Grid>
        <Grid container>
          <TttButton sx={{ borderBottom: 0, borderLeft: 0 }}>1</TttButton>
          <TttButton sx={{ borderBottom: 0 }}>2</TttButton>
          <TttButton sx={{ borderBottom: 0, borderRight: 0 }}>3</TttButton>
        </Grid>
      </Grid>
    </div>
  )
}

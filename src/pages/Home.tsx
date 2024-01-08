/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-07-24 12:14 (GMT+0900)
 */
import { Button, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <Paper className="homeContainer">
      <Button className="homeCenter" component={Link} to="/tictactoe">
        Play
      </Button>
    </Paper>
  )
}

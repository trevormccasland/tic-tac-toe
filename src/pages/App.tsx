/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-12 11:56 (GMT+0900)
 */
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import TicTacToe from './TicTacToe'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tictactoe">
          <TicTacToe />
        </Route>
      </Switch>
    </Router>
  )
}

/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-12 11:56 (GMT+0900)
 */
import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  RouteProps,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
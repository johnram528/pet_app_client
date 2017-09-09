import React from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './containers/HomePage'
import SearchPage from './containers/SearchPage'
import Login from './containers/Login'
import SitterProfile from './containers/SitterProfile'
import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

// const history = createBrowserHistory()

export default () => (
  <Router basename="/" >
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/sitters/:sitterId" component={SitterProfile}/>
    <Route path="/login" component={Login}/>

  </div>
</Router>
  ) 
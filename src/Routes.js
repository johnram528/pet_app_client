import React, { Component } from 'react'
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
import SignUp from './containers/SignUp'
// const history = createBrowserHistory()

export default class Routes extends Component {

render(){ 

  return ( 
  <Router basename="/" >
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/sitters/:sitterId" component={SitterProfile}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
  </div>
</Router>
  ) 
  }
}
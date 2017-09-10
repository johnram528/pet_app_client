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

// const history = createBrowserHistory()

export default class Routes extends Component {
  constructor(props) {
    super(props)
  }
render(){ 

  return ( 
  <Router basename="/" >
  <div>
    <Route exact path="/" render={()=> <HomePage signedIn={this.props.signedIn}/>}/>
    <Route path="/search" component={SearchPage}/>
    <Route path="/sitters/:sitterId" component={SitterProfile}/>
    <Route path="/login" component={Login}/>
  </div>
</Router>
  ) 
  }
}
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomePage from './containers/HomePage'
import SearchPage from './containers/SearchPage'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory()

export default () => (
  <Router history={history}>
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/search" component={SearchPage}/>
  </div>
</Router>
  ) 
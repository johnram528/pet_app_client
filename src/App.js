import React, { Component } from 'react';
import './App.css';
// import HomePage from './containers/HomePage'
import Routes from './Routes.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: !!localStorage.token
    }
  }
  render() {
    return (
        <div className="App">
          <Routes signedIn={this.state.signedIn} firstname={localStorage.firstname}/>
        </div>
    );
  }
}

export default App;

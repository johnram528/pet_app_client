import React from 'react'
import NavBar from '../NavBar.js'
import HomeSearchForm from '../components/HomeSearchForm'


class HomePage extends Component {
  render() {
    return (
        <div className='main-content-wrap'>
          <NavBar/>
          <div className='top-content-container'>
            <HomeSearchForm/>
          </div>
          <div className='bottom-content-container'>
          </div>
        </div>
    );
  }
}

export default HomePage;

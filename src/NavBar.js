  
import React from 'react'
import { Link } from 'react-router-dom'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import './NavBar.css'

export default (props) => {
  const unAuthNav = (
            <Nav pullRight>
              <NavItem eventKey={1}><Link to ="/login">Ingresar</Link></NavItem>
              <NavItem eventKey={2}><Link to ="/signup">Registrate</Link></NavItem>
            </Nav>)
  const authNav = ( <Nav pullRight>
                      <NavDropdown eventKey={1} title={props.firstname||'title'}>
                        <MenuItem eventKey="1.1">Dashboard</MenuItem>
                        <MenuItem eventKey="1.2">Profile</MenuItem>
                        <MenuItem eventKey="1.3">Inbox</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="1.4" onClick={()=> {localStorage.removeItem('token'); window.location.reload()}}>Logout</MenuItem>
                      </NavDropdown>
                    </Nav>)
    return (
<site-header>      
  <div className='navbar-wrapper'>
    <Navbar navbar-default navbar-fixed-top header>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">WoOF</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to ="/search">Buscar Cuidadores</Link></NavItem>
            <NavItem eventKey={2} href="#">Hazte Cuidador</NavItem>
          </Nav>

            {!props.signedIn ? unAuthNav : authNav}

        </Navbar.Collapse>
      </Navbar>
    </div>
  </site-header>
  )
}

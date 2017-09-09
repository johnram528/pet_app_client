import React from 'react'
import { Link } from 'react-router-dom'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import './NavBar.css'

export default (props) => {

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
          <Nav pullRight>
            <NavItem eventKey={1}><Link to ="/login">Ingresar</Link></NavItem>
            <NavItem eventKey={2} href="#">Registrate</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </site-header>
  )
}


            // <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            //   <MenuItem eventKey={3.1}>Action</MenuItem>
            //   <MenuItem eventKey={3.2}>Another action</MenuItem>
            //   <MenuItem eventKey={3.3}>Something else here</MenuItem>
            //   <MenuItem divider />
            //   <MenuItem eventKey={3.3}>Separated link</MenuItem>
            // </NavDropdown>
            // <NavItem eventKey={1} href="/login">Ingresar</NavItem>
import React from 'react'
import Logo from '../../assets/images/logoFPT.png'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './index.scss'

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
      expand="lg"
      sticky="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} width="150" alt="FPT logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" eventKey={'/home'}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" eventKey={'/courses'}>
            Courses
          </Nav.Link>
          <Nav.Link as={Link} to="/examination" eventKey={'/examination'}>
            Examination Room
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" eventKey={'/contact'}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Language" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/" eventKey={1}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/" eventKey={2}>
              Vietnamese
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/login" eventKey={'/login'}>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register" eventKey={'/register'}>
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

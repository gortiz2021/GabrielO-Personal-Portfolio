import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <div>

    <Navbar bg="dark" variant='dark' sticky="top">
      <Container>
        <Navbar.Brand href='/'>Gabriel Ortiz</Navbar.Brand>
        <Nav navbarScroll>
          <Nav.Link to='/about'>About</Nav.Link>
          <Nav.Link to='/skills'>Skills</Nav.Link>
          <Nav.Link to='/projects'>Projects</Nav.Link>
          <Nav.Link to='/contact'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    </div>

    
  )
}

export default NavBar
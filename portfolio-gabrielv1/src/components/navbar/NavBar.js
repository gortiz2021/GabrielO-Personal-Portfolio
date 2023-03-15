import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  return (
    <div>

    <Navbar bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href='/'>
          Gabriel Ortiz
        </Navbar.Brand>
      </Container>
    </Navbar>

    </div>

    
  )
}

export default NavBar
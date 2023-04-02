import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll } from 'react-scroll'
// import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    
    <div>

    <Navbar className='fixed-top' bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href='#' onClick={() => animateScroll.scrollToTop({ duration: 500})}>Gabriel Ortiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav >

          <Nav.Link>
            <Link to='about' smooth={true} offset={-70} duration={500}>
              About
            </Link>
          </Nav.Link>
          
          <Nav.Link>
            <Link to='skills' smooth={true} offset={-70} duration={500}>
              Skills
            </Link>
          </Nav.Link>
          
          <Nav.Link >
            <Link to='projects' smooth={true} offset={-70} duration={500}>
              Projects
            </Link>
          </Nav.Link>
          
          <Nav.Link>
            <Link to='contact' smooth={true} offset={-window.pageYOffset} duration={500}>
              Contact
            </Link>
          </Nav.Link>
        
        </Nav>
      </Container>
    </Navbar>

    </div>

    
  )
}

export default NavBar
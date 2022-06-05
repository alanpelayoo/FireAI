import React from 'react'
import { Navbar,Nav,Container,Row,Form,FormControl,Button } from 'react-bootstrap'
import logo from '../resources/FireAI-logos/logo_newcolor_t.png'

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg" className='px-4 py-2'>
        <Container >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="120"
            height="auto"
            className="d-inline-block align-top "
            alt='Logo'
          />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  pt-3" >
              <Nav.Link href="/loggin"><i className='fas fa-user me-1'></i>Login</Nav.Link>
              <Nav.Link href="/cameras"><i className='fas fa-camera me-1'></i> Cameras</Nav.Link>
              <Nav.Link href="/help"><i className='fas fa-life-ring me-1'></i> Help</Nav.Link>
              <Nav.Link href="/notis"><i className='fas fa-bell-slash me-1'></i></Nav.Link>
            </Nav>
            <Nav className="ms-auto  pt-3 d-none d-md-flex" >
              <Nav.Link href="/loggin"><i className='fas fa-search me-1'></i></Nav.Link>
              <Nav.Link href="/cameras"><i className='fa-brands fa-instagram me-1'></i> </Nav.Link>
              <Nav.Link href="/help"><i className='fa-brands fa-facebook me-1'></i> </Nav.Link>
              <Nav.Link href="/notis"><i className='fa-brands fa-twitter me-1'></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

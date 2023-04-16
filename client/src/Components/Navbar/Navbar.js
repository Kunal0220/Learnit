import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">LearnIt</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/student">Student?</Nav.Link>
          <Nav.Link href="/teacher">Teacher?</Nav.Link>
          <Nav.Link href="/explore">Explore</Nav.Link>
          <Nav.Link href="/log" style={{marginLeft:'57rem'}}>Login/Signup</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
    <br />

  </>
  )
}

export default Navbars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/navbar.css";

const Navigation = () => {
  return (
    <div>
<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand  className='org'>CRUD-Sample</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createForm">CreateUser</Nav.Link>
            <Nav.Link href="/updateForm">UpdateUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
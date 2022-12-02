import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from "react-router-dom";

function NavigationBar(currentUser){

    return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">WRPR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown className="justify-content-end" title="Sign In/Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/SignIn">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/SignUp">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Forgot Password?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavigationBar
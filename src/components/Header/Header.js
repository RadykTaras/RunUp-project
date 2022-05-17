import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
import {ReactComponent as Logo} from './img/logo.svg';
import {ReactComponent as Login} from './img/login.svg';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar className="shadow" bg="dark" variant="dark" sticky="top">
        <Container className="justify-content-start logo_container mx-4">
          <Logo />
          <Navbar.Brand className="mx-4">RunUp</Navbar.Brand>
        </Container>
        <Container className="justify-content-start">
          <Nav className="me-auto bg-dark mx-5" variant="tabs" defaultActiveKey="/"> 
            <LinkContainer to="/">
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Shop">
              <Nav.Link>
                Shop
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                About
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
        <Container className="justify-content-end">
          <LinkContainer className="loginSvg" to="/login">
            <Login />
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

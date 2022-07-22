import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
import {ReactComponent as Logo} from './img/logo.svg';
import Login from './img/login.svg';
import Profile from './img/profile.svg';
import './Header.css';

const Header = (props) => {
  let userStatus = '',
    route = '';
  
  if(props.state.loginForm.store.loginStatus === 'Admin' || props.state.loginForm.store.loginStatus === 'Costumer'){
    userStatus = Profile;
    route = 'user/main';
  } else {
    userStatus = Login;
    route = '/login';
  }
  
  return (
    <header className="header">
      <Navbar className="shadow" bg="dark" variant="dark" sticky="top">
        <Container className="justify-content-start logo_container mx-4">
          <Logo />
          <Navbar.Brand className="mx-4">RunUp</Navbar.Brand>
        </Container>
        <Container className="justify-content-start ss">
          <Nav className="me-auto customNav"> 
            <LinkContainer className="HomeButton navButton" to="" onClick={() => {props.state.loginForm.cleanFields(); props.state.registrationForm.cleanFields(); }}>
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className="ShopButton navButton" to="/shop" onClick={() => {props.state.loginForm.cleanFields(); props.state.registrationForm.cleanFields(); }}>
              <Nav.Link>
                Shop
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className="AboutButton navButton" to="/about" onClick={() => {props.state.loginForm.cleanFields(); props.state.registrationForm.cleanFields(); }}>
              <Nav.Link>
                About
              </Nav.Link>
            </LinkContainer>
            <Container className="loginLink">
              <LinkContainer className="loginSvg" to={route} onClick={() => {props.state.loginForm.cleanFields(); props.state.registrationForm.cleanFields(); }}>
                <Nav.Link>
                <img src={userStatus} alt="login"  />
                </Nav.Link>
              </LinkContainer>
            </Container>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

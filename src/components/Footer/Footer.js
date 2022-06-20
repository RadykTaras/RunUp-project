import React from 'react';
import Facebook from './img/f_logo.png';
import Twitter from './img/t_logo.svg';
import Heart from './img/heart.svg';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="footer">
      <Navbar bg="dark" variant="dark">
        <span className="lubov">Liubov</span>
        <img className="heart" alt="heart" src={Heart} />
        <a className="pageAdress" href="http://localhost:3000/">
          www.RunUp.com
        </a>
        <Container className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link  href="https://www.facebook.com/">
                <img className="flogo" alt="facebook logo" src={Facebook} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="https://twitter.com/">
                <img className="tlogo" alt="twitter logo" src={Twitter} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;

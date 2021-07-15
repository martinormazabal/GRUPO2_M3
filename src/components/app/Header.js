import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container, NavItem, Button,
} from 'react-bootstrap';
import LoginIcon from 'mdi-react/LoginIcon';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <>
      <div style={{ display: 'flex', height: '12px' }}>
        <div style={{ width: '35%', backgroundColor: '#06487F' }}>{' '}</div>
        <div style={{ width: '65%', backgroundColor: '#EA8232' }}>{' '}</div>
      </div>
      <Navbar sticky="top" variant="light" style={{ backgroundColor: '#fff' }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <HeaderLogo />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <NavItem>
              <LinkContainer to="/postular">
                <Nav.Link>Postular</Nav.Link>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/secretaria">
                <Nav.Link>Secretaria</Nav.Link>
              </LinkContainer>
            </NavItem>
          </Nav>
          <Nav>
            <Nav.Item>
              <Button variant="outline-primary">
                <Nav.Link style={{ color: 'white' }}>
                  <LoginIcon style={{ marginRight: '0.3em' }} />
                  Iniciar Sesión
                </Nav.Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

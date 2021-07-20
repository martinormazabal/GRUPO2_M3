import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
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
      <Navbar sticky="top" variant="light" style={{ backgroundColor: '#fff', borderBottom: '1px solid #EEEEEE' }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <HeaderLogo />
            </Navbar.Brand>
          </LinkContainer>
          <Nav>
            <Nav.Item>
              <LinkContainer to="/iniciar-sesion">
                <Nav.Link style={{ color: 'white' }}>
                  <div style={{ diplay: 'flex', alignItems: 'center' }}>
                    <LoginIcon style={{ marginRight: '0.3em' }} />
                    Iniciar Sesión
                  </div>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

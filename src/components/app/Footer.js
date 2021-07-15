import React from 'react';
import {
  Container, Image, Navbar, NavbarBrand,
} from 'react-bootstrap';
import usachLogoImage from '../../images/UDSTBCO.png';

const Footer = () => (

  <Navbar
    variant="dark"
    style={{
      position: 'relative',
      left: 0,
      bottom: 0,
      backgroundColor: '#5D737F',
    }}
  >
    <Container>
      <NavbarBrand>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={usachLogoImage} style={{ height: '6em', marginRight: '0.4em' }} fluid />
          <div>
            <p style={{ fontSize: '0.8em', marginBottom: '0em' }}>
              Universidad de Santiago de Chile. Avenida Ecuador #3659.
              Estación Central, Santiago de Chile.
            </p>
            <p style={{ fontSize: '0.8em', marginBottom: '0em' }}>
              +56 2 2718 0900
            </p>
            <p style={{ fontSize: '0.8em', marginBottom: '0em' }}>
              <a style={{ color: 'white', textDecoration: 'none' }} href="mailto:contacto.informatica@usach.cl" className="mailto-link">contacto.informatica@usach.cl</a>
            </p>
          </div>
        </div>
      </NavbarBrand>
    </Container>
  </Navbar>

);

export default Footer;

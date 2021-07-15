import React from 'react';
import { Image } from 'react-bootstrap';
import diinfLogoImage from '../../images/LOGO9-3.png';

const HeaderLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Image src={diinfLogoImage} style={{ height: '2em', marginRight: '0.4em' }} fluid />
    <div>
      <p style={{ fontSize: '0.61em', marginBottom: '-0.4em', textAlign: 'end' }}>Educación Continua</p>
      Diplomados
    </div>
  </div>
);

export default HeaderLogo;

import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import LoginCard from '../components/dashboard/LoginCard';

const LoginPage = () => (
  <Container>
    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
      <LoginCard />
    </div>
  </Container>

);

export default LoginPage;

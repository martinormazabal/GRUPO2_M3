import React, { useState } from 'react';
import {
  Form, Button,
} from 'react-bootstrap';
import axios from 'axios';

const PostulantForm = (props) => {
  const { clickedDiplomate } = props;
  const [formState, setFormState] = useState({});

  function handleNameChange(event) {
    setFormState(
      {
        name: event.target.value,
        email: formState.email,
        lastName: formState.lastName,
      },
    );
  }

  function handleEmailChange(event) {
    setFormState(
      {
        name: formState.name,
        email: event.target.value,
        lastName: formState.lastName,
      },
    );
  }

  function handleLastNameChange(event) {
    setFormState(
      {
        name: formState.name,
        email: formState.email,
        lastName: event.target.value,
      },
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nameOnly = formState.name;
    const lastNameOnly = formState.lastName;
    // eslint-disable-next-line
    const fullName = nameOnly + ' ' + lastNameOnly
    const payload = {
      // eslint-disable-next-line
      name: fullName,
      // eslint-disable-next-line
      email: formState.email,
      // eslint-disable-next-line
      id_diplomate: clickedDiplomate,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    // eslint-disable-next-line
    console.log(payload);
    try {
      // eslint-disable-next-line
      await axios.post('http://localhost:8081/api/v1/postulants', payload, { headers: headers });
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={handleNameChange} value={formState.name} type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control onChange={handleLastNameChange} value={formState.lastName} type="text" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control onChange={handleEmailChange} value={formState.email} type="email" placeholder="Ingrese su correo electrónico" />
          <Form.Text className="text-muted">
            No compartiremos tu correo electrónico con nadie.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default PostulantForm;

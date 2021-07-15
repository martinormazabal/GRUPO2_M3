import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import './DiplomatePreview.css';

const DiplomatePreview = (props) => {
  const {
    id, title, image, description,
  } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    props.onClick(id);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Card style={{
        border: 'none', borderRadius: '10px', backgroundColor: '#F4F8FB',
      }}
      >
        <Card.Img variant="top" src={image} style={{ borderRadius: '10px 10px 0px 0px' }} />
        <Card.Body>
          <Card.Title style={{ display: 'flex', alignItems: 'center', color: '#E86A35' }}>{ title }</Card.Title>
          <Card.Text>
            { description }
          </Card.Text>
          <Button variant="card" type="submit">Ver detalles</Button>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default DiplomatePreview;

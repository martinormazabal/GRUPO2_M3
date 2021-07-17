import React from 'react';
import { Card } from 'react-bootstrap';

const DiplomateCardAcademic = (props) => {
  const { name, image, curriculum } = props;

  return (
    <Card
      className="h-100"
      style={{
        borderRadius: '10px', backgroundColor: 'transparent',
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          borderRadius: '10px 10px 0px 0px', height: '250px', width: '100%', objectFit: 'cover',
        }}
      />
      <Card.Body>
        <Card.Title style={{
          display: 'flex', alignItems: 'center', color: '#E86A35', fontSize: '1em',
        }}
        >
          {name}
        </Card.Title>
        <ul>
          {curriculum.map((history) => (
            <li style={{ fontSize: '1em' }}>{history}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default DiplomateCardAcademic;

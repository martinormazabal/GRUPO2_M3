import React from 'react';
import { Card } from 'react-bootstrap';

const DiplomateCardAcademic2 = (props) => {
  const { name, image, curriculum } = props;

  return (
    <Card
      className="h-100"
      style={{
        border: '1px solid #D6E2EC', borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex', alignContent: 'space-between' }}>
        <div style={{ marginLeft: '1em', marginTop: '1em', width: '30%' }}>
          <img
            src={image}
            alt="academic"
            style={{
              borderRadius: '10%', height: '140px', width: '140px', objectFit: 'cover',
            }}
          />
        </div>
        <div style={{ width: '90%' }}>
          <Card.Body>
            <Card.Title style={{
              display: 'flex', alignItems: 'center', color: '#E86A35', fontSize: '1em',
            }}
            >
              {name}
            </Card.Title>
            <ul style={{ marginRight: '0.8em' }}>
              {curriculum.map((history) => (
                <li style={{ fontSize: '1em' }}>{history}</li>
              ))}
            </ul>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default DiplomateCardAcademic2;

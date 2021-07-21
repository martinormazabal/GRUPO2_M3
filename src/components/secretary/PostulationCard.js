import React from 'react';
import { Card } from 'react-bootstrap';

const PostulationCard = (props) => {
  const { name } = props;
  return (
    <Card>
      <div>
        {name}
      </div>
    </Card>
  );
};

export default PostulationCard;

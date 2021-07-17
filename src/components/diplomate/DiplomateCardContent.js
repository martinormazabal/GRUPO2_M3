import React from 'react';

const DiplomateCardContent = (props) => {
  const { content } = props;
  return (
    <div style={{ paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '1em' }}>
      {content}
    </div>
  );
};

export default DiplomateCardContent;

import React from 'react';
import CircleMediumIcon from 'mdi-react/CircleMediumIcon';

const DiplomateCardSubtitle = (props) => {
  const { subtitle } = props;
  return (
    <>
      <section style={{
        display: 'flex', alignItems: 'center', paddingLeft: '1.5em', paddingRight: '1.5em', color: '#0C497E', fontWeight: 'bold',
      }}
      >
        <CircleMediumIcon style={{ fontSize: '3em' }} />
        {subtitle}
      </section>
      <hr style={{ marginLeft: '3em', marginRight: '1.5em', marginTop: '0.5em' }} />
    </>
  );
};

export default DiplomateCardSubtitle;

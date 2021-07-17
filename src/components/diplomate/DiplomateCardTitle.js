import React from 'react';

const DiplomateCardTitle = (props) => {
  const {
    title, icon,
  } = props;
  return (
    <>
      <section style={{
        display: 'flex', alignItems: 'center', paddingLeft: '1.5em', paddingRight: '1.5em', color: '#0C497E', fontWeight: 'bold',
      }}
      >
        {icon}
        {title}
      </section>
      <hr style={{ marginLeft: '1.5em', marginRight: '1.5em', marginTop: '0.5em' }} />
    </>
  );
};

export default DiplomateCardTitle;

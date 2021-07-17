/* eslint-disable react/no-array-index-key */
import React from 'react';
import DiplomateCardSubtitle from './DiplomateCardSubtitle';

const DiplomateCardAdmissionList = (props) => {
  const { entryRequirements, datesStudy } = props;
  return (
    <div style={{ marginBottom: '1em' }}>
      <DiplomateCardSubtitle subtitle="Requisitos de ingreso" />
      <div style={{ paddingLeft: '2em' }}>
        <ul>
          {entryRequirements.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <DiplomateCardSubtitle subtitle="Fechas y modalidad de estudio" />
      <div style={{ paddingLeft: '2em' }}>
        <ul>
          {datesStudy.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default DiplomateCardAdmissionList;

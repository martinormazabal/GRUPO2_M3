/* eslint-disable react/no-array-index-key */
import React from 'react';
import DiplomateCardSubtitle from './DiplomateCardSubtitle';

const DiplomateCardSyllabusList = (props) => {
  const { numberCoursesDuration, programCourses, approbalRequirements } = props;
  return (
    <div style={{ marginBottom: '1em' }}>
      <DiplomateCardSubtitle subtitle="Número de cursos y duración" />
      <div style={{ paddingLeft: '2em' }}>
        <ul>
          {numberCoursesDuration.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <DiplomateCardSubtitle subtitle="Número de cursos y duración" />
      <p style={{ paddingLeft: '3em', marginBottom: '0.5em' }}>
        A continuación se enumeran los cursos que componen el diplomado y
        una breve descripción de su contenido.
      </p>
      <div style={{ paddingLeft: '3em' }}>
        <ul>
          {programCourses.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <DiplomateCardSubtitle subtitle="Número de cursos y duración" />
      <div style={{ paddingLeft: '2em' }}>
        <ul>
          {approbalRequirements.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default DiplomateCardSyllabusList;

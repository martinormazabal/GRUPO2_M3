import React from 'react';
import DiplomateCardSubtitle from './DiplomateCardSubtitle';

const DiplomateCardDutyList = (props) => {
  const { duty, discounts } = props;
  return (
    <div style={{ marginBottom: '1em' }}>
      <DiplomateCardSubtitle subtitle="Aranceles" />
      <div style={{ paddingLeft: '2em' }}>
        <ul>
          {duty.map((item) => <li>{item}</li>)}
        </ul>
      </div>
      <DiplomateCardSubtitle subtitle="Descuentos" />
      <p style={{ paddingLeft: '3em', marginBottom: '0.5em' }}>
        Descuentos para aquellas personas que vienen con financiamiento propio
        (no son financiados desde una empresa/organización).
      </p>
      <div style={{ paddingLeft: '3em' }}>
        <ul>
          {discounts.map((item) => <li>{item}</li>)}
        </ul>
        <div style={{ fontWeight: 'bold' }}>
          IMPORTANTE:
          <ul>
            <li> Los descuentos no son acumulables.</li>
            <li>
              Los descuentos son aplicables solamente para pagos realizados
              hasta antes del inicio declasesde los diplomados.
            </li>
            <li>
              Los descuentos no aplican para los cursos de los diplomados en
              el caso de que éstos se tomen de manera individual.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DiplomateCardDutyList;

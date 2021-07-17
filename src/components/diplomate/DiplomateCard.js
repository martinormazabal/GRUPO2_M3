import React from 'react';
import {
  Button, Card, Form, Row, Col,
} from 'react-bootstrap';
import './DiplomateCard.css';
import CheckboxOutlineIcon from 'mdi-react/CheckBoxOutlineIcon';
import SchoolOutlineIcon from 'mdi-react/SchoolOutlineIcon';
import AccountMultipleOutlineIcon from 'mdi-react/AccountMultipleOutlineIcon';
import CurrencyUsd from 'mdi-react/CurrencyUsdIcon';
import AccoutCheckOutline from 'mdi-react/AccountCheckOutlineIcon';
import DiplomateCardAcademic2 from './DiplomateCardAcademic2';
import DiplomateCardContent from './DiplomateCardContent';
import DiplomateCardTitle from './DiplomateCardTitle';
import DiplomateCardSyllabusList from './DiplomateCardSyllabusList';
import DiplomateCardDutyList from './DiplomateCardDutyList';
import DiplomateCardAdmissionList from './DiplomateCardAdmissionList';

const DiplomateCard = (props) => {
  const {
    title, objectives, syllabus, teachersCouncil, duty, admission,
  } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    props.onClick();
  };

  const diplomateCardsAcademic = teachersCouncil.map((academic, index) => (
    <Col sm={12} md={12} lg={6} style={{ marginBottom: '24px' }}>
      <DiplomateCardAcademic2
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        name={academic.name}
        image={academic.image}
        curriculum={academic.curriculum}
      />
    </Col>
  ));

  return (
    <div className="mb-4" style={{ marginTop: '-2em' }}>
      <Card
        className="h-100"
        style={{
          border: 'none', borderRadius: '10px', backgroundColor: '#F4F8FB', borderTop: '10px solid #0C497E', paddingTop: '1em',
        }}
      >
        <DiplomateCardTitle title="Objetivos y Descripción" icon={<CheckboxOutlineIcon style={{ marginRight: '0.5em' }} />} />
        <DiplomateCardContent content={objectives} />
        <DiplomateCardTitle title="Plan de estudios" icon={<SchoolOutlineIcon style={{ marginRight: '0.5em' }} />} />
        <DiplomateCardSyllabusList
          numberCoursesDuration={syllabus[0].numberCoursesDuration}
          programCourses={syllabus[0].programCourses}
          approbalRequirements={syllabus[0].approbalRequirements}
        />
        <DiplomateCardTitle title="Cuerpo docente" icon={<AccountMultipleOutlineIcon style={{ marginRight: '0.5em' }} />} />
        <Row style={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}>
          <p>
            El cuerpo docente se compone de auditores e ingenieros de alto
            nivel académico o profesionales de reconocido prestigio y experiencia laboral.
          </p>
          {diplomateCardsAcademic}
        </Row>
        <DiplomateCardTitle title="Aranceles" icon={<CurrencyUsd style={{ marginRight: '0.5em' }} />} />
        <DiplomateCardDutyList duty={duty[0].duty} discounts={duty[0].discounts} />
        <DiplomateCardTitle title="Admisión" icon={<AccoutCheckOutline style={{ marginRight: '0.5em' }} />} />
        <DiplomateCardAdmissionList
          entryRequirements={admission[0].entryRequirements}
          datesStudy={admission[0].datesStudy}
        />
        <DiplomateCardTitle title="Contacto" icon={<AccoutCheckOutline style={{ marginRight: '0.5em' }} />} />
        <p style={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}>
          Puedes ingresar tus datos a través de nuestro formulario de contacto o directamente
          a los siguientes correos:
        </p>
        <Row>
          <Col>
            <div style={{
              display: 'flex', padding: '0 1em 1em 1em', alignItems: 'center', justifyContent: 'space-evenly',
            }}
            >
              <div
                style={{
                  display: 'flex', padding: '0 1em 1em 1em',
                }}
              >
                <Form onSubmit={submitHandler}>
                  <div>
                    ¿Necesitas más información?
                  </div>
                  <Button variant="card" style={{ width: '100%' }} type="submit">Contáctanos</Button>
                </Form>
              </div>
              <div style={{ paddingLeft: '1em', paddingRight: '1em' }}>
                <p style={{ fontWeight: 'bold' }}>Coordinador</p>
                <p>
                  Dr. Manuel Villalobos Cid
                  <br />
                  manuel.villalobos@usach.cl
                </p>
                <p style={{ fontWeight: 'bold' }}>
                  Secretaria Diplomados
                </p>
                <p>
                  Romina Labrin Valenzuela
                  <br />
                  Mail: romina.labrin@usach.cl
                  <br />
                  Fono: 22 71 80 905
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <DiplomateCardTitle title="Inscripciones" icon={<AccoutCheckOutline style={{ marginRight: '0.5em' }} />} />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>
          ¿Te interesa el&nbsp;
          <div style={{ fontWeight: 'bold', color: '#0C497E' }}>
            {title}
          </div>
          ?
        </div>
        <Form onSubmit={submitHandler}>
          <div
            style={{
              display: 'flex', padding: '0 1em 1em 1em',
            }}
          >
            <Button variant="card" style={{ width: '100%' }} type="submit">¡Inscríbete aquí!</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default DiplomateCard;

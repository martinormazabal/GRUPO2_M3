/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import DiplomateLargeCard from '../components/secretary/DiplomateLargeCard';
import PostulationDocument from '../components/secretary/PostulationDocument';
// import PostulationCard from '../components/secretary/PostulationCard';
const DashboardSecretary = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [postulations, setPostulations] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(async () => {
    if (postulations.length === 0) {
      try {
        setIsLoading(true);
        const diplomatePostulants = [];
        const resDiplomate = await axios({ method: 'GET', url: 'http://localhost:8082/api/v1/diplomates' });
        const diplomates = resDiplomate.data;
        await Promise.all(
          diplomates.map(async (diplomate) => {
            const res = await axios({ method: 'GET', url: `http://localhost:8082/api/v1/diplomates/${diplomate.id}/postulations` });
            diplomatePostulants.push({
              title: diplomate.title,
              id: diplomate.id,
              numberPostulations: [...res.data].length,
              postulants: [...res.data],
            });
          }),
        );
        diplomatePostulants.sort((a, b) => {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
        setPostulations(diplomatePostulants);
        console.log(diplomatePostulants);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    }
  }, []);

  const getDiplomatePostulations = async (diplomateId) => {
    history.push(`secretaria/diplomado/${diplomateId}`);
  };

  const listDiplomates = postulations.map((diplomate) => (
    <DiplomateLargeCard
      key={diplomate.id}
      id={diplomate.id}
      title={diplomate.title}
      numberPostulations={diplomate.numberPostulations}
      onClick={getDiplomatePostulations}
    />
  ));

  /* const listPostulationCard = postulations.map((diplomate) => (
                        <DiplomateLargeCard id={3} title="diplomado" numberPostulations={32} />

    <>
      <h2>{diplomate.title}</h2>
      {diplomate.postulants && diplomate.postulants.map(
        (postulation) => (
          <tr>
            <td>{postulation.id}</td>
            <Button onClick={() => { setShowModal(true); }} />
            <PostulationDocument
              show={showModal}
              onHide={() => { setShowModal(false); }}
              document={postulation.registrationForm}
            />
            <td>{postulation.registrationForm}</td>
            <td>{postulation.graduateCertificate}</td>
            <td>{postulation.curriculumVitae}</td>
            <td>{postulation.copyIdentityCard}</td>
            <td>{postulation.received ? 'OK' : 'Faltan documentos'}</td>
            <td>{postulation.valid ? 'Si' : 'No'}</td>
          </tr>
        ),
      )}
    </>
  )); */

  return (
    <Container>
      <Row className="my-4">
        <Col sm={2}>
          <Card style={{
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#F4F8FB',
          }}
          >
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    sad
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={10}>
          <Card style={{
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#F4F8FB',
          }}
          >
            <Card.Body>
              <Container style={{ paddingLeft: '0.5em', paddingRight: '0.5em' }}>
                <Row>
                  <Col>
                    {isLoading && <p>Cargando...</p>}
                    {!isLoading && listDiplomates}
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>

  );
};

export default DashboardSecretary;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DashboardSecretaryPostulations = () => {
  const { diplomadoId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [postulations, setPostulations] = useState([]);

  useEffect(async () => {
    if (postulations.length === 0) {
      try {
        setIsLoading(true);
        const res = await axios({ method: 'GET', url: `http://localhost:8082/api/v1/diplomates/${diplomadoId}/postulations` });
        setPostulations(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

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
                    Diplomado (Id):
                    {' '}
                    {diplomadoId}
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
                    {isLoading && <h1>Cargando...</h1>}
                    {!isLoading && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1em',
                      fontWeight: 'bold',
                      color: '#E86A35',
                    }}
                    >
                      Listado de postulaciones del diplomado ...
                    </div>
                    )}
                    {!isLoading
                        && postulations.map((postulation) => (
                          <>
                            <Card style={{
                              border: 'none', borderRadius: '10px', backgroundColor: 'white', marginBottom: '0.5em', marginTop: '0.5em',
                            }}
                            >
                              <Card.Body>

                                {postulation.id}
                                {postulation.registrationForm}
                                {postulation.graduateCertificate}
                                {postulation.curriculumVitae}
                                {postulation.copyIdentityCard}
                                {postulation.received ? 'Recibido' : 'Incompleto'}
                                {postulation.valid ? 'Válida' : 'No válida'}
                              </Card.Body>
                            </Card>
                          </>
                        ))}
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

export default DashboardSecretaryPostulations;

import React from 'react';
import { Accordion, Button, Card, Form, Modal, Nav, Tab } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function PresupuestoParticipativo() {
    return <>
        <Tab.Container defaultActiveKey="#ConsultaRegistro">
            <h3>Presupuesto Participativo</h3>
            <Card className="mt-3">
                <Card.Header>
                    <Nav className="d-flex" variant="tabs">
                        <Nav.Item>
                            <Nav.Link action href="#ConsultaRegistro">Consulta</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link action href="#Información_RegistroC">Información</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    {/* Consulta */}
                    <Tab.Pane eventKey="#ConsultaRegistro">
                        <InformacionCard tema="Presupuesto Participativo" />
                        <InformacionCard tema="¿Qué es un Presupuesto Prticipativo?" />
                        <InformacionCard tema="¿Cúales son los objetivos del Presupuesto Prticipativo?" />
                        <InformacionCard tema="¿Qué entidades del estado hacen Presupuesto Prticipativo?" />
                        <InformacionCard tema=" El Presupuesto Prticipativo Cumple con lo Siguiente" />
                        <InformacionCard tema=" Sistema Nacional se Presupuesto Público" />
                        <InformacionCard tema="Fases del Proceso" />
                    </Tab.Pane>

                    {/* Informacion */}
                    <Tab.Pane eventKey="#Información_RegistroC">
                        <Informacion grupo="PRESUPUESTO PARTICIPATIVO" />
                    </Tab.Pane>
                </Tab.Content>
            </Card>
        </Tab.Container>
    </>
}

function InformacionCard({ tema }) {
    return <>
        <Card className="mb-3">
            <Card.Header as="h5">{tema}</Card.Header>
            <Card.Body>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            </Card.Body>
        </Card>
    </>
}

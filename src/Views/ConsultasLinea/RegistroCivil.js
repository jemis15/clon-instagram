import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import Certificacion from './Certificacion';
import Informacion from './components/Accordion';

export default function RegistroCivil() {
    return <Tab.Container defaultActiveKey="#ConsultaRegistro">
        <h3>Registro Civil</h3>
        <Card className="mt-3">
            <Card.Header>
                <Nav className="d-flex" variant="tabs">
                    <Nav.Item>
                        <Nav.Link href="#ConsultaRegistro">Consulta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#Informacion_Registro">Informaci&oacute;n</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Tab.Content className="px-4 my-4">
                {/* Consulta */}
                <Tab.Pane eventKey="#ConsultaRegistro">
                    <Certificacion />
                </Tab.Pane>

                {/* Informacion */}
                <Tab.Pane eventKey="#Informacion_Registro">
                    <Informacion grupo="REGISTRO CIVIL" />
                </Tab.Pane>
            </Tab.Content>
        </Card>
    </Tab.Container>
}
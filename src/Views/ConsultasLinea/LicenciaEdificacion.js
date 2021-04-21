import React, { useState } from 'react';
import { Button, Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function LicenciaEdificacion() {
    return <>
        <Tab.Container defaultActiveKey="#link1">
            <h3>Licencia de Edificaci&oacute;n</h3>
            <Card className="mt-3">
                <Card.Header>
                    <Nav className="d-flex" variant="tabs">
                        <Nav.Item>
                            <Nav.Link action href="#link1">Consulta</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link action href="#link2">Información</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    <Tab.Pane eventKey="#link1">
                        <Row>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Recurrente:</label>
                                    <Form.Control type="text" placeholder="Recurrente" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">N° Licencia:</label>
                                    <Form.Control type="text" placeholder="N° Licencia" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <label className="form-label">Ubicaci&oacute;n:</label>
                                    <Form.Control type="text" placeholder="Ubicación" />
                                </div>
                            </div>
                        </Row>
                        <div className="text-center">
                            <Button variant="primary" type="submit">Buscar <i className="far fa-search" /></Button>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <Informacion grupo="LICENCIA DE EDIFICACION" />
                    </Tab.Pane>
                </Tab.Content>
            </Card>
        </Tab.Container>
    </>
}
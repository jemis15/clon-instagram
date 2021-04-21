import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function Multianual() {
    return <>
        <Row>
            <Col>
                <h3>Programa Multianual de Inversi&oacute;n</h3>
                <Informacion grupo="PROGRAMA MULTIANUAL DE INVERSION" />
            </Col>
            <Col>
                <div className="border mb-5 shadow" style={{ height: "500px" }}></div>
            </Col>
        </Row>
    </>
}
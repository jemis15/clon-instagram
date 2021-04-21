import React from 'react';
import {Col, Row } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function Saneamiento() {
    return <>
    <Row>
        <Col>
            <h3>Saneamiento</h3>
            <Informacion grupo="SANEAMIENTO" />
        </Col>
        <Col>
            <div className="border mb-5 shadow" style={{height: "500px"}}></div>
        </Col>
    </Row>
    </>
}
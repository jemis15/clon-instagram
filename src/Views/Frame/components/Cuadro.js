import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Cuadro({ children }) {
    return <Row noGutters>{children}</Row>
}

export function CuadroLeft({ children }) {
    return <Col xs="4" className="px-4 border-right" style={{ minHeight: '100vh' }}>{children}</Col>
}
export function CuadroRight({ children }) {
    return <Col xs="8" className="px-5">{children}</Col>
}
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Avatar from '../../components/utilitarios/Avatar';

import image from '../../assets/images/faces/face4.jpg'

export default function Usuarios() {
    return <Container className="mt-5 mb-5">
        <h2 className="title-1 mb-4">Lista de usuarios</h2>

        <Row>
            <Col xs="4" className="border">
                <div className="d-flex">
                    <Avatar initials="FM" image={image} className="mr-4" />
                    <div>
                        <h6>FLORES MEZA JAFETT JAMIS</h6>
                    </div>
                </div>
            </Col>
            <Col xs="4" className="border">Usuario numero 1</Col>
            <Col xs="4" className="border">Usuario numero 1</Col>
            <Col xs="4" className="border">Usuario numero 1</Col>
            <Col xs="4" className="border">Usuario numero 1</Col>
            <Col xs="4" className="border">Usuario numero 1</Col>
        </Row>
    </Container>;
}
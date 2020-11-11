import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import imageDefault from '../../assets/images/paisaje.jpg';

export default function Gastronomia() {
    return <>
        <div className="py-5 banner bg-container">
            <Container>
                <Row>
                    <Col md="7" className="align-self-center">
                        <h1 className="banner-title text-center text-md-left">
                            La gastronoima en el distrito de mazamari
                        </h1>
                        <p className="banner-descripcion text-center text-md-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores quaerat, illum harum repudiandae eius impedit cum
                            reprehenderit odit dolores quaerat, illum harum repudiandae
                            eius impedit cum reprehenderit odit.
                        </p>
                    </Col>
                    <Col md="5" className="align-self-center">
                        <img src={imageDefault} className="img-fluid rounded-lg" alt="gastonomia y turismo" />
                    </Col>
                </Row>

            </Container>
        </div>
    </>
}
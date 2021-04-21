import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Banner from '../components/Banner';
import Himno from './Himno';
import Alcaldes from './Alcaldes';

export default function Historia() {
    return <div>
        <Banner id="2" />


        <Container className="py-xl">
            <Row>
                <Col xs="4" className="align-self-center">
                    <div>
                        <h4 className="font-weight-600 mb-1">Creacion Politica</h4>
                        <p className="color-text-light text-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores quaerat, illum harum repudiandae eius impedit cum
                            reprehenderit odit nam minima earum quia placeat et animi
                            rerum, architecto necessitatibus, sint hic.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h4 className="font-weight-600 mb-1">Primer Gobernante</h4>
                        <p className="color-text-light text-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores quaerat, illum harum repudiandae eius impedit.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h4 className="font-weight-600 mb-1">Denominacion</h4>
                        <p className="color-text-light text-small">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores quaerat, illum harum repudiandae eius.
                        </p>
                    </div>
                </Col>
                <Col xs="8" className="align-self-center">
                    <div className="rounded-lg overflow-hidden">
                        <img src="https://image.freepik.com/free-vector/display-template-with-camera_79603-1246.jpg" className="img-fluid" alt="equipo" />
                    </div>
                </Col>
            </Row>
        </Container>

        <Alcaldes/>
        <Himno/>
    </div >
}
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import equipoimage from '../assets/images/paisaje.jpg';
import codigoimage from '../assets/images/codigo.png';
import Banner from '../components/Banner';
import Himno from './Himno';
import Alcaldes from './Alcaldes';

export default function Historia() {
    return <div>
        <Banner id="2" />
        <div className="pb-5 bg-container">
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode
                className="pt-5"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable={false}>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
                <div className="mx-3 bg-dark">
                    <img src={codigoimage} className="img-fluid" alt="recuerdos" />
                </div>
            </Carousel>
        </div>


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
                        <img src={equipoimage} className="img-fluid" alt="equipo" />
                    </div>
                </Col>
            </Row>
        </Container>

        <Alcaldes/>
        <Himno/>
    </div >
}
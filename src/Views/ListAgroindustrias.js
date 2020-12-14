import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img_platos from '../assets/images/web/cafe.png';

export default function ListAgroindustrias(){
    return <div className="container">
        <h1 className="text-center ">Agroindustrias</h1>
        <div className="ListAgro" style={{width:'90%', display:'grid', gridTemplateColumns:'repeat(2, minmax(200px, 1fr))', gridGap:'1rem'}}>
            <div className="CajaAgro">
                <Card className="mb-3" style={{maxWidth: '540px'}}>
                    <Row className="no-gutters">
                        <Col md="4" style={{borderRight:'2px solid green', borderLeft:'2px solid green'}}>
                        <img src={img_platos} alt="" class="card-img" style={{width:"100%", height:"100%"}} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title style={{fontFamily:'cursive', fontWeight:'800'}}>COFFE PLACE</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className="CajaAgro">
                <Card className="mb-3" style={{maxWidth: '540px'}}>
                    <Row className="no-gutters">
                        <Col md="4">
                        <img src={img_platos} alt="" class="card-img" style={{width:"100%", height:"100%"}} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title style={{fontFamily:'cursive', fontWeight:'800'}}>COFFE PLACE</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div className="CajaAgro">
                <Card className="mb-3" style={{maxWidth: '540px'}}>
                    <Row className="no-gutters">
                        <Col md="4">
                        <img src={img_platos} alt="" class="card-img" style={{width:"100%", height:"100%"}} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title style={{fontFamily:'cursive', fontWeight:'800'}}>COFFE PLACE</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
         </div>
}
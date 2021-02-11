import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import imagen from '../assets/images/web/obras.jfif';

export default function Noticias(){
    const style = {
        padding: '5px',
        width: '100%',
        fontFamily: 'sans-serif',
        fontSize:'10pt',
        textAlign: 'left',
        display:' block',
        backgroundColor: '#367F13',
        position: 'absolute',
        color:'white',
        left:' 50%',
        bottom: '0px',
        transform: 'translateX(-50%)',
        textAlign:'center'
    }
    return <div className="container my-5 border shadow pl-5 pr-5 pb-5" >
        <div className="mb-4 mt-3 " style={{borderBottom:"3px solid #EDD016"}} >
            <h3 className="p-2" >Noticias de Institución</h3>
        </div>
        <Form className="border p-4 mb-3">
                    <Form.Group >
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Asunto" />
                    </Form.Group>
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Desde</Form.Label>
                        <Form.Control size="sm" type="date"  />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <Form.Label>Hasta</Form.Label>
                        <Form.Control size="sm" type="date"/>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="info">Buscar<i className="fas fa-search pl-2" ></i></Button>
            
        </Form>
        <Alert variant="success" className="mb-5" >
                <Alert.Heading>Resultados</Alert.Heading>
            </Alert>
        <div className="resultados pb-2 mb-3" style={{borderBottom:'2px solid var(--grey-400) ', height:'210px'}}>
            <Row >
                <Col sm="4">
                <img  src={imagen} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                </Col>
                <Col style={{fontSize:'10pt'}}>
                    <div>
                        <a href="DetalleNoticia" style={{color:'green'}} target="_blank"><b>MPT CONVOCA A LA SOCIEDAD CIVIL E INSTITUCIONES A PARTICIPAR DEL PRESUPUESTO PARTICIPATIVO 2022</b></a>
                        <div className="ml-3 pl-3 mt-3" style={{borderLeft:'solid 2px red'}}>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fas fa-hashtag pr-2"/> 001</li>
                                <li className="mb-2"><i class="far fa-calendar-alt pr-2"/>02/12/2021</li>
                            <li className="mb-2">
                                    <div className="d-flex">
                                        <div >
                                        <i class="fas fa-book-open pr-2"></i>
                                        </div>
                                        <div>
                                        En cumplimento de la normatividad legal vigente, la municipalidad provincial de tacna hace un llamado a la sociedad civil organizada y entidades públicas a que participen en el presupuesto participativo para el periodo 2022.
                                        de esta forma ser protagonistas del desarrollo de la ciudad
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="resultados pb-2 mb-3" style={{borderBottom:'2px solid var(--grey-400) ', height:'210px'}}>
            <Row >
                <Col sm="4">
                <img  src={imagen} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                </Col>
                <Col style={{fontSize:'10pt'}}>
                    <div>
                        <a href="DetalleNoticia" style={{color:'green'}}><b>MPT CONVOCA A LA SOCIEDAD CIVIL E INSTITUCIONES A PARTICIPAR DEL PRESUPUESTO PARTICIPATIVO 2022</b></a>
                        <div className="ml-3 pl-3 mt-3" style={{borderLeft:'solid 2px red'}}>
                            <ul className="list-unstyled">
                                <li className="mb-2"><i class="fas fa-hashtag pr-2"/> 002</li>
                                <li className="mb-2"><i class="far fa-calendar-alt pr-2"/>02/12/2021</li>
                            <li className="mb-2">
                                    <div className="d-flex">
                                        <div >
                                        <i class="fas fa-book-open pr-2"></i>
                                        </div>
                                        <div>
                                        En cumplimento de la normatividad legal vigente, la municipalidad provincial de tacna hace un llamado a la sociedad civil organizada y entidades públicas a que participen en el presupuesto participativo para el periodo 2022.
                                        de esta forma ser protagonistas del desarrollo de la ciudad
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
       
    </div>
}
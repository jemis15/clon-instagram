import React from 'react';
import { Col, Form, Row, Button, Table, Alert, Card } from 'react-bootstrap';

export default function Comunidados() {
    const style = { width: '20rem', borderTop: '6px solid red' }
    return <div className="container my-5 pl-5 pr-5 pb-3 shadow" style={{ border: '1px solid #008000' }}>
        <div className="mb-4 mt-3 " style={{ borderBottom: "3px solid #EDD016" }} >
            <h3 className="p-2" >Comunicados y Notas de Prensa</h3>
        </div>
        <Form className="border p-4 mb-3">
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Asunto" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Desde</Form.Label>
                        <Form.Control size="sm" type="date" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control size="sm" as="select">
                            <option>Todas las Categorías</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Hasta</Form.Label>
                        <Form.Control size="sm" type="date" />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="info">Buscar<i className="fas fa-search pl-2" ></i></Button>

        </Form>
        <Alert variant="success" className="mb-5" >
            <Alert.Heading>Resultados</Alert.Heading>
        </Alert>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
            gridGap: '1rem'
        }}>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}></i>12/06/2020</li>
                        <li className="mb-2">
                            <i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}>
                        </i>12/06/2020</li>
                        <li className="mb-2"><i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}></i>12/06/2020</li>
                        <li className="mb-2">
                            <i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}></i>12/06/2020</li>
                        <li className="mb-2">
                            <i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}></i>12/06/2020</li>
                        <li className="mb-2">
                            <i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
            <Card style={style}>
                <Card.Body>
                    <Card.Title as="h4">Comunicado N° 022-2020</Card.Title>
                    <ul className=" list-unstyled">
                        <li className="mb-2"><i className="fas fa-bookmark pr-3 " style={{ color: 'green' }} />Comunicado</li>
                        <li className="mb-2">
                            <Row>
                                <Col sm="1">
                                    <i className="fas fa-book-open " style={{ color: 'green' }} />
                                </Col>
                                <Col>
                                    Oficializar el "plan para la vigilancia, prevención y contrul del covid-19 en el trabajo" de la municipalidad provincial de tacna, aprobado por el comité de seguridad y salud en el trabajo.
                                </Col>
                            </Row>
                        </li>
                        <li className="mb-2"><i className="far fa-calendar-alt pr-3 " style={{ color: 'green' }}></i>12/06/2020</li>
                        <li className="mb-2">
                            <i class="fas fa-external-link-alt pr-3" style={{ color: 'green' }} />
                            <a href="file:///C:/Users/usuario/Downloads/77-documento0.pdf" target="_blank" style={{ color: 'green' }}>Plan</a>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    </div>
}
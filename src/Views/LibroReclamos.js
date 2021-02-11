import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import foto from '../assets/images/web/libro.jpg';

export default function LibroReclamos() {
    return <div className="container my-5 p-5">
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foto} />
                    <Card.Body>
                        <Card.Title>Libro de Reclamaciones</Card.Title>
                        <Card.Text>
                            Este libro te permite presentar tus quejas o reclamos por inconvenientes que surjan frente a la compra de un producto o adquisición de un servicio.
                    </Card.Text>
                        <Link className="btn btn-primary" to="/RealizarReclamo">Hacer Reclamo</Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foto} />
                    <Card.Body>
                        <Card.Title>Seguimiento de Libro Reclamos</Card.Title>
                        <Card.Text>
                            En este módulo podrá consultar el estado de su reclamo presentado. Para su comodidad, se habilito algunas opciones de búsqueda o consultas.
                    </Card.Text>
                        <Link className="btn btn-primary" to="/SeguimientoReclamo">Consultar mi Reclamo</Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={foto} />
                    <Card.Body>
                        <Card.Title>Administrar Reclamos</Card.Title>
                        <Card.Text>
                            Dirigía a los trabajadores y/o funcionarios de la institución quien realizara las coodinaciones para atender el reclamo y posterior notificación.
                    </Card.Text>
                        <Link className="btn btn-primary" to="/login">Acceder a la Plataforma</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
}
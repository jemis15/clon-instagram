import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import foto from '../assets/images/web/libro.jpg';

export default function LibroReclamos(){
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
                    <Button variant="primary" href="/RealizarReclamo">Hacer Reclamo</Button>
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
                    <Button variant="primary" href="/SeguimientoReclamo">Consultar mi Reclamo</Button>
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
                    <Button variant="primary" href="/login">Acceder a la Plataforma</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
}
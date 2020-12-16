import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function AgregarOperadores(){
    return <div className="container my-5 border" style={{width:'800px'}}> 
        <Form>
        <h1 className="text-center mb-3"> Registro Operadores</h1>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Ruc: </Form.Label>
                    <Form.Control type="text" placeholder="Ruc" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Razon Social: </Form.Label>
                    <Form.Control type="text" placeholder="Razon Social" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Encargado: </Form.Label>
                    <Form.Control type="text" placeholder="Encargado" />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="name@gmail.com" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Celular: </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese N° celular" />
                </Form.Group>
            </Col>
        </Row>
        <Button variant="info" size="md" className="float-right mb-3">
            Guardar
        </Button>
        </Form>
        </div>
}
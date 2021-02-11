import React from 'react';
import { Col, Form, Row, Button, Table, Alert } from 'react-bootstrap';

export default function NormasPublicas(){
    return <div className="container my-5 pl-5 pr-5 pb-3 shadow" style={{border:'1px solid #008000'}}>
        <div className="mb-4 mt-3 " style={{borderBottom:"3px solid #EDD016"}} >
            <h3 className="p-2" >DOCUMENTOS IMPORTANTES </h3>
        </div>
        <Form>
            <Row>
                <Col sm="4">
                    <Form.Group >
                        <Form.Label>Año</Form.Label>
                        <Form.Control size="sm" as="select">
                            <option>Todos</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <Form.Label>Tipo de Norma</Form.Label>
                        <Form.Control size="sm" as="select">
                            <option>Todas las normas</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            <Button variant="info">Buscar<i className="fas fa-search pl-2" ></i></Button>
            {/* resultados  */}
            <Alert variant="success" className="mt-3">
                <Alert.Heading>Resultados</Alert.Heading>
            </Alert>
            <div className="Normas">
            <Table size="sm" className="table table-bordered mt-4">
                <thead className ="thead-dark">
                    <tr>
                    <th>N°</th>
                    <th>Tipo de Norma</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Descargar</th>
                    <th>Ir a la Sección </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>0001-2021</td>
                    <td>Acuerdo de concejo</td>
                    <td>Aprobar la conformación de las comisiones ordinarias de regidores del Concejo 
                        Municipal, Provincia de Tacna para el ejercicio 2021.
                    </td>
                    <td>06/01/2021</td>
                    <td >
                        <Button variant="success" size="sm">
                        Descargar
                        </Button>
                    </td>
                    <td style={{color:'red'}}><a href="#">Ir a la sección </a></td>
                    </tr>
                    <tr>
                    <td>0001-2022</td>
                    <td>Resolucion de alcaldia N° 00008-2021</td>
                    <td>
                        DesIgnar como Coordinador de la Municipalidad Provincial de Tacna parea la implementación del cumplimiento del Programa de Incentivos 2021 al servidor:  Bach. Juan Eber SaNchez Copa
                    </td>
                    <td>06/01/2021</td>
                    <td>
                        <Button variant="success" size="sm">
                        Descargar
                        </Button>
                    </td>
                    <td style={{color:'red'}}><a href="#">Ir a la sección</a></td>
                    </tr>
                </tbody>
                </Table>

            </div>
        </Form>
    </div>
}
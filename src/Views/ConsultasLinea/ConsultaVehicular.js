import React from 'react';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';

export default function ConsultaVehicular(){
    const styleScroll = {
        width: '100%', 
        height: 'auto', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
    return <div className="container my-3 p-3" style={{width:'700px'}}>
    <Form>
        <Row>
            <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Propietario de Vehiculo: </Form.Label>
                <Form.Control as="select">
                <option>Jose Ramos Rojas</option>
                </Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Placa:</Form.Label>
                <Form.Control as="select">
                <option>iuhfweiu</option>
                </Form.Control>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Codigo MDM:</Form.Label>
                <Form.Control as="select">
                <option>iuhfweiu</option>
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>
       <div style={styleScroll} className="mb-3">
            <Table  bordered size="sm"  >
                <thead className="thead-dark">
                    <tr>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Motor</th>
                    <th>Conductor</th>
                    <th>Serie Chasis</th>
                    <th>Serie Motor</th>
                    <th>Ejes</th>
                    <th>Asientos</th>
                    <th>Ruedas</th>
                    <th>Carrocería</th>
                    <th>N° Tarjeta</th>
                    <th>Titulo</th>
                    <th>Fecha Titulo</th>
                    <th>Propietario</th>
                    <th>Dirección Propietario</th>
                    <th>Teléfono Propietario</th>
                    <th>Conductor</th>
                    <th>N° Licencia</th>
                    <th>Fecha Emisión Licencia</th>
                    <th>Fecha Caducidad Lic.</th>
                    <th>Empresa</th>
                    <th>N° Flota</th>
                    <th>N° Poliza</th>
                    <th>Fecha Inicio Poliza</th>
                    <th>Fecha Fin Poliza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                </tbody>
                </Table>
                </div>
                <Row>
                    <Col sm="7">
                        <Button variant="success" size="sm">
                            Exportar Excel
                        </Button>
                    </Col>
                </Row>
        </Form>
    
    </div>
}
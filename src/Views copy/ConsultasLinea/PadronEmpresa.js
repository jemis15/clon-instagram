import React from 'react';
import { Form, Table, Button, Col, Row } from 'react-bootstrap';

export default function PadronEmpresa(){
    const styleScroll = {
        width: '100%', 
        height: 'auto', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
    return <div className="container my-3 p-3" style={{width:'700px'}}>
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Seleccione la Empresa: </Form.Label>
                <Form.Control as="select">
                <option>Selva Azul</option>
                <option>Milagros</option>
                <option>Sarita</option>
                </Form.Control>
            </Form.Group>
            <div style={styleScroll} className="mb-3">
            <Table  bordered size="sm">
                <thead className="thead-dark">
                    <tr>
                    <th>#</th>
                    <th>Flota</th>
                    <th>Propietario</th>
                    <th>Dirección</th>
                    <th>Celular</th>
                    <th>Curso Vial</th>
                    <th>Licencia</th>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Año</th>
                    <th>Color</th>
                    <th>Serie</th>
                    <th>Motor</th>
                    <th>Chasis</th>
                    <th>N° asientos</th>
                    <th>Fecha Venc. SOAT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
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
                    <Col>
                    <Form.Group as={Row} >
                        <Form.Label column sm="auto">
                        Total Flota: 
                        </Form.Label>
                        <Col  className="float-right">
                        <Form.Control type="text" placeholder="Total Flota" readOnly />
                        </Col>
                    </Form.Group>
                    </Col>
                </Row>
        </Form>
    </div>
}
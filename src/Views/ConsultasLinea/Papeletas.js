import React from 'react';
import { Col, Form, Row, Table, Button } from 'react-bootstrap';

export default  function Papeletas(){
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
                <Form.Label>Papeleta por Infracción:</Form.Label>
                <Form.Control as="select">
                <option>Velocidad</option>
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Inspector: </Form.Label>
                <Form.Control as="select">
                <option>Ramón Suarez Veliz</option>
                </Form.Control>
            </Form.Group>
            </Col>
            <Col sm="auto">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Año: </Form.Label>
                <Form.Control as="select">
                <option>2020</option>
                </Form.Control>
            </Form.Group>
            </Col>
        </Row>
        <div style={styleScroll} className="mb-3">
            <Table  bordered size="sm"  >
                <thead className="thead-dark">
                    <tr>
                    <th>N° Papeleta</th>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>N° Tarjeta</th>
                    <th>Conductor</th>
                    <th>Licencia</th>
                    <th>Lic. Clase</th>
                    <th>Lic. Categoria</th>
                    <th>Lugar Ocurrencia</th>
                    <th>Cod. Infracción</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Obs. Conductor</th>
                    <th>Inspector</th>
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
                        Total de Registro: 
                        </Form.Label>
                        <Col  className="float-right">
                        <Form.Control type="text" placeholder="Total Registro" readOnly />
                        </Col>
                    </Form.Group>
                    </Col>
                </Row>
        </Form>
    </div>
}
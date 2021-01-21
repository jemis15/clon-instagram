import React from 'react';
import { Card, Button, Row, Col, Form, Table } from 'react-bootstrap';

export default function SeguimientoReclamo(){
    return <div className="container  my-5 p-5">
        <Card>
  <Card.Header style={{background:'#008000', color:'white', borderBottom:'3px solid #EDD016'}} as="h5">SEGUIMIENTO </Card.Header>
  <Card.Body>
      <Form>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                        <option value="0">DNI</option>
                        <option value="1">CE</option>
                        <option value="2">RUC</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>N° Incidencia</Form.Label>
                    <Form.Control type="text" placeholder="N° Incidencia" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>N° Documento</Form.Label>
                    <Form.Control type="text" placeholder="N° Documento" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Año</Form.Label>
                    <Form.Control type="text" placeholder="Año" />
                </Form.Group>
            </Col>
        </Row>
    <Button className="mb-3" variant="primary">Buscar</Button>
    </Form>
    <Table  bordered  size="sm">
  <thead className="thead-dark">
    <tr>
      <th>#</th>
      <th>Fecha</th>
      <th>Tipo Incidencia</th>
      <th>Nombre</th>
      <th>Área</th>
      <th>Detalles</th>
      <th>Observaciones</th>
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
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>
  </Card.Body>
</Card>
    </div>
}
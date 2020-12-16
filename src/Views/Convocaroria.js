import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';

export default function Convocatoria(){
    const styleScroll = {
        width: '100%', 
        height: '200px', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
return <div className="container my-5">
    <Form>
    <Row>
        <Col sm="auto">
            <label>Año:</label>
        </Col>
        <Col>
        <Form.Control as="select">
            <option>2020</option>
        </Form.Control>
        </Col>
        <Col  sm='auto'>
            <label>Mes: </label>
        </Col>
        <Col>
        <Form.Control as="select">
            <option>Enero</option>
        </Form.Control>
        </Col>
    </Row>
    <div style={styleScroll} className="mt-3">
        <Table  className="table table-bordered table-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th>Item</th>
                                    <th>Numero</th>
                                    <th>Area Solicitante</th>
                                    <th>Bases</th>
                                    <th>Anexos</th>
                                    <th>Comunicados 1</th>
                                    <th> Comunicados 2</th>
                                    <th>Evaluacion CV</th>
                                    <th>Comunicado 3</th>
                                    <th>Evaluacion Psicotecnica</th>
                                    <th>Comunicado 4</th>
                                    <th>Resultado Final</th>
                                    <th>Sub Gerencia</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                    <td>Comisiones de regidores</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>uirheiuettj</td>
                                    <td>Comisiones de regidores</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>uirheiuettj</td>
                                    <td>Comisiones de regidores</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>uirheiuettj</td>
                                    <td>uirheiuettj</td>
                                    </tr>
                            </tbody>
                        </Table>
                        </div>
    </Form>
</div>
}
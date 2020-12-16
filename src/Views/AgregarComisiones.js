import React from 'react';
import { Col, Form, Row, Button, Table } from 'react-bootstrap';
import pdf from '../assets/images/web/Resolucion.pdf';

export default function AgregarOperadores(){
    const styleScroll = {
        width: '100%', 
        height: '200px', 
        overflow: 'scroll' ,
        overflowX:'hidden',
        whiteSpace: 'nowrap'
    }
    return <div className="container my-5">
        <h1 className="text-center mb-3">Agregar Comisiones</h1>
        <Form className="border p-3">
        <Row>
            <Col sm="7" >
                <Form.Group >
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Descripción" />
                </Form.Group>
                    <Row>
                    <Form.Group as={Col} >
                        <Form.Label>Año: </Form.Label>
                        <Form.Control as="select" defaultValue="2020">
                            <option>2020</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>Mes: </Form.Label>
                        <Form.Control as="select" defaultValue="Enero">
                            <option>Enero</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    </Row>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Selecciona el archivo en PDF: " />
                    </Form.Group>
                    <Row>
                        <Col>
                        <Button variant="info"  className="mb-3 mt-3" style={{width:'100%'}}>
                                Guardar
                        </Button>
                        </Col>
                        <Col>
                        <Button variant="danger"  className="mb-3 mt-3" style={{width:'100%'}}>
                                Cancelar
                        </Button>
                        </Col>
                    </Row>
                        <div style={styleScroll}>
                            <Table  className="table table-bordered table-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th>Descripcion</th>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th>Ruta</th>
                                    <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                    <td>Comisiones de regidores</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>uirheiuettj</td>
                                    <td>
                                        <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                        <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                    </td>
                                    </tr>
                            </tbody>
                        </Table>
                        </div>
            </Col>
            <Col sm="5" >
                <div className="contenidoImagenes mt-3" 
                    style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gridGap: '1rem'
                        }}>
                <div id="pdfComisiones" className="text-center">
                    <embed src={pdf} type="application/pdf" style={{width:'90%', height:'500px'}}/>
                </div>
                </div>
            </Col>
        </Row>
        </Form>
    </div>
}
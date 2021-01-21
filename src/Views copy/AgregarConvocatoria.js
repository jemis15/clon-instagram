import React from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import pdf from '../assets/images/web/Resolucion.pdf';

export default function AgregarConvocatoria(){
    const styleScroll = {
        width: '100%', 
        height: '200px', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
   return <div className="container my-5">
    <Form className="shadow p-3">
    <div className="mb-5 " style={{borderBottom:'6px solid #EDD016', color:'#008000'}}>
            <p className="mb-0">FORMULARIO PARA</p>
            <h3 style={{color:'#008000'}}> Registro De Convocatorias</h3>
        </div>
        <Row>
            <Col>
            <Form.Group >
                <Form.Label>Numero Convocatoria: </Form.Label>
                <Form.Control type="text" placeholder="Numero Convocatoria" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group >
                <Form.Label>Area Solicitante:</Form.Label>
                <Form.Control type="text" placeholder="Area Solicitante" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group >
                <Form.Label>Fecha Registro:</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Bases:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Anexos:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Comunicado N° 01:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Comunicado N° 02:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Evaluación Curricular:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Comunicado N° 03:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Evaluación Psicotécnico:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Comunicado N° 04:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Resultado Final:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
            <Form.File className="mb-3" id="formcheck-api-regular">
                <Form.File.Label>Comunicado N° 05:</Form.File.Label>
                <Form.File.Input />
            </Form.File>
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
            </Col>
            <Col sm="8">
                <div id="pdfConvocatoria" className="text-center">
                    <embed src={pdf} type="application/pdf" style={{width:'90%', height:'800px'}}/>
                </div>
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
                                    <th>comunicado 05</th>
                                    <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                    <td>24</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>
                                        <button className="btn-success">bases</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Anexos</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Comunicado 01</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Comunicado 02</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Evaluacion CV</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Comunicado 03</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Evaluacion Psicotecnico</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">comunicado 04</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Resultado Final</button>
                                    </td>
                                    <td>
                                        <button className="btn-success">Comunicado 05</button>
                                    </td>
                                    <td>
                                        <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                        <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                    </td>
                                    </tr>
                            </tbody>
                        </Table>
                        </div>
    </Form>
    </div>
}
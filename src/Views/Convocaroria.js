import React, { useState } from 'react';
import { Col, Form, ModalBody, Row, Table, Button, Modal } from 'react-bootstrap';

export default function Convocatoria(){
    const styleScroll = {
        width: '100%', 
        height: '200px', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
    const[modalVer, setModalVer] = useState(false);
    const toggleModalVer = () => setModalVer(!modalVer);
return <div className="container my-5 " style={{border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Convocatoria CASS </h3>
        </div>
    <Form className="p-3">
    <Button size="sm" className="mr-3 mb-3" variant="info" href="/AgregarConvocatoria"> 
    Registro
  </Button>
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
                                    <th>
                                    Bases
                                    </th>
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
                                    <td>24</td>
                                    <td>2020</td>
                                    <td>Enero</td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    <td>
                                    <Button variant="success" size="sm" onClick={toggleModalVer}>
                                    Bases
                                    </Button>
                                    </td>
                                    </tr>
                            </tbody>
                        </Table>
                        </div>
    </Form>
    <Modal show={modalVer} onHide={toggleModalVer} animation={false}>
        <Modal.Header closeButton style={{background:'#DFE8F3'}}>
            Visualizador de pdf
        </Modal.Header>
        <Modal.Body>
            <div id="pdfConvocatoria" className="text-center">
                    <embed src="file:///C:/Users/usuario/Downloads/77-documento0.pdf" type="application/pdf" style={{width:'90%', height:'650px'}}/>
                </div>
        </Modal.Body>
    </Modal>
</div>
}
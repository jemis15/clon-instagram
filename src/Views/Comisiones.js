import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import pdf from '../assets/images/web/Resolucion.pdf';

export default function Comisiones(){
    return <div className="container border my-5">
        <div className="mx-n3" style={{backgroundColor:"green", color:'white'}} >
            <h1 className="text-center px-n2  p-3" style={{color:'white'}}>Comisiones de Regidores</h1>
        </div>
        <Form>
    <Row className="mx-5 mt-3">
        <Col sm='auto'>
            <h4 className='mt-2'>Comisiones de Regidores: </h4>
        </Col>
        <Col>
            <Form.Group>
                <Form.Control as="select" defaultValue="2020">
                    <option>2020</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>
        </Col>
        <Col sm='auto'>
        <h4 className='mt-2'>Mes: </h4>
        </Col>
        <Col>
            <Form.Group >
                <Form.Control as="select" defaultValue="Enero">
                    <option>Febrero</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <div id="pdfComisiones" className="text-center mx-5 ">
        <embed src={pdf} type="application/pdf" style={{width:'90%', height:'700px'}}/>
        <Button  variant="success"  size="lg" style={{width:'90%', marginTop:'1rem'}}>Descargar comisiones de Regigores 2020 pdf</Button>
    </div>
    </Form>
    </div>
}
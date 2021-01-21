import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import pdf from '../assets/images/web/Organigrama.PDF';

export default function Comisiones(){
    return <div className="container shadow my-5" style={{border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"green", color:'white'}} >
            <h3 className="text-center px-n2  p-3" style={{color:'white'}}>Organigrama Municipal</h3>
        </div>
        <Form>
            <h4 className='mt-3 text-center'>Organigrama Municipal: </h4>
    <div id="pdfComisiones" className="text-center mx-5  mb-3">
        <embed src={pdf} type="application/pdf" style={{width:'95%', height:'700px'}}/>
        <Button  variant="success"  size="lg" style={{width:'95%', marginTop:'1rem'}}>Descargar comisiones de Regigores 2020 pdf</Button>
    </div>
    </Form>
    </div>
}
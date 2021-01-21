import React from 'react';
import { Col, Row } from 'react-bootstrap';
import foto from '../assets/images/web/cosechaCafe.jpg';

export default function Demuna(){
    return <div className="container my-5   pl-5 pr-5 pb-5 shadow" style={{width:'800px', border:'2px solid #008000'}}>
        <h4 className="text-center mb-4  p-4 mx-n5"  style={{ background:' #008000', color:'white'}}>DEMUNA - Defensoría Municipal del niño,  niña y adolescente</h4>
        <div className="imagen text-center mb-5" >
        <img src={foto} alt="Demuna" class="rounded" />
        </div>
        <b className="mt-5">¿Que es DEMUNA?</b>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enimvoluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
        <b>Servicios</b>
        <div className="serv pl-4">
            <Row>
                <Col>
                    <b className="mt-4">Conciliación Extrahudicial</b>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
                    </p>
                    <b className="mt-4">Acciones Administrativas </b>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
                    </p>
                </Col>
                <Col>
                    <b className="mt-4">Actas de Compromiso</b>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
                    </p>
                    <b className="mt-4">Brindamos</b>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
                    </p>
                </Col>
            </Row>
        </div>
    </div>
}
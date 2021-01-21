import React from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';

import img_perfil from '../assets/images/web/images.jfif';

export default function Presentacion() {
return <div className="container shadow rounded my-5" style={{cursor: 'pointer', overflow: 'hidden ', width: '900px', border:'2px solid #008000'}}>
    <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Regidores</h3>
        </div>
    <div className="buscador mt-3 p-3">
        <Form>
            <Row>
                <Col xs="auto">
                <Form.Label>Regidor: </Form.Label>
                </Col>
                <Col>
                <Form.Control placeholder="Nombre Regidor" />
                </Col>
                <Col xs="auto">
                <Form.Label>Periodo: </Form.Label>
                </Col>
                <Col>
                <select class="form-control form-control-sm">
                    <option>Buscar Periodo</option>
                </select>
                </Col>
                <Col xs="auto">
                    <button type="button" class="btn btn-info">
                        Buscar 
                        <i class="fas fa-search pl-2" />
                    </button>
                </Col>
            </Row>
            <h3 className="text-center mt-3">Regidores</h3>
            <p className="text-justify">Son representantes de los ciudadanos, elegidos de acuerdo la Ley de Elecciones Municipales para asumir funciones normativas y de fiscalización de la gestión municipal, así como también para la presentación de iniciativas y proyectos de mejora de la gestión municipal. </p>

        </Form>
    </div>
<div className="box-cardspre">
    <div className="box box1 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre bottom1">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
    <div className="box box2 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre  bottom2">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
    <div className="box box3 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre  bottom3">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
</div>
<div className="box-cardspre">
    <div className="box box1 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre bottom1">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
    <div className="box box2 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre  bottom2">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
    <div className="box box3 shadow">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <span className="button-pre  bottom3">Regidor Economia</span>
        <div className="texto-pre">
            <h5>Suarez Camargo Liliana</h5>
            <ul className="list-unstyled">
                <li>Regidora defensa Civil</li>
                <li>Partidido Perú Libre</li>
                <li>Ing. civil</li>
                <li>LEY DE VIDA</li>
                <li>Responsable....</li>
            </ul>
            <button className="btn-success">Resolucion</button>
        </div>
    </div>
</div>
</div>
}
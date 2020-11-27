import React from 'react';
import { Col, Row, Card, Form } from 'react-bootstrap';

import img_perfil from '../assets/images/web/images.jfif';

export default function Presentacion() {
return <div className="container border rounded my-5" style={{cursor: 'pointer', overflow: 'hidden ', width: '900px'}}>
    <h1 className="text-center border-bottom p-3 bg-success mx-n3">Regidores de la Municipalidad de Mazamari</h1>
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
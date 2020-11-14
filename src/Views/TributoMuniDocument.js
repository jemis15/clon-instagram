import React from 'react';

import { Col, Row } from 'react-bootstrap';

import img_tributo from '../assets/images/web/paisaje.jpg';

export default function TributoMuniDocument() {
    
    return <div className="container py-5">
        <Row>
            <Col sm="6">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Declaración de deudas de cobranza dudosa
                        </button>
                        </h5>
                    </div>
                
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Documentos</th>
                                            <th scope="col">Visualizar</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark4yhr3874yr8974r4er</td>
                                            <td><a href="#" >Abrir</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td> 
                                            <td><a href="#" >Abrir</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td> 
                                            <td><a href="#" >Abrir</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Caracteristicas y formas para determinar el impuesto Radial
                        </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Documentos</th>
                                    <th scope="col">Visualizar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark4yhr3874yr8974r4er</td>
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td> 
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td> 
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Formas y lugares de pago
                        </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Documentos</th>
                                    <th scope="col">Visualizar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark4yhr3874yr8974r4er</td>
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td> 
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td> 
                                    <td><a href="#" >Abrir</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </Col>
            <Col sm="6">
                <img src={img_tributo} alt="Tributo"/>
                <p className="p-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloremque exercitationem ex recusandae nobis inventore iste veritatis quo, voluptatibus error explicabo quod corrupti! Voluptate veritatis commodi pariatur, debitis nemo adipisci?</p>
            </Col>
        </Row>

    </div>
}
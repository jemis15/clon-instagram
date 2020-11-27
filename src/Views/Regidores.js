import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

import img_perfil from '../assets/images/web/paisaje.jpg';

export default function Regidores() {
    return <div className="container mt-5" style={{width:"700px"}}>
        <h1 className="text-center">REGIDORES</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</h6>
        <br/><br/>
        <Row>
            <Col sm="6">
                <div className="clearfix">
                    <div className="RegiCaja rounded float-left p-2 ">
                        <Row>
                            <Col sm="3">
                            <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left"/>
                            </Col>
                            <Col sm="9">
                                <h3 >Nombre Y Apellido</h3>
                                <li style= {{listStyle:"none"}}><em> <b> Cargo: </b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Partido:</b> </em><span> adhuyedh</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Grado Academico:</b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Ley vida:</b> </em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b> Responsable: </b> </em> <span> Secretaria</span></li>
                            <br/>
                            <button type="button" class="btn btn-primary btn-sm">Resolución</button>
                            </Col>
                        </Row>
                    </div>
                </div> <br/>
            </Col>
            <Col sm="6">
            <div className="clearfix">
                    <div className="RegiCaja rounded float-left p-2 ">
                        <Row>
                            <Col sm="3">
                            <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left"/>
                            </Col>
                            <Col sm="9">
                                <h3>Nombre Y Apellido</h3>
                                <li style= {{listStyle:"none"}}><em> <b> Cargo: </b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Partido:</b> </em><span> adhuyedh</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Grado Academico:</b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Ley vida:</b> </em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b> Responsable: </b> </em> <span> Secretaria</span></li>
                            <br/>
                            <button type="button" class="btn btn-primary btn-sm">Resolución</button>
                            </Col>
                        </Row>
                    </div>
                </div> <br/>
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <div className="clearfix">
                    <div className="RegiCaja rounded float-left p-2 ">
                        <Row>
                            <Col sm="3">
                            <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left"/>
                            </Col>
                            <Col sm="9">
                                <h3>Nombre Y Apellido</h3>
                                <li style= {{listStyle:"none"}}><em> <b> Cargo: </b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Partido:</b> </em><span> adhuyedh</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Grado Academico:</b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Ley vida:</b> </em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b> Responsable: </b> </em> <span> Secretaria</span></li>
                            <br/>
                            <button type="button" class="btn btn-primary btn-sm">Resolución</button>
                            </Col>
                        </Row>
                    </div>
                </div> <br/>
            </Col>
            <Col sm="6">
            <div className="clearfix">
                    <div className="RegiCaja rounded float-left p-2 ">
                        <Row>
                            <Col sm="3">
                            <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left"/>
                            </Col>
                            <Col sm="9">
                                <h3>Nombre Y Apellido</h3>
                                <li style= {{listStyle:"none"}}><em> <b> Cargo: </b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Partido:</b> </em><span> adhuyedh</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Grado Academico:</b></em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b>Ley vida:</b> </em> <span> Secretaria</span></li>
                                <li style= {{listStyle:"none"}}><em> <b> Responsable: </b> </em> <span> Secretaria</span></li>
                            <br/>
                            <button type="button" class="btn btn-primary btn-sm">Resolución</button>
                            </Col>
                        </Row>
                    </div>
                </div> <br/>
            </Col>
        </Row>


    </div>
}
import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import img_perfil from '../assets/images/web/serenazg.jfif';

export default function Funcionarios(){
    return <div className="container border rounded my-5 " style={{width:'700px'}}>
        <h1 className="text-center border-bottom p-3 bg-success mx-n3">Funcionarios</h1>

        <Form className="mt-5  p-2">
            <Row>
                <Col>
                <Form.Group >
                    <Form.Label>Nombres y Apellidos: </Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Nombre y Apellido" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Gerencia: </Form.Label>
                    <Form.Control as="select">
                    <option>Gerencia Municipal</option>
                    <option>Gerencia Recursos Humanos</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Periodo: </Form.Label>
                    <Form.Control as="select">
                    <option>2019-2022</option>
                    <option>2014-2018</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col xs="auto">
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Estado" className="mt-4" />
                </Form.Group>
                </Col>
            </Row>
            <br/>
            <button type="button" class="btn btn-info">
                Buscar
                <i class="fas fa-search pl-2" />
            </button>
        </Form>

        <div className="d-flex m-3 " style={{ justifyContent: 'space-around'}}>
            <div className="Registr border rounded shadow p-2" style={{width:'200px'}}>
                <div className="imag ">
                    <img src={img_perfil} alt="funcionario" class=" border rounded" style={{width:'70%', height:'100px'}} />
                </div>
                <div className="text_Fun p-2 mt-2" style={{width:'150px', height:'30px', background:'skyblue'}}>
                    <h5>Chavez Veliz Rosa</h5>
                </div>
                <div  className="p-2" style={{fontFamily:'sans-serif', fontSize:'.8rem'}}>
                        <ul className="list-unstyled">
                            <li className="mb-1">Gerencia</li>
                            <li className="mb-1">Gestion recursos humanos</li>
                            <li className="mb-1">Gerente municipal</li>
                            <li className="mb-1">982354789</li>
                            <li className="mb-1">RosaChavez@gmail.com</li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Hoja de Vida</a>
                            </li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Resolución</a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="Registr border shadow  rounded p-2" style={{width:'200px'}}>
                <div className="imag ">
                    <img src={img_perfil} alt="funcionario" class=" border rounded" style={{width:'70%', height:'100px'}} />
                </div>
                <div className="text_Fun p-2 mt-2" style={{width:'150px', height:'30px', background:'skyblue'}}>
                    <h5>Chavez Veliz Rosa</h5>
                </div>
                <div  className="p-2" style={{fontFamily:'sans-serif', fontSize:'.8rem'}}>
                        <ul className="list-unstyled">
                            <li className="mb-1">Gerencia</li>
                            <li className="mb-1">Gestion recursos humanos</li>
                            <li className="mb-1">Gerente municipal</li>
                            <li className="mb-1">982354789</li>
                            <li className="mb-1">RosaChavez@gmail.com</li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Hoja de Vida</a>
                            </li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Resolución</a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="Registr border shadow  rounded p-2" style={{width:'200px'}}>
                <div className="imag ">
                    <img src={img_perfil} alt="funcionario" class=" border rounded" style={{width:'70%', height:'100px'}} />
                </div>
                <div className="text_Fun p-2 mt-2" style={{width:'150px', height:'30px', background:'skyblue'}}>
                    <h5>Chavez Veliz Rosa</h5>
                </div>
                <div  className="p-2" style={{fontFamily:'sans-serif', fontSize:'.8rem'}}>
                        <ul className="list-unstyled">
                            <li className="mb-1">Gerencia</li>
                            <li className="mb-1">Gestion recursos humanos</li>
                            <li className="mb-1">Gerente municipal</li>
                            <li className="mb-1">982354789</li>
                            <li className="mb-1">RosaChavez@gmail.com</li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Hoja de Vida</a>
                            </li>
                            <li className="mb-1" style={{color:"green"}} >
                                <i class="fa fa-file pr-2 pr-2" aria-hidden="true" />
                                <a href="#">Resolución</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
}
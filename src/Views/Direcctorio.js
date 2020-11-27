import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {col, Row, Card, Nav, Button} from 'react-bootstrap';
import img_telefono from '../assets/images/web/telefonos.png';
import img_celular from '../assets/images/web/celular.png';
import img_policia from '../assets/images/web/policia.jpg';
import img_serenazgo from '../assets/images/web/serenazg.jfif';
import img_bombero from '../assets/images/web/bombero.jpg';
import img_ambulancia from '../assets/images/web/ambulancia.jpg';

export default function Direcctorio() {

  return <div className="container border my-5 pb-3">
        <h1 className="text-center border-bottom p-3 bg-success mx-n3">Teléfonos de la Municipalidad  de Mazamari</h1>
    <div class="clearfix">
      <div class=" float-left">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15651.751116637894!2d-74.62832019999999!3d-11.265984199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1605551675475!5m2!1ses!2spe" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" className="mt-5"></iframe>
      </div>
      <div class="float-right">
        <Row>
        <Col xs="auto">
                <img loading="lazy" src={img_telefono} alt="requisitos" style={{width: "60px", height:"100px"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> Telefono</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
                <Col xs="auto">
                <img loading="lazy" src={img_celular} alt="requisitos" style={{width: "60px", height:"100px", position:"center"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> celular</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
                
              </Row>
        <Row>
        <Col xs="auto">
                <img loading="lazy" src={img_serenazgo} alt="requisitos" style={{width: "60px", height:"100px"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> Serenazago</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
                <Col xs="auto">
                <img src={img_bombero} alt="requisitos" style={{width: "60px", height:"100px", position:"center"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> Bomberos</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
              </Row>
        <Row>
        <Col xs="auto">
                <img src={img_policia} alt="requisitos" style={{width: "60px", height:"100px"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> Policia</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
                <Col xs="auto">
                <img src={img_ambulancia} alt="requisitos" style={{width: "60px", height:"100px", position:"center"}} className="mt-5"/>
                </Col>
                <Col>
                  <div className=" rounded float-right p-4 mt-5 alert-info">
                    <h5 className="letra text-center"> Ambulancia</h5>
                        <p>
                          95364185
                        </p>
                  </div>
                </Col>
              </Row>
      </div>
</div>
    </div>
}
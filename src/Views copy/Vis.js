import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img_vision from '../assets/images/web/ambulancia.jpg';

export default function Vis(){
    return <div className="container" style={{width:"900px"}}>
        <div className="cont_vision p-3">
        <div className="clearfix py-3">
        <Row>
            <Col xs="auto">
            <img loading="lazy" src={img_vision} className=" log"/>
            </Col>
        <Col>
            <div className="texto ">
            <h1 className="text-center">VISION</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
                
            </div>
        </Col>
        <Col sm="auto">
            <div className="float-right ">
            <img loading="lazy" src={img_vision} className=" img_Vis"/>
            </div>
        </Col>
        </Row>
        <div className="barrain">
                <div className="barra_inf1"></div>
                <div className="barra_inf2"></div>
                <div className="barra_inf3"></div>
                </div>
        </div>
        </div>
        <div className="cont_mision">
        <div className="clearfix py-3">
        <Row>
        <Col sm="auto">
            <div className="float-left ">
            <img loading="lazy" src={img_vision} className=" img_Vis1"/>
            </div>
        </Col>
        <Col>
            <div className="texto ">
            <h1 className="text-center">MISION</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
                
            </div>
        </Col>
            <Col xs="auto">
            <img loading="lazy" src={img_vision} className=" log"/>
            </Col>
        </Row>
        <div className="barrain float-right">
                <div className="barra_inf3"></div>
                <div className="barra_inf2"></div>
                <div className="barra_inf1"></div>
                </div>
        </div>
        </div>
    </div>
}
import React from 'react';
import {col, Row, Card, Nav, Button} from 'react-bootstrap';

import img_requi from '../assets/images/web/requisitos.png';
import img_costos from '../assets/images/web/costo.png';
import img_plazo from '../assets/images/web/plazo.png';
import img_horario from '../assets/images/web/horario.png';
import img_telefono from '../assets/images/web/telefono.png';
import img_email from '../assets/images/web/email.png';

export default function Certificacion() {
    return <div className="container mt-5" style={{maxWidth: "700px"}}>
<Card>
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey="/Certificacion">
        <Nav.Item>
          <Nav.Link href="/Certificacion">Informacion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/RegistCivilDocument">Documentos</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
    

        <h1 className="text-center">CERTIFICACIONES O COPIAS DE PARTIDAS</h1>
        <h5 className="text-center">Nacimiento Matrimonio Difuncion</h5><hr/><br/>
        <h6> <p> <strong>DESCRIPCIÓN:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p></h6>
        <br/><br/>

        <div className="clearfix " >
        <div className="CertiCaja rounded float-right p-4 alert-info">
            <h5 className="letra text-center"> REQUISITOS</h5>
            <div className="row">
                <div className="col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                </div>
                <div className="col-xs-auto">
                <span className="font-weight-800">01</span>
                </div>
            </div>
            <img src={img_requi} className="imgRequi" alt="requisitos"/>
        </div>
        </div>

        <div className="clearfix">
            <div className="CertiCaja rounded float-left p-4 alert-danger">
                <h5 className="letra text-center"> COSTOS</h5>
                <div className="row">
                    <div className="col-sm-2">
                    <font className="font-weight-800" size="60">02</font>
                    </div>
                    <div className="col-sm-10">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                    </div>
                </div>
                <img src={img_costos} className="imgcostos" alt="costos"/>
            </div>
        </div>

        <div className="clearfix">
            <div className="CertiCaja rounded float-right p-4 alert-warning">
                <h5 className="letra text-center"> PLAZO DE ENTREGA</h5>
                <div className="row">
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                    </div>
                    <div className="col-xs-auto">
                        <span className="font-weight-800">03</span>
                    </div>
                </div>
                <img src={img_plazo} className="imgplazo" alt="plazo"/>
            </div>
        </div>

        <div className="clearfix">
            <div className="CertiCaja rounded float-left p-4 alert-primary">
                <h5 className="letra text-center"> HORARIO</h5>
                <div className="row">
                    <div className="col-xs-auto">
                        <font className="font-weight-800" size="60">04</font>
                    </div>
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                    </div>
                </div>
                <img src={img_horario} className="imghorario" alt="horario"/>
            </div>
        </div>

        <div className="clearfix">
            <div className="CertiCaja rounded float-right p-4  alert-success">
                <h5 className="letra text-center"> TELEFONO</h5>
                <div className="row">
                    <div className="col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                    </div>
                    <div className="col-xs-auto">
                    <span className="font-weight-800">05</span>
                    </div>
                </div>
                <img src={img_telefono} className="imgtelefono" alt="telefono"/>
            </div>
        </div>

        <div className="clearfix">
            <div className="CertiCaja rounded float-left p-4 alert-danger">
                <h5 className="letra text-center"> EMAIL</h5>
                <div className="row">
                    <div className="col-xs-auto">
                    <font className="font-weight-800" size="60">06</font>
                    </div>
                    <div className="col">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque sed harum? Recusandae assumenda cupiditate doloribus saepe maiores error corrupti! Voluptatibus quibusdam, perferendis maiores ipsam consequuntur iusto cumque aliquam enim?</p>
                    </div>
                    
                </div>
                <img src={img_email} className="imgemail" alt="email"/>
            </div>
        </div>
        </Card.Body>
  </Card>
    </div>
}
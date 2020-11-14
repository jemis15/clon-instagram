import React from 'react';
import {Col, Modal, Row} from 'react-bootstrap';

import img_Alcalde from '../assets/images/web/paisaje.jpg';

export default function PerfilA() {
    return <div className="container my-5 p-3 " style={{maxWidth: "700px", backgroundColor:"#F5F5F5"}}>
        <Row >
            <Col sm="5">
                <img src={img_Alcalde} className="imgAlcalde" alt ="alcalde" style={{width:"15rem", height:"auto", border:"solid" }} ></img>
            </Col>
            <Col sm="7">
                <h3>Nombre y apellido</h3>
                    <li style= {{listStyle:"none"}}><em>Nombre: dhaudiuasyd</em></li>
                    <li style= {{listStyle:"none"}}><em>Partido: nwiduhged</em></li>
                    <li style= {{listStyle:"none"}}><em>Cargo: ijsdihfuid</em></li>
            </Col>
        </Row>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!</p>
        <h6 style={{textAlign: "right"}} ><strong>Nombre y apellido</strong> </h6>
        <h6 style={{textAlign: "right"}} ><strong>Alcalde de Mazamari</strong> </h6>
    </div>
}
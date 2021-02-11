import React from 'react';
import {Col, Modal, Row} from 'react-bootstrap';

import img_Alcalde from '../assets/images/web/paisaje.jpg';

export default function PerfilA () {
  return (
    <div
      className="container shadow rounded my-5 "
      style={{width:'700px', border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Alcalde</h3>
        </div>
      <Row className="mt-3 m-3">
        <Col xs="auto">
          <img
            src={img_Alcalde}
            className="imgAlcalde"
            alt="alcalde"
            style={{width: '15rem', height: '20rem', border: 'solid'}}
          />
        </Col>
        <Col  className="align-self-end">
          <h3>Nombre y apellido</h3>
          <div className="d-flex pl-4 ">
          <div style={{borderLeft:'3px solid green'}}> 
          <ul className="pl-4 mb-0">
            <li className="mb-2"><em>Nombre: dhaudiuasyd</em></li>
            <li  className="mb-2"><em>Partido: nwiduhged</em></li>
            <li ><em>Cargo: ijsdihfuid</em></li>
          </ul>
          </div>
          </div>
        </Col>
      </Row>
      <h3 className="pl-4">Saludos del Alcalde</h3>
      <div className="float-right border rounded p-2 m-3 mb-5" style={{width:'600px', backgroundColor: '#F5F5F5'}}>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!
      </p>
      <h6 style={{textAlign: 'right'}}><strong>Nombre y apellido</strong> </h6>
      <h6 style={{textAlign: 'right'}}>
        <strong>Alcalde de Mazamari</strong>{' '}
      </h6>
      </div>
    </div>
  );
}

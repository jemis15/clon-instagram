import React from 'react';
import {Col, Row} from 'react-bootstrap';

import img_turismo from '../assets/images/web/catarata.jpg';

export default function DescripcionTurismo () {
    const style = {
        width: '700px',
        backgroundImage: `url(${img_turismo})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover'
    }
  return (
    <div className="container my-5 border" style={style}>
       
      <div className="Turismo p-5">
        <div className="Capa">
        <div className="text-center">
                  <h1 className="Titulo_Turismo ">Catarata Arcoiris</h1>
                </div>
          <Row>
            <Col className="align-self-center">
              <div className="Imagenes_Turismo ">
                <div className="container_image_turismo">
                  <img src={img_turismo} className="imgLugar" alt="turismo" />
                </div>
                <div className="container_image_turismo">
                  <img src={img_turismo} className="imgLugar" alt="turismo" />
                </div>
                <div className="container_image_turismo">
                  <img src={img_turismo} className="imgLugar" alt="turismo" />
                </div>
                <div className="container_image_turismo">
                  <img src={img_turismo} className="imgLugar" alt="turismo" />
                </div>
                <div className="container_image_turismo">
                  <img src={img_turismo} className="imgLugar" alt="turismo" />
                </div>
                
              </div>
            </Col>
            <Col>
              <div className="Descripcion_Turismo">
                
              </div>
              <div className="descripcion_turismo border rounded p-3 ">
                <p className="Titulo_Turismo">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!
                </p>
                <ul className="list-unstyled">
                  <li>Temporada Recomendada: Marzo-Diciembre</li>
                  <li>Servicios: Alimentacion</li>
                  <li>Actividades Turisticas: Trekking</li>
                </ul>
              </div>
              <div className="mt-3" style={{textAlign:'center', backgroundColor:'green', opacity:'0.7',padding:'3px', borderRadius:'10rem',color:'white'}}>
                  <b >Actividades Turisticas</b>
              </div>
              <div className="actividades " > 
                <ul style={{listStyleType: 'circle'}} className="p-3 pl-lg-5">
                    <li>Observación del paisaje</li>
                    <li>Observación de aves</li>
                    <li>Tomas Fotograficas</li>
                    <li>Poza para bañarse</li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="float-left mt-5 p-3 my-3 informe"  >
                  <ul className="list-unstyled">
                    <li className="mb-2"> <b>Informes y Reservas</b></li>
                    <li className="mb-1"><i class="fas fa-map-marker-smile pr-2"></i>comite de Turismo poshonari</li>
                    <li className="mb-1"><i class="fas fa-phone-alt pr-2"></i>Cel: 952136784</li>
                    <li ><i class="fab fa-facebook pr-2"></i>Catarata Arcoiris</li>
                  </ul>
                </div>
        </div>
        <div className="float-right mt-5 text-center">
            <b style={{fontFamily:"Times New Roman, Times, serif", fontSize:'20pt'}}>Mazamari</b>
            <p>Satipo - Junín</p>
        </div>
      </div>
    </div>
  );
}

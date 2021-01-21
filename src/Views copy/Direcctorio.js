import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {col, Row, Card, Nav, Button} from 'react-bootstrap';
import img_defensaCivil from '../assets/images/web/defensaCivil.png';
import img_demuna from '../assets/images/web/demuna.png';
import img_policia from '../assets/images/web/logoPolicia.jpg';
import img_serenazgo from '../assets/images/web/LogoSerenazgo.jfif';
import img_bombero from '../assets/images/web/LogoBombero.png';
import img_ambulancia from '../assets/images/web/cruzRoja.png';
import img_muni from '../assets/images/web/mazamari.png';
import img_codisec from '../assets/images/web/codisec.png';
import img_salud from '../assets/images/web/salud.png';

export default function Direcctorio() {
  const styleImg ={
    height:"50px",
    marginTop:'5px',
    marginBottom:'5px'
  }
  const letra ={
    letterSpacing:'2pt', 
    color:'var(--red-700)',
    fontFamily:'cursive'
  }
  const caja ={
    border:'1px solid var(--red-700)',
    height:'140px'
  }

  return <div className="container shadow my-5 pb-3" style={{border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Direcctorio de Teléfonos</h3>
        </div>
    <Row>
      <Col sm='7' className="mt-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32152.931400173315!2d-74.55051917219659!3d-11.324202354620748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910b95bae025fe01%3A0x24f5accad5bc7182!2sMazamari!5e1!3m2!1ses-419!2spe!4v1607106819285!5m2!1ses-419!2spe" width="100%" height="600px" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </Col>
      <Col>
        <div className="policia align-self-center mt-5 mb-4"  align="center">
          <h2 style={{color:'var(--red-800)'}}>NÚMERO DE EMERGENCIAS</h2>
          <h3 style={{fontSize:'20pt',color:'var(--red-800)' }} className="font-weight-bold"> 948675008</h3>
        </div>

        <div className="telefonos" style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, minmax(50px, 1fr))',
        gridGap:'1rem'
      }}>
          <div className="policia rounded align-self-center shadow-lg  text-center "  align="center" style={caja}>
            <img loading="lazy" src={img_policia} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Policía</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_serenazgo} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Serenazgo</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_bombero} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Bomberos</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_ambulancia} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Ambulancia</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_defensaCivil} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Defensa Civil</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_demuna} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Demuna</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_muni} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">Municipalidad</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_codisec} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold">CODISEC</p>
            <h3 style={letra} className="font-weight-bold mb-0">964329242</h3>
          </div>
          <div className="policia rounded align-self-center shadow-lg "  align="center" style={caja}>
            <img loading="lazy" src={img_salud} alt="requisitos" style={styleImg} />
            <p className="mb-0 font-weight-bold"> Red de Salud</p>
            <h3 style={letra} className="font-weight-bold">546868698</h3>
          </div>
        </div>
        </Col>
</Row>
    </div>
}
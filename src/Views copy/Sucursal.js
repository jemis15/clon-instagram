import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {col, Row, Card, Nav, Button} from 'react-bootstrap';

export default function Sucursal() {
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
    border:'1px solid var(--red-700)'
  }

  return <div className="container shadow my-5 pb-3" style={{border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Sucursal Principal</h3>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.8861198450072!2d-74.53093009578933!3d-11.325242046318873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910b95ba472d843b%3A0x31070463348d5a16!2sMunicipalidad%20Distrital%20de%20Mazamari!5e1!3m2!1ses-419!2spe!4v1610149405432!5m2!1ses-419!2spe" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
}
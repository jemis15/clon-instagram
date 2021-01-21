import React from 'react';
import { Button } from 'react-bootstrap';
import imagen from '../assets/images/web/obras.jfif';

export default function DetalleNoticia(){
    const style = {
        padding: '10px',
        width: '100%',
        fontFamily: 'sans-serif',
        fontSize:'12pt',
        textAlign: 'left',
        display:' block',
        backgroundColor: 'var(--grey-300)',
        position: 'absolute',
        color:'green',
        left:' 50%',
        bottom: '0px',
        transform: 'translateX(-50%)',
        textAlign:'center',
        borderBottom:'5px solid #F8DE5E'
    }
    return <div className="container my-5 border shadow p-5" style={{width:'700px'}}>
    <div className="  position-relative "  style={{height:'400px'}}>
                    <img  src={imagen} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours font-weight-bold"style={style} >
                    INAUGURAMOS MODERNA PLAZA CÍVICA EN CENTRO POBLADO 
                        </span>
    </div>
    <Button variant="outline-danger" className="mt-2 float-right"> 28/12/2020</Button>
    <h4 className="mb-3 mt-5">Beneficiará a 10 mil pobladores del sector</h4>
    <p className="text-justify">
        El Centro Poblado Leguía cuenta desde este lunes con moderna plaza cívica, ubicada en la Junta Vecinal Los Cipreses, beneficiando a más de 10 mil pobladores podrán realizar sus actividades cívicas y recreativas, logrando de esta manera mejorar su calidad de vida.l Centro Poblado Leguía cuenta desde este lunes con moderna plaza cívica, ubicada en la Junta Vecinal Los Cipreses, beneficiando a más de 10 mil pobladores podrán realizar sus actividades cívicas y recreativas, logrando de esta manera mejorar su calidad de vida.
    </p>
    <p className="text-justify">
        El Centro Poblado Leguía cuenta desde este lunes con moderna plaza cívica, ubicada en la Junta Vecinal Los Cipreses, beneficiando a más de 10 mil pobladores podrán realizar sus actividades cívicas y recreativas, logrando de esta manera mejorar su calidad de vida.
    </p>
    <p className="text-justify">
        El Centro Poblado Leguía cuenta desde este lunes con moderna plaza cívica, ubicada en la Junta Vecinal Los Cipreses, beneficiando a más de 10 mil pobladores podrán realizar sus actividades cívicas y recreativas, logrando de esta manera mejorar su calidad de vida.
    </p>
    </div>
}
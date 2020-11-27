import React from 'react';
import { Card } from 'react-bootstrap';
import img_restaurante from '../assets/images/web/restaurante.jpg';

export default function ListPlatosTipicos(){
    return <div className="container mb-3">
        <h1 className="text-center mb-4">Platos Tipicos </h1>
        <div className="contenido" 
        style={{ width: '90%', display: 'grid',  gridTemplateColumns:' repeat(auto-fit, minmax(200px, 1fr))',  gridGap: '2rem'}}>
            <div className="CajaPlatoTipico d-flex">
            <Card.Img  src={img_restaurante} className="img_restaurante  my-3 mx-3" />
            </div>
        </div>
    </div>
}
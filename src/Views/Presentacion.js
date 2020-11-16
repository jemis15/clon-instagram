import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

import img_perfil from '../assets/images/web/images.jfif';

export default function Presentacion() {
return <div className="containerPre">
<div className="Cuadro">
    <div className="card">
        <figure className="front">
        <img src={img_perfil} alt="perfil" class="imgPre" />
        <h1>Sofi Ramirez</h1>
        <h3>ahydgd</h3>
        </figure>
        <figure className="back">

        </figure>
        
    </div>
    <div className="detail">
        <h1> auhuhs</h1>
    </div>
</div>
</div>
}
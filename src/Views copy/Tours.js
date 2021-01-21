import React from 'react';
import img_tours from '../assets/images/web/paisaje.jpg';

export default function Tours (){
    return <div className="container py-3">
        <h1 className="text-center mb-4">Lugares Turisticos de Mazamari</h1>
        <div className="CajaPrinci">
            <div className="CajaTours">
                <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            
            </div>
            <div className="CajaTours">
            <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            </div>
            <div className="CajaTours">
            <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            </div>
            <div className="CajaTours">
            <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            </div>
            <div className="CajaTours">
            <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            </div>
            <div className="CajaTours">
            <img  src={img_tours} className="img_tours" alt="tours1" />
            <span className="button-tours"><i class="fas fa-tags pr-3"></i>Piedra Dorada</span>
            <div className="opcion">
                <p className="mb-0 py-1 px-2 text-small font-weight-600">Opcion 01</p>
            </div>
            </div>
        </div>
        
    </div>
}
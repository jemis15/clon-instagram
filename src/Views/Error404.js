import React from 'react';
import { Link } from 'react-router-dom';

import img404 from '../assets/images/404.svg';

export default function Error404() {
    return <div className="mx-auto px-5 pt-5" style={{ maxWidth: '500px' }}>
        <img src={img404} className="mt-5 img-fluid" alt="pagina no encontrada 404" />
        <h2 className="mt-3 text-center">Lo sentimos, esta página no está disponible.</h2>
        <div className="mt-5 text-center">
            <Link to="/" className="btn btn-lg btn-outline-primary">Ir a inicio</Link>
        </div>
    </div>
}
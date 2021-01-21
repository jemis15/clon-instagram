import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
    return <div className="mx-auto px-3" style={{maxWidth: '500px'}}>
        <p className="mt-5 text-center display-1">404</p>
        <p className="text-center">Lo sentimos, esta página no está disponible.</p>
        <div className="mt-5 text-center">
            <Link to="/" className="btn btn-lg btn-primary">Ir a inicio</Link>
        </div>
    </div>
}
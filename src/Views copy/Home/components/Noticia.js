import React from 'react';
import { Link } from 'react-router-dom';

export default function Noticia({ titulo, image }) {
    const styleTitle = {
        display: ' block',
        position: 'absolute',
        left: '0',
        bottom: '0',
        backgroundColor: 'var(--red-600)',
        color: 'white',
        textAlign: 'center'
    }

    return <Link
        to={`/noticias/${titulo}`}
        className="d-inline-block position-relative border shadow-sm rounded overflow-hidden">
        <div className="d-flex h-100 justify-content-center align-items-center">
            <img className="h-100" src={image} loading="lazy" />
        </div>
        <span
            className="text-small w-100 p-1"
            style={styleTitle}>
            {titulo}
        </span>
    </Link>
}
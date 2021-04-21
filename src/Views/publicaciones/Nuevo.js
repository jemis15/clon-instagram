import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import iconNoticia from '../../assets/images/icons/posts/navegador.svg';
import iconVideo from '../../assets/images/icons/posts/youtube.svg';
import iconPrograma from '../../assets/images/icons/posts/calendario.svg';

export default function Nuevo() {
    const { url } = useRouteMatch();

    return <div className="d-flex justify-content-center align-items-center" style={{
        height: 'calc(100vh - var(--header-height) - var(--topbar-height))'
    }}>
        <div className="container-select_tipo_post px-2">
            <h4 className="mb-3">Elige el tipo de publicaci&oacute;n</h4>
            <div className="d-md-flex">
                <div className="mb-3 mb-md-0 me-md-3">
                    <ItemLink label="Noticia" to={`${url}/noticia`} icon={iconNoticia} />
                </div>
                <div className="mb-3 mb-md-0 me-md-3">
                    <ItemLink label="Video" to={`${url}/video`} icon={iconVideo} />
                </div>
                <div className="mb-3 mb-md-0">
                    <ItemLink label="Programa" to={`${url}/programa`} icon={iconPrograma} />
                </div>
            </div>
        </div>
    </div>
}

const ItemLink = ({ label, icon, to }) => {
    return <Link
        to={to}
        className="p-3 py-md-5 text-decoration-none tipo_post-create d-block border rounded shadow-sm text-center cursor-pointer">
        <img className="mb-2" width="50" src={icon} alt="programa" />
        <h4 className="font-weight-600">{label}</h4>
    </Link>
}
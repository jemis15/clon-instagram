import React from 'react';
import download from '../Helpers/download';

function CardTeam(props) {
    return <article className="card-team position-relative" style={{ minHeight: '300px' }}>
        <div className="p-3 border bg-white position-relative h-100">
            <div className="mb-2 text-center">
                <div className="mx-auto ratio ratio-1x1 rounded-circle overflow-hidden" style={{ maxWidth: '120px' }}>
                    <div>
                        <img
                            src={props.foto}
                            className="img-object-fit"
                            alt="team"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h4 className="mb-0 text-capitalize">{String(props.nombre).toLowerCase()}</h4>
                <div className="mb-2 text-capitalize">({String(props.area).toLowerCase()})</div>
            </div>
            {props.hoja_vida && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-address-card" /></span>
                        <span>Hoja de vida</span>
                    </div>
                    <div className="text-small text-dark">
                        <button className="me-2 border-0 bg-transparent color-text" onClick={() => download(props.hoja_vida, 'hoja_vida')}>
                            <i className="fas fa-cloud-download-alt" /> {'Descargar'}
                        </button>
                        <a className="text-decoration-none color-text" href={props.hoja_vida} target="_blank" rel="noopener noreferrer">
                            <i className="far fa-eye" /> {'Ver'}
                        </a>
                    </div>
                </div>
            )}
            {props.resolucion && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-handshake" /></span>
                        <span>Resoluci&oacute;n</span>
                    </div>
                    <div className="text-small text-dark">
                        <button className="me-2 border-0 bg-transparent color-text" onClick={() => download(props.resolucion, 'resolucion')}>
                            <i className="fas fa-cloud-download-alt" /> {'Descargar'}
                        </button>
                        <a className="text-decoration-none color-text" href={props.resolucion} target="_blank" rel="noopener noreferrer">
                            <i className="far fa-eye" /> {'Ver'}
                        </a>
                    </div>
                </div>
            )}
            {props.telefono && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-mobile" /></span>
                        <span>N&uacute;mero de celular</span>
                    </div>
                    <div className="text-small text-dark">{props.telefono}</div>
                </div>
            )}
            {props.dni && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-passport" /></span>
                        <span>Documento de indentidad (DNI)</span>
                    </div>
                    <div className="text-small text-dark">{props.dni}</div>
                </div>
            )}
            {props.grado_academico && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-graduation-cap" /></span>
                        <span>Grado acad&eacute;mico</span>
                    </div>
                    <div className="text-small text-dark">{props.grado_academico}</div>
                </div>
            )}
            {props.lugar_nacimiento && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-map-marker-alt" /></span>
                        <span>Lugar de nacimiento</span>
                    </div>
                    <div className="text-small text-dark">{props.lugar_nacimiento}</div>
                </div>
            )}
            {props.lugar_domicilio && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="far fa-map-marker-alt" /></span>
                        <span>Lugar de domicilio</span>
                    </div>
                    <div className="text-small text-dark">{props.lugar_domicilio}</div>
                </div>
            )}
            {props.partido_politico && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="fas fa-award" /></span>
                        <span>Partido pol&iacute;tico</span>
                    </div>
                    <div className="text-small text-dark text-capitalize">{String(props.partido_politico).toLowerCase()}</div>
                </div>
            )}
            {props.cargo && (
                <div className="mb-3">
                    <div className="text-smaller mb-1">
                        <span className="me-2"><i className="fas fa-award" /></span>
                        <span>Cargo</span>
                    </div>
                    <div className="text-small text-white">
                        <span className="px-2 py-1 bg-danger rounded d-inline-block">
                            {props.cargo}
                        </span>
                    </div>
                </div>
            )}
        </div>
    </article>
}

const CardTea = (props) => {
    return <div className="border shadow rounded p-2">
        <div className="ratio ratio-1x1 rounded-circle mx-auto" style={{width: '50%'}}>
            <div>
                <img src={props.foto} alt="funcionario" className="img-object-fit" />
            </div>
        </div>
        <div className="text_Fun p-2 mt-2" style={{ height: '30px', background: 'var(--red-500)' }}>
            <h5 className="text-center block" style={{ color: 'white' }}>{props.nombre}</h5>
        </div>
        <div className="p-2" style={{ fontSize: '.8rem' }}>
            <ul className="list-unstyled">
                <li className="mb-1">{props.area}</li>
                <li className="mb-1">{props.telefono}</li>
                <li className="mb-1">{props.email}</li>
                <li className="mb-1" style={{ color: "green" }} >
                    <i className="fa fa-file me-2" />
                    <a href="#">Hoja de Vida</a>
                </li>
                <li className="mb-1" style={{ color: "green" }} >
                    <i className="fa fa-file me-2" />
                    <a href="#">Resoluci&oacute;n</a>
                </li>
            </ul>
        </div>
    </div>
}

export default CardTeam;
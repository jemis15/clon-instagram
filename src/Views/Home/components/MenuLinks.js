import React from 'react';
import { Link } from 'react-router-dom';

import iconTributariaRed from '../../../assets/images/icons/home/tributaria-red.svg';
import iconTributariaWhite from '../../../assets/images/icons/home/tributaria-white.svg';
import iconMesaParteRed from '../../../assets/images/icons/home/tramite-red.svg';
import iconMesaParteWhite from '../../../assets/images/icons/home/tramite-white.svg';
import iconTramiteConsultaRed from '../../../assets/images/icons/home/tramite-consulta-red.svg';
import iconTramiteConsultaWhite from '../../../assets/images/icons/home/tramite-consulta-white.svg';
import iconLibroRed from '../../../assets/images/icons/home/libro_rec-red.svg';
import iconLibroWhite from '../../../assets/images/icons/home/libro_rec-white.svg';
import iconNormativaRed from '../../../assets/images/icons/home/acceso-red.svg';
import iconNormativaWhite from '../../../assets/images/icons/home/acceso-white.svg';
import iconServicioLineaRed from '../../../assets/images/icons/home/consulta-red.svg'
import iconServicioLineaWhite from '../../../assets/images/icons/home/consulta-white.svg'
import iconFolderOpenRed from '../../../assets/images/icons/home/folder-open-red.svg'
import iconFolderOpenWhite from '../../../assets/images/icons/home/folder-open-white.svg'
import iconCEMred from '../../../assets/images/icons/home/CEM-red.svg';
import iconCEMwhite from '../../../assets/images/icons/home/CEM-white.svg';
import iconCASred from '../../../assets/images/icons/home/CAS-red.svg';
import iconCASwhite from '../../../assets/images/icons/home/CAS-white.svg';

export default function MenuLinks() {
    return <div className="py-4 border-3 border-top border-bottom border-white">
        <div className="container-xxl">
            <ul className="list-unstyled d-flex flex-wrap justify-content-around">
                <li>
                    <Link to="/c/t/tributos-municipales/formas-y-lugares-de-pago" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconTributariaRed} />
                            <img width="50" src={iconTributariaWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Tributo Municipal</div>
                    </Link>
                </li>
                <li>
                    <a href="https://mesadepartevitual.munimazamari.gob.pe" className="home-links d-inline-block text-decoration-none text-center" target="_blank" rel="noopener noreferrer">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconMesaParteRed} />
                            <img width="50" src={iconMesaParteWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Mesa de Parte Virtual</div>
                    </a>
                </li>
                <li>
                    <a href="http://181.65.201.166:9002/sistram/accesoconsulta.php" className="home-links d-inline-block text-decoration-none text-center" target="_blank" rel="noopener noreferrer">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconTramiteConsultaRed} />
                            <img width="50" src={iconTramiteConsultaWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Consulta Tramite</div>
                    </a>
                </li>
                <li>
                    <Link to="/muni/convocatorias" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconCASred} />
                            <img width="50" src={iconCASwhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Convocatorias</div>
                    </Link>
                </li>
                <li>
                    <Link to="/realizarreclamo" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconLibroRed} />
                            <img width="50" src={iconLibroWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Libro Reclamaciones</div>
                    </Link>
                </li>
                <li>
                    <Link to="/normativa" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconNormativaRed} />
                            <img width="50" src={iconNormativaWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Normatividad</div>
                    </Link>
                </li>
                <li>
                    <Link to="/realizarreclamo" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconServicioLineaRed} />
                            <img width="50" src={iconServicioLineaWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Sugerencias</div>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="home-links d-inline-block text-decoration-none text-center">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconFolderOpenRed} />
                            <img width="50" src={iconFolderOpenWhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">Servicio en Linea</div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/cem"
                        className="home-links d-inline-block text-decoration-none text-center"
                        title="CENTRO DE EMERGENCIA MUJER">
                        <div className="mb-2 mx-auto home-links-content-images position-relative">
                            <img width="50" src={iconCEMred} />
                            <img width="50" src={iconCEMwhite} />
                        </div>
                        <div className="text-danger fw-bold lh-1">CEM</div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
}
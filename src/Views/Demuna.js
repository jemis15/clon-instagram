import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BannerImage, UserPhoto, UserDetails, MainTitle, MainContent, ContentTitle } from '../components/Programa';

export default function Demuna() {
    return <MainContent className="my-5">
        <MainTitle title="DEMUNA" />
        <div className="row">
            <div className="mb-3 mb-lg-0 col-lg-6">
                <BannerImage image="/storage/images/programas/DEMUNA.png" />
            </div>
            <div className="mb-3 mb-md-0 col-md-6 col-lg-3 align-self-center">
                <div>
                    <UserPhoto className="mx-auto mb-3" image="https://www.flaticon.es/svg/static/icons/svg/3532/3532827.svg" />
                    <h3 className="mb-0 text-center">Gerente general de Recursos Humanos</h3>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 align-self-center">
                <h4 className="mb-3 align-self-center">Nombre del responsable</h4>
                <div className="px-3" style={{ borderLeft: '5px solid var(--bs-primary)' }}>
                    <UserDetails
                        correo="micorreo@gmail.com"
                        celular="963963963"
                        direccion="Av. Los colonos - SATIPO - MAZAMARI"
                    />
                </div>
            </div>
        </div>

        <ContentTitle title="¿Que es DEMUNA?" />
        <p style={{ textAlign: 'justify' }}>
            Es un servicio de atención integral que funciona en los gobiernos locales, cuya finalidad es promover y proteger los derechos que la legislación reconoce a las niñas, niños y adolescentes y por extensión a sus familias.
        </p>
        <p>La DEMUNA es un espacio cálido donde usted será recibido por profesionales especialistas en la materia, que le brindarán toda la atención que usted requiere.</p>

        <ContentTitle title="Servicios" />
        <div className="serv pl-4">
            <div className="row">
                <div className="col-md-6">
                    <b className="mt-4">Conciliación Extrahudicial</b>
                    <p style={{ textAlign: 'justify' }}>
                        Para resolver conflictos en materia de:
                    </p>
                    <ul>
                        <li>Pensión de alimentos</li>
                        <li>Régimen de visitas</li>
                        <li>Tenencia</li>
                    </ul>

                    <b className="mt-4">Acciones Administrativas </b>
                    <ul>
                        <li>Derecho a la educación</li>
                        <li>Derecho a la salud</li>
                        <li>Gestión de partidas de nacimiento</li>
                        <li>Apoyo Social</li>
                        <li>Denuncias y otros</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <b className="mt-4">Actas de Compromiso</b>
                    <p className="text-justify">
                        En problemas de:
                    </p>
                    <ul>
                        <li>Comportamiento</li>
                        <li>Normas de conducta</li>
                    </ul>

                    <b className="mt-4">Brindamos</b>
                    <ul>
                        <li>Asesoría legal</li>
                        <li>Orientación</li>
                        <li>Consejería</li>
                        <li>Actividades preventivas</li>
                        <li>Actividades promocionales</li>
                        <li>Charlas y capacitación</li>
                    </ul>
                </div>
            </div>
        </div>
    </MainContent >
}
import React from 'react';
import { BannerImage, UserPhoto, UserDetails, MainTitle, MainContent, ContentTitle } from '../components/Programa';

export default function Omaped() {
    return <MainContent className="my-5">
        <MainTitle title="OMAPED" />
        <div className="row">
            <div className="mb-3 mb-lg-0 col-lg-6">
                <BannerImage image="/storage/images/programas/OMAPED.png" />
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

        <ContentTitle title="¿Que es Omaped?" />
        <p style={{ textAlign: 'justify' }}>
            La Oficina de Atención a las Personas con Discapacidad fue creada con el objetivo de contribuir a mejorar la calidad de vida de las personas con discapacidad a través de la detección de sus necesidades, además promover la igualdad de oportunidades y el desarrollo de actividades que conduzcan a su plena inserción en la comunidad. En esta oficina las personas con discapacidad
        </p>
        <p>
            OMAPED organiza las siguientes actividades el beneficio de las personas con discapacidad, sus familiares y la comunidad.
        </p>
        <p>Pueden registrarse y participar de las diferentes actividades que se realizan.</p>

        <ContentTitle title="Servicios" />
        <p style={{ textAlign: 'justify' }}>
            OMAPED organiza las siguientes actividades el beneficio de las personas con discapacidad, sus familiares y la comunidad.
        </p>
        <ul>
            <li>Actividades recreativas, culturales y deportivas</li>
            <li>Actividades de salud y legal</li>
            <li>Actividades educativas</li>
            <li>Actividades ocupacionales y productivas</li>
        </ul>
    </MainContent>
}
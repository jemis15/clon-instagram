import React from 'react';
import { BannerImage, UserPhoto, UserDetails, MainTitle, MainContent, ContentTitle } from '../components/Programa';

export default function VasoLeche() {
    return <MainContent className="my-5">
        <MainTitle title="VASO DE LECHE" />
        <div className="row">
            <div className="mb-3 mb-lg-0 col-lg-6">
                <BannerImage image="/storage/images/programas/VASOLECHE.png" />
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

        <ContentTitle title="¿Que es Vaso de Leche?" />
        <p style={{ textAlign: 'justify' }}>
            El Programa del Vaso de Leche es un programa social alimentario que implementa el estado a través de las municipalidades y el cual está dirigido a grupos más vulnerables de la población, su objetivo principal es mejorar la nutrición de los beneficiarios, ayudar a superar la inseguridad alimentaria en la que se encuentra.
        </p>

        <ContentTitle title="Primera Prioridad" />
        <ul>
            <li>Niños de 0 a 6 años</li>
            <li>Madres Puerperas (hasta que el niño cumpla 1 año de edad).</li>
            <li>Madres Gestantes</li>
        </ul>

        <ContentTitle title="Segunda Prioridad" />
        <ul>
            <li>Niños de 7 a 13 años</li>
            <li>Personas afectadas con TBC</li>
            <li>Adulto Mayor</li>
            <li>Personas con Discapacidad (ley 27751-2002)</li>
        </ul>

        <ContentTitle title="Requisitos para ser beneficiario" />
        <ul>
            <li>Niños 0-6 años : Copia del DNI</li>
            <li>Madres Gestantes : Copia del DNI y copia de Control Pre-Natal</li>
            <li>Madre Lactante : Copia del DNI</li>
            <li>Niños 7-13 años : Copia del DN</li>
            <li>Adulto Mayor : Copia del DNI</li>
            <li>PCD : Copia del DNI (personas con discapacidad)</li>
            <li>TBC : Copia del DNI y copia de tarjeta de tratamiento o constancia de salud (personas con TBC)</li>
        </ul>
    </MainContent>
}
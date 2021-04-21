import React from 'react';
import { BannerImage, UserPhoto, UserDetails, MainTitle, MainContent, ContentTitle } from '../components/Programa';

export default function Piced() {
    return <MainContent className="my-5">
        <MainTitle title="PICED" />
        <div className="row">
            <div className="mb-3 mb-lg-0 col-lg-6">
                <BannerImage image="/storage/images/programas/PICED.png" />
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

        <ContentTitle title="¿Que es PICED?" />
        <p style={{ textAlign: 'justify' }}>
            La Gerencia de  Desarrollo Humano Social del Gobierno Local de Río Negro, continuando con su política a favor de la población más necesitada, sigue impulsando el crecimiento institucional del Centro de Estimulación Temprana para niños de 0 a 3 años de edad y estimulación prenatal para madres gestantes del distrito de Mazamari.
        </p>
    </MainContent>
}
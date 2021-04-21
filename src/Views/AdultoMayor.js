import React from 'react';
import { BannerImage, UserPhoto, UserDetails, MainTitle, MainContent, ContentTitle } from '../components/Programa';

export default function AdultoMayor() {
    return <MainContent className="my-5">
        <MainTitle title="ADULTO MAYOR" />
        <div className="row">
            <div className="mb-3 mb-lg-0 col-lg-6">
                <BannerImage image="/storage/images/programas/ADULTOMAYOR.png" />
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

        <ContentTitle title="¿Que es CIAM?" />
        <p style={{ textAlign: 'justify' }}>
            El Centro Integral de Atención al Adulto Mayor (CIAM), es un espacio creado por los gobiernos locales, en el marco de sus competencias, para la participación e integración social, económica y cultural de la persona adulta mayor, a través de la prestación de servicios, en coordinación o articulación con instituciones públicas o privadas; programas y proyectos que se brindan en su jurisdicción a favor de la promoción y protección de sus derechos.
        </p>
        <p>
            El Ministerio de la Mujer y Poblaciones Vulnerables promueve la creación de centros integrales de atención al adulto mayor (CIAM) por los gobiernos locales, sin transgredir, exceder o desnaturalizar los principios fundamentales de su creación contenidos en la Ley N° 30490, "Ley de las Personas Adultas Mayores" su reglamento y modificatorias.
        </p>

        <ContentTitle title="Objetivos" />
        <p style={{ textAlign: 'justify' }}>
            Asegurar espacios saludables integrales de socialización, beneficiando a la población adulta mayor a través de un servicio que les proporcione un espacio para realizar tareas y actividades que refuercen sus capacidades creativas e imaginativas en el uso del tiempo libre y de esta manera se integre plenamente al desarrollo social, económico político y cultural del distrito, contribuyendo a mejorar su calidad de vida.
        </p>
        <p>
            La Población Usuaria son las personas adultas mayores que residen en el ámbito del distrito, a quienes se les motiva para que se organicen e inscriban en el Centro Integral de Atención al Adulto Mayor de la Municipalidad Provincial.
        </p>
        <p>
            Actividades y Servicios del CIAM:
        </p>
        <ul>
            <li>Taichí</li>
            <li>Danzas Folklóricas</li>
            <li>Arte y Manualidades</li>
            <li>Teatro</li>
            <li>Gimnasia Rítmica</li>
            <li>Viajes</li>
            <li>Paseos</li>
        </ul>
    </MainContent>
}
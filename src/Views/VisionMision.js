import Glide from '@glidejs/glide';
import React, { useEffect, useRef } from 'react';

export default function VisionMision() {

    return <div className="container-xxl">
        <div className="mt-5 mb-5 bg-white border rounded-3">
            <div className="p-5">
                 <div className="mb-5">
                    <CarouselImages />
                </div>

                {/* Vision */}
                <div className="vision mb-5">
                    <div className="clearfix">
                        <Title value={`Visión Institucional`} />
                        <ContentVisionMision
                            value={`Al 2030 somos un distrito organizado, modelo en
                            bienestar social, competitividad, valoración de
                            nuestros recursos nauturales, biológicos con
                            producción diversificada y ambientalmente
                            sostenible.`}
                        />

                        <ContentVisionMisionDescripcion
                            value={`La visión se presenta conforme al Plan de Desarrollo Local Concertado (PDLC) 2018-2021
                            con perspectiva al 2030, documento aprobado con Acuerdo de Concejo N° 133-2018-
                            CM/MD de fecha 10 de diciembre del 2018.`}
                        />
                    </div>
                </div>

                {/* Mision */}
                <div className="mision">
                    <div>
                        <Title value={`Misión Institucional`} />
                        <ContentVisionMision
                            value={`La Municipalidad Distrital de Mazamari, es una institución intercultural que cuenta
                            con recursos humanos calificados y que promueve el desarrollo integral, sostenible y
                            participativo del Distrito de Mazamari en los ámbitos social, económico, institucional y
                            ambiental, mediante una gestión orientado a resultados; a través de servicios públicos
                            eficientes, eficaces y transparentes, con valores de justicia social y democrática.”`}
                        />

                        <ContentVisionMisionDescripcion
                            value={`La misión se presenta conforme al Plan Estratégico Institucional (PEI) 2019-2021,
                            documento aprobado con Acuerdo de Concejo N° 136-2018-CM/MD de fecha 17 de
                            diciembre del 2018.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const CarouselImages = () => {
    const myref = useRef();
    useEffect(() => {
        new Glide(myref.current, {
            type: 'carousel',
            perView: 1,
            autoplay: '3000',
            animationDuration: 700,
        }).mount()
    }, [myref]);

    return <div>
        <div ref={myref} className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <img
                            className="w-100"
                            src="https://api.centecp.com/images/utilitarios/visionmision_134504580.jpg"
                            alt="vision y mision"
                        />
                    </li>
                    <li className="glide__slide">
                        <img
                            className="w-100"
                            src="https://api.centecp.com/images/utilitarios/visionmision_147351560.jpg"
                            alt="vision y mision"
                        />
                    </li>
                    <li className="glide__slide">
                        <img
                            className="w-100"
                            src="https://api.centecp.com/images/utilitarios/visionmision_150078853.jpg"
                            alt="vision y mision"
                        />
                    </li>
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <i className="fa-lg fas fa-angle-left"></i>
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <i className="fa-lg fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
}

const Title = (props) => <h3><span className="px-2 bg-danger text-white d-inline-block">{props.value}</span></h3>
const ContentVisionMision = (props) => <p className="px-3 py-3 border rounded" style={{ textAlign: 'justify' }}>{props.value}</p>
const ContentVisionMisionDescripcion = (props) => <p className="ms-auto text-smaller" style={{ maxWidth: '400px' }}>{props.value}</p>
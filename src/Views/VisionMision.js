import React from 'react';

export default function VisionMision() {

    return <div className="p-5 mt-5 mb-5 container bg-white border rounded-3" style={{ width: "800px" }}>
        <div className="mb-5">
            <img
                src="https://cdn.www.gob.pe/uploads/document/file/1378545/standard_bc8938e2-2e5c-4f5e-9974-529f724f0b02.jpg"
                className="rounded w-100"
                alt="mazamari vision y mision"
            />
        </div>

        {/* Vision */}
        <div className="vision mb-5">
            <div className="clearfix">
                <h3><span className="px-2 bg-danger text-white d-inline-block">Vision Institucional</span></h3>
                <p className="ms-5 px-3 py-3 border rounded text-justify">
                    Mazamari es un Distrito competitivo con educaci&oacute;n, capacidades desarrolladas y salud de calidad; con servicios b&acute;sicos eficientes, con gobiernos locales concertadores y donde se practica la inclusión social y valores y respeto a la multiculturalidad.
                </p>

                <div className="d-flex">
                    <ul className="ms-auto w-100 list-unstyled" style={{ maxWidth: '300px' }}>
                        <li className="mb-2">
                            <a className="lh-1 d-flex text-decoration-none" href="#">
                                <div><i className="far fa-file me-2" /></div>
                                <div className="">Plan estrat&eacute;gico 2019-2022</div>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="lh-1 d-flex text-decoration-none" href="#">
                                <div><i className="far fa-file me-2" /></div>
                                <div className="">Resoluci&oacute;n de Alcald&iacute;a n° 1</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Mision */}
        <div className="mision">
            <div>
                <h3><span className="px-2 bg-danger text-white d-inline-block">Mision Institucional</span></h3>
                <p className="ms-5 px-3 py-3 border rounded text-justify">
                    Mazamari es un Distrito competitivo con educaci&oacute;n, capacidades desarrolladas y salud de calidad; con servicios b&acute;sicos eficientes, con gobiernos locales concertadores y donde se practica la inclusión social y valores y respeto a la multiculturalidad.
                </p>

                <div className="d-flex">
                    <ul className="ms-auto w-100 list-unstyled" style={{ maxWidth: '300px' }}>
                        <li className="mb-2">
                            <a className="lh-1 d-flex text-decoration-none" href="#">
                                <div><i className="far fa-file me-2" /></div>
                                <div className="">Plan estrat&eacute;gico 2019-2022</div>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="lh-1 d-flex text-decoration-none" href="#">
                                <div><i className="far fa-file me-2" /></div>
                                <div className="">Resoluci&oacute;n de Acuerdos de Consejo n° 1</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
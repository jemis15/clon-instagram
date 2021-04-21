import React from 'react';

export default function AprendoEnCasa() {
    return <>
        <div className="container-xxl py-5 border-bottom">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src="https://i2.wp.com/www.repositorioeducacion.com/wp-content/uploads/2020/05/Logo-aprendo-en-casa.png" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">El Ministerio de Educación desarrolló una plataforma educativa llamada “Aprendo en Casa” para acortar la brecha de la educación en los diferentes departamentos de nuestro país, que por la crisis sanitaria se ha ampliado.</h2>
                </div>
            </div>
        </div>
        <div className="container-xxl mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 mb-4 mb-md-0">
                    <div className="py-5 px-5 bg-white rounded-3 shadow-sm">
                        <p><b>NOTA DE PRENSA “APRENDO EN CASA”</b></p>
                        <p>Desde el año 2020 tenemos una crisis sanitaria debido a la pandemia, por tal motivo Ministerio de Educación desarrolló una plataforma educativa llamada “Aprendo en Casa” para acortar la brecha de la educación en los diferentes departamentos del Perú. Esto ha hecho que el proceso de enseñanza se reinvente y así continuar con el servicio básico importante para la población que es la educación.</p>
                        <h3>¿Qué es “Aprendo en Casa”?</h3>
                        <p>Es un servicio que se brinda a través de distintos medios de comunicación como televisión, radio e internet para que llegue a todos los peruanos y los estudiantes puedan avanzar en el desarrollo de sus clases, especialmente para zonas rurales y alejadas para reducir las desigualdades del aprendizaje en el Perú.</p>
                        <h3>¿Qué Herramientas usa?</h3>
                        <p>Los contenidos de esta plataforma se brindan para todos los niveles, tanto inicial, primaria y secundaria, y cuentan con materiales interesantes como videos, cuadernos de desarrollo, documentos relevantes, entre otros.</p>
                        <h3>¿Cómo Mejorara la Enseñanza?</h3>
                        <p>La educación es importante para el desarrollo del país, y la innovación de la plataforma es buena por eso la convierte en un proyecto muy interesante que está recibiendo el apoyo de diferentes empresas nacionales e internacionales para que la difusión en la población sea mucho más rápida. </p>
                        <p>El Ministerio de Transporte y Comunicaciones también ha realizado convenios para la ampliación de cobertura. Estos tratados se han realizado con las empresas de telecomunicaciones para que al acceder al sitio web no consuma datos en la población y se aumente la potencia de transmisión. Asimismo, se han brindado los permisos al Instituto de Radio y Televisión del Perú para dar el servicio de radiodifusión por satélites para las poblaciones más alejadas. </p>

                        <ul className="list-unstyled">
                            <li>
                                <span><IconLink /></span> <a className="text-decoration-none" href="https://resources.aprendoencasa.pe/perueduca/orientaciones/familia/familia-orientaciones-que-es-aprendo-en-casa.pdf" target="_blank" rel="noopener noreferrer">Mas información</a><br />
                            </li>
                            <li>
                                <span><IconLink /></span> <a className="text-decoration-none" href="https://selectra.com.pe/info/aprendo-en-casa" target="_blank" rel="noopener noreferrer">Fuente</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 rounded bg-white shadow-sm">
                        <h4>Recursos</h4>
                        <ul className="mb-0 list-unstyled">
                            <li><a className="text-decoration-none" href="https://aprendoencasa.pe/#/" target="_blank" rel="noopener noreferrer"><span><IconLink /></span> Aprendo en Casa</a></li>
                            <li><a className="text-decoration-none" href="https://autoayuda.minedu.gob.pe/aprendoencasa/2020/09/30/preguntas-frecuentes/" target="_blank" rel="noopener noreferrer"><span><IconLink /></span> Preguntas frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="mt-3 p-4 rounded bg-white shadow-sm">
                        <h4 className="mb-4">Lamadas telefónicas</h4>
                        <p className="mb-0">
                            <span><IconPhone /></span> <b>01 6155802</b><br />
                            <span><IconPhone /></span> <b>01 6155890</b><br />
                            <small>Horarios: Lunes a viernes: 8:15am - 5:15pm, Savados: 9:00am - 1:00pm</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const IconPhone = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1rem'} height={props.width || '1rem'} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
    </svg>
)

const IconLink = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1rem'} height={props.width || '1rem'} fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
    </svg>
)
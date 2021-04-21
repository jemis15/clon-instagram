import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionContext, Card, Container, ListGroup, useAccordionToggle } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CardPost from '../components/CardPost';

export default function Cem() {
    const [postsRelated, setPostsRelated] = useState(null);// {noticias: [], videos: []}

    useEffect(() => {
        async function loadPostsRelated() {
            try {
                const { data: apiPostsRelated } = await Axios.get('/v1/posts/related/cem?limit=4');
                setPostsRelated(apiPostsRelated);
            } catch (error) {
                console.log(error);
            }
        }

        loadPostsRelated();
    }, [])

    return <>
        <div className="oveflow-hidden bg-dark">
            <img
                src="https://www.mininter.gob.pe/sites/default/files/cem.png"
                alt="centro de emergencia mujer"
                style={{
                    width: '100%',
                    // height: '100%',
                    // objectFit: 'cover',
                    // objectPosition: 'center center'
                }}
            />
        </div>

        {/* <div
            className="bg-white"
            style={{
                position: 'sticky',
                top: 'calc(var(--header-height) + var(--topbar-height))',
                borderBottom: '1px solid var(--grey-300)'
            }}>
            <div className="container">
                <ul className="mb-0 list-unstyled d-flex">
                    <li className="bg-danger text-white">
                        <a className="py-2 px-4 d-inline-block text-decoration-none" href="/">Inicio</a>
                    </li>
                    <li className="">
                        <a className="py-2 px-4 d-inline-block text-decoration-none" href="/">Responsable</a>
                    </li>
                    <li className="">
                        <a className="py-2 px-4 d-inline-block text-decoration-none" href="/">Otros</a>
                    </li>
                </ul>
            </div>
        </div> */}

        <Container className="my-5">
            <div className="row">
                <div className="col-8">
                    <div className="mb-5 p-5 bg-white shadow-sm border rounded-3">
                        <h1 className="mb-4">Centro de Emergencia Mujer en la Comisaria del Distrito Mazamari - CEM</h1>

                        <SubTitle title="¿Qué son los Centro Emergencia Mujer (CEM) en Comisarías?" />
                        <p>
                            {`Los Centros Emergencia Mujer (CEM) en Comisarías son servicios brindados de manera conjunta y articulada entre el CEM y la dependencia policial en un mismo espacio físico, para la atención integral de casos de violencia contra la mujer, los integrantes del grupo familiar y violencia sexual. De esta forma, la víctima o persona denunciante podrá presentar su denuncia y acceder a la asesoría legal, psicológica y social en un mismo lugar.`}
                        </p>

                        <SubTitle title="¿Cómo surgen los CEM en las Comisarías?" />
                        <p className="mb-4">
                            {`Con la aprobación del Plan Nacional Contra la Violencia de Género 2016 – 2021, mediante el Decreto Supremo N. ° 008-2016-MIMP, el Ministerio del Interior (MININTER), la Policía Nacional del Perú (PNP) y el Ministerio de la Mujer y Poblaciones Vulnerables (MIMP) suscribieron un convenio que aprobó la instalación de CEM en Comisarías. Para tal efecto, el MININTER dispone de los espacios físicos adecuados en las dependencias policiales para el establecimiento de los CEM en aquellos lugares con alta incidencia en feminicidio y tentativa de feminicidio. El MIMP, en tanto, provee de profesionales especializados (abogados, psicólogos y asistentes sociales) para la atención de víctimas de violencia familiar y sexual en dichas instalaciones. Actualmente se cuenta con más de 70 CEM en Comisarías a nivel nacional y se tiene previsto llegar a 100 a fin de año. De esta forma se dará cumplimiento al compromiso de la actual gestión del gobierno en la erradicación de la violencia contra la mujer y grupos vulnerables.`}
                        </p>

                        <SubTitle title="¿Qué servicios ofrecen los CEM en Comisarías?" />
                        <h4>Servicio en Comisarías</h4>
                        <p>
                            {`Las Comisarías de familia o Comisarías básicas de la PNP donde se ha incorporado un CEM brindan el servicio de recepción, registro e investigación de las denuncias de violencia contra las mujeres y los integrantes del grupo familiar. Asimismo, se encargan de ejecutar las medidas de protección dictadas por el Juzgado de Familia o su equivalente para las víctimas de violencia.`}
                        </p>
                        <h4>Servicio CEM de Psicología</h4>
                        <p>
                            {`Evalúa y brinda un diagnóstico inicial de la persona afectada por hechos de violencia contra la mujer e integrantes del grupo familiar y violencia sexual. Asimismo, brinda consejería psicológica, contención emocional, intervención en crisis o acompañamiento psicológico, según corresponda.`}
                        </p>
                        <h4>Servicio CEM Legal</h4>
                        <p>
                            {`Brinda orientación, asesoría o patrocinio legal a las personas afectadas y/o involucradas en hechos de violencia contra la mujer e integrantes del grupo familiar y violencia sexual.`}
                        </p>
                        <h4>Servicio CEM Social</h4>
                        <p>
                            {`Brinda orientación social, evalúa, valoriza, categoriza y gestiona el riesgo de las personas afectadas por hechos de violencia contra la mujer e integrantes del grupo familiar y violencia sexual.`}
                        </p>

                        <div className="mb-4">
                            <img className="img-fluid" src="https://elconsejosalvador.com/wp-content/uploads/2017/11/detengamos-el-aumento-de-la-violencia-contra-la-mujer.jpg" alt="centro de emergencia mujer" />
                        </div>

                        <SubTitle title="Documentos" />
                        <Accordion className="mb-5">
                            <Card className="mb-1">
                                <CardHeaderToggle label="Otros datos" number='Nombrededl file' eventKey="1" />
                                <Accordion.Collapse eventKey="1">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex align-items-center">
                                            <div className="ms-5 font-weight-600">
                                                <span className="me-3"><i className="fas fa-file-pdf fa-2x" /></span>
                                                <a className="text-decoration-none">File nombre.pdf</a>
                                            </div>
                                            <div className="ms-auto">
                                                <a className="btn btn-sm btn-outline-primary">
                                                    <span className="me-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                                        </svg>
                                                    </span>
                                                    <span>Descargar</span>
                                                </a>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <p className="mb-0">Para mayor informaci&oacute;n, llama a la central telef&oacute;nica <b>(064) 548136</b> o al celular <b>989351070</b></p>
                    </div>
                </div>
                <div className="col-4">
                    {/* Responsable */}
                    {/* <div className="mb-3 p-3 rounded-3 bg-white border shadow-sm">
                        <h3 className="mb-3">Responsable</h3>
                        <div className="ps-3 mb-3">
                            <div>
                                <div className="ratio ratio-1x1 rounded-circle bg-green-300 overflow-hidden border border-3 border-success" style={{ width: '100px' }}>
                                    <div>
                                        <img
                                            src="https://www.flaticon.es/svg/static/icons/svg/2922/2922524.svg"
                                            alt="mazamari responsable cem"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="me-5">
                                <h4>Responsable del CEM</h4>
                                <ul className="mb-0 list-unstyled">
                                    <li className="d-flex mb-2">
                                        <div className="me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="var(--grey-500)" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                            </svg>
                                        </div>
                                        <div>micorreo@gmail.com</div>
                                    </li>
                                    <li className="d-flex mb-2">
                                        <div className="me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="var(--grey-500)" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                            </svg>
                                        </div>
                                        <div>999666333</div>
                                    </li>
                                    <li className="d-flex mb-2">
                                        <div className="me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="var(--grey-500)" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </div>
                                        <div>Av. marginal S/N</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* Ubicacion */}
                    <div className="mb-3 p-3 bg-white border rounded-3 shadow-sm">
                        <h3 className="mb-3">Ubicaci&oacute;n</h3>
                        <div className="rounded overflow-hidden ratio ratio-16x9 bg-dark">
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.088824586249!2d-74.5308905844045!3d-11.328218132035378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910b95b73539c49d%3A0x5f9625a4040c2ef0!2sComisaria%20Mazamari!5e0!3m2!1ses-419!2spe!4v1613846062548!5m2!1ses-419!2spe"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fotos */}
                    <div className="mb-3 p-3 bg-white border rounded-3 shadow-sm">
                        <h3 className="mb-3">Fotos</h3>
                        <div className="rounded overflow-hidden" style={{ display: 'grid', gap: '0.5rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            {new Array(6).fill(null).map((item, key) => (
                                <div key={key} className="ratio ratio-1x1 bg-dark">
                                    <div>
                                        <img
                                            src="https://elconsejosalvador.com/wp-content/uploads/2017/11/detengamos-el-aumento-de-la-violencia-contra-la-mujer.jpg"
                                            alt="mazamari CEM"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Videos */}
                    {/* <div className="p-3 bg-white border rounded-3 shadow-sm">
                        <h3 className="mb-3">Videos</h3>
                        <div className="mb-2 rounded overflow-hidden ratio ratio-16x9 bg-dark">
                            <div>
                                <Link to={{
                                    pathname: "/publicaciones/videos/kikikiki",
                                    state: { background: location }
                                }}>
                                    <img
                                        src="https://img.youtube.com/vi/lxfY14o-JZU/0.jpg"
                                        alt="mazamari CEM"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center center'
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        <h4 className="text-truncate">
                            <Link
                                className="text-decoration-none"
                                to={{
                                    pathname: "/publicaciones/videos/kikikiki",
                                    state: { background: location }
                                }}>Titulo de la notica Titulo de la notica Titulo de la notica</Link>
                        </h4>
                    </div> */}
                </div>
            </div>

            {postsRelated && <>
                {Array.isArray(postsRelated.noticias) && postsRelated.noticias.length > 0 && <>
                    <h3>Noticias relacionados</h3>
                    <div className="mb-5" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                        {postsRelated.noticias.map(noticia => (
                            <CardPost
                                key={noticia.id}
                                type={noticia.tipo}
                                titulo={noticia.titulo}
                                contenido={noticia.contenido}
                                image={noticia.image}
                                color={noticia.color}
                                fecha={noticia.created_at}
                            />
                        ))}
                    </div>
                </>}

                {Array.isArray(postsRelated.videos) && postsRelated.videos.length > 0 && <>
                    <h3>Videos relacionados</h3>
                    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                        {postsRelated.videos.map(video => (
                            <CardPost
                                key={video.id}
                                type={video.tipo}
                                titulo={video.titulo}
                                contenido={video.contenido}
                                image={video.image}
                                color={video.color}
                                fecha={video.created_at}
                            />
                        ))}
                    </div>
                </>}
            </>}
        </Container>
    </>
}

// hecho con la documentacion de react-bootstrap
function CardHeaderToggle({ label, number, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <Card.Header className="d-flex p-0" onClick={decoratedOnClick}>
            <div className="me-3 px-3 py-2 bg-danger text-white">
                {number > 0 && <span className="me-3 px-3 py-1 text-small bg-danger text-white d-online-block rounded-pill">{number} archivos</span>}
                {isCurrentEventKey
                    ? <i className="far fa-minus" />
                    : <i className="far fa-plus" />
                }
            </div>
            <div className="align-self-center">{label}</div>
        </Card.Header>
    );
}

const SubTitle = (props) => <h3 className="">{props.title}</h3>;
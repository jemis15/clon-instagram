import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useUser } from '../../Context/user-context';

import MyPortal from '../../components/MyPortal';
import CardPost from '../../components/CardPost';
import MenuLinks from './components/MenuLinks';
import PortalCarousel from './components/PortalCarousel';
import CarouselLinksFooter from './components/CarouselLinksFooter';
import CreateNoticia from './components/CreateNoticia';
import CarouselDocumentosGestion from './components/CarouselDocumentosGestion';

const LinkContext = React.createContext();
export default function Inicio({ showAlert }) {
    const [publicaciones, setPublicaciones] = useState([]);
    const [carouseles, setCarouseles] = useState([]);
    const [portalCreateCarousel, setPortalCreateCarousel] = useState(false)
    const [portalCreateNoticia, setPortalCreateNoticia] = useState(false);
    const [links, setLinks] = useState({
        importantes: [],
        enLinea: [],
        intereses: []
    });

    useEffect(() => {
        document.title = 'Municipalidad Distrital de Mazamari';
        const source = Axios.CancelToken.source();
        async function loadMarkers() {
            try {
                const [apiImportantes, apiEnLinea, apiInteres] = await Promise.all([
                    Axios.get(`/v1/links?groupname=importantes`, { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/v1/links?groupname=mazamari en linea', { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/v1/links?groupname=intereses', { cancelToken: source.token }).then(({ data }) => data)
                ]);
                setLinks({
                    importantes: apiImportantes.data,
                    enLinea: apiEnLinea.data,
                    intereses: apiInteres.data
                });
            } catch (error) {
                console.log(error);
            }
        }

        async function loadCarouseles() {
            try {
                const { data: apiCarouseles } = await Axios.get('/v1/carouseles', { cancelToken: source.token });
                setCarouseles(apiCarouseles.data);
            } catch (error) {
                console.log(error);
            }
        }

        async function loadPosts() {
            try {
                const { data: apiPublicaciones } = await Axios.get('/v1/posts?limit=8', { cancelToken: source.token });
                setPublicaciones(apiPublicaciones.data);
            } catch (error) {
                console.log(error);
            }
        }

        loadPosts();
        loadMarkers();
        loadCarouseles();

        return () => source.cancel('Cancelado');
    }, []);

    function nuevoCarousel(carouselNuevo) {
        setCarouseles([...carouseles, carouselNuevo]);
    }

    return <div>
        {/* Carousel header home */}
        <CarouselHome carouseles={carouseles} />

        {/* Links home top */}
        <MenuLinks />

        {/* Saludo del alcalde */}
        <SaludoDelAlcalde />

        <CarouselDocumentosGestion />

        <LinkProvider>
            {/* Links importantes y mazamari en linea */}
            <LinksImportantAndMazamariInLinea links={links} />

            <PublicacionesHome publicaciones={publicaciones} />

            {/* Carousel links footer */}
            <CarouselLinksFooter />
        </LinkProvider>

        <MyPortal
            show={portalCreateCarousel}
            onHide={() => setPortalCreateCarousel(false)}>
            <PortalCarousel
                actualizarNuevoCarousel={nuevoCarousel}
                showAlert={showAlert}
                onHide={() => setPortalCreateCarousel(false)}
            />
        </MyPortal>
        <MyPortal show={portalCreateNoticia} onHide={() => setPortalCreateNoticia(false)}>
            <CreateNoticia onHide={() => setPortalCreateNoticia(false)} />
        </MyPortal>
    </div >
}

function CarouselHome({ carouseles }) {
    return <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ratio ratio-21x9 bg-dark carousel_home_content">
            {carouseles.map((carousel, key) => (
                <div key={carousel.id} className={`carousel-item ${key === 0 && 'active'}`}>
                    <div className="d-flex justify-content-center align-items-center border h-100">
                        <img
                            src={carousel.image}
                            alt="mazamari publicidad"
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}

function SaludoDelAlcalde() {
    return <div className="py-5 border-top border-bottom border-5 border-white position-relative overflow-hidden">
        <div className="container-xxl">
            <Row className="align-items-center">
                <Col lg={{ span: 6, order: 2 }}>
                    <img
                        className="mb-4 mb-lg-0 w-100 rounded-3 img-thumbnail"
                        src={saludoOfUser.image}
                        alt="alcalde de mazamari"
                        loading="lazy"
                    />
                </Col>
                <Col lg={{ span: 6, order: 1 }}>
                    <h2 className="t1 mb-0 text-center">
                        {saludoOfUser.nombre}
                    </h2>
                    <h3 className="mb-4 text-center text-primary">
                        {saludoOfUser.cargo}
                    </h3>
                    <p className="mb-0" style={{ textAlign: 'justify' }}>
                        {saludoOfUser.mensaje}
                    </p>
                </Col>
            </Row>
        </div>
    </div>
}

function LinksImportantAndMazamariInLinea({ links }) {
    const { user } = useUser();

    return <div className="py-5 border-top border-bottom border-5 border-white">
        <div className="container-xxl">
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                    <div className="d-flex">
                        <h4 className="mb-0 px-3 py-2 rounded-top bg-danger text-white">Importante</h4>
                        {user && user.is_admin === 1 && <div className="ms-auto">
                            <Link to="/frame/markers">
                                <i className="far fa-cog fa-lg" />
                            </Link>
                        </div>}
                    </div>
                    {/* <div className="grid-links"> */}
                    <div className="h-100 px-3 px-sm-5 px-md-3 px-lg-5 py-4 shadow-sm bg-white">
                        <ul className="row row-cols-2 g-1 g-sm-3 g-md-3 list-unstyled">
                            {links.importantes.map((link, key) => {
                                return link.redirect_to && <li key={key} className="col">
                                    <a className="d-block" href={link.redirect_to} target="_blank" rel="noopener noreferrer">
                                        <div className="shadow-sm ratio ratio-21x9 border rounded rounded-3 marker hover">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img className="img-fluid" src={link.image} alt="marker" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <div className="d-flex">
                        <h4 className="mb-0 px-3 py-2 rounded-top bg-danger text-white">Mazamari en L&iacute;nea</h4>
                        {user && user.is_admin === 1 && <div className="ms-auto">
                            <Link to="/frame/markers">
                                <i className="far fa-cog fa-lg" />
                            </Link>
                        </div>}
                    </div>
                    <div className="h-100 px-3 px-sm-5 px-md-3 px-lg-5 py-4 shadow-sm bg-white">
                        <ul className="row row-cols-2 g-1 g-sm-3 g-md-3 list-unstyled">
                            {links.enLinea.map(link => (
                                <li key={link.id} className="col">
                                    <a href={link.redirect_to} className="d-block" target="_blank" rel="noopener noreferrer">
                                        <div className="shadow-sm ratio ratio-21x9 border rounded rounded-3 marker hover">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img className="img-fluid" src={link.image} alt="marker" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                            <li className="col">
                                <Link to="/aprendoencasa">
                                    <img src="https://1.bp.blogspot.com/-hwE6QgyuLu8/XrIddYhEXTI/AAAAAAAAieo/nPdgfypGEugEHMLaZznFkQjbhrTWRfr3gCLcBGAsYHQ/s1600/logo%2BAprendo%2Ben%2Bcasa_Secundaria.png" className="img-fluid" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

function PublicacionesHome({ publicaciones }) {
    return <div className="py-5 border-top border-bottom border-5 border-white">
        <h3 className="mb-5 text-center fs-2">Publicaciones de <span className="text-danger">Mazamari</span></h3>
        <div className="container-xxl mb-5"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))', gap: '2rem' }}>
            {publicaciones.map(publicacion => (
                <CardPost
                    key={publicacion.id}
                    type={publicacion.tipo}
                    image={publicacion.image}
                    title={publicacion.titulo}
                    category={publicacion.categoria}
                    created_at={publicacion.created_at}
                    image_of_video={publicacion.image_of_video}
                    video_from={publicacion.video_from}
                    user_image={publicacion.user_image}
                    user_name={publicacion.user_name}
                />
            ))}
        </div>
        <div className="text-center">
            <Link to="/publicaciones" className="btn btn-lg btn-danger">Ver mas publicaciones</Link>
        </div>
    </div>
}

export function LinkProvider(props) {
    const [loadingLinks, setLoadingLinks] = useState(false);
    const [links, setLinks] = useState({
        importantes: [],
        enLinea: [],
        intereses: []
    });

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadLinks() {
            try {
                setLoadingLinks(true)
                const [apiImportantes, apiEnLinea, apiInteres] = await Promise.all([
                    Axios.get(`/v1/links?groupname=importantes`, { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/v1/links?groupname=mazamari en linea', { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/v1/links?groupname=intereses', { cancelToken: source.token }).then(({ data }) => data)
                ]);
                setLinks({
                    importantes: apiImportantes.data,
                    enLinea: apiEnLinea.data,
                    intereses: apiInteres.data
                });
                setLoadingLinks(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                setLoadingLinks(false);
                console.log(error);
            }
        }
        loadLinks();
        return () => source.cancel('cancelado');
    }, []);

    return <LinkContext.Provider value={{ loadingLinks, links }} {...props} />
}

export function useLink() {
    const context = React.useContext(LinkContext);

    if (!context) {
        throw new Error('useLink deve esta dentro del proveedor LinkContext');
    }

    return context;
}

const saludoOfUser = {
    nombre: 'Marcelino Camarena Torres',
    cargo: 'Alcalde Distrital de Mazamari',
    image: 'https://www.devida.gob.pe/image/journal/article?img_id=392875&t=1561572825078',
    mensaje: 'Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión. Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari. La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.'
}
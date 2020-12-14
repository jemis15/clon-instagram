import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import CarouselLink from './components/CarouselLink';
import MyPortal from '../../components/MyPortal';
import CreateMarker from './components/CreateMarker';
import BannerCarousel from './components/BannerCarousel';
import CreateLink from './components/CreateLink';

import imgNoticia1 from '../../assets/images/img1.jpg';
import imgNoticia2 from '../../assets/images/img2.jpg';
import imgNoticia3 from '../../assets/images/img3.jpg';
import imgNoticia4 from '../../assets/images/img4.jpg';
import imgNoticia5 from '../../assets/images/img5.jpg';
import imgNoticia6 from '../../assets/images/img6.jpg';
import imgNoticia7 from '../../assets/images/img7.jpg';
import imgNoticia8 from '../../assets/images/img8.jpg';
import PortalCarousel from './components/PortalCarousel';
import Noticia from './components/Noticia';
import Marker from './components/Marker';

export default function Inicio({ user, showAlert }) {
    const [markers1, setMarkers1] = useState([]);
    const [markers2, setMarkers2] = useState([]);
    const [carouseles, setCarouseles] = useState([]);
    const [carouselLinks, setCarouselLinks] = useState([]);
    const [portalCreateCarousel, setPortalCreateCarousel] = useState(false)
    const [myPortal, setMyPortal] = useState(false);
    const [portalCreateMarker, setPortalCreateMarker] = useState(false);
    const [postFilter, setPostFilter] = useState('noticia');

    useEffect(() => {
        async function loadMarkers() {
            try {
                const [apiMarkers1, apiMarkers2] = await Promise.all([
                    Axios.get('/apimuni/markers/tipo/1').then(({ data }) => data),
                    Axios.get('/apimuni/markers/tipo/2').then(({ data }) => data),
                ]);
                setMarkers1(apiMarkers1);
                setMarkers2(apiMarkers2);
            } catch (error) {
                console.log(error);
            }
        }

        async function loadCarouseles() {
            const { data: apiCarouseles } = await Axios.get('/apimuni/carouselheader');
            setCarouseles(apiCarouseles);
        }

        async function loadCarouselLinks() {
            try {
                // api que nos muestra los resultados de los grupo links
                const { data: apiCarouselLinks } = await Axios.get(`/apimuni/carousellinks/grupo/principal`);
                // guardando los valores para ser recorridos y mostrados
                setCarouselLinks(apiCarouselLinks);
                // se a terminado de obtener y cargar los items de la base de datos
            } catch (error) {
                console.log(error);
            }
        }

        loadMarkers();
        loadCarouseles();
        loadCarouselLinks();
    }, []);

    function nuevoCarousel(carouselNuevo) {
        setCarouseles([...carouseles, carouselNuevo]);
    }
    function updateCarousel(carouselOriginal, carouselUpdated) {
        setCarouseles(carouseles => {
            const carouselesUpdated = carouseles.map(carousel => {
                if (carousel !== carouselOriginal) {
                    return carousel;
                }
                return carouselUpdated;
            });
            return carouselesUpdated;
        });
    }
    function deleteCarousel(carouselDelete) {
        setCarouseles(carouseles.filter(carousel => {
            return carousel !== carouselDelete;
        }));
    }

    function nuevoLink(linkNuevo) {
        setCarouselLinks([...carouselLinks, linkNuevo]);
    }
    function updateCarouselLink(linkOriginal, linkUpdated) {
        setCarouselLinks(links => {
            const linksUpdated = links.map(link => {
                if (link !== linkOriginal) {
                    return link
                }
                return linkUpdated;
            });
            return linksUpdated;
        });
    }
    function deleteLink(linkDelete) {
        setCarouselLinks(carouselLinks.filter(link => {
            return link !== linkDelete;
        }));
    }

    const newMarker = newMarker => {
        if (newMarker.marker_tipo_id === "1") {
            setMarkers1([...markers1, newMarker]);
        } else if (newMarker.marker_tipo_id === "2") {
            setMarkers2([...markers2, newMarker]);
        }
    }

    return <div>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className="mb-5 carousel_home"
            containerClass=""
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {carouseles.map(carousel => (
                <BannerCarousel
                    key={carousel.id}
                    carousel={carousel}
                    user={user}
                    onClickButtonCreate={() => setPortalCreateCarousel(true)}
                    updateCarousel={updateCarousel}
                    removeCarousel={deleteCarousel}
                    showAlert={showAlert}
                />
            ))}
        </Carousel>

        <h4 className="mb-3 container d-flex align-items-center">
            <div>
                <span className="mr-2"><i className="fas fa-link text-primary" /></span>
                <span>Links de interes</span>
            </div>
            {user && <div className="ml-auto">
                <button className="d-inline-block border-0 rounded-circle text-white bg-grey-700"
                    style={{ width: '2rem', height: '2rem' }}
                    onClick={() => setMyPortal(true)}>
                    <i className="far fa-plus" />
                </button>
            </div>}
        </h4>
        <div className="mb-5 pt-3 container bg-white border rounded">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="links pb-4"
                containerClass=""
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 7,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable>
                {carouselLinks.map((link, key) => (
                    <CarouselLink
                        key={link.id}
                        number={key + 1}
                        link={link}
                        updateLink={updateCarouselLink}
                        deleteLink={deleteLink}
                        showAlert={showAlert}
                        editable={user}
                    />
                ))}
            </Carousel>
        </div>

        <div className="mb-5">
            <SaludosAlcalde />
        </div>

        <Container className="mb-5">
            <div className="grid-grupo-links">
                <div className="mb-5 mb-lg-0">
                    <div className="mb-2 d-flex">
                        <h4 className="mb-0">Markers 1</h4>
                        {user && <div className="ml-auto">
                            <button
                                className="mr-1 border-0 rounded-circle btn-dark"
                                style={{
                                    width: '2rem',
                                    height: '2rem'
                                }}>
                                <i className="far fa-pen" />
                            </button>
                            <button
                                className="border-0 rounded-circle btn-dark"
                                style={{
                                    width: '2rem',
                                    height: '2rem'
                                }}
                                onClick={() => setPortalCreateMarker(true)}>
                                <i className="far fa-plus" />
                            </button>
                        </div>}
                    </div>
                    <div className="mx-lg-n3 px-3 py-3 grid-links border rounded-lg bg-white">
                        {markers1.map(marker => (
                            <Marker
                                key={marker.id}
                                url={marker.url}
                                image={`/apimuni/images/markers/${marker.image}`}
                                nombre={marker.nombre}
                                descripcion={marker.descripcion}
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-5 mb-lg-0">
                    <div className="mb-2 d-flex">
                        <h4 className="mb-0">Markers 2</h4>
                        {user && <div className="ml-auto">
                            <button
                                className="mr-1 border-0 rounded-circle btn-dark"
                                style={{
                                    width: '2rem',
                                    height: '2rem'
                                }}>
                                <i className="far fa-pen" />
                            </button>
                            <button
                                className="border-0 rounded-circle btn-dark"
                                style={{
                                    width: '2rem',
                                    height: '2rem'
                                }}>
                                <i className="far fa-plus" />
                            </button>
                        </div>}
                    </div>
                    <div className="mx-lg-n3 px-3 py-3 grid-links border rounded-lg bg-white">
                        {markers2.map(marker => (
                            <Marker
                                key={marker.id}
                                url={marker.url}
                                image={`/apimuni/images/markers/${marker.image}`}
                                nombre={marker.nombre}
                                descripcion={marker.descripcion}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>

        <div className="bg-blue-100 bg-before position-relative overflow-hidden">
            <Container className="py-5 rounded-lg">
                <h2 className="h1 text-center">Noticias</h2>
                <p className="text-center">Descripcion de los eventos</p>

                <div className="text-center mb-5">
                    <button
                        className={`btn btn-sm ${postFilter === 'noticia' ? 'btn-danger' : 'btn-outline-danger'} mr-2`}
                        onClick={() => setPostFilter('noticia')}>
                        Noticias
                        </button>
                    <button
                        className={`btn btn-sm ${postFilter === 'proyecto' ? 'btn-danger' : 'btn-outline-danger'} mr-2`}
                        onClick={() => setPostFilter('proyecto')}>
                        Proyectos
                        </button>
                    <button
                        className={`btn btn-sm ${postFilter === 'blog' ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={() => setPostFilter('blog')}>
                        Blogs
                        </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 350px))',
                    gridAutoRows: '350px',
                    justifyContent: 'center'
                }}>
                    {posts.map(item => {
                        if (item.post_tipo !== postFilter) {
                            return null;
                        }
                        return <Noticia key={item.id} image={item.image} titulo={item.titulo} />
                    })}
                </div>
            </Container>
        </div>

        <MyPortal
            show={portalCreateCarousel}
            onHide={() => setPortalCreateCarousel(false)}>
            <PortalCarousel
                actualizarNuevoCarousel={nuevoCarousel}
                showAlert={showAlert}
                onHide={() => setPortalCreateCarousel(false)}
            />
        </MyPortal>
        <MyPortal
            show={myPortal}
            onHide={() => setMyPortal(false)}>
            <CreateLink
                grupo="secundario"
                updateNewLink={nuevoLink}
                showAlert={showAlert}
                onHide={() => setMyPortal(false)}
            />
        </MyPortal>
        <MyPortal
            show={portalCreateMarker}
            onHide={() => setPortalCreateMarker(false)}>
            <CreateMarker
                updateNewMarker={newMarker}
                grupo={{ id: 1, nombre: 'Mi primer tipo de marker' }}
                showAlert={showAlert}
                onHide={() => setPortalCreateMarker(false)}
            />
        </MyPortal>
    </div>
}

function SaludosAlcalde() {
    const saludoOfUser = {
        nombre: 'Marcelino Camarena Torres',
        cargo: 'Alcalde Distrital de Mazamari',
        mensaje: 'Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión. Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari. La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.'
    }

    return <Container className="py-3 border rounded-lg bg-white">
        <Row className="align-items-center">
            <Col className="mb-3 mb-lg-0" lg="6">
                <img
                    className="w-100 p-2 pb-4 border rounded-lg"
                    src="http://munimazamari.gob.pe/wp-content/uploads/2019/10/maxi.jpg"
                    alt="alcalde de mazamari"
                />
            </Col>
            <Col lg="6">
                <h3 className="mb-0 text-center">{saludoOfUser.nombre}</h3>
                <p className="mb-2 text-center color-text-light text-small">{saludoOfUser.cargo}</p>
                <p className="mb-0 text-justify text-small">{saludoOfUser.mensaje}</p>
            </Col>
        </Row>
    </Container>
}

const posts = [
    { id: 1, titulo: 'Noticia 1', image: imgNoticia1, post_tipo: 'noticia' },
    { id: 2, titulo: 'Noticia 2', image: imgNoticia2, post_tipo: 'noticia' },
    { id: 3, titulo: 'Noticia 3', image: imgNoticia3, post_tipo: 'noticia' },
    { id: 4, titulo: 'Proyecto 1', image: imgNoticia4, post_tipo: 'proyecto' },
    { id: 5, titulo: 'Proyecto 2', image: imgNoticia5, post_tipo: 'proyecto' },
    { id: 6, titulo: 'Proyecto 3', image: imgNoticia6, post_tipo: 'proyecto' },
    { id: 7, titulo: 'Blog 1', image: imgNoticia7, post_tipo: 'blog' },
    { id: 8, titulo: 'Blog 2', image: imgNoticia8, post_tipo: 'blog' },
    { id: 1, titulo: 'Blog 3', image: imgNoticia1, post_tipo: 'blog' }
];
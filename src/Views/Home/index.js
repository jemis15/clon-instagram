import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import CarouselLink from './components/CarouselLink';
import MyPortal from '../../components/MyPortal';
import BannerCarousel from './components/BannerCarousel';
import PortalCarousel from './components/PortalCarousel';
import CardPost from './components/Noticia';
import Marker from '../../components/Marker';
import CreateNoticia from './components/CreateNoticia';

export default function Inicio({ user, showAlert }) {
    const [markers1, setMarkers1] = useState([]);
    const [markers2, setMarkers2] = useState([]);
    const [carouseles, setCarouseles] = useState([]);
    const [carouselLinks, setCarouselLinks] = useState([]);
    const [portalCreateCarousel, setPortalCreateCarousel] = useState(false)
    const [portalCreateNoticia, setPortalCreateNoticia] = useState(false);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadMarkers() {
            try {
                const [apiMarkers1, apiMarkers2] = await Promise.all([
                    Axios.get('/apimuni/markers/tipo/1', { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/apimuni/markers/tipo/2', { cancelToken: source.token }).then(({ data }) => data),
                ]);
                setMarkers1(apiMarkers1);
                setMarkers2(apiMarkers2);
            } catch (error) {
                console.log(error);
            }
        }

        async function loadCarouseles() {
            try {
                const { data: apiCarouseles } = await Axios.get('/apimuni/carouselheader', { cancelToken: source.token });
                setCarouseles(apiCarouseles);
            } catch (error) {
                console.log(error);
            }
        }

        async function loadCarouselLinks() {
            try {
                // api que nos muestra los resultados de los grupo links
                const { data: apiCarouselLinks } = await Axios.get(`/apimuni/carousellinks/grupo/principal`, {cancelToken: source.token});
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

        return () => source.cancel('Cancelado');
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

    const newMarker = newMarker => {
        if (newMarker.marker_tipo_id === "1") {
            setMarkers1([...markers1, newMarker]);
        } else if (newMarker.marker_tipo_id === "2") {
            setMarkers2([...markers2, newMarker]);
        }
    }

    const filtarPorTipoContenido = (posts, filtro) => {
        const result = posts.filter(post => post.tipo_contenido === filtro);
        return result;
    }

    return <div>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className="carousel_home"
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

        <div className="py-3 my-5 container border rounded-lg bg-white">
            <div className="mb-4 d-flex align-items-center">
                <h4 className="t4">
                    <span className="mr-2"><i className="fas fa-link text-primary" /></span>
                    <span>Links de interes</span>
                </h4>
                {user && user.is_admin === 1 && <div className="ml-auto">
                    <Link to="/frame/linkintereses">
                        <i className="far fa-cog fa-lg" />
                    </Link>
                </div>}
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="links"
                containerClass=""
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass="px-2"
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
                        items: 2,
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
                {carouselLinks.map(link => (
                    <CarouselLink key={link.id} link={link} />
                ))}
            </Carousel>
        </div>

        <div className="py-5 bg-red-700 bg-before position-relative overflow-hidden mb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={{ span: 6, order: 2 }}>
                        <img
                            className="mb-4 mb-lg-0 w-100 rounded-lg"
                            src={saludoOfUser.image}
                            alt="alcalde de mazamari"
                            loading="lazy"
                        />
                    </Col>
                    <Col lg={{ span: 6, order: 1 }}>
                        <h2 className="t1 mb-0 text-white text-center">
                            {saludoOfUser.nombre}
                        </h2>
                        <h3 className="mb-4 text-center" style={{ color: 'var(--yellow-300)' }}>
                            {saludoOfUser.cargo}
                        </h3>
                        <p className="mb-0 text-justify" style={{ color: 'var(--red-100)' }}>
                            <span className="mr-2" style={{ color: 'var(--yellow-300)' }}>
                                <i className="far fa-quote-left fa-lg" />
                            </span>
                            {saludoOfUser.mensaje}
                            <span className="ml-2" style={{ color: 'var(--yellow-300)' }}>
                                <i className="far fa-quote-right fa-lg" />
                            </span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

        <Container className="mb-5">
            <Row>
                <Col lg="6">
                    <div className="px-4 py-3 h-100 border rounded-lg bg-white">
                        <div className="mb-2 d-flex">
                            <h4 className="t4 mb-0">Markers 1</h4>
                            {user && user.is_admin === 1 && <div className="ml-auto">
                                <Link to="/frame/markers">
                                    <i className="far fa-cog fa-lg" />
                                </Link>
                            </div>}
                        </div>
                        <div className="grid-links">
                            {markers1.map(marker => (
                                <div key={marker.id}>
                                    <Marker
                                        key={marker.id}
                                        url={marker.url}
                                        image={`/apimuni/images/markers/${marker.image}`}
                                        nombre={marker.nombre}
                                        descripcion={marker.descripcion}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="px-4 py-3 h-100 border rounded-lg bg-white">
                        <div className="mb-2 d-flex">
                            <h4 className="t4 mb-0">Markers 2</h4>
                            {user && user.is_admin === 1 && <div className="ml-auto">
                                <Link to="/frame/markers">
                                    <i className="far fa-cog fa-lg" />
                                </Link>
                            </div>}
                        </div>
                        <div className="grid-links">
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
                </Col>
            </Row>
        </Container>

        <div className="py-5">
            <div className="mb-4 text-center">
                <h2 className="t1">Noticia</h2>
                <a href="#titulo" className="btn btn-link btn-sm">Ver m&aacute;s</a>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={false}
                className="mb-4"
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass="pr-4"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                {filtarPorTipoContenido(posts, 'noticia').map(post => (
                    <CardPost
                        key={post.id}
                        type={post.tipo_contenido}
                        titulo={post.titulo}
                        image={post.image}
                        fecha={<><i className="far fa-clock" /> {post.created_at}</>}
                    />
                ))}
            </Carousel>
        </div>

        <div className="py-5 bg-white">
            <div className="text-center mb-4">
                <h2 className="t1">Videos</h2>
                <a href="#titulo" className="btn btn-link btn-sm">Ver m&aacute;s <i className="fas fa-long-arrow-alt-right" /></a>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={false}
                className="mb-4"
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass="pr-4"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                {filtarPorTipoContenido(posts, 'video').map(post => (
                    <CardPost
                        key={post.id}
                        type={post.tipo_contenido}
                        titulo={post.titulo}
                        image={post.image}
                        fecha={<><i className="far fa-clock" /> {post.created_at}</>}
                    />
                ))}
            </Carousel>
        </div>

        <div className="py-5">
            <div className="text-center mb-4">
                <h2 className="t1">Programas e Iniciativa</h2>
                <a href="#titulo" className="btn btn-link btn-sm">Ver m&aacute;s <i className="fas fa-long-arrow-alt-right" /></a>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={5000}
                centerMode={false}
                className="mb-4"
                containerClass="container"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass="pr-4"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>
                {filtarPorTipoContenido(posts, 'image').map(post => (
                    <CardPost
                        key={post.id}
                        type={post.tipo_contenido}
                        titulo={post.titulo}
                        image={post.image}
                        fecha={<><i className="far fa-clock" /> {post.created_at}</>}
                    />
                ))}
            </Carousel>
        </div>

        <div className="py-5 bg-green-200 text-center">
            <a href="#libroreclamaciones" className="text-decoration-none d-inline-flex justify-content-center align-items-center">
                <img className="mr-3" width="50" src="https://www.flaticon.es/svg/static/icons/svg/2232/2232725.svg" alt="libro" />
                <h2>Libro de reclamaciones</h2>
            </a>
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
        <MyPortal show={portalCreateNoticia} onHide={() => setPortalCreateNoticia(false)}>
            <CreateNoticia onHide={() => setPortalCreateNoticia(false)} />
        </MyPortal>
    </div >
}

const posts = [
    {
        id: 1,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 2,
        image: '/apimuni/images/posts/20201106131901.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Danniel Alcides Carrillo" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 3,
        image: '/apimuni/images/posts/20201111181430.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 4,
        image: '/apimuni/images/posts/20201111185002.gif',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 5,
        image: '/apimuni/images/posts/20201111185027.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 6,
        image: '/apimuni/images/posts/20201111185034.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 7,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 8,
        image: '/apimuni/images/posts/20201114074928.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 9,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 10,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 11,
        image: '/apimuni/images/posts/20201111185027.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'image',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 12,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'image',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 13,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'image',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 14,
        image: '/apimuni/images/posts/20201114074928.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'image',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 15,
        image: '/apimuni/images/posts/20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'image',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    }
];

const saludoOfUser = {
    nombre: 'Marcelino Camarena Torres',
    cargo: 'Alcalde Distrital de Mazamari',
    image: 'https://www.devida.gob.pe/image/journal/article?img_id=392875&t=1561572825078',
    mensaje: 'Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión. Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari. La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.'
}
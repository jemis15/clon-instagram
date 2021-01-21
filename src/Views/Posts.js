import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import CardPost from './Home/components/Noticia';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Posts() {
    const query = useQuery();
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [loadingMorePosts, setLoadingMorePosts] = useState(false);
    const [posts, setPosts] = useState([]);
    const btnVerMas = useRef();

    useEffect(() => {
        const source = Axios.CancelToken.source();
        let queryApi = [
            '/apimuni/posts',//DEFECTO A LAS NOTICIAS MAS RECIENTES
            '/apimuni/posts?page=2',//DEFECTO A LAS NOTICIAS MAS RECIENTES
            '/apimuni/posts?fecha={fecha}&page=2',//DEFECTO A LAS NOTICIAS
            '/apimuni/posts?tipo={tipo}?page=2',//OBNENIENDO LOS POST MAS RECIENTES
            '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
            '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
            '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
        ];
        async function loadPosts() {
            try {
                setLoadingPosts(true);
                const { data: apiPosts } = await Axios.get(`/apimuni/users`, { cancelToken: source.token });
                let postFiltrados = postsData.filter(post => {
                    return post.tipo_contenido === query.get('tipo');
                });
                setPosts(postFiltrados);
                setLoadingPosts(false);
            } catch (error) {
                console.log(error);
                setLoadingPosts(false);
            }
        }
        loadPosts();

        return () => source.cancel('Cancelado');
    }, [query.get('tipo'), query.get('fecha')]);

    function getTitulo() {
        switch (query.get('tipo')) {
            case 'noticia':
                return 'Noticias';
                break;
            case 'video':
                return 'Videos';
                break;
            case 'programa':
                return 'Programas e Iniciativas';
                break;

            default:
                return 'Noticias';
                break;
        }
    }

    async function loadMorePosts() {
        if (loadingMorePosts) {
            return;
        }

        try {
            setLoadingMorePosts(true);
            const { data: apiPosts } = await Axios.get('/apimuni/users');
            let postFiltrados = postsData.filter(post => {
                return post.tipo_contenido === query.get('tipo');
            });
            setPosts([...posts, ...postFiltrados]);
            setLoadingMorePosts(false);
        } catch (error) {
            setLoadingMorePosts(false);
        }
    }

    return <>
        <div>
            <Container className="mt-4">
                <div className="d-flex flex-column flex-md-row">
                    <div>
                        <div className="pr-md-4 mb-4 mb-md-0" style={{
                            minWidth: '250px',
                            position: 'sticky',
                            top: 'calc(var(--header-height) + var(--topbar-height) + 20px)'
                        }}>
                            <div>
                                <Link
                                    className={`px-3 link_home-post ${(query.get('tipo') === 'noticia' || !query.get('tipo')) && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=noticia">
                                    <span className="mr-2"><i className="far fa-newspaper" /></span>
                                    <span>Noticias</span>
                                </Link>
                                <Link
                                    className={`px-3 link_home-post ${query.get('tipo') === 'video' && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=video">
                                    <span className="mr-2"><i className="fas fa-video" /></span>
                                    <span>Videos</span>
                                </Link>
                                <Link
                                    className={`px-3 link_home-post ${query.get('tipo') === 'programa' && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=programa">
                                    <span className="mr-2"><i className="far fa-project-diagram" /></span>
                                    <span>Programas</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-fill">
                        <div className="mb-4 clearfix">
                            <h3 className="float-left">{getTitulo()}</h3>
                            {/* <div className="float-right">
                                <Link
                                    to={`?tipo=${query.get('tipo')}`}
                                    className={`btn btn-sm btn-${!query.get('fecha') ? 'secondary' : 'fecha'} mr-2`}>
                                    {'Todos'}
                                </Link>
                                <Link
                                    to={`?tipo=${query.get('tipo')}&fecha=semana`}
                                    className={`btn btn-sm btn-${query.get('fecha') === 'semana' ? 'secondary' : 'light'} mr-2`}>
                                    {'Esta semana'}
                                </Link>
                                <Link
                                    to={`?tipo=${query.get('tipo')}&fecha=mes`}
                                    className={`btn btn-sm btn-${query.get('fecha') === 'mes' ? 'secondary' : 'light'} mr-2`}>
                                    {'Este mes'}
                                </Link>
                                <Link
                                    to={`?tipo=${query.get('tipo')}&fecha=antiguo`}
                                    className={`btn btn-sm btn-${query.get('fecha') === 'antiguo' ? 'secondary' : 'light'} mr-2`}>
                                    {'Mas antiguos'}
                                </Link>
                            </div> */}
                        </div>
                        {loadingPosts && <div className="text-center mb-3">Cargando...</div>}
                        <GridPosts>
                            {posts.map(post => {
                                switch (post.tipo_contenido) {
                                    case 'noticia':
                                        return <CardNoticia
                                            key={post.id}
                                            image={`/apimuni/images/posts/${post.image}`}
                                            titulo={post.titulo}
                                            fecha="10 de agosto del 2020"
                                        />
                                        break;
                                    case 'video':
                                        return <CardVideo
                                            key={post.id}
                                            imageVideo="https://img.youtube.com/vi/ORjLX5KHX1A/0.jpg"
                                            titulo={post.titulo}
                                        />
                                        break;
                                    case 'programa':
                                        return <CardImage
                                            key={post.id}
                                            image={`/apimuni/images/posts/${post.image}`}
                                            titulo={post.titulo}
                                        />
                                        break;

                                    default:
                                        break;
                                }
                            })}
                        </GridPosts>
                        {/* {posts.length % 10 === 0 && ( */}
                        <div className="text-center">
                            <Button onClick={loadMorePosts}>
                                {loadingMorePosts ? 'Cargando...' : 'Ver mas'}
                            </Button>
                        </div>
                        {/* )} */}

                        {/* <div
                            className=""
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                justifyContent: 'center',
                                gap: '2rem'
                            }}>
                            {posts.map(post => {
                                switch (post.tipo) {
                                    case 'noticia':
                                        return <CardNoticia 
                                            key={post.id}
                                            image={`/apimuni/images/posts/${post.image}`}
                                            titulo={post.titulo}
                                        />
                                        break;
                                    case 'video':
                                        return <CardVideo
                                            key={post.id}
                                            image="https://img.youtube.com/vi/ORjLX5KHX1A/0.jpg"
                                            titulo={post.titulo}
                                        />
                                        break;
                                    case 'programa':
                                        return <CardImage
                                        key={post.id}
                                        image={`/apimuni/images/posts/${post.image}`}
                                        titulo={post.titulo}
                                        />
                                        break;
                                
                                    default:
                                        break;
                                }
                            })}
                        </div> */}
                        {/* <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
                            gap: '1rem'
                        }}>
                            <CardVideo
                                titulo="Ttiulo del video Ttiulo del video Ttiulo del video Ttiulo del video"
                                imageVideo="https://img.youtube.com/vi/ORjLX5KHX1A/0.jpg"
                            />
                            <CardVideo
                                titulo="Ttiulo del video"
                                imageVideo="https://img.youtube.com/vi/KHrfr7twbdI/0.jpg"
                            />
                            <CardVideo
                                titulo="Ttiulo del video"
                                imageVideo="https://img.youtube.com/vi/KKfVB7ODR4s/0.jpg"
                            />
                            <CardVideo
                                titulo="Ttiulo del video"
                                imageVideo="https://img.youtube.com/vi/CFeBjW0eowU/0.jpg"
                            />
                            <CardVideo
                                titulo="Ttiulo del video"
                                imageVideo="https://img.youtube.com/vi/9fGhugRjhqM/0.jpg"
                            />
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    </>
}

const postsData = [
    {
        id: 1,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum Hay muchas variaciones.',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 2,
        image: '20201106131901.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Danniel Alcides Carrillo" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 3,
        image: '20201111181430.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 4,
        image: '20201111185002.gif',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 5,
        image: '20201111185027.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum Hay muchas variaciones de los pasajes de Lorem Ipsum.',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'video',
        contenido: 'X0nrCvuSW7o',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 6,
        image: '20201111185034.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 7,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 8,
        image: '20201114074928.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 9,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 10,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 11,
        image: '20201111185027.png',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 12,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 13,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 14,
        image: '20201114074928.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'programa',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    },
    {
        id: 15,
        image: '20201116193742.jpg',
        titulo: 'Hay muchas variaciones de los pasajes de Lorem Ipsum Hay muchas variaciones de los pasajes de Lorem Ipsum.',
        user: { id: 1, nombre: "Flores Meza Jafett Jamis" },
        tipo_contenido: 'noticia',
        contenido: '/apimuni/images/faces/face1.jpg',
        created_at: '2020-10-08 10:08:15'
    }
];

const dataVideo = {
    id: 1,
    titulo: 'Lluvia fuerte en Pangoa trae caos',
    video_id: 'gafADsSds',
    user: { id: 1, nombre: "Flores Meza Jafett Jamis", image: 'avatarDefault.jpg' }
}

const dataNoticia = {
    id: 1,
    titulo: 'Lluvia fuerte en Pangoa trae caos',
    descripcion: 'Descripcion hecho con markdown',
    image: 'noticia.jpg',
    user: { id: 1, nombre: "Flores Meza Jafett Jamis", image: 'avatarDefault.jpg' }
}

const dataPrograma = {
    id: 1,
    titulo: 'Como reclamar tu bono familiar',
    image: "programa.jpg",
    user: { id: 1, nombre: "Flores Meza Jafett Jamis", image: 'avatarDefault.jpg' }
}

const dataGeneralPost = {
    id: 1,
    titulo: 'Titulo de los multiuniversos XD',
    image: '',
    user: { id: 1, nombre: "Flores Meza Jafett Jamis", image: 'avatarDefault.jpg' }
}

const CardVideo = ({ titulo, imageVideo }) => {
    return <Link
        to="/publicaciones/videos/titulo"
        className="card_video text-decoration-none d-inline-block border rounded-lg overflow-hidden shadow-sm position-relative"
        title={titulo}>
        <div className="px-3 py-1 icon_play-card_video bg-danger text-white rounded-lg">
            <i className="fab fa-youtube" /> {'Reproducir video'}
        </div>
        <img className="w-100" src={imageVideo} alt="video" />
        <div className="px-3 py-3">
            <h4 className="mb-0 text-truncate">{titulo}</h4>
        </div>
    </Link>
}

function CardNoticia({ image, titulo }) {
    return <Link
        to="/publicaciones/noticia/titulo-de-la-noticia"
        className="bg-white text-decoration-none shadow-sm rounded-lg d-flex flex-column align-items-stretch justify-content-stretch overflow-hidden"
        style={{ height: '450px' }}>
        <div className="d-flex justify-content-center overflow-hidden">
            <img
                className="h-100 post-image"
                src={image}
                alt="post"
            />
        </div>
        <div className="px-3 py-3">
            <div className="mb-3 h4 font-weight-600 text-decoration-none">
                {titulo}
            </div>
            <p className="mb-0 text-smaller color-text-light">
                <i className="far fa-calendar-alt" /> {'10 de agosto del 2020'}
            </p>
        </div>
    </Link>
}

function CardImage({ titulo, image, fecha }) {
    return <>
        <Link
            to="/posts/titulo/titulo-de-la-imagen"
            className="shadow-sm bg-grey-900 rounded-lg text-decoration-none position-relative overflow-hidden d-flex justify-content-center align-items-center"
            style={{ height: "300px" }}>
            <div
                className="h-100 d-flex justify-content-center align-items-center">
                <img className="h-100 post-image" src={image} alt="galeria" />
            </div>
            <div
                className="text-left px-3 py-2"
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    background: 'linear-gradient(transparent, #000000)',
                }}>
                <h4 className="text-white">{titulo}</h4>
                <span className="text-white text-small">{fecha}</span>
            </div>
        </Link>
    </>
}

const GridPosts = (props) => {
    return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
    }}>
        {props.children}
    </div>
}
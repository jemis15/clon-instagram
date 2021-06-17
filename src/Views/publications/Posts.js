import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import imgSearch from '../../assets/images/search.svg';
import CardPost from '../../components/CardPost';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Posts() {
    const query = useQuery();
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [loadingMorePosts, setLoadingMorePosts] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        // let queryApi = [
        //     '/apimuni/posts',//DEFECTO A LAS NOTICIAS MAS RECIENTES
        //     '/apimuni/posts?page=2',//DEFECTO A LAS NOTICIAS MAS RECIENTES
        //     '/apimuni/posts?fecha={fecha}&page=2',//DEFECTO A LAS NOTICIAS
        //     '/apimuni/posts?tipo={tipo}?page=2',//OBNENIENDO LOS POST MAS RECIENTES
        //     '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
        //     '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
        //     '/apimuni/posts?tipo={tipo}?fecha={fecha}&page={pagina}',
        // ];
        async function loadPosts() {
            try {
                setLoadingPosts(true);
                // const { data: apiPosts } = await Axios.get(`/apimuni/posts/type/${query.get('tipo')}`, { cancelToken: source.token });
                const { data: apiPosts } = await Axios.get(`/v1/posts`, { cancelToken: source.token });
                setPosts(apiPosts.data);
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

            case 'video':
                return 'Videos';

            case 'programa':
                return 'Programas e Iniciativas';

            default:
                return 'Noticias';
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

    if (loadingPosts) {
        return <div className="mt-4 text-center">Cargando...</div>
    }

    return <>
        <div className="py-4 container">
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {posts.map(post => {
                    return <li key={post.id} className="col">
                        <CardPost
                            type={post.tipo}
                            image={post.image}
                            title={post.titulo}
                            category={post.categoria}
                            created_at={post.created_at}
                            image_of_video={post.image_of_video}
                            video_from={post.video_from}
                            user_image={post.user_image}
                            user_name={post.user_name}
                        />
                    </li>
                })}
            </ul>
        </div>
    </>

    return <>
        <div className="mb-5">
            <Container className="mt-4">
                <div className="d-flex flex-column flex-md-row">
                    <div>
                        <div className="pe-md-4 mb-4 mb-md-0" style={{
                            minWidth: '250px',
                            position: 'sticky',
                            top: 'calc(var(--header-height) + var(--topbar-height) + 20px)'
                        }}>
                            <div>
                                <Link
                                    className={`px-3 link_home-post ${(query.get('tipo') === 'noticia' || !query.get('tipo')) && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=noticia">
                                    <span className="me-2"><i className="far fa-newspaper" /></span>
                                    <span>Noticias</span>
                                </Link>
                                <Link
                                    className={`px-3 link_home-post ${query.get('tipo') === 'video' && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=video">
                                    <span className="me-2"><i className="fas fa-video" /></span>
                                    <span>Videos</span>
                                </Link>
                                {/* <Link
                                    className={`px-3 link_home-post ${query.get('tipo') === 'programa' && 'active'} font-weight-600 rounded d-block text-decoration-none py-2`}
                                    to="?tipo=programa">
                                    <span className="me-2"><i className="far fa-project-diagram" /></span>
                                    <span>Programas</span>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex-fill">
                        <h3 className="mb-4">{getTitulo()}</h3>
                        {loadingPosts && <div className="text-center mb-3">Cargando...</div>}
                        {Array.isArray(posts) && posts.length <= 0
                            ? <div className="text-center">
                                <img
                                    src={imgSearch}
                                    className="mt-5 img-fluid"
                                    alt="sin resultados"
                                    style={{ maxWidth: '100px' }}
                                />
                                <h4 className="mt-4">Lo sentimo no encontramos nada.</h4>
                            </div>
                            : <GridPosts>
                                {posts.map(post => {
                                    return <CardPost
                                        key={post.id}
                                        type={post.tipo}
                                        color={post.color}
                                        titulo={post.titulo}
                                        contenido={post.contenido}
                                        image={post.image}
                                        fecha={post.created_at}
                                    />
                                    // switch (post.tipo_contenido) {
                                    //     case 'noticia':
                                    //         return <CardNoticia
                                    //             key={post.id}
                                    //             image={`/apimuni/images/posts/${post.image}`}
                                    //             titulo={post.titulo}
                                    //             fecha="10 de agosto del 2020"
                                    //         />

                                    //     case 'video':
                                    //         return <CardVideo
                                    //             key={post.id}
                                    //             imageVideo="https://img.youtube.com/vi/ORjLX5KHX1A/0.jpg"
                                    //             titulo={post.titulo}
                                    //         />

                                    //     case 'programa':
                                    //         return <CardImage
                                    //             key={post.id}
                                    //             image={`/apimuni/images/posts/${post.image}`}
                                    //             titulo={post.titulo}
                                    //         />

                                    //     default:
                                    //         break;
                                    // }
                                })}
                            </GridPosts>
                        }
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
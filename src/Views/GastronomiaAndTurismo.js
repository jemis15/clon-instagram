import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

import imageDefault from '../assets/images/paisaje.jpg';
import imageItem from '../assets/images/img6.jpg';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const numberOfGastronomia = Array(10).fill(null);
export default function GastronomiaYTurismo() {
    const query = useQuery();
    const tipo = query.get('tipo');
    const titulo = query.get('titulo');
    const [gastronomias, setGastronomias] = useState([]);
    const [turismos, setTurismos] = useState([]);
    const [imagePortada, setImagePortada] = useState(null);
    const [gastronomiaOrTurismo, setGastronomiaOrTurismo] = useState(null);

    // inicio
    useEffect(() => {
        async function loadGastronomiaYTurismo() {
            try {
                const { data: apiTurismos } = await Axios.get(`/apimuni/turismos_p`);
                const {data: apiImagePortada} = await Axios.get(`/apimuni/turismos/${apiTurismos.id}/image_portada`);
                setGastronomias([]);
                setTurismos(apiTurismos);
                setImagePortada(apiImagePortada);
            } catch (error) {
                console.log(error);
            }
        }

        loadGastronomiaYTurismo();
    }, []);

    // carga un item para mostrar detalle completo
    useEffect(() => {
        async function loadGastronomia() {
            try {
                setGastronomiaOrTurismo({
                    titulo: 'Titulo de la gastronomia'
                });
            } catch (error) {
                console.log(error);
            }
        }
        async function loadTurismo() {
            try {
                const { data: apiTurismo } = await Axios.get(`/apimuni/turismos/${titulo}/titulo`);
                setGastronomiaOrTurismo(apiTurismo);
            } catch (error) {
                console.log(error);
            }
        }

        if (tipo === 'gastronomia') {
            loadGastronomia();
        } else if (tipo === 'turismo') {
            loadTurismo();
        } else {
            setGastronomiaOrTurismo(null);
        }
    }, [tipo, titulo]);

    function getImagePortada(images) {
        if (!images) {
            return null;
        }

        let imagePortada = null;
        images.map(image => {
            if (image.portada === 1 && imagePortada === null) {
                imagePortada = image;
            }
        });

        if (imagePortada) {
            return '/apimuni/images/turismos/' + imagePortada.url;
        }

        return imageDefault;
    }

    if (gastronomiaOrTurismo) {
        return <DetalleOfGastronomiaOrTurismo gastronomiaOrTurismo={gastronomiaOrTurismo} />
    }

    return <>
        <div className="py-5 banner bg-container">
            <Container>
                <Row>
                    <Col md="7" className="align-self-center">
                        <h1 className="banner-title text-center text-md-left">
                            La gastronomia en el distrito de Mazamari
                        </h1>
                        <p className="banner-descripcion text-center text-md-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores quaerat, illum harum repudiandae eius impedit cum
                            reprehenderit odit dolores quaerat, illum harum repudiandae
                            eius impedit cum reprehenderit odit.
                        </p>
                    </Col>
                    <Col md="5" className="align-self-center">
                        <img src={imageDefault} className="img-fluid rounded-lg" alt="gastonomia y turismo" />
                    </Col>
                </Row>
            </Container>
        </div>

        <Container className="py-xl">
            <h2 className="h2 text-center mb-4">Platos Tipicos</h2>
            <Gastronomias>
                {numberOfGastronomia.map(item => (
                    <Gastronomia>
                        <div className="mb-2">
                            <img src={imageItem} className="img-fluid rounded-lg" alt="gastronomia" />
                        </div>
                        <div>
                            <h4 className="h4">
                                <Link className="text-decoration-none"
                                    to={{ search: `?tipo=gastronomia&titulo=Titulo de la gastronomia` }}>
                                    Titulo de la gastronomia
                                </Link>
                            </h4>
                            <p className="text-small overflow-hidden">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores quaerat.
                        </p>
                        </div>
                    </Gastronomia>
                ))}
            </Gastronomias>
        </Container>

        <section className="content-lugares-turisticos mb-5">
            <h2 className="h2 text-center mb-4">Lugares turisticos</h2>
            <Turismos>
                {turismos.map(turismo => (
                    <Turismo key={turismo.id}>
                        <div className="container py-5">
                            <Row>
                                <Col md="5" className="align-self-center section-image">
                                    <div className="content-image-gastronomia-right overflow-hidden">
                                        <img src={getImagePortada(turismo.images)} className="img-fluid" alt="lugar turistico" />
                                    </div>
                                </Col>
                                <Col md="7" className="align-self-center section-description">
                                    <h2 className="banner-title text-center text-md-left">
                                        {turismo.titulo}
                                    </h2>
                                    <p className="banner-descripcion text-center text-md-left">
                                        {turismo.descripcion}
                                    </p>
                                    <div className="text-center text-md-left">
                                        <Button className="lugar-turistico-button mt-3 mt-md-0"
                                            as={Link} to={`/gastronomia?tipo=turismo&titulo=${turismo.titulo}`}>Ver mas detalle</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Turismo>
                ))}
            </Turismos>
        </section>
    </>
}

function Gastronomias({ children }) {
    return <section className="grid-gastronomia">
        {children}
    </section>
}
function Gastronomia({ children }) {
    return <article className="overflow-hidden">
        {children}
    </article>
}

function Turismos({ children }) {
    return <div>{children}</div>
}
function Turismo({ children }) {
    return <article className="lugar-turistico">
        {children}
    </article>
}

function DetalleOfGastronomiaOrTurismo({ gastronomiaOrTurismo }) {
    const history = useHistory();

    return <>
        <div className="py-5 mb-5 banner bg-container">
            <Container>
                <Row>
                    <Col md="7" className="align-self-center">
                        <h1 className="banner-title text-center text-md-left">
                            {gastronomiaOrTurismo.titulo}
                        </h1>
                        <p className="banner-descripcion text-center text-md-left">
                            {gastronomiaOrTurismo.descripcion}
                        </p>
                    </Col>
                    <Col md="5" className="align-self-center">
                        <img src={imageDefault} className="img-fluid rounded-lg" alt="gastonomia y turismo" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="py-3 mb-5 container border rounded" style={{ maxWidth: '700px' }}>
            <MDEditor.Markdown source={gastronomiaOrTurismo.contenido} />
            <Button onClick={() => history.goBack()}>Atras</Button>
        </div>
    </>
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
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
    const [gastronomias, setGastronomias] = useState([]);
    const [turismos, setTurismos] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);

    // inicio
    useEffect(() => {
        async function loadGastronomiaYTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiTurismos } = await Axios.get(`/apimuni/turismos_p`);
                // const { data: apiGastronomia } = await Axios.get(`/apimuni/gastronomias_p`);
                // setGastronomias(apiGastronomia);
                setTurismos(apiTurismos);
                setLoadingTurismosYGastronomias(false)
            } catch (error) {
                console.log(error);
                setLoadingTurismosYGastronomias(false);
            }
        }

        loadGastronomiaYTurismo();
    }, []);

    function getTitulo(titulo) {
        const palabras = titulo.split(' ');
        let oracion = '';
        palabras.forEach((letra, key) => {
            if (palabras.length > (key + 1)) {
                oracion += letra + '_';
            } else {
                oracion += letra;
            }
        });
        return oracion;
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
                {numberOfGastronomia.map((item, key) => (
                    <Gastronomia key={key}>
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
                                        <img src={`/apimuni/images/turismos/${turismo.image}`} className="img-fluid" alt="lugar turistico" />
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
                                            as={Link} to={`/turismos/${getTitulo(turismo.titulo)}`}>
                                            Ver mas detalle
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Turismo>
                ))}
                {turismos.length === 0 && (
                    <div className="container border p-5">
                        {loadingTurismosYGastronomias ?
                            <p className="text-center mb-0">Cargando...</p> :
                            <p className="text-center mb-0">Sin registros</p>
                        }
                    </div>
                )}
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
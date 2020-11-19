import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';

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
                const { data: apiGastronomia } = await Axios.get(`/apimuni/gastronomias_p`);
                setGastronomias(apiGastronomia);
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
        <Banner id="1" />

        <Container className="py-xl">
            <h2 className="h2 text-center mb-4">Platos Tipicos</h2>
            <Gastronomias>
                {gastronomias.map(gastronomia => (
                    <Gastronomia key={gastronomia.id}>
                        <div className="mb-2">
                            <img src={`/apimuni/images/gastronomias/${gastronomia.image}`}
                                className="img-fluid rounded-lg"
                                alt="gastronomia"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h4 className="h4">
                                <Link className="text-decoration-none"
                                    to={`/gastronomias/${getTitulo(gastronomia.titulo)}`}>
                                    {gastronomia.titulo}
                                </Link>
                            </h4>
                            <p className="text-small overflow-hidden">
                                {gastronomia.descripcion}
                            </p>
                        </div>
                    </Gastronomia>
                ))}
            </Gastronomias>
            {gastronomias.length === 0 && (
                <div className="container border p-5">
                    {loadingTurismosYGastronomias ?
                        <p className="text-center mb-0">Cargando...</p> :
                        <p className="text-center mb-0">Sin registros</p>
                    }
                </div>
            )}
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
                                        <img src={`/apimuni/images/turismos/${turismo.image}`}
                                            className="img-fluid"
                                            alt="lugar turistico"
                                            loading="lazy"
                                        />
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
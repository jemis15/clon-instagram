import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';

import imgFork from '../assets/images/icons/mazamari/fork.svg';
import imgForkAndPlato from '../assets/images/icons/mazamari/forkAndPlato.svg';

export default function GastronomiaYTurismo({ user }) {
    const [gastronomias, setGastronomias] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);
    const [gastronomiaId, setGastronomiaId] = useState(0);

    // inicio
    useEffect(() => {
        async function loadGastronomiaYTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiGastronomia } = await Axios.get(`/apimuni/jgastronomias`);
                setGastronomias(apiGastronomia);
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
        <Banner id="1" background="bg-red-700" user={user} />

        <Container className="py-xl">
            <h1 className="text-center mb-5">La <span className="text-danger">gastronom&iacute;a</span> en el Distrito de <span className="text-danger">Mazamari</span></h1>
            {/* <Gastronomias>
                {gastronomias.map(gastronomia => (
                    <Gastronomia key={gastronomia.id}>
                        <div className="mb-2 overflow-hideen">
                            <div className="ratio ratio-4x3 bg-success">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={gastronomia.image}
                                        alt="gastronomia"
                                        loading="lazy"
                                        style={{
                                            minWidth: '100%',
                                            minHeight: '100%'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="px-3 py-2">
                                <Link className="text-decoration-none"
                                    to={`/mazamari/gastronomias/${getTitulo(gastronomia.titulo)}`}>
                                    {gastronomia.titulo}
                                </Link>
                            </h4>
                            <p className="text-small overflow-hidden d-none">
                                {gastronomia.descripcion}
                            </p>
                        </div>
                    </Gastronomia>
                ))}
            </Gastronomias> */}
            {gastronomias.length === 0 && (
                <div className="p-5">
                    {loadingTurismosYGastronomias ?
                        <p className="text-center mb-0">Cargando...</p> :
                        <p className="text-center mb-0">Sin registros</p>
                    }
                </div>
            )}

            {gastronomias.length > 0 && (
                <div className="row">
                    <div className="col-4 border bg-grey-300 rounded-left-top">
                        <div className="py-4">
                            <ul className="list-unstyled">
                                {/* continuar qui */}
                                {gastronomias.map((gastronomia, key) => (
                                    <li
                                        key={key} onClick={() => setGastronomiaId(key)}
                                        className={`mazamari-item-verdetalle ${gastronomiaId === key && 'active'} cursor-pointer rounded-3`}>
                                        <div className="text-decoration-none px-3 py-2 border rounded d-block">
                                            {gastronomia.nombre}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <h3 className="text-center">{gastronomias[gastronomiaId].nombre}</h3>

                            <h4>Origen</h4>
                            <p>{gastronomias[gastronomiaId].origen}</p>

                            <h4>Ingredientes</h4>
                            <ul className="list-unstyled">
                                {gastronomias[gastronomiaId].preparacion.split(',').map((item, key) => (
                                    <li key={key} className="d-flex">
                                        <div className="me-2"><img src={imgForkAndPlato} alt="tenedor" width="20" height="20" /></div>
                                        <div>{item}</div>
                                    </li>
                                ))}
                            </ul>

                            <h4>Preparaci&oacute;n</h4>
                            <p>{gastronomias[gastronomiaId].preparacion}</p>

                            <h4>Imagenes</h4>
                            {gastronomias[gastronomiaId].images.length > 0
                                ? <div className="mb-4" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {gastronomias[gastronomiaId].images.map((image, key) => (
                                        <div key={key} className="ratio ratio-4x3">
                                            <div className="overflow-hidden d-flex justify-content-center align-items-center" style={{
                                                backgroundImage: `url(${image.img})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}>
                                                {/* <img
                                                key={key}
                                                src={image.img}
                                                alt={image.nombre}
                                                className="img-fluid"
                                                style={{
                                                    minWidth: '100%',
                                                    minHeight: '100%'
                                                }}
                                            /> */}
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                : <>
                                    <p className="">No hay imagenes</p>
                                </>
                            }

                            {gastronomias[gastronomiaId].lugares_a_degustar.length > 0 && <>
                                <h4>Lugares a degustar</h4>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {gastronomias[gastronomiaId].lugares_a_degustar.map((lugar, key) => (
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title mb-0">{lugar.nombre}</h4>
                                            </div>
                                            <div className="card-body">
                                                {lugar.numero && (
                                                    <div className="text-nowrap text-small mb-1">
                                                        <span className="me-2"><i className="fas fa-phone-alt" /></span>
                                                        <span>{lugar.numero}</span>
                                                    </div>
                                                )}
                                                {lugar.fb && (
                                                    <div className="text-nowrap text-small mb-1">
                                                        <span className="me-2"><i className="fab fa-facebook" /></span>
                                                        <span>{lugar.fb}</span>
                                                    </div>
                                                )}
                                                {lugar.email && (
                                                    <div className="text-nowrap text-smaller">
                                                        <span className="me-2"><i className="far fa-envelope" /></span>
                                                        <span>{lugar.email}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            )}
        </Container>

        {
            false && (
                <section className="content-lugares-turisticos mb-5">
                    <h2 className="h2 text-center mb-4">Lugares turisticos</h2>
                    <Turismos>
                        {gastronomias.map(turismo => (
                            <Turismo key={turismo.id}>
                                <div className="container py-5">
                                    <Row>
                                        <Col md="5" className="align-self-center section-image">
                                            <div className="content-image-gastronomia-right overflow-hidden">
                                                <img src={turismo.image}
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
                                                    {'Ver mas detalle'}
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Turismo>
                        ))}
                        {gastronomias.length === 0 && (
                            <div className="container border p-5">
                                {loadingTurismosYGastronomias ?
                                    <p className="text-center mb-0">Cargando...</p> :
                                    <p className="text-center mb-0">Sin registros</p>
                                }
                            </div>
                        )}
                    </Turismos>
                </section>
            )
        }
    </>
}

function Gastronomias({ children }) {
    return <section className="grid-gastronomia">
        {children}
    </section>
}
function Gastronomia({ children }) {
    return <article className="overflow-hidden border bg-white rounded-3 px-2 pt-2">
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
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import { useUser } from '../Context/user-context';

import imgFork from '../assets/images/icons/mazamari/fork.svg';
import imgForkAndPlato from '../assets/images/icons/mazamari/forkAndPlato.svg';

export default function GastronomiaYTurismo() {
    const { user } = useUser();
    const [gastronomias, setGastronomias] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);
    const [gastronomiaId, setGastronomiaId] = useState(0);

    // inicio
    useEffect(() => {
        async function loadGastronomiaYTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiGastronomia } = await Axios.get(`/v1/gastronomias`);
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
            <h1 className="text-center mb-5">El <span className="text-success">Turismo</span> en el Distrito de <span className="text-success">Mazamari</span></h1>

            {gastronomias.length > 0
                ? <div className="row">
                    {/* lista de turismos */}
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

                    {/* contenido de turismos */}
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <h3 className="text-center">{gastronomias[gastronomiaId].nombre}</h3>

                            <h4>Origen</h4>
                            <p>{gastronomias[gastronomiaId].origen}</p>

                            <h4>Ingredientes</h4>
                            <p>{gastronomias[gastronomiaId].ingredientes}</p>

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
                                            </div>
                                        </div>

                                    ))}
                                </div>
                                : <>
                                    <p className="">No hay imagenes</p>
                                </>
                            }

                            {gastronomias[gastronomiaId].lugares_a_degustar.length > 0 && <>
                                <h4>Operadores</h4>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {gastronomias[gastronomiaId].lugares_a_degustar.map((lugar, key) => (
                                        <div key={key} className="card">
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
                : <div className="p-5">
                    {loadingTurismosYGastronomias ?
                        <p className="text-center mb-0">Cargando...</p> :
                        <p className="text-center mb-0">Sin registros</p>
                    }
                </div>
            }
        </Container>
    </>
}
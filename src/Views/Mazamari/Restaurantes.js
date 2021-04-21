import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';

export default function Restaurantes() {
    const [restaurantes, setRestaurantes] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);
    const [restauranteId, setRestauranteId] = useState(0);

    // inicio
    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiTurismos } = await Axios.get(`/apimuni/jrestaurantes`, {
                    cancelToken: source.token
                });
                setRestaurantes(apiTurismos);
                setLoadingTurismosYGastronomias(false)
            } catch (error) {
                console.log(error);
                setLoadingTurismosYGastronomias(false);
            }
        }

        loadTurismo();

        return () => source.cancel('Cancelado');
    }, []);

    return <>
        <Banner id="5" background="bg-green-800" />

        <div className="container-xxl py-xl">
            <h1 className="text-center mb-5"><span className="text-success">Restaurantes</span> en el Distrito de <span className="text-success">Mazamari</span></h1>

            {Array.isArray(restaurantes) && restaurantes.length > 0
                ? <div className="row">
                    {/* lista de restaurantes */}
                    <div className="col-4 border bg-grey-300 rounded-left-top">
                        <div className="py-4">
                            <ul className="list-unstyled">
                                {restaurantes.map((restaurante, key) => (
                                    <li
                                        key={key} onClick={() => setRestauranteId(key)}
                                        className={`mazamari-item-verdetalle ${restauranteId === key && 'active'} cursor-pointer rounded-3`}>
                                        <div className="text-decoration-none px-3 py-2 border rounded d-block">
                                            {restaurante.nombre}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* contenido de restaurantes */}
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <div className="d-flex justify-content-between">
                                <div className="me-5">
                                    <h2 className="mb-4">{restaurantes[restauranteId].nombre}</h2>
                                    <p style={{ textAlign: 'justify' }}>{restaurantes[restauranteId].descripcion}</p>
                                </div>
                                <div>
                                    <div className="mb-3 border ratio ratio-1x1" style={{ width: '100px' }}>
                                        <div>
                                            <img src={restaurantes[restauranteId].logo} className="img-object-fit" alt="restaurante logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {restaurantes[restauranteId].platos.length > 0 && <>
                                <h4>Platos</h4>
                                <div>
                                    <div className="px-3 py-2 mb-3 d-inline-block shadow-sm border rounded-3">
                                        <ul className="mb-0 list-unstyled">
                                            {restaurantes[restauranteId].platos.map((plato, key) => (
                                                <li key={key}><i className="me-2 fas fa-utensils" /> {plato}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>}

                            {restaurantes[restauranteId].horarios && <>
                                <h4>Horarios</h4>
                                <p>{restaurantes[restauranteId].horarios}</p>
                            </>}

                            {restaurantes[restauranteId].horarios && <>
                                <h4>Reservas</h4>
                                <p>{restaurantes[restauranteId].reservas}</p>
                            </>}

                            {restaurantes[restauranteId].mensaje && <>
                                <h4>Mensaje</h4>
                                <p>{restaurantes[restauranteId].mensaje}</p>
                            </>}

                            {restaurantes[restauranteId].direccion && <>
                                <h4>Direcci&oacute;n</h4>
                                <p>{restaurantes[restauranteId].direccion} {restaurantes[restauranteId].referencia && `(${restaurantes[restauranteId].referencia})`}</p>
                            </>}

                            {restaurantes[restauranteId].facebook && <>
                                <h4>Sociales</h4>
                                <a
                                    className="text-decoration-none rounded-circle d-inline-flex justify-content-center align-items-center"
                                    href={restaurantes[restauranteId].facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ width: '2.3rem', height: '2.3rem', background: 'blue', color: 'white' }}>
                                    <i className="fab fa-facebook-f fa-lg" />
                                </a>
                            </>}

                            {restaurantes[restauranteId].images.length > 0 && <>
                                <h4>Imagenes</h4>
                                <div className="mb-4" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {restaurantes[restauranteId].images.map((image, key) => (
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
        </div>
    </>
}
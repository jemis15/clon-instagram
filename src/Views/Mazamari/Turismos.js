import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner';

export default function Turismos({ user }) {
    const [turismos, setTurismos] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);
    const [turismoId, setTurismoId] = useState(0);

    // inicio
    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                // const { data: apiTurismos } = await Axios.get(`/apimuni/turismos_p`);
                const { data: apiTurismos } = await Axios.get(`/apimuni/jturismos`, {
                    cancelToken: source.token
                });
                setTurismos(apiTurismos);
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
        <Banner id="2" background="bg-green-800" user={user} />

        <Container className="py-xl">
            <h1 className="text-center mb-5">El <span className="text-success">Turismo</span> en el Distrito de <span className="text-success">Mazamari</span></h1>

            {turismos.length > 0
                ? <div className="row">
                    {/* lista de turismos */}
                    <div className="col-4 border bg-grey-300 rounded-left-top">
                        <div className="py-4">
                            <ul className="list-unstyled">
                                {/* continuar qui */}
                                {turismos.map((turismo, key) => (
                                    <li
                                        key={key} onClick={() => setTurismoId(key)}
                                        className={`mazamari-item-verdetalle ${turismoId === key && 'active'} cursor-pointer rounded-3`}>
                                        <div className="text-decoration-none px-3 py-2 border rounded d-block">
                                            {turismo.nombre}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* contenido de turismos */}
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <h3 className="text-center">{turismos[turismoId].nombre}</h3>
                            <p>{turismos[turismoId].descripcion}</p>

                            {turismos[turismoId].servicios.length > 0 && <>
                                <h4>Servicios</h4>
                                <ul>
                                    {turismos[turismoId].servicios.map((servicio, key) => (
                                        <li key={key}>{servicio.servicio}</li>
                                    ))}
                                </ul>
                            </>}

                            {turismos[turismoId].actividades.length > 0 && <>
                                <h4>Actividades</h4>
                                <ul>
                                    {turismos[turismoId].actividades.map((actividad, key) => (
                                        <li key={key}>{actividad.actividad}</li>
                                    ))}
                                </ul>
                            </>}

                            <h4>Ubicaci&oacute;n</h4>
                            <p>{turismos[turismoId].ubicacion}</p>

                            <h4>Como llegar</h4>
                            <div className="mb-3">
                                <iframe
                                    src={turismos[turismoId].llegar}
                                    width="100%"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                />
                            </div>

                            <h4>Imagenes</h4>
                            {turismos[turismoId].images.length > 0
                                ? <div className="mb-4" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {turismos[turismoId].images.map((image, key) => (
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

                            {turismos[turismoId].operadores.length > 0 && <>
                                <h4>Operadores</h4>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {turismos[turismoId].operadores.map((operador, key) => (
                                        <div key={key} className="card">
                                            <div className="card-header">
                                                <h4 className="card-title mb-0">{operador.nombre}</h4>
                                            </div>
                                            <div className="card-body">
                                                {operador.numero && (
                                                    <div className="text-nowrap text-small mb-1">
                                                        <span className="me-2"><i className="fas fa-phone-alt" /></span>
                                                        <span>{operador.numero}</span>
                                                    </div>
                                                )}
                                                {operador.ubicacion && (
                                                    <div className="text-nowrap text-smaller">
                                                        <span className="me-2"><i className="fas fa-map-marker-alt" /></span>
                                                        <span>{operador.ubicacion}</span>
                                                    </div>
                                                )}
                                                {operador.email && (
                                                    <div className="text-nowrap text-smaller">
                                                        <span className="me-2"><i className="far fa-envelope" /></span>
                                                        <span>{operador.email}</span>
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
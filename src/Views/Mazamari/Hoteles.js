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
        <Banner id="4" background="bg-yellow-900" user={user} />

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
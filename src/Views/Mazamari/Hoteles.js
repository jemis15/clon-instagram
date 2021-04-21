import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';

export default function Turismos() {
    const [hoteles, setHoteles] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);
    const [turismoId, setTurismoId] = useState(0);

    // inicio
    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiHabitaciones } = await Axios.get(`/apimuni/jhabitaciones`, {
                    cancelToken: source.token
                });
                setHoteles(apiHabitaciones);
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
        <Banner id="4" background="bg-green-800" />

        <div className="container-xxl py-xl">
            <h1 className="text-center mb-5">El <span className="text-success">Hoteles</span> en el Distrito de <span className="text-success">Mazamari</span></h1>

            {Array.isArray(hoteles) && hoteles.length > 0
                ? <div className="row">
                    {/* lista de hoteles */}
                    <div className="col-4 border bg-grey-300 rounded-left-top">
                        <div className="py-4">
                            <ul className="list-unstyled">
                                {/* continuar qui */}
                                {hoteles.map((hotel, key) => (
                                    <li
                                        key={key} onClick={() => setTurismoId(key)}
                                        className={`mazamari-item-verdetalle ${turismoId === key && 'active'} cursor-pointer rounded-3`}>
                                        <div className="text-decoration-none px-3 py-2 border rounded d-block">
                                            {hotel.nombre}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* contenido de hoteles */}
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <h3 className="text-center">{hoteles[turismoId].nombre}</h3>

                            <p>
                                {hoteles[turismoId].direccion && <><b>Direcci&oacute;n:</b> {hoteles[turismoId].direccion}<br /></>}
                                {hoteles[turismoId].telefono && <><b>Telefono:</b> {hoteles[turismoId].telefono}<br /></>}
                                {hoteles[turismoId].celular && <><b>Celular:</b> {hoteles[turismoId].celular}<br /></>}
                            </p>

                            <h4>Atenci&oacute;n</h4>
                            {hoteles[turismoId].atencion && (
                                <p>{hoteles[turismoId].atencion}</p>
                            )}

                            {hoteles[turismoId].habitaciones.length > 0 && <>
                                <h4>Habitaciones</h4>
                                <ul>
                                    {hoteles[turismoId].habitaciones.map((habitacion, key) => (
                                        <li key={key}>{habitacion.nombre}</li>
                                    ))}
                                </ul>
                            </>}

                            {hoteles[turismoId].images.length > 0 && <>
                                <h4>Imagenes</h4>
                                <div className="mb-4" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {hoteles[turismoId].images.map((image, key) => (
                                        <div key={key} className="ratio ratio-4x3">
                                            <div className="ratio ratio-1x1">
                                                <div>
                                                    <img className="img-object-fit" src={image.img} alt="hoteles" />
                                                </div>
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
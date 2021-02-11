import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner';

export default function Agroindustrias({ user }) {
    const [agroindustrias, setAgroindustrias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [agroindustriaId, setAgroindustriaId] = useState(0);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadAgroindustria() {
            try {
                setLoading(true);
                const { data: apiTurismos } = await Axios.get(`/apimuni/jagroindustrias`, {
                    cancelToken: source.token
                });
                setAgroindustrias(apiTurismos);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        loadAgroindustria();

        return () => source.cancel('Cancelado');
    }, []);

    return <>
        <Banner id="3" background="bg-green-900" user={user} />

        <Container className="py-xl">
            <h1 className="text-center mb-5">La <span className="text-success">Agroindustria</span> en el Distrito de <span className="text-success">Mazamari</span></h1>

            {/* consultamos si hay agroindustrias agregados */}
            {agroindustrias.length > 0
                ? <div className="row">
                    {/* Link de las agroindustrias */}
                    <div className="col-4 border bg-grey-300 rounded-left-top">
                        <div className="py-4">
                            <ul className="list-unstyled">
                                {agroindustrias.map((turismo, key) => (
                                    <li
                                        key={key} onClick={() => setAgroindustriaId(key)}
                                        className={`mazamari-item-verdetalle ${agroindustriaId === key && 'active'} cursor-pointer rounded-3`}>
                                        <div className="text-decoration-none px-3 py-2 border rounded d-block">
                                            {turismo.nombre}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contenido de la agroindustria seleccionado(a) */}
                    <div className="col-8 border bg-white">
                        <div className="py-4">
                            <h3 className="text-center">{agroindustrias[agroindustriaId].nombre}</h3>
                            <p>{agroindustrias[agroindustriaId].descripcion}</p>

                            <h4>Ficha t&eacute;cnica del producto</h4>
                            {/* ficha tecnica */}
                            <div className="mb-3">
                                <embed
                                    className="mx-auto"
                                    src={agroindustrias[agroindustriaId].pdf}
                                    type="application/pdf"
                                    style={{ width: '100%', height: '500px' }}
                                />
                            </div>

                            <h4>Im&aacute;genes</h4>
                            {/* images */}
                            {agroindustrias[agroindustriaId].images.length > 0
                                ? <div className="mb-4" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {agroindustrias[agroindustriaId].images.map((image, key) => (
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
                                : <p className="">No hay imagenes</p>
                            }
                        </div>
                    </div>
                </div>
                : <div className="p-5">
                    {loading ?
                        <p className="text-center mb-0">Cargando...</p> :
                        <p className="text-center mb-0">Sin registros</p>
                    }
                </div>
            }
        </Container>
    </>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Glide, { GlideItem } from './Glide';

export default function DocumentosGestion() {
    const [loading, setLoading] = useState(false);
    const [documentos, setDocumentos] = useState([]);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadData() {
            try {
                setLoading(true);
                const { data: apiDocumentos } = await Axios.get('/v1/normativas?limit=8', {
                    cancelToken: source.token
                });
                setDocumentos(apiDocumentos);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                console.log(error);
                setLoading(false);
            }

        }

        loadData();

        return () => {
            source.cancel('Cancelado');
        }
    }, []);

    if (loading) {
        return <div className="container-xxl py-5">Cargando...</div>
    }

    if (documentos.length === 0) {
        return null;
    }

    return <div className="py-5 border-5 border-top border-bottom border-white">
        <div className="container-xxl">
            <h3 className="mb-3 text- border-left-rounded position-relative ps-3">Documentos de Gestión</h3>
            <Glide options={{
                perView: 6,
                rewind: false,
                bound: true,
                breakpoints: {
                    1000: { perView: 5 },
                    800: { perView: 4 },
                    600: { perView: 3 },
                    400: { perView: 2 },
                }
            }}>
                {documentos.map(documento => (
                    <GlideItem key={documento.id}>
                        <a
                            href={`https://web.munimazamari.gob.pe/admin/contenido/archivos/normatividad/${documento.pdf}`}
                            className="d-block d-flex flex-column text-decoration-none overflow-auto style-scroll carousel-normativa"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ height: '300px' }}>
                            <div className="pt-3 px-2 text-center fw-bold mb-3 lh-sm title" style={{ fontSize: '1rem' }}>{documento.tipo}</div>
                            <div className="px-2 text-center mb-3 flex-auto content" style={{ fontSize: '0.8rem' }}>{documento.descripcion}</div>
                            <div className="pb-3 px-2 text-end mt-auto lh-1 date" style={{ fontSize: '0.7rem' }}>Publicado el {documento.fecha_registro}</div>
                        </a>
                    </GlideItem>
                ))}
            </Glide>
        </div>
    </div>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Alcalde() {
    const [alcalde, setAlcalde] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMiembro() {
            try {
                setLoading(true);
                const { data: apiMiembro } = await Axios.get(`/v1/team/alcalde`);
                setAlcalde(apiMiembro.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        loadMiembro();
    }, []);

    if (loading) {
        return <div className="text-center">Cargando...</div>
    }

    if (!alcalde) {
        return <div className="text-center">No hay nada que mostrar</div>
    }

    return <>
        <Container className="my-5">
            <div className="p-5 rounded-3 bg-white shadow-sm" style={{border: '1px solid var(--grey-300)'}}>
                <h1 className="pb-1 mb-5 text-center border-bottom border-5 border-danger">Alcalde</h1>
                <div className="mb-5 d-flex">
                    <div className="me-4">
                        <div className="ratio ratio-1x1" style={{ width: '300px' }}>
                            <div>
                                <img className="img-object-fit" src={alcalde.image} alt="alcalde de mazamari" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3><span className="px-3 py-1 d-inline-block bg-danger text-white">{alcalde.nombre} {alcalde.apellido}</span></h3>
                        <div className="ms-4 ps-4 border-start border-3 border-danger">
                            {alcalde.cargo && (
                                <div className="mb-3">
                                    <div className="text-smaller mb-1">
                                        <span className="me-2"><i className="fas fa-award" /></span>
                                        <span>Cargo</span>
                                    </div>
                                    <div className="text-small">
                                        <span>
                                            {alcalde.cargo}
                                        </span>
                                    </div>
                                </div>
                            )}
                            {alcalde.grado_academico && (
                                <div className="mb-3">
                                    <div className="text-smaller mb-1">
                                        <span className="me-2"><i className="far fa-graduation-cap" /></span>
                                        <span>Grado acad&eacute;mico</span>
                                    </div>
                                    <div className="text-small text-dark">{alcalde.grado_academico}</div>
                                </div>
                            )}
                            {alcalde.resolucion && (
                                <div className="mb-3">
                                    <div className="text-smaller mb-1">
                                        <span className="me-2"><i className="far fa-handshake" /></span>
                                        <span>Resoluci&oacute;n</span>
                                    </div>
                                    <div className="text-small text-dark">
                                        <button className="me-2 border-0 bg-transparent color-text" onClick={() => download(alcalde.resolucion)}>
                                            <i className="fas fa-cloud-download-alt" /> {'Descargar'}
                                        </button>
                                        <a className="text-decoration-none color-text" href={alcalde.resolucion} target="_blank" rel="noopener noreferrer">
                                            <i className="far fa-eye" /> {'Ver'}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {alcalde.hoja_vida && (
                                <div className="mb-3">
                                    <div className="text-smaller mb-1">
                                        <span className="me-2"><i className="far fa-address-card" /></span>
                                        <span>Hoja de vida</span>
                                    </div>
                                    <div className="text-small text-dark">
                                        <button className="me-2 border-0 bg-transparent color-text" onClick={() => download(alcalde.hoja_vida)}>
                                            <i className="fas fa-cloud-download-alt" /> {'Descargar'}
                                        </button>
                                        <a className="text-decoration-none color-text" href={alcalde.hoja_vida} target="_blank" rel="noopener noreferrer">
                                            <i className="far fa-eye" /> {'Ver'}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <h4>Saludos del alcalde</h4>
                <div className="p-4 border border-3 rounded border-danger" style={{ textAlign: 'justify' }}>
                    {alcalde.mensaje}
                    <div className="mt-4 text-end">¡Gracias por visitarnos!</div>
                </div>
            </div>
        </Container>
    </>
}

async function download(fileUrl, name = '') {
    let fileName = name;
    if (!fileName) {
        const arreglo = fileUrl.split('/');
        const fileNameDownload = arreglo[arreglo.length - 1];
        fileName = fileNameDownload;
    }

    try {
        await Axios({
            url: `/apimuni/download?fichero=${fileUrl}`, //url
            method: 'GET',
            responseType: 'blob', // importante
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); //detalle
            document.body.appendChild(link);
            link.click();
        });
    } catch (error) {
        console.log(error);
    }
}

const Container = (props) => <div className={`container-xxl ${props.className}`}>{props.children}</div>
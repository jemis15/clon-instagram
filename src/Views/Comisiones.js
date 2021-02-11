import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const date = new Date();

export default function Comisiones() {
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(montshOfYear[date.getMonth()]);
    const [linkPdf, setLinkPdf] = useState('https://web.munimazamari.gob.pe/admin/contenido/archivos/agro/1612062300boleta.pdf');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadComision() {
            try {
                setLoading(true);
                const { data: apiComision } = await Axios.get(`/apimuni/comiciones/${year}/${month}`, {
                    cancelToken: source.token
                });
                setLinkPdf(apiComision.linkPdf);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setLinkPdf(null);
                console.log(error);
            }
        }
        loadComision();

        return () => source.cancel('Cancelado');
    }, [year, month]);

    const handleSelectYearChange = e => {
        setYear(e.target.value);
    }
    const handleSelectMonthChange = e => {
        setMonth(e.target.value);
    }

    return <div className="d-flex flex-column" style={{ height: 'calc(100vh - var(--header-height) - var(--topbar-height))' }}>
        {/* filter y boton descargar */}
        <div className="py-2 bg-white">
            <div className="container d-flex justify-content-between align-items-center">
                <h3 className="t3 mb-0">Comisiones de Regidores</h3>
                <div>
                    {loading
                        ? 'cargando...'
                        : <>
                            {linkPdf && <a
                                className="text-decoration-none"
                                href={linkPdf}
                                target="_blank"
                                rel="noopener noreferrer">
                                {'Descargar'}
                            </a>}
                        </>
                    }
                </div>
                <div className="d-flex">
                    <div className="me-3">
                        <div className="d-flex">
                            <label className="align-self-center me-2">A&ntilde;o</label>
                            <select
                                className="form-select text-capitalize"
                                defaultValue={year}
                                onChange={handleSelectYearChange}>
                                {years().map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <label className="align-self-center me-2">Mes</label>
                            <select
                                className="form-select text-capitalize"
                                defaultValue={month}
                                onChange={handleSelectMonthChange}>
                                {montshOfYear.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* contenido embed tipo pdf */}
        {linkPdf
            ? <div className="h-100">
                <embed
                    src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${linkPdf}`}
                    width="100%"
                    height="100%"
                />
            </div>
            : <div className="mt-5 text-center">No hay resultado de comisiones en el mes de {month} del {year}.</div>
        }
    </div >
}

const montshOfYear = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
];

const years = () => {
    let yearActual = new Date().getFullYear();
    let yearFinal = 2019;
    let years = [];

    while (yearFinal < yearActual) {
        years.push(yearActual);
        yearActual--;
    }

    return years;
}
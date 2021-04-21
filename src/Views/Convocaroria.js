import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Convocatoria() {
    const [cas, setCas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [monthCurrent, setMonthCurrent] = useState('');
    const [yearCurrent, setYearCurrent] = useState(new Date().getFullYear());

    const handleSelectMonth = e => setMonthCurrent(e.target.value);
    const handleSelectYear = e => setYearCurrent(e.target.value);

    useEffect(() => {
        async function loadCas() {
            try {
                setLoading(true);
                const { data: apiCas } = await Axios.get(`/v1/cas?year=${yearCurrent}&month=${monthCurrent}&limit=10`);
                setCas(apiCas);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }

        loadCas();
    }, [yearCurrent, monthCurrent]);

    return <div className="py-3 mt-5 rounded-3 container-xxl bg-white shadow-sm" style={{ border: '1px solid var(--grey-300)' }}>
        <div className="mb-4 d-flex">
            <div>
                <h2>Convocatoria CAS</h2>
            </div>
            <div className="ms-auto d-flex">
                <div className="me-2 d-flex align-items-center">
                    <label className="me-2">A&ntilde;o</label>
                    <select className="me-2 form-select" value={yearCurrent} onChange={handleSelectYear}>
                        <option>2021</option>
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <label className="me-2">Mes</label>
                    <select className="form-select" value={monthCurrent} onChange={handleSelectMonth}>
                        <option value="">Todos</option>
                        {[
                            'Enero',
                            'Febrero',
                            'Marzo',
                            'Abril',
                            'Mayo',
                            'Junio',
                            'Julio',
                            'Agosto',
                            'Septiembre',
                            'Octubre',
                            'Novienbre',
                            'Diciembre'
                        ].map((mes, key) => (
                            <option key={key} value={key + 1}>{mes}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-bordered table-sm text-smaller">
                <thead className="table-primary text-primary">
                    <tr>
                        <th>N&uacute;mero</th>
                        <th className="text-center">&Aacute;rea Solicitante</th>
                        <th>Fecha</th>
                        <th>Bases</th>
                        <th>Anexos</th>
                        <th className="text-center">Comunicado 1</th>
                        <th className="text-center">Comunicado 2</th>
                        <th className="text-center">Evaluacion CV</th>
                        <th className="text-center">Comunicado 3</th>
                        <th className="text-center">Evaluaci&oacute;n Psicotecnica</th>
                        <th className="text-center">Comunicado 4</th>
                        <th className="text-center">Resultado Final</th>
                        <th className="text-center">Comunicado 5</th>
                        <th className="text-center">Sub Gerencia</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {loading
                        ? <tr><td colSpan="14" className="text-center">Cargando...</td></tr>
                        : <>
                            {cas.length <= 0
                                ? <tr><td colSpan="14" className="text-center">No encontramos resultados</td></tr>
                                : <>
                                    {cas.map(casItem => (
                                        <tr key={casItem.id}>
                                            <td>{casItem.numero}</td>
                                            <td>{casItem.area}</td>
                                            <td className="text-nowrap">{casItem.fecha}</td>
                                            <td>{casItem.base ? <ButtonDescarga url={casItem.base} /> : '---'}</td>
                                            <td>{casItem.anexo ? <ButtonDescarga url={casItem.anexo} /> : '---'}</td>
                                            <td>{casItem.comunicado1 ? <ButtonDescarga url={casItem.comunicado1} /> : '---'}</td>
                                            <td>{casItem.comunicado2 ? <ButtonDescarga url={casItem.comunicado2} /> : '---'}</td>
                                            <td>{casItem.evaluacion_cv ? <ButtonDescarga url={casItem.evaluacion_cv} /> : '---'}</td>
                                            <td>{casItem.comunicado3 ? <ButtonDescarga url={casItem.comunicado3} /> : '---'}</td>
                                            <td>{casItem.evalucaion_psicotecnia ? <ButtonDescarga url={casItem.evalucaion_psicotecnia} /> : '---'}</td>
                                            <td>{casItem.comunicado4 ? <ButtonDescarga url={casItem.comunicado4} /> : '---'}</td>
                                            <td>{casItem.resultado ? <ButtonDescarga url={casItem.resultado} /> : '---'}</td>
                                            <td>{casItem.comunicado5 ? <ButtonDescarga url={casItem.comunicado5} /> : '---'}</td>
                                            <td>---</td>
                                        </tr>
                                    ))}
                                </>
                            }
                        </>
                    }
                </tbody>
            </table>
        </div>
    </div>
}

const ButtonDescarga = (props) => <a className="link-danger" href={props.url} target="_blank" rel="noopener noreferrer">
    <i className="far fa-file-pdf fa-3x" />
</a>
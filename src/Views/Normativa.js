import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const tipoDeOrdenanza = [
    'ACTAS DE SESION EXTRAORDINARIO',
    'ACTAS DE SESION ORDINARIO',
    'ACUERDOS DE CONSEJO',
    'DECRETOS DE ALCALDIA',
    'DIRECTIVAS',
    'ORDENANZAS MUNICIPAL',
    'RESOLUCIONES DE ALCALDIA',
    'RESOLUCIONES DE CONSEJO',
    'RESOLUCIONES DE GERENCIA'
];

let timeout;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function getYears() {
    let yearInicio = 2015;
    let yearActual = new Date().getFullYear();

    let lista = [];
    while (yearActual >= yearInicio) {
        lista.push(yearActual);
        yearActual--;
    }
    return lista;
}

export default function Normativa() {
    const history = useHistory();
    const query = useQuery();
    const [normativas, setNormativas] = useState([]);
    const [year, setYear] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadNormativa() {
            try {
                setSearching(true);
                const tipo = query.get('tipo') ? query.get('tipo') : '';
                const { data: apiNormativas } = await Axios.get(`/apimuni/normativas?tipo=${tipo}&year=${year}&descripcion=${descripcion}&separador=-`, {
                    cancelToken: source.token
                });
                setNormativas(apiNormativas);
                setSearching(false);
            } catch (error) {
                setSearching(false);
                if (Axios.isCancel) { return; }
                console.log(error);
            }
        }

        timeout = setTimeout(async () => {
            loadNormativa();
        }, 1000);

        return () => {
            clearInterval(timeout);
            source.cancel('Cancelado');
        };
    }, [query.get('tipo'), year, descripcion]);

    function remplazar(expresion, value) {
        let texto = value.split(' ');
        return texto.join(expresion).toLowerCase();
    }

    const handleYearChange = (e) => setYear(e.target.value);
    const handleDescripcionChange = (e) => setDescripcion(e.target.value);

    return <div className="container my-5 overflow-hidden">
        <div className="border rounded-3 bg-white overflow-hidden">
            <h2 className="text-center mb-3 py-3">Busqueda de Normatividad</h2>

            <div className="mx-3">
                <section className="mb-5">
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Tipo normatividad:</label>
                            <select
                                name="nivel"
                                className="form-select"
                                value={query.get('tipo') ? query.get('tipo') : ''}
                                onChange={(e) => history.push({ search: '?tipo=' + e.target.value })}>
                                <option value="">Todas las normas</option>
                                {tipoDeOrdenanza.map(tipoOrdenanza => (
                                    <option key={tipoOrdenanza} value={remplazar('-', tipoOrdenanza)}>{tipoOrdenanza}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Año:</label>
                            <select className="form-select" onChange={handleYearChange}>
                                <option value="">Todos</option>
                                {getYears().map(year => (
                                    <option key={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Descripci&oacute;n:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Descripci&oacute;n"
                                onChange={handleDescripcionChange}
                            />
                        </div>
                    </div>
                </section>


                {/* <div className="mx-auto">
                    <h4>Acuerdos de consejo N 001 2021</h4>
                    <embed
                        src="https://munimazamari.gob.pe/web/pdf/ACUERDO-DE-CONCEJO-N-001-2021-CM-MDM.pdf"
                        type="application/pdf"
                        style={{ width: '100%', height: '500px' }}
                    />
                </div> */}

                <div className="mb-3">
                    <div className="table-responsive bg-white border border-bottom-0 rounded">
                        <table className="mb-0 table table-hover">
                            <thead>
                                <tr className="bg-danger text-white">
                                    <th scope="col">N&uacute;mero</th>
                                    <th scope="col">Descripci&oacute;n</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Aprobaci&oacute;n</th>
                                    <th scope="col">Vigente</th>
                                    <th scope="col">Acci&oacute;n</th>
                                    <th scope="col">Observaci&oacute;n</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(normativas) && normativas.length > 0
                                    ? <>
                                        {searching && <tr><td className="text-center" colSpan="7">Buscando...</td></tr>}
                                        {normativas.map((normativa, key) => (
                                            <TableTr
                                                key={key}
                                                numero={normativa.numero}
                                                descripcion={normativa.descripcion}
                                                tipo={normativa.tipo}
                                                aprobacion={normativa.aprobacion}
                                                vigente={normativa.vigente}
                                                observacion={normativa.observacion}
                                                pdf={normativa.pdf}
                                            />
                                        ))}
                                    </>
                                    : <tr>
                                        <td className="text-center" colSpan="7">
                                            {searching ? 'Buscando...' : 'Sin registro.'}
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function TableTr(props) {
    const [modal, setModal] = useState(false);

    return <>
        <tr className="cursor-pointer" onClick={() => setModal(true)}>
            <th scope="row">{props.numero}</th>
            <td>{props.descripcion}</td>
            <td>{props.tipo}</td>
            <td>{props.aprobacion}</td>
            <td>{props.vigente}</td>
            <td>-------</td>
            <td>{props.observacion}</td>
        </tr>

        <Modal show={modal} onHide={() => setModal(false)} size="lg" animation={false} centered>
            <Modal.Header closeButton>Detalle de la normatividad</Modal.Header>
            <Modal.Body>
                <h3 className="text-center">Titulo del tipo de documento</h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>N&uacute;mero</td>
                                <td>{props.numero}</td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>{props.tipo}</td>
                            </tr>
                            <tr>
                                <td>Fecha de Aprobaci&oacute;n</td>
                                <td>{props.aprobacion}</td>
                            </tr>
                            <tr>
                                <td>Fecha de Publicaci&oacute;n</td>
                                <td>{props.fecha_registro}</td>
                            </tr>
                            <tr>
                                <td>Descripci&oacute;n</td>
                                <td>{props.descripcion}</td>
                            </tr>
                            <tr>
                                <td>Descargar</td>
                                <td>
                                    {props.pdf && (
                                        <a
                                            href={`https://web.munimazamari.gob.pe/admin/contenido/archivos/normatividad/${props.pdf}`}
                                            className="btn btn-sm btn-outline-danger"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <i className="far fa-file-pdf"></i>{' Descargar'}
                                        </a>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-end">
                    <button className="btn btn-primary" onClick={() => setModal(false)}>Cerrar</button>
                </div>
            </Modal.Body>
        </Modal>
    </>
}

const data = [
    {
        id: 1,
        numero: '',
        descripcion: '',
        tipo: '',
        aprobacion: '',
        vigente: '',
        accion: '',
        opcarvacion: '',
        created_at: '',
        pdf: ''
    }
]
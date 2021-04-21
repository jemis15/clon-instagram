import Axios from 'axios';
import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function periodos() {
    var yearInit = 2018;
    var currentYear = new Date().getFullYear();
    let years = [];

    do {
        years.push(currentYear);
        currentYear--;
    } while (currentYear > yearInit);

    return years;
}

export default function MyStyle() {
    const query = useQuery()
    const history = useHistory();
    const { url } = useRouteMatch();
    const [proyectos, setProyectos] = useState(null); // {aprobados: [], ejecucion: [], culminados: []}
    const [gerencias, setGerencias] = useState([]);

    const onChangeGerencia = (e) => {
        history.push(`${url}?gerencia=${e.target.value}`);
    }

    function updateProyectos(proyects, tipo) {
        switch (tipo) {
            case 'aprobados':
                setProyectos({...proyectos, aprobados: proyects});
                break;
            case 'ejecucion':
                setProyectos({...proyectos, ejecucion: proyects});
                break;
            case 'culminados':
                setProyectos({...proyectos, culminados: proyects});
                break;
        }
    }

    useEffect(() => {
        async function loadProyectos() {
            try {
                const { data: apiProyectos } = await Axios.get(`/v1/proyectos?gerencia=${query.get('gerencia').split('-').join(' ')}`);
                setProyectos(apiProyectos);
            } catch (error) {
                console.log(error);
            }
        }

        loadProyectos();
    }, [query.get('gerencia')]);

    useEffect(() => {
        async function loadGerencias() {
            try {
                const { data: apiGerencias } = await Axios.get(`/v1/gerencias`);
                setGerencias(apiGerencias.data);
            } catch (error) {
                console.log(error);
            }
        }

        loadGerencias();
    }, []);

    return <div>
        <Container className="my-5">
            <div className="d-flex mb-4">
                <h3>Proyectos</h3>
                <div className="ms-auto">
                    <select className="form-select" value={query.get('gerencia')} onChange={onChangeGerencia}>
                        {gerencias.map(gerencia => (
                            <option key={gerencia.id} value={gerencia.nombre.split(' ').join('-')}>{gerencia.nombre}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="rounded-3 shadow-sm bg-white" style={{ border: '1px solid var(--grey-300)' }}>
                <div className="p-3">
                    {/* Aprobados */}
                    <Aprobados proyectos={proyectos && proyectos.aprobados} update={updateProyectos} />

                    {/* Ejecucion */}
                    <Ejecucion proyectos={proyectos && proyectos.ejecucion} update={updateProyectos} />

                    {/* Culminados */}
                    <Culminados proyectos={proyectos && proyectos.culminados} update={updateProyectos} />
                </div>
            </div>
        </Container>
    </div>
}

function Proyecto(props) {
    const proyecto = props.proyecto;
    const [modal, setModal] = useState(false);

    return <>
        <div>{proyecto.descripcion}</div>
        {props.porcentaje && <div>{props.porcentaje} %</div>}
        <div><a href={proyecto.pdf} className="btn btn-primary">resumen</a></div>
        <div>
            <button onClick={() => setModal(!modal)}>
                <i className="far fa-file-pdf" />
            </button>
        </div>

        <Modal show={modal} onHide={() => setModal(!modal)} size="lg" animation={false}>
            <Modal.Body>
                <button className="button-close-modal" onClick={() => setModal(!modal)}><i className="far fa-times fa-lg" /></button>
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th className="text-center" colSpan="4">FICHA DE INFORMACI&Oacute;N T&Eacute;CNICA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary" rowSpan="2">Proyectos</td>
                            <td colSpan="3">{proyecto.nombre}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Condigo inversi&oacute;n</td>
                            <td colSpan="2">{proyecto.codigo}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Unidad Ejecutora</td>
                            <td colSpan="3">{proyecto.unidad_ejecutora}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Ubicaci&oacute;n</td>
                            <td colSpan="3">{proyecto.ubicacion}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Objetivo General</td>
                            <td colSpan="3">{proyecto.objetivo}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Justificaci&oacute;n</td>
                            <td colSpan="3">{proyecto.justificacion}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Metas</td>
                            <td colSpan="3">{proyecto.metas}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Modalidad de Ejecuci&oacute;n</td>
                            <td colSpan="3">{proyecto.modalidad}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Entidad Financiera</td>
                            <td colSpan="3">{proyecto.entidad_financiera}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Monto de Inversi&oacute;n</td>
                            <td colSpan="3">{proyecto.monto_inversion}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Poblaci&oacute;n Beneficiaria</td>
                            <td colSpan="3">{proyecto.poblacion_beneficiaria}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary" rowSpan="2">Tiempo de ejecuci&oacute;n</td>
                            <td rowSpan="2">{proyecto.tiempo_ejecucion}</td>
                            <td className="fw-bold table-success text-success border border-primary">Fecha Inicio</td>
                            <td>{proyecto.fecha_inicio}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Fecha Fin</td>
                            <td>{proyecto.fecha_fin}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Principal Actividad</td>
                            <td colSpan="3">{proyecto.actividad_principal}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Resultado Esperado</td>
                            <td colSpan="3">{proyecto.resultado_esperado}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold table-success text-success border border-primary">Inpacto Ambiental</td>
                            <td colSpan="3">{proyecto.impacto_ambiental}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    </>
}

const Aprobados = (props) => {
    const proyectos = Array.isArray(props.proyectos) ? props.proyectos : [];
    const [periodo, setPeriodo] = useState('');
    const query = useQuery();

    async function changePeriodo(e) {
        const value = e.target.value;
        const source = Axios.CancelToken.source();
        try {
            const { data: apiProyectos } = await Axios.get(`/v1/proyectos?gerencia=${query.get('gerencia').split('-').join(' ')}&estado=aprobado&periodo=${value}`, {
                cancelToken: source.token
            });
            props.update(apiProyectos, 'aprobados');
        } catch (error) {
            console.log(error);
        }
        setPeriodo(value);
    }

    return <div>
        <div className="px-3 py-2 bg-white border rounded-3 d-flex align-items-center shadow-sm" style={{ border: '1px solid var(--grey-300' }}>
            <div>Aprobados:</div>
            <div className="ms-auto d-flex align-items-center">
                <div className="me-2">Periodo</div>
                <select className="me-2 form-select" value={periodo} onChange={changePeriodo}>
                    <option value="">Todos</option>
                    {periodos().map(periodo => (
                        <option key={periodo}>{periodo}</option>
                    ))}
                </select>
                <button
                    className="btn btn-sm btn-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aprobados-collapse"
                    aria-expanded="false">
                    <i className="fas fa-sort-down" />
                </button>
            </div>
        </div>

        <div className="collapse" id="aprobados-collapse">
            <div className="mt-3 px-3 prueba">
                <div></div>
                <div className="text-center">Resumen</div>
                <div className="text-center">PDF</div>

                {proyectos.map(proyecto => (
                    <Proyecto key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>
        </div>
    </div>
}

const Ejecucion = (props) => {
    const proyectos = Array.isArray(props.proyectos) ? props.proyectos : [];
    const query = useQuery();
    const [periodo, setPeriodo] = useState('');

    async function changePeriodo(e) {
        const value = e.target.value;
        const source = Axios.CancelToken.source();
        try {
            const { data: apiProyectos } = await Axios.get(`/v1/proyectos?gerencia=${query.get('gerencia').split('-').join(' ')}&porcentaje=ejecucion&periodo=${value}`, {
                cancelToken: source.token
            });
            props.update(apiProyectos, 'ejecucion');
        } catch (error) {
            console.log(error);
        }
        setPeriodo(value);
    }

    return <div>
        <div className="mt-3 px-3 py-2 bg-white border rounded-3 d-flex align-items-center shadow-sm" style={{ border: '1px solid var(--grey-300' }}>
            <div>Ejecuci&oacute;n:</div>
            <div className="ms-auto d-flex align-items-center">
                <div className="me-2">Periodo</div>
                <select className="me-2 form-select" value={periodo} onChange={changePeriodo}>
                    <option value="">Todos</option>
                    {periodos().map(periodo => (
                        <option key={periodo}>{periodo}</option>
                    ))}
                </select>
                <button
                    className="btn btn-sm btn-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ejecucion-collapse"
                    aria-expanded="false">
                    <i className="fas fa-sort-down" />
                </button>
            </div>
        </div>

        <div className="collapse" id="ejecucion-collapse">
            <div className="mt-3 px-3 prueba-1">
                <div></div>
                <div><i className="fas fa-percentage" /></div>
                <div className="text-center">Resumen</div>
                <div className="text-center">PDF</div>

                {proyectos.map(proyecto => (
                    <Proyecto key={proyecto.id} proyecto={proyecto} porcentaje={proyecto.avance} />
                ))}
            </div>
        </div>
    </div>
}
const Culminados = (props) => {
    const proyectos = Array.isArray(props.proyectos) ? props.proyectos : [];
    const query = useQuery();
    const [periodo, setPeriodo] = useState('');

    async function changePeriodo(e) {
        const value = e.target.value;
        const source = Axios.CancelToken.source();
        try {
            const { data: apiProyectos } = await Axios.get(`/v1/proyectos?gerencia=${query.get('gerencia').split('-').join(' ')}&estado=finalizado&periodo=${value}`, {
                cancelToken: source.token
            });
            props.update(apiProyectos, 'culminados');
        } catch (error) {
            console.log(error);
        }
        setPeriodo(value);
    }

    return <div>
        <div className="mt-3 px-3 py-2 bg-white border rounded-3 d-flex align-items-center shadow-sm" style={{ border: '1px solid var(--grey-300' }}>
            <div>Culminados:</div>
            <div className="ms-auto d-flex align-items-center">
                <div className="me-2">Periodo</div>
                <select className="me-2 form-select" value={periodo} onChange={changePeriodo}>
                    <option value="">Todos</option>
                    {periodos().map(periodo => (
                        <option key={periodo}>{periodo}</option>
                    ))}
                </select>
                <button
                    className="btn btn-sm btn-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#culminados-collapse"
                    aria-expanded="false">
                    <i className="fas fa-sort-down" />
                </button>
            </div>
        </div>

        <div className="collapse" id="culminados-collapse">
            <div className="mt-3 px-3 prueba">
                <div></div>
                <div className="text-center">Resumen</div>
                <div className="text-center">PDF</div>

                {proyectos.map(proyecto => (
                    <Proyecto key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>
        </div>
    </div>
}

const Container = (props) => <div className={`container-xxl ${props.className}`}>{props.children}</div>
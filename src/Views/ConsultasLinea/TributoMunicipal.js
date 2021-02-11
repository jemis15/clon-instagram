import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionContext, Card, ListGroup, Tab, Tabs, useAccordionToggle } from 'react-bootstrap';

export default function TributoMunicipal() {
    const [group1, setGroup1] = useState([]);
    const [group2, setGroup2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadFiles() {
            try {
                setLoading(true);
                const [apiGroup1, apiGroup2] = await Promise.all([
                    Axios.get('/apimuni/informacion?section=tributo-municipal&grupo=1', { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/apimuni/informacion?section=tributo-municipal&grupo=2', { cancelToken: source.token }).then(({ data }) => data),
                ]);
                setGroup1(apiGroup1);
                setGroup2(apiGroup2);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (Axios.isCancel()) { return; }
                setError(' Sucedio algo inesperado, vuelve a intentarlo mas tarde.');
                console.log(error);
            }
        }
        loadFiles();

        return () => source.cancel('Cancelado');
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return <>
        <h3 className="mb-4 mt-5">Tributo Municipal</h3>
        <Tabs className="d-flex" defaultActiveKey="home" transition={false} id="noanim-tab-example">
            {/* Tab Consulta */}
            <Tab eventKey="home" title="Consulta" className="bg-white border rounded-bottom border-top-0 px-3 py-4">
                <div className="card mx-auto mb-4" style={{ maxWidth: '350px' }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">C&oacute;digo Municipal</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Clave Virtual</label>
                                <input className="form-control" type="password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                        </form>
                    </div>
                </div>
                <p className="text-small mb-0">
                    Si desconoces tu C&oacute;digo Municipal y/o Clave Virtual, puedes solicitarlo a trav&eacute;s de
                    la Unidad de Cobranzas en la Gerencia de Gesti&oacute;n Tributaria: llamando al
                    {' '}<span className="text-primary fw-bold">(064) 548187</span> o escr&iacute;benos tu nombre completo y escanea tu documento de identidad a
                    {' '}<span className="text-primary fw-bold">munimazamarimcm@hotmail.com</span>.
                </p>
            </Tab>

            {/* Tab Documentos */}
            <Tab eventKey="profile" title="Informaci&oacute;n" className="bg-white border rounded-bottom border-top-0 px-3 py-4">
                {loading ? <p>Cargando...</p> : <>
                    {error ? <p className="text-danger">{error}</p> : <>
                        {Array.isArray(group1) && group1.length > 0
                            ? <>
                                <h4 className="mb-3">Documentos</h4>
                                <Accordion className="mb-5">
                                    {group1.map(grupo => (
                                        <Card className="mb-1">
                                            <CardHeaderToggle label={grupo.nombre} number={grupo.files.length} eventKey={grupo.ids} />
                                            <Accordion.Collapse eventKey={grupo.ids}>
                                                <ListGroup variant="flush">
                                                    {grupo.files.map(file => (
                                                        <ListGroup.Item className="d-flex align-items-center">
                                                            <div className="font-weight-600">{file.nombre}</div>
                                                            <div className="ms-auto">
                                                                {file.pdf && <ButtonDrowload url={file.pdf} />}
                                                            </div>
                                                        </ListGroup.Item>
                                                    ))}
                                                </ListGroup>
                                            </Accordion.Collapse>
                                        </Card>
                                    ))}
                                </Accordion>
                            </>
                            : <p>No encontranos nada que mostrar.</p>
                        }

                        {Array.isArray(group2) && group2.length > 0 && <>
                            <h4 className="mb-3">Consejo Nacional de Tasaciones</h4>
                            <Accordion className="mb-5">
                                {group2.map(grupo => (
                                    <Card className="mb-1">
                                        <CardHeaderToggle label={grupo.nombre} number={grupo.files.length} eventKey={grupo.ids} />
                                        <Accordion.Collapse eventKey={grupo.ids}>
                                            <ListGroup variant="flush">
                                                {grupo.files.map(file => (
                                                    <ListGroup.Item className="d-flex align-items-center">
                                                        <div className="font-weight-600">{file.nombre}</div>
                                                        <div className="ms-auto">
                                                            {file.pdf && <ButtonDrowload url={file.pdf} />}
                                                        </div>
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </>}
                    </>}
                </>}
            </Tab>
        </Tabs>
    </>
}

// hecho con la documentacion de react-bootstrap
function CardHeaderToggle({ label, number, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <Card.Header className="clearfix" onClick={decoratedOnClick}>
            <div className="float-start">{label}</div>
            <div className="float-end">
                {number > 0 && <span className="me-3 px-3 py-1 text-small bg-danger text-white d-online-block rounded-pill">{number} archivos</span>}
                {isCurrentEventKey
                    ? <i className="far fa-minus" />
                    : <i className="far fa-plus" />
                }
            </div>
        </Card.Header>
    );
}

const ButtonDrowload = ({ url }) => (
    <a className="btn btn-sm btn-primary" href={url} target="_blank" rel="noopener noreferrer">
        <i className="far fa-file-pdf" /> {'Descargar'}
    </a>
) 
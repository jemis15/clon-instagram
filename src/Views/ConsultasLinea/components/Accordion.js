import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionToggle, Button, Card, ListGroup, useAccordionToggle } from 'react-bootstrap';

// hecho con la documentacion de react-bootstrap
function CardHeaderToggle({ label, number, eventKey, callback }) {
    const currentEventKey = useContext(AccordionToggle);
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

const ButtonDownload = ({ url }) => (
    <a className="btn btn-sm btn-primary" href={url} target="_blank" rel="noopener noreferrer">
        <i className="far fa-file-pdf" /> {'Descargar'}
    </a>
)

function File() {
    return <li className="border-bottom py-2">
        <div className="float-right">
            <Button type="submit" className="btn-success btn-sm">Descargar<i className="far fa-file-pdf pl-2"></i></Button>
        </div>
        <p>2.- Formulario N° 00022020</p>
    </li>
}

export default function Informacion(props) {
    const [informacion, setInformacion] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadInformacion() {
            try {
                setLoading(true);
                const { data: apiInformacion } = await Axios.get(`/v1/informaciones?group=${props.grupo}`, {
                    cancelToken: source.token
                });
                setInformacion(apiInformacion);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                setLoading(false);
                setError('Se a producido un error desconocido. Vuelve a intentar mas tarde.');
                console.log(error);
            }
        }
        loadInformacion();
        return () => source.cancel('Cancelado')
    }, [props.grupo]);

    if (loading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    if (!Array.isArray(informacion) || informacion.length === 0) {
        return <p>Esta secci&oacute;n esta vac&iacute;a.</p>
    }

    return <>
        {informacion.map((info, key) => <React.Fragment key={key}>
            {info.groupname && <h4 className="mb-3">{info.groupname}</h4>}
            <Accordion className="mb-5">
                {Array.isArray(info.grupos) && info.grupos.map(grupo => (
                    <Card className="mb-1" key={grupo.ids}>
                        <CardHeaderToggle label={grupo.grupo} number={grupo.files.length} eventKey={grupo.ids} />
                        <Accordion.Collapse eventKey={grupo.ids}>
                            <ListGroup variant="flush">
                                {grupo.files.map(file => (
                                    <ListGroup.Item key={file.id} className="d-flex align-items-center">
                                        <div className="font-weight-600">{file.nombre}</div>
                                        <div className="ms-auto">
                                            <ButtonDownload url={file.pdf} />
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </React.Fragment>
        )}
    </>
}

export { File, ButtonDownload, CardHeaderToggle };
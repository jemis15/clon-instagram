import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import Cuadro, { CuadroLeft, CuadroRight } from '../components/Cuadro';

export default function Lista() {
    const history = useHistory();
    const [gastronomias, setGastronomias] = useState([]);
    const [modal, setModal] = useState(false);
    const [nombre, setNombre] = useState(null);
    const [loadingCargaGastronomias, setLoadingCargaGastronomias] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        // cargar las gastronomias
        async function loadTurismos() {
            try {
                // cangando gastronomias = true
                setLoadingCargaGastronomias(true);

                // peticion para obtener toda las gastronomias
                const { data: apiGastronomias } = await Axios.get('/apimuni/gastronomias', { cancelToken: source.token });
                // guardando las gastronomias
                setGastronomias(apiGastronomias);

                // finalizando la carga de gastronomias
                setLoadingCargaGastronomias(false);
            } catch (error) {
                if (Axios.isCancel) { return; }
                console.log(error);

                // finalizando la carga de gastronomias
                setLoadingCargaGastronomias(false);
            }
        }

        loadTurismos();

        return () => source.cancel('Cancelado');
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        // objeto con datos de gastronomia que se creara por defecto
        const gastronomia = {
            nombre,
            titulo: nombre,
            descripcion: 'Ingrese una descripcion',
            contenido: '',
        }
        try {
            const { data: apiGastronomia } = await Axios({
                method: 'post',
                url: '/apimuni/gastronomias',
                params: gastronomia
            });
            history.push(`/frame/gastronomias/${apiGastronomia.id}`);
        } catch (error) {
            console.log(error);
        }
    }

    const toggle = () => setModal(!modal);

    return <>
        <Cuadro>
            <CuadroLeft>
                <div className="clearfix">
                    <Button
                        className="float-right"
                        size="sm"
                        onClick={toggle}>
                        <i className="fas fa-plus mr-2" />
                        <span>Nueva gastronomia</span>
                    </Button>
                    <h4 className="mb-5">Encabezado</h4>
                </div>

                {loadingCargaGastronomias ? <>
                    <LoadingCargaGastronomias />
                </> : <>
                        {gastronomias.map(gastronomia => (
                            <Link key={gastronomia.id}
                                to={`/frame/gastronomias/${gastronomia.id}`}
                                className="text-decoration-none">
                                <Row className="py-3 lista-item-turismo cursor-pointer">
                                    <Col xs="4">
                                        {gastronomia.image ? (
                                            <img src={`/apimuni/images/gastronomias/${gastronomia.image}`} className="img-fluid" />
                                        ) : (
                                                <div className="border rounded bg-light d-flex justify-content-center align-items-center" style={{ height: '5rem' }}>
                                                    <span>Sin imagen</span>
                                                </div>
                                            )}
                                    </Col>
                                    <Col xs="8">
                                        <h4>{gastronomia.titulo}</h4>
                                        <p>{gastronomia.descripcion}</p>
                                    </Col>
                                </Row>
                            </Link>
                        ))}
                    </>}

            </CuadroLeft>
            <CuadroRight>
                <p>Vacio</p>
            </CuadroRight>
        </Cuadro>

        <Modal show={modal} onHide={toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Nueva gastronomia</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <label>Nombre para la gastronomia</label>
                        <Form.Control
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={toggle}>Cancelar</Button>
                    <Button type="submit">Crear</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
}

function LoadingCargaGastronomias() {
    return <>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
        <div className="frame-loading-turismo mb-4 rounded"></div>
    </>
}
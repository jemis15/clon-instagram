import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import Cuadro, { CuadroLeft, CuadroRight } from '../components/Cuadro';

export default function Lista() {
    const history = useHistory();
    const [turismos, setTurismos] = useState([]);
    const [modal, setModal] = useState(false);
    const [nombre, setNombre] = useState(null);
    const [loadingCargaTurismos, setLoadingCargaTurismos] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        // cargar los lugares turisticos
        async function loadTurismos() {
            try {
                // cangando lugares turisticos = true
                setLoadingCargaTurismos(true);

                // peticion para obtener todo los lugares turisticos
                const { data: turismo } = await Axios.get('/apimuni/turismos', { cancelToken: source.token });
                // guardando los lugares turistico
                setTurismos(turismo);

                // finalizando la carga de turismos
                setLoadingCargaTurismos(false);
            } catch (error) {
                if (Axios.isCancel) { return; }
                console.log(error);

                // finalizando la carga de turismos
                setLoadingCargaTurismos(false);
            }
        }

        loadTurismos();

        return () => source.cancel('Cancelado');
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        // objeto con datos de turismo que se creara por defecto
        const turismo = {
            nombre,
            titulo: 'Ingrese un titulo',
            descripcion: 'Ingrese una descripcion',
            contenido: '',
        }
        try {
            const { data: apiTurismo } = await Axios({
                method: 'post',
                url: '/apimuni/turismos',
                params: turismo
            });
            history.push(`/frame/turismos/${apiTurismo.id}`);
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
                        <span>Nuevo turismo</span>
                    </Button>
                    <h4 className="mb-5">Encabezado</h4>
                </div>

                {loadingCargaTurismos ? <>
                    <LoadingCargaTurismo />
                </> : <>
                        {turismos.map(turismo => (
                            <Link key={turismo.id}
                                to={`/frame/turismos/${turismo.id}`}
                                className="text-decoration-none">
                                <Row className="py-3 lista-item-turismo cursor-pointer">
                                    <Col xs="4">
                                        {turismo.image ? (
                                            <img src={`/apimuni/images/turismos/${turismo.image}`} className="img-fluid" />
                                        ) : (
                                                <div className="border rounded bg-light d-flex justify-content-center align-items-center" style={{ height: '5rem' }}>
                                                    <span>Sin imagen</span>
                                                </div>
                                            )}
                                    </Col>
                                    <Col xs="8">
                                        <h4>{turismo.titulo}</h4>
                                        <p>{turismo.descripcion}</p>
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
                <Modal.Title>Nuevo lugar turistico</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <label>Nombre para el lugar turistico</label>
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

function LoadingCargaTurismo() {
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
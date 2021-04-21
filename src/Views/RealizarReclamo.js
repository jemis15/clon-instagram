import Axios from 'axios';
import React, { useReducer, useState } from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';

import ubigeoProvincias from '../assets/data/ubigeo_peru_2016_provincias.json';
import ubigeoDistritos from '../assets/data/ubigeo_peru_2016_distritos.json';
import { useHistory } from 'react-router-dom';

const areaDeReclamos = [
    { id: 1, nombre: 'Area de reclamo 1' },
    { id: 2, nombre: 'Area de reclamo 2' },
    { id: 3, nombre: 'Area de reclamo 3' },
    { id: 4, nombre: 'Area de reclamo 4' },
    { id: 5, nombre: 'Area de reclamo 5' },
    { id: 6, nombre: 'Area de reclamo 6' }
];
const tematicas = [
    { id: 1, nombre: 'Tema 1' },
    { id: 2, nombre: 'Tema 2' },
    { id: 3, nombre: 'Tema 3' },
    { id: 4, nombre: 'Tema 4' },
    { id: 5, nombre: 'Tema 5' },
    { id: 6, nombre: 'Tema 6' }
];

const initState = {
    tipoIncidencia: '',
    //datos del usuario
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    provincia: '',
    distrito: '',
    email: '',
    celular: '',
    telefono: '',
    //detalleincidencia
    areaReclamo: '',
    tematica: '',
    descripcionIncidencia: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return { ...state, [action.name]: action.value };
        case 'reset':
            return action.payload;

        default:
            break;
    }
};

export default function RealizarReclamo() {
    const history = useHistory();
    const [state, dispatch] = useReducer(reducer, initState)
    const [provincias, setProvincias] = useState(ubigeoProvincias.filter(provincia => provincia.department_id === '12'));
    const [distritos, setDistritos] = useState([]);
    const [sending, setSending] = useState(false);
    const [buscandoPersona, setBuscandoPersona] = useState(false);
    const [isAnonimo, setSetIsAnonimo] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault();
        if (sending) return;

        try {
            setSending(true);
            const { data: apiLibro } = await Axios({
                method: 'post',
                url: '/v1/libroreclamaciones/create',
                data: state
            });
            if (isAnonimo) {
                history.push(`/libroreclamaciones/${apiLibro.libroId2}?type=anonimo`);
            } else {
                history.push(`/libroreclamaciones/${apiLibro.numeroDocumento}`);
            }
        } catch (error) {
            console.log(error);
            setSending(false);
        }
    }

    function handleSelectProvinciaChange(e) {
        const provincia = ubigeoProvincias.find(distrito => distrito.name === e.target.value);
        setDistritos(ubigeoDistritos.filter(distrito => distrito.province_id === provincia.id));
        dispatch({ type: 'change', name: 'provincia', value: e.target.value });
    }

    async function searchPersonaByDocumento() {
        if (buscandoPersona) return;

        try {
            setBuscandoPersona(true);
            const { data: dataPersona } = await Axios.get('https://apiperu.dev/api/dni/71118137', {
                headers: {
                    Authorization: 'Bearer b2170dc7bbee5b60a4e6e23519f10c52e996ada5fbb17907eb29cb1d892accc7'
                }
            });
            dispatch({ type: 'change', name: 'nombres', value: dataPersona.data.nombres })
            dispatch({ type: 'change', name: 'apellidos', value: dataPersona.data.apellido_paterno + ' ' + dataPersona.data.apellido_materno });
            setBuscandoPersona(false);
        } catch (error) {
            console.log(error);
            setBuscandoPersona(false);
        }
    }

    function handleInputChange(e) {
        const element = e.target;
        dispatch({ type: 'change', name: element.name, value: element.value });
    }

    return <div className="container my-5 shadow" style={{ border: '2px solid #008000' }}>
        <div className="mx-n3 " style={{ backgroundColor: "#008000" }} >
            <h3 className="text-center px-n2  p-3 mb-0" style={{ color: 'white' }}>REGISTRO RECLAMOS Y SUGERENCIAS </h3>
        </div>
        <div className="mensaje  text-center pl-5 pr-5 mx-n3 pt-3 pb-3 mb-3 mt-0" style={{ background: '#F1EEED' }}>
            <p>¡TE ESCUCHAMOS!</p>
            <p>Estás en el sistema de reclamos y sugerencias. Aquí podrás realizar el registro de un reclamo, una sugerencia, una denuncia o la solicitud de orientación con relación a cualquier servicio público que brinda la corporación municipal.</p>
        </div>
        <Form onSubmit={handleSubmit}>
            <Card>
                <Card.Header style={{
                    background: '#008000',
                    color: 'white',
                    borderBottom: '3px solid #EDD016'
                }}>PARÁMETROS DE LA INCIDENCIA</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tipificación de la Incidencia</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="tipoIncidencia"
                                    value={state.tipoIncidencia}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="">--Seleccione--</option>
                                    <option value="RECLAMOS">Reclamos</option>
                                    <option value="SUGERENCIAS">Sugerencias</option>
                                    <option value="ORIENTACIONES">Orientaciones</option>
                                    <option value="DENUNCIA">Denuncia</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group >
                                <Form.Label>Realizar la Incidencia de Manera</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={(e) => setSetIsAnonimo(e.target.value === 'anonimo' ? true : false)}
                                    required>
                                    <option value="">--Seleccione--</option>
                                    <option value="anonimo">Anónima</option>
                                    <option value="con reserva de datos">Con Reserva de datos</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {!isAnonimo && (
                <Card className="mt-5">
                    <Card.Header style={{
                        background: '#008000',
                        color: 'white',
                        borderBottom: '3px solid #EDD016'
                    }}>DATOS DEL CIUDADANO</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Tipo Documento</Form.Label>
                                    <Form.Control as="select" name="tipoDocumento" onChange={handleInputChange} required>
                                        <option value="">--Seleccione--</option>
                                        <option value="DNI">DNI</option>
                                        <option value="CE">CE</option>
                                        <option value="RUC">RUC</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombres"
                                        name="nombres"
                                        value={state.nombres}
                                        onChange={handleInputChange}
                                        autoComplete="off"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Direcci&oacute;n</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Dirección"
                                        name="direccion"
                                        value={state.direccion}
                                        onChange={handleInputChange}
                                        autoComplete="off"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Distrito</Form.Label>
                                    <Form.Control as="select" name="distrito" onChange={handleInputChange} required>
                                        <option value="">--Seleccione--</option>
                                        {distritos.map(distrito => (
                                            <option key={distrito.id} value={distrito.name}>{distrito.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Teléfono Celular</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Teléfono Celular"
                                        name="celular"
                                        value={state.celular}
                                        onChange={handleInputChange}
                                        autoComplete="off"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>N° Documento</Form.Label>
                                    {state.tipoDocumento === "CE" || state.tipoDocumento === ""
                                        ? <Form.Control
                                            type="number"
                                            name="numeroDocumento"
                                            value={state.numeroDocumento}
                                            onChange={handleInputChange}
                                        />
                                        : <div className="input-group mb-2">
                                            <Form.Control
                                                type="number"
                                                placeholder="N° Documento"
                                                name="numeroDocumento"
                                                onChange={handleInputChange}
                                                value={state.numeroDocumento}
                                                disabled={buscandoPersona}
                                                autoComplete="off"
                                            />
                                            <div className="input-group-append">
                                                <Button
                                                    type="button"
                                                    onClick={searchPersonaByDocumento}
                                                    disabled={buscandoPersona}>
                                                    <i className="fas fa-search" />
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="apellidos"
                                        value={state.apellidos}
                                        onChange={handleInputChange}
                                        placeholder="Apellidos"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Provincia</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="provincia"
                                        value={state.provincia}
                                        onChange={handleSelectProvinciaChange}
                                        required>
                                        <option value="">--Seleccione--</option>
                                        {provincias.map(provincia => (
                                            <option key={provincia.id} value={provincia.name}>{provincia.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        autoComplete="off"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Teléfono Fijo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="telefono"
                                        value={state.telefono}
                                        onChange={handleInputChange}
                                        placeholder="Teléfono Celular"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            )}
            <Card className="mt-5">
                <Card.Header style={{
                    background: '#008000',
                    color: 'white',
                    borderBottom: '3px solid #EDD016'
                }}>DETALLE DE LA INCIDENCIA</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Form.Group >
                                <Form.Label>Área de reclamo o de la sugerencia</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="areaReclamo"
                                    value={state.areaReclamo}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="">--Seleccione--</option>
                                    {areaDeReclamos.map(area => (
                                        <option key={area.id} value={area.nombre}>{area.nombre}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group >
                                <Form.Label>Tématica</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="tematica"
                                    value={state.tematica}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="">--Seleccione--</option>
                                    {tematicas.map(tematica => (
                                        <option key={tematica.id} value={tematica.nombre}>{tematica.nombre}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Label>Descripción de la incidencia</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="descripcionIncidencia"
                            value={state.descripcionIncidencia}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>

            <div className="text-center mt-5 mb-3">
                <Button className="mr-2" variant="secondary" size="lg">Cancelar</Button>
                <Button size="lg" type="submit">{sending ? 'Enviando...' : 'Reclamar'}</Button>
            </div>
        </Form>
    </div>
}
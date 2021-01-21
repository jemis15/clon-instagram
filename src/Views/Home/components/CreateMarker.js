import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { PortalContent, PortalHeader } from '../../../components/MyPortal';
import CircleBadge from './CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';

export default function CreateNarker({ onHide, showAlert, grupo, updateNewMarker }) {
    const [marker, setMarker] = useState({
        image: '',
        nombre: '',
        descripcion: '',
        url: '',
        marker_tipo_id: ''
    });
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });
    const [markersTipo, setMarkersTipo] = useState([]);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        async function loadMarkerTipo() {
            try {
                const { data: apiMarkersTipo } = await Axios.get('/apimuni/markertipo');
                setMarkersTipo(apiMarkersTipo);
            } catch (error) {
                console.log(error);
                onHide();
            }
        }

        loadMarkerTipo();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        // verificando que se haya seleccionado una imagen
        if (image.formImage === '' && image.base64 === '') {
            alert('Seleccione una imagen');
            return null;
        }

        if (sending) {
            return;
        }

        try {
            setSending(true);
            const formData = new FormData();
            formData.append('image', image.formImage);
            formData.append('path', 'markers');

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }

            const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData, config);
            const { data: apiMarker } = await Axios({
                method: 'post',
                url: '/apimuni/markers',
                params: { ...marker, image: apiImage.name }
            });
            const markerTipoSeleccionado = markersTipo.find(markerTipo => markerTipo.id === parseInt(apiMarker.marker_tipo_id));
            updateNewMarker({
                ...apiMarker,
                marker_tipo: markerTipoSeleccionado
            });
            showAlert('success', '1 marker agregado');
            onHide();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upps algo salio mal, vuelva a intentar mas tarde');
            setSending(false);
        }
    }

    async function handleSelectImage(e) {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        setImage({
            formImage: file,
            base64: await new Promise(resolve => {
                const reader = new FileReader()
                reader.addEventListener('load', () => resolve(reader.result), false)
                reader.readAsDataURL(file)
            })
        });
    }

    function handleInputChange(e) {
        setMarker({ ...marker, [e.target.name]: e.target.value });
    }

    return <PortalContent className="d-flex bg-grey-300 overflow-auto" style={{ maxHeight: '100vh' }}>
        <Form onSubmit={handleSubmit}>
            <div className="sidebar-portal d-flex flex-column bg-white h-100 shadow-sm overflow-hidden"
                style={{ width: '350px', maxHeight: '100vh' }}>
                <PortalHeader
                    className="bg-white shadow-sm"
                    onHide={onHide}
                />
                <div className="m-3">
                    <h2>Crear link</h2>
                </div>
                <div className="flex-fill overflow-auto h-100">
                    <div className="px-3">
                        <div className="mb-3">
                            <label>Imagen</label>
                            <label
                                className="d-flex justify-content-center align-items-center cursor-pointer rounded-lg"
                                style={{
                                    height: '150px',
                                    border: '1px dashed var(--grey-400)'
                                }}>
                                <div className="py-2 px-3 bg-grey-300 rounded">
                                    <i className="far fa-image mr-2" />
                                    <span className="text-small font-weight-700">Seleccionar imagen</span>
                                </div>
                                <input
                                    type="file"
                                    className="d-none"
                                    onChange={handleSelectImage}
                                    accept="image/*"
                                    required
                                />
                            </label>
                        </div>
                        <Form.Group>
                            <label>T&iacute;tulo del link</label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={marker.nombre}
                                onChange={handleInputChange}
                                autoComplete="off"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <label>Descripci&oacute;n (opcional)</label>
                            <Form.Control
                                as="textarea"
                                name="descripcion"
                                value={marker.descripcion}
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                        </Form.Group>
                        <Form.Group>
                            <label>Direcci&oacute;n web a redireccionar</label>
                            <Form.Control
                                type="url"
                                name="url"
                                value={marker.url}
                                onChange={handleInputChange}
                                placeholder="https://munimazamari.gob.pe"
                                autoComplete="off"
                                required
                            />
                            {marker.url && (
                                <div className="text-small text-primary mt-1 text-truncate">
                                    <span className="mr-2"><i className="far fa-link" /></span>
                                    <a href={marker.url} target="_blank">{marker.url}</a>
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <label>Tipo de marker</label>
                            <Form.Control as="select" name="marker_tipo_id" onChange={handleInputChange}>
                                <option>Seleccione</option>
                                {markersTipo.map(markerTipo => (
                                    <option key={markerTipo.id} value={markerTipo.id}>{markerTipo.nombre}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div className="shadow mt-auto p-3 border-top">
                    <Button type="submit" block>
                        {sending ? 'Creando...' : 'Creando'}
                    </Button>
                </div>
            </div>
        </Form>
        <div className="main-portal flex-fill h-100 d-flex justify-content-center align-items-center">
            <div
                className="bg-white rounded-lg shadow p-3"
                style={{ width: '100%', maxWidth: '450px' }}>
                <h5 className="mb-3">Vista previa</h5>
                <div
                    className="rounded-lg d-flex">
                    <div className="mr-3">
                        <CircleBadge>
                            {image.base64
                                ? <CircleBadgeIcon image={image.base64} />
                                : <i className="far fa-image" />
                            }
                        </CircleBadge>
                    </div>
                    <div>
                        <div className="font-weight-600">
                            {marker.nombre ? marker.nombre : 'Titulo'}
                        </div>
                        <div className="text-small color-text-light">
                            {marker.descripcion ? marker.descripcion : 'Descripcion'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PortalContent>
}

const grupos = [
    { id: 1, nombre: 'facebook' },
    { id: 2, nombre: 'youtube' },
    { id: 3, nombre: 'noticas' },
    { id: 4, nombre: 'correos' },
]
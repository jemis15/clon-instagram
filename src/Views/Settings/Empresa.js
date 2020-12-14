import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import Cropper from 'react-easy-crop';

import logo from '../../assets/images/logo.png';
import { getCroppedImg } from '../../Helpers/canvas-helper';
import Loading from './components/Loading';

import Title from './components/Title';

export default function Empresa({ data, showAlert, updateSettings }) {
    const [settings, setSettings] = useState(data);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const { data: apiSetting } = await Axios.get(`/apimuni/settings`);
                setSettings(apiSetting);
                setLoading(false)
            } catch (error) {
                console.log(error.error);
                setLoading(false)
            }
        }

        loadData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true)

            await Axios({
                method: 'patch',
                url: '/apimuni/settings',
                params: settings
            });
            setSettings(settings);
            updateSettings(settings)
            showAlert('success', "Configuración guardada")
            setSending(false)
        } catch (error) {
            console.log(error);
            showAlert('error', "Upps, sucedio algo inesperado, vuelve a intertar mas tarde.")
            setSending(false)
        }
    }

    async function handleSelectImage(e) {
        const file = e.target.files[0];

        // finalizamos si no se selecciono una imagen.
        if (!file) {
            return;
        }

        if (file.type.indexOf('image/') === -1) {
            alert('Esto no parese ser una imagen');
            return;
        }

        // caculamos el tamaño de imagen
        const size = Math.round((file.size * 100) / 1024 / 1024) / 100;
        // validando el tamaño de imagen
        // size > 5MB finalizamos la operacion
        // size > 1MB mostramos una alerta
        if (size > 5) {
            alert('Upps la imagen seleccionada es muy pesado(a), Por motivos de rendimiento de la pagina cancelamos la accion.');
            return;
        }
        if (size > 1) {
            setError(`Tamaño de la imagen es de ${size}MB, Se recomienda usar una imagen menor a 1MB, el rendimiento de la pagina sera mejor.`)
        } else {
            error && setError(null);
        }

        // cambiar logo
        try {
            // formulamos los valores a enviar al servidor
            var formData = new FormData;
            formData.append('image', file);// tipo file
            formData.append('path', 'settings');// nombre de carpeta

            /**
             * apiImage {
             *  name: 'image.extencion'
             *  path: '/carpeta/...'
             *  pathName: '/carpeta/.../image.extencion'
             * }
             */
            const { data: apiFullPathLogo } = await Axios.post('/apimuni/settings/upload/logo', formData);
            setSettings({ ...setSettings, logo: apiFullPathLogo });
        } catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = e => setSettings({ ...settings, [e.target.name]: e.target.value });
    const handleCheckChange = e => setSettings({ ...settings, [e.target.name]: e.target.checked ? 1 : 0 });

    if (loading) {
        return <Loading />
    }

    if (!settings) {
        // implementaremos mas en un futuro.
        return null;
    }

    return <>
        <Title>Logo</Title>
        <div className="mb-4">
            <div className="d-sm-flex align-items-center">
                <div className="mb-3 mb-sm-0 mr-3 logo-avatar bg-white position-relative d-flex justify-content-center align-items-center"
                    style={{ maxWidth: '400px', minWidth: '250px', height: '200px' }}>
                    <img src={settings.logo ? `/apimuni/images/settings/${settings.logo}` : logo}
                        alt="logo mazamari"
                        className="img-fluid"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                    <div className="options">
                        <span className="c_icon cursor-pointer rounded-circle mr-2">
                            <i className="icon-image text-white far fa-image" />
                        </span>
                        <span className="c_icon cursor-pointer rounded-circle">
                            <i className="icon-image text-white far fa-times" />
                        </span>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <Button as="label"
                            htmlFor="input_change_image"
                            className="mb-0 mr-2">
                            Cambiar logo
                        </Button>
                        <input
                            type="file"
                            id="input_change_image"
                            className="d-none"
                            onChange={handleSelectImage}
                            accept="image/*"
                        />
                        <Button variant="link" href="#logo" className="text-danger">Quitar logo</Button>
                    </div>
                    <div className="text-small" style={{ maxWidth: '500px' }}>
                        Recomendamos una imagen png transparente, altura de 200px y un peso menor a 1MB.
                    </div>
                    {error && (
                        <div className="alert alert-warning text-small">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Form onSubmit={handleSubmit}>
            <Title>Datos Generales</Title>
            <Form.Row className="mb-4">
                <Form.Group as={Col} sm="6">
                    <label>Nombre</label>
                    <Form.Control
                        type="text"
                        name="nombre_oficial"
                        value={settings.nombre_oficial}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group as={Col} sm="6">
                    <label>Ruc</label>
                    <Form.Control
                        type="text"
                        name="numero_identidad"
                        value={settings.numero_identidad}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group as={Col} sm="6">
                    <label>Razon social</label>
                    <Form.Control
                        type="text"
                        name="nombre_oficial"
                        value={settings.nombre_oficial}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group as={Col} sm="6">
                    <label>Direccion</label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        value={settings.direccion}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group as={Col} sm="6">
                    <label>Telefono</label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={settings.telefono}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
                <Form.Group as={Col} sm="6">
                    <label>Correo</label>
                    <Form.Control
                        type="text"
                        name="correo"
                        value={settings.correo}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </Form.Group>
            </Form.Row>

            <Title>Redes sociales</Title>
            <Form.Row className="mb-4">
                <Form.Group as={Col} xs="12">
                    <label className="d-flex">
                        <div>
                            <div className="text-nowrap mr-2">
                                <span className="mr-2"><i className="fab fa-facebook" /></span>
                                <span>facebook.com/</span>
                            </div>
                        </div>
                        <Form.Control
                            type="text"
                            name="facebook"
                            value={settings.facebook}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </label>
                </Form.Group>
                <Form.Group as={Col} xs="12">
                    <label className="d-flex">
                        <div>
                            <div className="text-nowrap mr-2">
                                <span className="mr-2"><i className="fab fa-youtube" /></span>
                                <span>youtube.com/c/</span>
                            </div>
                        </div>
                        <Form.Control
                            type="text"
                            name="youtube"
                            value={settings.youtube}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </label>
                </Form.Group>
                <Form.Group as={Col} xs="12">
                    <label className="d-flex">
                        <div>
                            <div className="text-nowrap mr-2">
                                <span className="mr-2"><i className="fab fa-instagram" /></span>
                                <span>instagram.com/</span>
                            </div>
                        </div>
                        <Form.Control
                            type="text"
                            name="instagram"
                            value={settings.instagram}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </label>
                </Form.Group>
                <Form.Group as={Col} xs="12">
                    <label className="d-flex">
                        <div>
                            <div className="text-nowrap mr-2">
                                <span className="mr-2"><i className="fab fa-twitter" /></span>
                                <span>twitter.com/</span>
                            </div>
                        </div>
                        <Form.Control
                            type="text"
                            name="twitter"
                            value={settings.twitter}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </label>
                </Form.Group>
            </Form.Row>

            <Title>Horarios de atenci&oacute;n</Title>
            {['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map(dia => (
                <div key={dia} className="mb-4">
                    <Form.Check
                        style={{ width: '150px' }}
                        className="mb-1 mb-sm-3 text-capitalize d-inline-block"
                        id={`${dia}-laborable`}
                        type="checkbox"
                        name={`${dia}_laborable`}
                        label={dia}
                        checked={settings[`${dia}_laborable`]}
                        onChange={handleCheckChange}
                        custom
                    />
                    <div className="d-inline-flex align-items-center">
                        <Form.Control
                            type="time"
                            name={`${dia}_inicio`}
                            value={settings[`${dia}_inicio`]}
                            onChange={handleInputChange}
                            disabled={!settings[`${dia}_laborable`]}
                        />
                        <span className="mx-2">-</span>
                        <Form.Control
                            type="time"
                            name={`${dia}_fin`}
                            value={settings[`${dia}_fin`]}
                            onChange={handleInputChange}
                            disabled={!settings[`${dia}_laborable`]}
                        />
                    </div>
                </div>
            ))}
            <div className="mb-4" />
            <Button type="submit" className="mr-2">
                {sending ? 'Guardando...' : 'Guardar los cambios'}
            </Button>
        </Form>
    </>
}
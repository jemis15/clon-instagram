import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { PortalContent, PortalHeader } from '../../../components/MyPortal';

export default function CreateNoticia({ onHide }) {
    const [noticia, setNoticia] = useState({
        image: '',
        nombre: '',
        descripcion: '',
        url: ''
    });
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });
    const [sending, setSending] = useState(false);

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
                params: { ...noticia, image: apiImage.name }
            });
            setSending(false);
            closePortal();
        } catch (error) {
            console.log(error);
            setSending(false);
        }
    }

    function closePortal() {
        const doc = document.getElementById('myportal');
        if (doc) {
            document.body.removeChild(doc);
            document.body.style.removeProperty('overflow');
        }
        onHide();
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
        setNoticia({ ...noticia, [e.target.name]: e.target.value });
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
                    <h2>Crear noticia</h2>
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
                            <label>T&iacute;tulo de la noticia</label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={noticia.titulo}
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
                                value={noticia.descripcion}
                                onChange={handleInputChange}
                                rows="10"
                                autoComplete="off"
                            />
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
        <div className="overflow-auto main-portal flex-fill h-100"
            style={{ maxHeight: '100vh' }}>
            <div
                className="my-5 mx-auto p-3 bg-white rounded-lg shadow"
                style={{ width: '100%', maxWidth: '700px' }}>
                <h5 className="mb-3">Vista previa</h5>
                <img src={image.base64} className="img-fluid mb-3" alt="noticia" />
                <h2>{noticia.titulo ? noticia.titulo : 'Titulo'}</h2>
                <div>
                    <MDEditor.Markdown source={noticia.descripcion ? noticia.descripcion : 'Descripcion'} />
                </div>
            </div>
        </div>
    </PortalContent>
}
import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { PortalContent, PortalHeader } from '../../../components/MyPortal';
import imageDefault2 from '../../../assets/images/groups-default-cover-photo-2x.png';

export default function PortalCarousel({ onHide, actualizarNuevoCarousel, showAlert }) {
    const [carousel, setCarousel] = useState({
        titulo: '',
        descripcion: '',
        image: '',
        url: ''
    });
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });
    const [sending, setSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true);
            const formData = new FormData();
            formData.append('image', image.formImage);
            formData.append('path', 'carouselheader');

            const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData);
            const {data: apiCarousel} = await Axios({
                method: 'post',
                url: `/apimuni/carouselheader`,
                params: {...carousel, image: apiImage.name}
            });

            actualizarNuevoCarousel(apiCarousel);
            showAlert('success', 'Nuevo item para el carousel');
            setSending(false);
            closePortal();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upp algo salio mal, vuelva a intentarlo');
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
        setCarousel({ ...carousel, [e.target.name]: e.target.value });
    }

    return <PortalContent className="bg-grey-300 d-flex">
        <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column bg-white shadow-sm h-100" style={{ width: '350px' }}>
                <div className="shadow-sm">
                    <PortalHeader className="shandow-sm" onHide={onHide} />
                </div>
                <div className="m-3">
                    <h2>Crear carousel</h2>
                </div>
                <div className="flex-fill overflow-auto px-3">
                    <div className="mb-3">
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
                        <label>Titulo</label>
                        <Form.Control
                            type="text"
                            name="titulo"
                            value={carousel.titulo}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </Form.Group>
                    <Form.Group>
                        <label>Descripcion</label>
                        <Form.Control
                            as="textarea"
                            name="descripcion"
                            value={carousel.descripcion}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                    </Form.Group>
                </div>
                <div className="mt-auto p-3 shadow border-top">
                    <Button type="submit" block>
                        {sending ? 'Creando...' : 'Crear'}
                    </Button>
                </div>
            </div>
        </Form>
        <div className="main-portal d-flex justify-content-center align-items-center w-100">
            <div className="bg-white rounded">
                <h5 className="mb-3 mx-3 mt-3">Vista previa</h5>
                <div
                    className="mx-3 mb-3 rounded-lg overflow-hidden position-relative d-flex justify-content-center align-items-center"
                    style={{
                        maxWidth: '972px',
                    }}>
                    {image.base64
                        ? <img
                            className="img-fluid"
                            src={image.base64}
                            alt="carousel"
                        />
                        : <img
                            src={imageDefault2}
                            className="img-fluid"
                            alt="image default"
                            style={{ filter: 'grayscale(100%)' }}
                        />
                    }
                    <div
                        className="w-100"
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: '1rem',
                        }}>
                        <div
                            className="mx-auto px-2 py-1"
                            style={{
                                borderLeft: '3px solid var(--blue-500)',
                                maxWidth: '700px',
                                background: 'linear-gradient(90deg, #000, transparent)',
                            }}>
                            <h3 className="mb-0 text-white">
                                {carousel.titulo ? carousel.titulo : 'Titulo'}
                            </h3>
                            <h5 className="text-white">
                                {carousel.descripcion ? carousel.descripcion : 'Descripcion'}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PortalContent>
}
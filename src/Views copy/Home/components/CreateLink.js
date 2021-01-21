import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { PortalContent, PortalHeader } from '../../../components/MyPortal';
import imageDefault2 from '../../../assets/images/groups-default-cover-photo-2x.png';

export default function CreateLink({ onHide, updateNewLink, grupo, showAlert }) {
    const [link, setLink] = useState({
        image: '',
        url: '',
        grupo: grupo
    });
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        if (image.formImage === '' || image.base64 === '') {
            alert('Seleccione una imagen');
            return;
        }

        if (sending) {
            return;
        }

        try {
            console.log(image);
            setSending(true);

            const formData = new FormData();
            formData.append('image', image.formImage);
            formData.append('path', 'links');

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }

            const { data: apiImage } = await Axios.post(`/apimuni/upload/images`, formData, config);
            const { data: apiLink } = await Axios({
                method: 'post',
                url: '/apimuni/carousellinks',
                params: { ...link, image: apiImage.name }
            });

            updateNewLink(apiLink);
            setSending(false);
            const myportal = document.getElementById('myportal');
            if (myportal) {
                document.body.removeChild(myportal);
            }
            document.body.style.removeProperty('overflow');
            showAlert('success', 'Nuevo link');
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

    const handleInputChange = (e) => setLink({
        ...link, [e.target.name]: e.target.value
    });

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
                        <label>Url</label>
                        <Form.Control
                            type="url"
                            name="url"
                            value={link.url}
                            onChange={handleInputChange}
                            autoComplete="off"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <label>Grupo</label>
                        <Form.Control
                            type="text"
                            value={link.grupo}
                            disabled
                        />
                    </Form.Group>
                    {link.url && (
                        <div className="text-small text-primary">
                            <span className="mr-2"><i className="far fa-link" /></span>
                            <a href={link.url} target="_blank">{link.url}</a>
                        </div>
                    )}
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
                    className="mx-3 mb-3 border rounded-lg overflow-hidden position-relative d-flex justify-content-center align-items-center"
                    style={{
                        maxWidth: '400px',
                        minWidth: '250px',
                        height: '200px'
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
                        />
                    }
                </div>
                {link.url && (
                    <div className="mx-3 mb-3 text-small">
                        <span className="mr-2"><i className="far fa-link" /></span>
                        <a href={link.url} target="_blank">{link.url}</a>
                    </div>
                )}
            </div>
        </div>
    </PortalContent>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function Editar() {
    const history = useHistory();
    const { carouselLinkId } = useParams();
    const [carouselLink, setCarouselLink] = useState(null);
    const [subiendoImagen, setSubiendoImagen] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        async function loadCarouselLink() {
            const { data: apiCarouselLink } = await Axios.get(`/apimuni/carousellinks/${carouselLinkId}`);
            setCarouselLink(apiCarouselLink);
        }

        loadCarouselLink();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        setSending(true);
        try {
            const { data: apiCarouselLink } = await Axios({
                method: 'patch',
                url: '/apimuni/carousellinks',
                params: carouselLink
            });
            setCarouselLink(apiCarouselLink);
        } catch (error) {
            console.log(error);
        }
        setSending(false);
    }

    async function handleSelectImage(e) {
        if (subiendoImagen) {
            return;
        }

        try {
            setSubiendoImagen(true);

            var formData = new FormData();
            formData.append('imagecarousellink', e.target.files[0]);

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const { data: apiUpload } = await Axios.post(`/apimuni/carousellinks/${carouselLinkId}/upload`, formData, config);
            setCarouselLink({ ...carouselLink, image: apiUpload.filename });
            setSubiendoImagen(false);
        } catch (error) {
            setSubiendoImagen(false);
            console.log(error);
        }
    }

    function handleInputChange(e) {
        setCarouselLink({ ...carouselLink, [e.target.name]: e.target.value });
    }

    if (!carouselLink) {
        return <p className="text-center">No existe</p>
    }

    return <>
        <button className="mb-4" onClick={() => history.goBack()}>
            <span><i className="fas fa-arrow-left" /></span>
        </button>
        <h2 className="title-1">Editar</h2>
        <h4 className="title-3 mb-3">Imagen</h4>
        <div className="mb-4">
            {subiendoImagen ?
                <div className="text-center py-4">Cargando...</div> :
                <>
                    {carouselLink.image ? (
                        <label className="d-inline-block position-relative hover-content-black cursor-pointer">
                            <img src={`/apimuni/images/carousellinks/${carouselLink.image}`}
                                alt="carousellink"
                                className="img-fluid"
                            />
                            <input
                                type="file"
                                className="d-none"
                                name="imagecarousellink"
                                onChange={handleSelectImage}
                                style={{ top: 0, left: 0, zIndex: -1 }}
                            />
                        </label>
                    ) : (
                            <label>
                                <input
                                    type="file"
                                    name="imagecarousellink"
                                    onChange={handleSelectImage}
                                />
                            </label>
                        )}
                </>
            }
        </div>
        <h4 className="title-3">Otros datos</h4>
        <div className="mb-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <label>Titulo</label>
                    <Form.Control
                        type="text"
                        name="titulo"
                        value={carouselLink.titulo}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Url</label>
                    <Form.Control
                        type="text"
                        name="url"
                        value={carouselLink.url}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Grupo</label>
                    <Form.Control
                        type="text"
                        name="grupo"
                        value={carouselLink.grupo}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button type="submit">{sending ? 'Guardando...' : 'Guardar'}</Button>
            </Form>
        </div>
        <div className="mb-5 pb-5" />
    </>
}
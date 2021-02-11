import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cuadro, { CuadroLeft, CuadroRight } from '../components/Cuadro';

const config = {
    headers: {
        'Content-Type': "multipart/form-data"
    }
};
export default function Editar() {
    const { banner_id } = useParams();
    const [banner, setBanner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploadImage, setUploadImage] = useState(false);
    const [updatingBanner, setUpdatingBanner] = useState(false);

    useEffect(() => {
        async function loadBanner() {
            try {
                setLoading(true);
                const { data: apiBanner } = await Axios.get(`/apimuni/banners/${banner_id}`);
                setBanner(apiBanner);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        loadBanner();
    }, []);

    async function handleSubmitUpdate(e) {
        e.preventDefault();

        try {
            // indica que se esta actualizando el banner
            setUpdatingBanner(true);
            // api para actualizar el banner
            const { data: apiBanner } = await Axios({
                method: 'patch',
                url: `/apimuni/banners/${banner_id}`,
                params: banner
            });
            // actualizando el estado
            setBanner(apiBanner);
            // se termino de actualizar
            setUpdatingBanner(false);
        } catch (error) {
            console.log(error);
            // se termino de actualizar
            setUpdatingBanner(false);
        }
    }

    async function handleSelectedImage(e) {
        if (uploadImage) {
            return;
        }

        try {
            // indica que se esta subiendo una imagen
            setUploadImage(true);
            // preparando datos que seran enviados como parametros a la api
            var formDataImage = new FormData();
            formDataImage.append('imagebanners', e.target.files[0]);
            // api para subir y actualizar imagen del banner
            const { data: apiBanner } = await Axios.post(`/apimuni/banners/${banner_id}/upload`, formDataImage, config);
            // actualizando el estado para previsualizar la imagen
            setBanner({ ...banner, image: apiBanner.image });
            // se ha termiando de subir la imagen
            setUploadImage(false);
        } catch (error) {
            console.log(error);
            // se ha termiando de subir la imagen
            setUploadImage(false);
        }
    }

    function handleInputChange(e) {
        setBanner({ ...banner, [e.target.name]: e.target.value });
    }

    if (loading) {
        return <p>Cargando...</p>
    }

    return <Cuadro>
        <CuadroLeft>
            <h4 className="mb-5">Left</h4>
            <Form onSubmit={handleSubmitUpdate}>
                <Form.Group>
                    <label>Image</label>
                    <label className="mb-0 border rounded upload-image text-center cursor-pointer overflow-hidden">
                        {uploadImage && 'subiendo imagen'}
                        <img src={banner.image} className="img-fluid" />
                        <span className="upload-image-icon rounded-circle">
                            <i className="fas fa-arrow-up" />
                        </span>
                        <input type="file" className="d-none" onChange={handleSelectedImage} />
                    </label>
                </Form.Group>
                <Form.Group>
                    <label>Titulo</label>
                    <Form.Control
                        type="text"
                        name="titulo"
                        value={banner.titulo}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Descripcion</label>
                    <Form.Control
                        as="textarea"
                        name="descripcion"
                        rows="10"
                        value={banner.descripcion}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <label>Url (Lugar donde vivira el banner)</label>
                    <Form.Control
                        type="url"
                        name="url"
                        value={banner.url}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button
                    variant="light"
                    className="mr-2">
                    Cancelar
                </Button>
                <Button type="submit">
                    {updatingBanner ? 'Actualizando...' : 'Actualizar'}
                </Button>
            </Form>
        </CuadroLeft>
        <CuadroRight>
            <h4 className="mb-5">Vista preliminar</h4>
            <div className="py-5 banner bg-container rounded">
                <Container>
                    <Row>
                        <Col md="7" className="align-self-center">
                            <h1 className="banner-title text-center text-md-left">
                                {banner.titulo}
                            </h1>
                            <p className="banner-descripcion text-center text-md-left">
                                {banner.descripcion}
                            </p>
                        </Col>
                        <Col md="5" className="align-self-center">
                            {banner.image ? (
                                <img src={banner.image}
                                    className="img-fluid rounded-lg"
                                    alt="gastonomia y turismo"
                                    loading="lazy"
                                />
                            ) : (
                                    <div
                                        className="border rounded d-flex justify-content-center align-items-center"
                                        style={{ height: '10rem' }}>
                                        Agrege una imagen
                                    </div>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        </CuadroRight>
    </Cuadro>
}
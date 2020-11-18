import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

export default function GastronomiaYTurismo() {
    const [gastronomias, setGastronomias] = useState([]);
    const [turismos, setTurismos] = useState([]);
    const [loadingTurismosYGastronomias, setLoadingTurismosYGastronomias] = useState(true);

    // inicio
    useEffect(() => {
        async function loadGastronomiaYTurismo() {
            try {
                setLoadingTurismosYGastronomias(true);
                const { data: apiTurismos } = await Axios.get(`/apimuni/turismos_p`);
                const { data: apiGastronomia } = await Axios.get(`/apimuni/gastronomias_p`);
                setGastronomias(apiGastronomia);
                setTurismos(apiTurismos);
                setLoadingTurismosYGastronomias(false)
            } catch (error) {
                console.log(error);
                setLoadingTurismosYGastronomias(false);
            }
        }

        loadGastronomiaYTurismo();
    }, []);

    function getTitulo(titulo) {
        const palabras = titulo.split(' ');
        let oracion = '';
        palabras.forEach((letra, key) => {
            if (palabras.length > (key + 1)) {
                oracion += letra + '_';
            } else {
                oracion += letra;
            }
        });
        return oracion;
    }

    return <>
        <Banner />

        <Container className="py-xl">
            <h2 className="h2 text-center mb-4">Platos Tipicos</h2>
            <Gastronomias>
                {gastronomias.map(gastronomia => (
                    <Gastronomia key={gastronomia.id}>
                        <div className="mb-2">
                            <img src={`/apimuni/images/gastronomias/${gastronomia.image}`}
                                className="img-fluid rounded-lg"
                                alt="gastronomia"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h4 className="h4">
                                <Link className="text-decoration-none"
                                    to={`/gastronomias/${getTitulo(gastronomia.titulo)}`}>
                                    {gastronomia.titulo}
                                </Link>
                            </h4>
                            <p className="text-small overflow-hidden">
                                {gastronomia.descripcion}
                            </p>
                        </div>
                    </Gastronomia>
                ))}
            </Gastronomias>
            {gastronomias.length === 0 && (
                <div className="container border p-5">
                    {loadingTurismosYGastronomias ?
                        <p className="text-center mb-0">Cargando...</p> :
                        <p className="text-center mb-0">Sin registros</p>
                    }
                </div>
            )}
        </Container>

        <section className="content-lugares-turisticos mb-5">
            <h2 className="h2 text-center mb-4">Lugares turisticos</h2>
            <Turismos>
                {turismos.map(turismo => (
                    <Turismo key={turismo.id}>
                        <div className="container py-5">
                            <Row>
                                <Col md="5" className="align-self-center section-image">
                                    <div className="content-image-gastronomia-right overflow-hidden">
                                        <img src={`/apimuni/images/turismos/${turismo.image}`}
                                            className="img-fluid"
                                            alt="lugar turistico"
                                            loading="lazy"
                                        />
                                    </div>
                                </Col>
                                <Col md="7" className="align-self-center section-description">
                                    <h2 className="banner-title text-center text-md-left">
                                        {turismo.titulo}
                                    </h2>
                                    <p className="banner-descripcion text-center text-md-left">
                                        {turismo.descripcion}
                                    </p>
                                    <div className="text-center text-md-left">
                                        <Button className="lugar-turistico-button mt-3 mt-md-0"
                                            as={Link} to={`/turismos/${getTitulo(turismo.titulo)}`}>
                                            Ver mas detalle
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Turismo>
                ))}
                {turismos.length === 0 && (
                    <div className="container border p-5">
                        {loadingTurismosYGastronomias ?
                            <p className="text-center mb-0">Cargando...</p> :
                            <p className="text-center mb-0">Sin registros</p>
                        }
                    </div>
                )}
            </Turismos>
        </section>
    </>
}

function Gastronomias({ children }) {
    return <section className="grid-gastronomia">
        {children}
    </section>
}
function Gastronomia({ children }) {
    return <article className="overflow-hidden">
        {children}
    </article>
}

function Turismos({ children }) {
    return <div>{children}</div>
}
function Turismo({ children }) {
    return <article className="lugar-turistico">
        {children}
    </article>
}

function Banner() {
    const banner_id = 1;
    const [banner, setBanner] = useState(null);
    const [bannerUpdate, setBannerUpdate] = useState({
        titulo: '',
        descripcion: ''
    });
    const [loading, setLoading] = useState(true);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [updatingBanner, setUpdatingBanner] = useState(false);

    useEffect(() => {
        async function loadBanner() {
            try {
                setLoading(true);
                const { data: apiBanner } = await Axios.get(`/apimuni/banners/${banner_id}`);
                setBanner(apiBanner);
                setLoading(false);
            } catch (error) {
                console.log(banner);
                setLoading(false);
            }
        }

        loadBanner();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (updatingBanner) {
            return null;
        }

        try {
            setUpdatingBanner(true);
            const { data: apiBanner } = await Axios({
                method: 'patch',
                url: `/apimuni/banners/${banner_id}`,
                params: bannerUpdate
            });
            setBanner(apiBanner);
            setUpdatingBanner(false)
        } catch (error) {
            console.log(error);
            setUpdatingBanner(false)
        }
    }

    async function handleSelectImage(e) {
        if (uploadingImage) {
            return;
        }

        try {
            setUploadingImage(true);
            var formDataImage = new FormData();
            formDataImage.append('imagebanners', e.target.files[0]);
            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const { data: apiBanner } = await Axios.post(`/apimuni/banners/${banner_id}/upload`, formDataImage, config);
            setBanner(apiBanner);
            setUploadingImage(false)
        } catch (error) {
            console.log(error);
            setUploadingImage(false)
        }
    }

    function showModalUpdate() {
        setModalUpdate(true);
        setBannerUpdate(banner)
    }
    function hideModalUpdate() {
        setModalUpdate(false);
        setBannerUpdate(banner);
    }

    const handleInputChange = (e) => setBannerUpdate({
        ...bannerUpdate,
        [e.target.name]: e.target.value
    });

    if (loading) {
        return <p>Cargando...</p>
    }

    return <div className="py-5 banner edit bg-container">
        <Container>
            <Row>
                <Col md="7" className="align-self-center banner-left">
                    <h1 className="banner-title text-center text-md-left">
                        {banner.titulo}
                    </h1>
                    <p className="banner-descripcion text-center text-md-left">
                        {banner.descripcion}
                    </p>

                    <div className="options top-right">
                        <span className="icon" onClick={showModalUpdate}>
                            <i className="fas fa-user" />
                        </span>
                    </div>
                </Col>
                <Col md="5" className="align-self-center banner-right">
                    <div className="banner-content-image position-relative">
                        <img src={`/apimuni/images/banners/${banner.image}`}
                            className="img-fluid rounded-lg"
                            alt="gastonomia y turismo"
                            loading="lazy"
                        />
                        <div className="options center">
                            <label className="icon d-inline-block mb-0 pb-0">
                                <i className="fas fa-user" />
                                <input
                                    type="file"
                                    className="d-none"
                                    onChange={handleSelectImage}
                                />
                            </label>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <Modal show={modalUpdate} onHide={hideModalUpdate}>
            <Modal.Header closeButton>Editar</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <label>Titulo</label>
                        <Form.Control
                            type="text"
                            name="titulo"
                            value={bannerUpdate.titulo}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <label>Descripcion</label>
                        <Form.Control
                            as="textarea"
                            name="descripcion"
                            rows="10"
                            value={bannerUpdate.descripcion}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <div className="text-right">
                        <Button
                            className="mr-2"
                            variant="light"
                            onClick={hideModalUpdate}>
                            Cancelar
                        </Button>
                        <Button type="submit">
                            {updatingBanner ? 'Actualizando...' : 'Actualizar'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';

import Cuadro, { CuadroLeft, CuadroRight } from '../components/Cuadro';

export default function Editar() {
    const { gastronomia_id } = useParams();
    const [gastronomia, setGastronomia] = useState(null);
    const [loadingGastronomia, setLoadingGastronomia] = useState(true);

    useEffect(() => {
        // cargar la gastronomia a editar
        async function loadGastronomia() {
            try {
                // empezando la carga de la gastronomia
                setLoadingGastronomia(true);
                // peticion a la base de datos para obtener la gastronomia
                const { data: apiGastronomia } = await Axios.get(`/apimuni/gastronomias/${gastronomia_id}`);
                setGastronomia(apiGastronomia);
                // finalizando la carga de la gastronomia
                setLoadingGastronomia(false);
            } catch (error) {
                console.log(error);

                // finalizando la carga de la gastronomia
                setLoadingGastronomia(false);
            }
        }

        loadGastronomia();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data: apiGastronomia } = await Axios({
                method: 'patch',
                url: `/apimuni/gastronomias/${gastronomia_id}`,
                params: gastronomia
            });
            console.log(apiGastronomia);
            console.log('Exito se a guardado');
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSelectedImagePortada(e) {
        console.log('subiendo umagen');
        try {
            var formData = new FormData;
            formData.append('imagegastronomia', e.target.files[0]);

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const { data: apiGastronomia } = await Axios.post(`/apimuni/gastronomias/${gastronomia_id}/upload_portada`, formData, config);
            setGastronomia({ ...gastronomia, image: apiGastronomia.image });
        } catch (error) {
            console.log(error);
        }
    }

    function handleInputChange(e) {
        setGastronomia({ ...gastronomia, [e.target.name]: e.target.value });
    }
    function handleInputChecked(e) {
        setGastronomia({ ...gastronomia, publicado: e.target.checked ? 1 : 0 });
    }

    if (!gastronomia) {
        // convertirse en componente general
        return <div className="h-frame-loading d-flex justify-content-center align-items-center">
            <div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner> Cargando...
            </div>
        </div>;
    }

    return <>
        <Cuadro>
            <CuadroLeft>
                <h4 className="mb-5">Encabezado</h4>
                {loadingGastronomia ? <>
                    <div className="bg-container" style={{ height: '100vh' }}></div>
                </> : <>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <label>Imagen</label>
                                <label className="mb-0 border rounded upload-image text-center cursor-pointer overflow-hidden">
                                    <img src={`/apimuni/images/gastronomias/${gastronomia.image}`} className="img-fluid" />
                                    <span className="upload-image-icon rounded-circle">
                                        <i className="fas fa-arrow-up" />
                                    </span>
                                    <input type="file" className="d-none" onChange={handleSelectedImagePortada} />
                                </label>
                            </Form.Group>
                            <Form.Group>
                                <label>Titulo</label>
                                <Form.Control
                                    value={gastronomia.titulo}
                                    name="titulo"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <label>Descripcion</label>
                                <Form.Control
                                    as="textarea"
                                    name="descripcion"
                                    value={gastronomia.descripcion}
                                    onChange={handleInputChange}
                                    rows="7"
                                />
                            </Form.Group>
                            <Form.Group>
                                <label>Contenido</label>
                                <Form.Control
                                    as="textarea"
                                    name="contenido"
                                    value={gastronomia.contenido}
                                    onChange={handleInputChange}
                                    className="input-markdown-editor"
                                    rows="7"
                                />
                            </Form.Group>

                            <ImagesUtilitarios idGastronomia={gastronomia_id} />

                            <Form.Group>
                                <label>Publicar</label>
                                <Form.Check
                                    name="publicado"
                                    checked={gastronomia.publicado}
                                    onChange={handleInputChecked}
                                />
                            </Form.Group>
                            <Button
                                as={Link}
                                to="/frame/turismos"
                                type="submit"
                                variant="light"
                                className="mr-2">
                                Cancelar
                            </Button>
                            <Button type="submit">Guardar</Button>
                        </Form>
                    </>}
            </CuadroLeft>
            <CuadroRight>
                <h4 className="mb-5">Vista preliminar</h4>
                <p>Encabezado</p>
                {!loadingGastronomia && <>
                    <Turismos>
                        <Turismo>
                            <div className="py-2 mb-3">
                                <Row>
                                    <Col md="5" className="align-self-center section-image">
                                        <div className="content-image-gastronomia-right overflow-hidden">
                                            {gastronomia.image ? (
                                                <img src={`/apimuni/images/gastronomias/${gastronomia.image}`}
                                                    className="img-fluid rounded-lg img-thumbnail"
                                                    alt="lugar turistico"
                                                />
                                            ) : (
                                                    <div className="upload-image border rounded"></div>
                                                )}
                                        </div>
                                    </Col>
                                    <Col md="7" className="align-self-center section-description">
                                        <h2 className="banner-title text-center text-md-left">
                                            {gastronomia.titulo}
                                        </h2>
                                        <p className="banner-descripcion text-center text-md-left">
                                            {gastronomia.descripcion}
                                        </p>
                                        <div className="text-center text-md-left">
                                            <Button className="lugar-turistico-button mt-3 mt-md-0"
                                                as={Link} to="/gastronomia?tipo=gastronomia&titulo=El lugar turistico">
                                                Ver mas detalle
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Turismo>
                    </Turismos>

                    <p>Contenido</p>
                    <div className="container border rounded py-4">
                        <MDEditor.Markdown source={gastronomia.contenido} />
                    </div>
                </>}
            </CuadroRight>
        </Cuadro>
    </>
}

function ImagesUtilitarios({ idGastronomia }) {
    const [imageUtilitarios, setImageUtilitarios] = useState([]);
    const [loadingCargaImages, setLoadingCargaImages] = useState(true);

    useEffect(() => {
        // cargar las imagenes utilitarios de la gastronomia
        async function loadImageUtilitarios() {
            try {
                // cangando imagenes
                setLoadingCargaImages(true);

                // peticion a la api para obtener imagenes utilitarios de la gastronomia
                const { data: apiImagesUtilitario } = await Axios.get(`/apimuni/gastronomias/${idGastronomia}/images`);
                // guardando los valores obtenidos de la base de datos
                setImageUtilitarios(apiImagesUtilitario);

                // finalizando carga de imagenes
                setLoadingCargaImages(false);
            } catch (error) {
                console.log(error);

                // finalizando carga de imagenes
                setLoadingCargaImages(false);
            }
        }

        loadImageUtilitarios();
    }, [idGastronomia]);

    async function handleSelectImageUtilitarios(e) {
        try {
            var formData = new FormData;
            formData.append('imagegastronomia', e.target.files[0]);

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const { data: apiImageUpload } = await Axios.post(`/apimuni/gastronomias/${idGastronomia}/upload_utilitarios`, formData, config);
            setImageUtilitarios([...imageUtilitarios, apiImageUpload]);
        } catch (error) {
            console.log(error);
        }
    }

    function handleDeleteImageUtilitarios(idImage) {
        setImageUtilitarios(imageUtilitarios.filter(image => {
            return image.id !== idImage;
        }));
    }

    return <div className="contenedor-utilitarios d-flex mb-4">
        <AddImageUtilitarios onSelectImage={handleSelectImageUtilitarios} />
        {imageUtilitarios.map(image => (
            <ImageUtilitarios
                key={image.id}
                image={image}
                onDelete={handleDeleteImageUtilitarios}
            />
        ))}
    </div>
}

function AddImageUtilitarios({ onSelectImage }) {
    return <label className="plus-utilitarios d-flex flex-center border rounded cursor-pointer h-100">
        <i className="fas fa-plus" />
        <input type="file" className="d-none" onChange={onSelectImage} />
    </label>
}

function ImageUtilitarios({ image, onDelete }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return <>
        <div className="content-image-markdown d-flex flex-center border position-relative">
            <img
                src={`/apimuni/images/gastronomias/${image.url}`}
                className="cursor-pointer"
                onClick={toggle}
                alt="markdown utilitarios"
            />
            <span className="cursor-pointer px-1 rounded" onClick={onDelete.bind(this, image.id)}>
                <i className="fas fa-times" />
            </span>
        </div>
        <Modal show={modal} onHide={toggle}>
            <Modal.Body>
                <h4>Copia el texto para insertar la imagen</h4>
                <div className="bg-container px-3 py-2 rounded text-wrap">
                    [![Descripcion](/apimuni/images/gastronomias/{image.url})](URL)
                </div>
            </Modal.Body>
        </Modal>
    </>
}

function Turismos({ children }) {
    return <div>{children}</div>
}
function Turismo({ children }) {
    return <article className="lugar-turistico">
        {children}
    </article>
}

function LoadingTurismoEncabezado(params) {
    return <div>
        <div className="py-5 bg-container"></div>
        <div>
            <div className="py-3 mb-4 bg-container"></div>
            <div className="py-2 bg-container"></div>
            <div className="py-2 bg-container"></div>
            <div className="py-2 bg-container"></div>
        </div>
    </div>
}
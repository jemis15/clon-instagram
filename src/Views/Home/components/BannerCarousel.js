import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';

export default function BannerCarousel({
    carousel,
    user,
    onClickButtonCreate,
    updateCarousel,
    removeCarousel,
    showAlert
}) {
    const [modalEditarCarousel, setModalEditarCarousel] = useState(false);
    const [modalDeleteCarousel, setModalDeleteCarousel] = useState(false);

    const toggleModalEditarCarousel = () => setModalEditarCarousel(!modalEditarCarousel);
    const toggleModalDeleteCarousel = () => setModalDeleteCarousel(!modalDeleteCarousel);

    return <div className="ratio ratio-21x9 carousel_home-item position-relative overflow-hidden">
        <div className="d-flex justify-content-center align-items-center">
            <img
                src={carousel.image}
                loading="lazy"
                alt="banner header"
                style={{ minWidth: '100%', minHeight: '100%' }}
            />
        </div>
        {/* <div className="description-container container py-2">
            <h3 className="title">{carousel.titulo}</h3>
            <p className="description mb-0">{carousel.descripcion}</p>
        </div> */}
        {user && user.is_admin === 1 && <div
            className="position-absolute p-3"
            style={{
                bottom: 0,
                left: 0,
                zIndex: 100
            }}>
            <button
                className="mr-2 d-inline-block rounded-circle bg-dark border-0 text-white"
                style={{ width: '2rem', height: '2rem' }}
                onClick={onClickButtonCreate}>
                <i className="far fa-plus" />
            </button>
            <button
                className="mr-2 d-inline-block rounded-circle bg-dark border-0 text-white"
                style={{ width: '2rem', height: '2rem' }}
                onClick={toggleModalEditarCarousel}>
                <i className="far fa-pen" />
            </button>
            <button
                className="d-inline-block rounded-circle bg-dark border-0 text-white"
                style={{ width: '2rem', height: '2rem' }}
                onClick={toggleModalDeleteCarousel}>
                <i className="far fa-trash" />
            </button>
        </div>}

        <Modal
            show={modalEditarCarousel}
            onHide={toggleModalEditarCarousel}
            animation={false}
            centered>
            <Modal.Header closeButton>Editar carousel</Modal.Header>
            <Modal.Body>
                <EditarCarousel
                    data={carousel}
                    updateCarousel={updateCarousel}
                    closeModal={toggleModalEditarCarousel}
                    showAlert={showAlert}
                />
            </Modal.Body>
        </Modal>
        <Modal
            show={modalDeleteCarousel}
            onHide={toggleModalDeleteCarousel}
            animation={false}
            centered>
            <Modal.Header closeButton>Confirmar eliminaci&oacute;n</Modal.Header>
            <Modal.Body>
                <EliminarCarousel
                    carousel={carousel}
                    removeCarousel={removeCarousel}
                    showAlert={showAlert}
                    closeModal={toggleModalDeleteCarousel}
                />
            </Modal.Body>
        </Modal>
    </div>
}

function EditarCarousel({ data, updateCarousel, closeModal, showAlert }) {
    const [carousel, setCarousel] = useState(data);
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        // verificando si hubo un cambio
        if (data === carousel && (image.formImage === '' && image.base64 === '')) {
            closeModal();
            return;
        }

        if (sending) {
            return;
        }

        try {
            setSending(true);
            var carouselUpdated = carousel;
            // conprobamos si se selecciono una imagen
            if (image.formImage !== '' && image.base64 !== '') {
                const formData = new FormData();
                formData.append('image', image.formImage);
                formData.append('path', 'carouselheader');

                const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData);
                carouselUpdated = { ...carousel, image: apiImage.name }
            }
            // actualizar carousel
            await Axios({
                method: 'patch',
                url: `/apimuni/carouselheader/${carousel.id}`,
                params: carouselUpdated
            });
            updateCarousel(data, carouselUpdated);
            showAlert('success', 'Banner actualizado');
            setSending(false);
            closeModal();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upps algo salio mal, vuelva a intentarlo.');
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

    const handleInputChange = e => setCarousel({
        ...carousel, [e.target.name]: e.target.value
    });

    return <Form onSubmit={handleSubmit}>
        <Form.Group>
            <label>Image</label>
            <label
                className="overflow-hidden rounded-lg d-flex justify-content-center align-items-center cursor-pointer"
                style={{
                    height: '200px',
                    border: '1px dashed var(--grey-400)'
                }}>
                {image.base64
                    ? <img src={image.base64} className="img-fluid" alt="carousel" />
                    : <img src={carousel.image} className="img-fluid" alt="carousel" />
                }
                <input
                    type="file"
                    className="d-none"
                    onChange={handleSelectImage}
                    accept="image/*"
                />
            </label>
        </Form.Group>
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
                rows="6"
                autoComplete="off"
            />
        </Form.Group>
        <Button type="submit" block>
            {sending
                ? <><Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />Guardando...</>
                : <span>Guardar cambios</span>
            }
        </Button>
    </Form>
}

function EliminarCarousel({ carousel, removeCarousel, showAlert, closeModal }) {
    const [sending, setSending] = useState(false);

    async function deleteCarousel() {
        try {
            setSending(true);
            await Axios.delete(`/apimuni/carouselheader/${carousel.id}`);
            removeCarousel(carousel);
            showAlert('success', 'Carousel eliminado.');
            setSending(false);
            closeModal();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upps algo salio mal, vuelve a intentar mas tarde.')
            setSending(false);
        }
    }

    return <>
        <div className="text-center mb-5">
            <span className="d-inline-block mb-3">
                <i className="far fa-trash fa-4x" />
            </span>
            <h4>Eliminar carousel</h4>
            <p>{carousel.titulo}</p>
        </div>
        <div className="text-right">
            <Button
                className="mr-2"
                variant="light"
                onClick={closeModal}
            >Cancelar</Button>
            <Button
                variant="danger"
                onClick={deleteCarousel}
            >{sending ? 'Eliminando...' : 'Eliminar'}</Button>
        </div>
    </>
}
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const config = {
    headers: {
        'Content-Type': "multipart/form-data"
    }
}

export default function MultiItemsCarousel({ title, grupo, user }) {
    const params = useLocation();
    const [carouselLinks, setCarouselLinks] = useState();
    const [carouselLink, setCarouselLink] = useState({
        image: '',
        titulo: '',
        url: '',
        grupo: 'secundario'
    });
    const [loading, setLoading] = useState(true);
    const [modalPlus, setModalPlus] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const hasPrivilege = user !== null;
    const pagesPermitidos = ['/', '/historia'];

    useEffect(() => {
        async function loadCarouselLinks() {
            try {
                // en estado car carga
                setLoading(true);
                // api que nos muestra los resultados de los grupo links
                const { data: apiCarouselLinks } = await Axios.get(`/apimuni/carousellinks/grupo/${grupo}`);
                // guardando los valores para ser recorridos y mostrados
                setCarouselLinks(apiCarouselLinks);
                // se a terminado de obtener y cargar los items de la base de datos
                setLoading(false);
            } catch (error) {
                console.log(error);
                // se a terminado de obtener y cargar los items de la base de datos
                setLoading(false);
            }
        }

        loadCarouselLinks();
    }, []);

    async function handleSubmitNew(e) {
        e.preventDefault();

        try {
            // api para crear y guardar un nuevo carousel link
            const { data: apiCarouselLink } = await Axios({
                method: 'post',
                url: '/apimuni/carousellinks',
                params: carouselLink
            });
            // agregando a la lista el carousel link nuevo
            setCarouselLinks([...carouselLinks, apiCarouselLink]);
            // reseteando el formulario
            setCarouselLink({
                image: '',
                titulo: '',
                url: '',
                grupo: ''
            });
            setModalPlus(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSelectImage(e) {
        try {
            // para subir imagenes
            var formDataImage = new FormData;
            formDataImage.append('imagecarousellink', e.target.files[0]);

            // api donde se subira la imagen
            const { data: apiImage } = await Axios.post('/apimuni/carousellinks/upload', formDataImage, config);
            // obteniendo y guardando la url de la imagen subida
            setCarouselLink({ ...carouselLink, image: apiImage.filename });
        } catch (error) {
            console.log(error);
        }
    }

    function updateCarouselLink(dataCarouselLink) {
        setCarouselLinks(carouselLinks.map(carousel => {
            if (carousel.id === dataCarouselLink.id) {
                return dataCarouselLink;
            }
            return carousel;
        }));
    }

    function deleteLink(carouselLinkId) {
        setCarouselLinks(carouselLinks.filter(carousel => {
            return carousel.id !== carouselLinkId;
        }));
    }

    const handleInputChange = (e) => setCarouselLink({
        ...carouselLink,
        [e.target.name]: e.target.value
    });

    const toggleModalPlus = () => setModalPlus(!modalPlus);
    const toggleModalEdit = () => setModalEdit(!modalEdit);

    if (!pagesPermitidos.find(url => url === params.pathname)) {
        return <></>
    }

    if (loading) {
        return <div className="container py-5">
            <div className="links-of-intereses_header mb-3">
                <span className="mr-2 d-inline-block bg-container icon"></span>
                <span className="d-inline-block bg-container texto"></span>
            </div>
            <div>
                <div className="links-of-intereses_loading">
                    <div className="bg-container" />
                </div>
                <div className="links-of-intereses_loading">
                    <div className="bg-container" />
                </div>
                <div className="links-of-intereses_loading">
                    <div className="bg-container" />
                </div>
                <div className="links-of-intereses_loading">
                    <div className="bg-container" />
                </div>
                <div className="links-of-intereses_loading">
                    <div className="bg-container" />
                </div>
            </div>
        </div>
    }

    if (!carouselLinks || carouselLinks.length <= 0) {
        return null;
    }

    return <>
        <div className="py-5 multi-items-carousel">
            <div className="mb-3 d-flex align-items-center container">
                <h4 className="mr-3 mb-0">{title}</h4>
                {hasPrivilege && (
                    <span className="content-icon rounded-circle icon-plus cursor-pointer"
                        onClick={toggleModalPlus}>
                        <i className="fas fa-plus" />
                    </span>
                )}
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className="py-2"
                containerClass="container pt-2 pb-5 mb-n5"
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 7,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable>
                {carouselLinks.map((carouselLink, key) => (
                    <CarouselLink
                        key={carouselLink.id}
                        carousellink_id={carouselLink.id}
                        url={carouselLink.url}
                        image={carouselLink.image}
                        edit={toggleModalEdit}
                        update={updateCarouselLink}
                        deleteLink={deleteLink}
                        number={key}
                        hasPrivilege={hasPrivilege}
                    />
                ))}
            </Carousel>
        </ div>

        {hasPrivilege && (
            <Modal show={modalPlus} onHide={toggleModalPlus}>
                <Modal.Header closeButton>Nuevo link de intereses</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitNew}>
                        <Form.Group>
                            <label>Image</label>
                            <label className="d-block upload-image d-flex justify-content-center align-items-center overflow-hidden"
                                onChange={handleSelectImage}>
                                {carouselLink.image ? (
                                    <img
                                        src={`/apimuni/images/carousellinks/${carouselLink.image}`}
                                        className="img-fluid"
                                    />
                                ) : (
                                        <i className="fas fa-arrow-circle-up fa-2x" />
                                    )}
                                <Form.Control type="file" className="d-none" />
                            </label>
                        </Form.Group>
                        <Form.Group>
                            <label>Url (Direcci&oacute;n donde se redirecionara)</label>
                            <Form.Control type="url" name="url" onChange={handleInputChange} />
                        </Form.Group>
                        <div className="text-right">
                            <Button
                                className="mr-2"
                                type="reset"
                                variant="ligh"
                                onClick={toggleModalPlus}
                            >Cancelar</Button>
                            <Button type="submit">Crear link</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        )}
    </>
}

function CarouselLink({ url, image, number, carousellink_id, update, deleteLink, hasPrivilege }) {
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false);
    const [carouselLink, setCarouselLink] = useState({
        id: carousellink_id,
        image: image,
        url: url
    });
    const [sendingUpdate, setSendingUpdate] = useState(false);
    const [sendingDelete, setSendingDelete] = useState(false);
    const [sendingImage, setSendingImage] = useState(false);

    async function handleSubmitUpdate(e) {
        e.preventDefault();

        if (sendingUpdate) {
            return;
        }

        try {
            // saber en que estado esta
            setSendingUpdate(true);
            const { data: apiCarouselLink } = await Axios({
                method: 'patch',
                url: `/apimuni/carousellinks/${carouselLink.id}`,
                params: { url: carouselLink.url }
            });
            // pasandole el objeto completo con los datos actualizado al otro componenete para que lo actualize
            update(apiCarouselLink);
            // cerrando el modal editar
            setModalEdit(false);
            // indica que se termino de actualizar
            setSendingUpdate(false)
        } catch (error) {
            console.log(error);
            // indica que se termino de actualizar
            setSendingUpdate(false);
        }
    }

    async function handleSelectImage(e) {
        if (sendingImage) {
            return;
        }

        try {
            // indica que se esta subiendo una imagen
            setSendingImage(true);

            // perparando datos de la imagen que seran enviados al servidor
            var formDataImage = new FormData;
            formDataImage.append('imagecarousellink', e.target.files[0]);

            // api donde se subira la imagen
            const { data: apiCarouselLink } = await Axios.post(`/apimuni/carousellinks/${carouselLink.id}/upload`, formDataImage, config);
            // obteniendo y guardando la url de la imagen subida
            setCarouselLink({ ...carouselLink, image: apiCarouselLink.image });
            update({
                ...carouselLink,
                image: apiCarouselLink.image
            });
            //indica que se termino de cargar la imagen
            setSendingImage(false);
        } catch (error) {
            console.log(error);
            setSendingImage(false);
        }
    }

    async function handleSubmitDelete(e) {
        e.preventDefault();

        if (sendingDelete) {
            return;
        }

        try {
            // indica que se esta eliminando el carousel link
            setSendingDelete(true);
            // api que se encargara de eliminar el carousel link
            await Axios.delete(`/apimuni/carousellinks/${carouselLink.id}`);
            // pasandole el id del objeto eliminado al otro componente para que actualice su estado
            deleteLink(carouselLink.id);
            // indica que se termino de eliminar el carousel link
            setSendingDelete(false);
        } catch (error) {
            console.log(error);
            // indica que se termino de eliminar el carousel link
            setSendingDelete(false);
        }
    }

    function handleInputChange(e) {
        setCarouselLink({ ...carouselLink, [e.target.name]: e.target.value });
    }

    const toggleModalEdit = () => setModalEdit(!modalEdit);
    const toggleModalDelete = () => setModalDelete(!modalDelete);

    if (!image || !url) {
        return null;
    }

    return <>
        <div className="link-of-intereses d-flex position-relative rounded rounded-lg">
            <div className="overflow-hidden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ">
                <a href={url} target="_blank" className="align-self-center justify-self-center">
                    <img
                        src={`/apimuni/images/carousellinks/${image}`}
                        alt="carousel link"
                        className="img-fluid"
                        loading="lazy"
                    />
                </a>
                {hasPrivilege && <>
                    <div className="options-editable">
                        <span className="mr-1 content-icon option-editable edit"
                            onClick={toggleModalEdit}>
                            <i className="fas fa-pen" />
                        </span>
                        <span className="content-icon option-editable delete"
                            onClick={toggleModalDelete}>
                            <i className="fas fa-trash" />
                        </span>
                    </div>
                </>}
            </div>
            {hasPrivilege && (
                <span className="link-of-intereses_number">
                    {number + 1}
                </span>
            )}
        </div>


        <Modal show={modalEdit} onHide={toggleModalEdit}>
            <Modal.Header closeButton>Actualizar link</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmitUpdate}>
                    <Form.Group>
                        <label>Image</label>
                        <label className="d-block upload-image d-flex justify-content-center align-items-center overflow-hidden"
                            onChange={handleSelectImage}>
                            {image ? (
                                <img
                                    src={`/apimuni/images/carousellinks/${carouselLink.image}`}
                                    className="img-fluid"
                                />
                            ) : (
                                    <i className="fas fa-arrow-circle-up fa-2x" />
                                )}
                            <Form.Control type="file" className="d-none" />
                        </label>
                    </Form.Group>
                    <Form.Group>
                        <label>Url (Direcci&oacute;n donde se redirecionara)</label>
                        <Form.Control type="url" name="url" value={carouselLink.url} onChange={handleInputChange} />
                    </Form.Group>
                    <div className="text-right">
                        <Button
                            className="mr-2"
                            type="reset"
                            variant="ligh"
                            onClick={toggleModalEdit}
                        >Cancelar</Button>
                        <Button type="submit">{sendingUpdate ? 'Actualizando...' : 'Actualizar link'}</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>

        <Modal show={modalDelete} onHide={toggleModalDelete}>
            <Modal.Header closeButton>Confirmar eliminaci&oacute;n</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmitDelete}>
                    <input type="hidden" value={carouselLink.id} />
                    <div className="text-center">
                        <i className="fas fa-trash fa-3x" />
                    </div>
                    <div className="py-4">
                        <h4 className="text-center">Eliminar link</h4>
                        <p className="text-center">Se eliminara el link http://centecp.com</p>
                    </div>
                    <div className="text-right">
                        <Button
                            className="mr-2"
                            variant="ligh"
                            onClick={toggleModalDelete}
                        >Cancelar</Button>
                        <Button
                            variant="danger"
                            type="submit"
                        >{sendingDelete ? 'Eliminando...' : 'Eliminar link'}</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}
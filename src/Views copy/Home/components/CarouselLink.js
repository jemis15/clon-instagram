import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function CarouselLink({ link, number, updateLink, deleteLink, editable, showAlert }) {
    const [modalEdit, setModalEdit] = useState(false)
    const [modalDelete, setModalDelete] = useState(false);

    const toggleModalEdit = () => setModalEdit(!modalEdit);
    const toggleModalDelete = () => setModalDelete(!modalDelete);

    if (!link.image || !link.url) {
        return null;
    }

    return <>
        <div className="link-of-intereses d-flex position-relative rounded rounded-lg">
            <div className="overflow-hidden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ">
                <a href={link.url} target="_blank" className="align-self-center justify-self-center">
                    <img
                        src={`/apimuni/images/links/${link.image}`}
                        alt="carousel link"
                        className="img-fluid"
                        loading="lazy"
                    />
                </a>
                {editable && <>
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
                    <span className="link-of-intereses_number">
                        {number}
                    </span>
                </>}
            </div>
        </div>


        {editable && <>
            <Modal show={modalEdit} onHide={toggleModalEdit} animation={false} centered>
                <Modal.Header closeButton>Actualizar link</Modal.Header>
                <Modal.Body>
                    <UpdateLink
                        data={link}
                        updateLink={updateLink}
                        closeModal={toggleModalEdit}
                        showAlert={showAlert}
                    />
                </Modal.Body>
            </Modal>

            <Modal show={modalDelete} onHide={toggleModalDelete} animation={false} centered>
                <Modal.Header closeButton>Confirmar eliminaci&oacute;n</Modal.Header>
                <Modal.Body>
                    <DeleteLink
                        link={link}
                        deleteLink={deleteLink}
                        closeModal={toggleModalDelete}
                        showAlert={showAlert}
                    />
                </Modal.Body>
            </Modal>
        </>}
    </>
}

function UpdateLink({ updateLink, data, closeModal, showAlert }) {
    const [link, setLink] = useState(data);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });
    const [sending, setSending] = useState(false);

    async function handleSubmitUpdate(e) {
        e.preventDefault();

        // validando si hubo cambio
        if (link === data && (image.formImage === '' && image.base64 === '')) {
            closeModal();
            return;
        }

        if (sending) {
            return;
        }

        try {
            setSending(true);
            const formData = new FormData();
            formData.append('image', image.formImage);
            formData.append('path', 'links');

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }

            const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData, config);
            const linkWithImageUpdated = { ...link, image: apiImage.name };
            await Axios({
                method: 'patch',
                url: `/apimuni/carousellinks/${link.id}`,
                params: linkWithImageUpdated
            });
            updateLink(data, linkWithImageUpdated);
            showAlert('success', 'Link actualizado')
            setSending(false);
            closeModal();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upss sucedio algo inesperado, vuelva a intentarlo mas tarde.')
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

    function handleInputChange(e) {
        setLink({ ...link, [e.target.name]: e.target.value });
    }

    return <Form onSubmit={handleSubmitUpdate}>
        <Form.Group>
            <label>Image</label>
            <label
                className="rounded d-block d-flex justify-content-center align-items-center overflow-hidden cursor-pointer"
                style={{
                    border: '1px dashed var(--grey-500)',
                    height: '250px'
                }}>
                {image.base64
                    ? <img
                        src={image.base64}
                        alt="link"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                    />
                    : <img
                        src={`/apimuni/images/links/${link.image}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                    />
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
            <label>Url (Direcci&oacute;n donde se redirecionara)</label>
            <Form.Control
                type="url"
                name="url"
                value={link.url}
                onChange={handleInputChange}
                autoComplete="off"
                required
            />
        </Form.Group>
        <div className="text-right">
            <Button
                className="mr-2"
                type="reset"
                variant="ligh"
                onClick={closeModal}
            >Cancelar</Button>
            <Button type="submit">
                {sending ? 'Actualizando...' : 'Actualizar link'}
            </Button>
        </div>
    </Form>
}

function DeleteLink({ link, deleteLink, closeModal, showAlert }) {
    const [sending, setSending] = useState(false);

    async function handleSubmitDelete(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true);
            // api que se encargara de eliminar el carousel link
            await Axios.delete(`/apimuni/carousellinks/${link.id}`);
            deleteLink(link);
            setSending(false);
            closeModal()
            showAlert('success', 'Link eliminado.');
        } catch (error) {
            console.log(error);
            setSending(false);
            showAlert('error', 'Upps sucedio algo inesperado, vuelva a intentar mas tarde.')
        }
    }


    return <Form onSubmit={handleSubmitDelete}>
        <input type="hidden" value={link.id} />
        <div className="text-center">
            <i className="fas fa-trash fa-3x" />
        </div>
        <div className="py-4">
            <h4 className="text-center">Eliminar link</h4>
            <p className="text-center">Se eliminara el link {link.url}</p>
        </div>
        <div className="text-right">
            <Button
                className="mr-2"
                variant="ligh"
                onClick={closeModal}
            >Cancelar</Button>
            <Button
                variant="danger"
                type="submit"
            >{sending ? 'Eliminando...' : 'Eliminar link'}</Button>
        </div>
    </Form>
}
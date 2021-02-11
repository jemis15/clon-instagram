import Axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Cropper from 'react-easy-crop';

import Title from './components/Title';
import Avatar from '../../components/utilitarios/Avatar';
import { getCroppedImg } from '../../Helpers/canvas-helper';

export default function Perfil({ user, update, showAlert }) {
    const [modalChangeImage, setModalChangeImage] = useState(false);
    const [actualizandoPerfil, setActualizandoPerfil] = useState(false);
    const [nombre, setNombre] = useState(user.nombre);

    async function handleSubmitUpdatePerfil(e) {
        e.preventDefault();

        if (actualizandoPerfil) {
            return;
        }

        try {
            setActualizandoPerfil(true);
            await Axios({
                method: 'post',
                url: `/apimuni/users/${user.id}`,
                params: { nombre }
            });
            setActualizandoPerfil(false);
            update({ ...user, nombre });
            showAlert('success', 'Se cambio el nombre');
        } catch (error) {
            console.log(error);
            setActualizandoPerfil(false);
            showAlert('error', 'Upps, ocurrio algo inesperado, vuelve a internar mas tarde.');
        }
    }

    const toggleModalChangeImage = () => setModalChangeImage(!modalChangeImage);

    return <div>
        <Title>Avatar</Title>
        <div className="mb-4">
            <div className="d-inline-block position-relative">
                <Avatar size="xl" image={user.image} />
                <span
                    className="position-absolute icon-edit border rounded-circle cursor-pointer"
                    onClick={toggleModalChangeImage}>
                    <i className="fas fa-pen" />
                </span>
            </div>
        </div>
        <Title>Datos personales</Title>
        <Form onSubmit={handleSubmitUpdatePerfil}>
            <Form.Group>
                <label>Nombre</label>
                <Form.Control
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    autoComplete="off"
                    required
                />
            </Form.Group>
            <Button type="submit">
                {actualizandoPerfil
                    ? 'Actualizando...'
                    : 'Actualizar nombre'
                }
            </Button>
        </Form>

        <Modal show={modalChangeImage} onHide={toggleModalChangeImage} animation={false} centered>
            <Modal.Header closeButton>Cambiar foto de perfil</Modal.Header>
            <UploadImage />
        </Modal>
    </div>
}

function UploadImage() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, [])

    function readFile(file) {
        return new Promise(resolve => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file)
        });
    }

    async function cortarImagen() {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        setCroppedImage(croppedImage);
    }

    async function handleImageSeleccionada(e) {
        const file = e.target.files[0];

        // finalizamos si no se selecciono nada.
        if (!file) {
            return;
        }

        if (file.type.indexOf('image/') === -1) {
            alert('Esto no parese ser una imagen');
            return;
        }

        const size = Math.round((file.size * 100) / 1024 / 1024) / 100;
        if (size > 5) {
            alert('Upps la imagen seleccionada es muy pesado(a), Por motivos de rendimiento de la pagina cancelamos la accion.');
            return;
        }
        if (size > 1) {
            setError(`Tamaño de la imagen es de ${size}MB, Se recomienda usar una imagen menor a 1MB, el rendimiento de la pagina sera mejor.`)
        } else {
            error && setError(null);
        }

        var imageDataUrl = await readFile(file);
        setImage(imageDataUrl);
    }

    return <>
        <Modal.Body>
            <div>
                {image
                    ? <div className="mb-3 position-relative w-100" style={{ height: '300px' }}>
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={1 / 1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </div>
                    : <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: '300px' }}>
                        Seleccione una imagen
                    </div>
                }
            </div>
            {croppedImage && <img src={croppedImage} alt="cortado" />}
            {error && (
                <div className="alert alert-warning text-small mb-0">
                    {error}
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
            {image && <Button size="sm" variant="secondary" onClick={cortarImagen}>Usar esto como Logo</Button>}
            <label htmlFor="image-upload" className="btn btn-sm btn-secondary">Selecciona una imagen</label>
            <input
                type="file"
                id="image-upload"
                className="d-none"
                accept="image/*"
                onChange={handleImageSeleccionada}
            />
        </Modal.Footer>
    </>
}
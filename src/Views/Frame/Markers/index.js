import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import Marker from '../../../components/Marker';
import MyPortal from '../../../components/MyPortal';
import CreateNarker from '../../Home/components/CreateMarker';

export default function Markers({ showAlert }) {
    const [markers, setMarkers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [portalCreateMarker, setPortalCreateMarker] = useState(false);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function loadMarkers() {
            try {
                setLoading(true);
                const { data: apiMarkers } = await Axios.get('/apimuni/markers', { cancelToken: source.token });
                setMarkers(apiMarkers);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel) { return; }
                console.log(error);
                setLoading(false);
            }
        }
        loadMarkers();

        return () => source.cancel('Cancelado');
    }, []);

    function newMarker(newMarker) {
        setMarkers([...markers, newMarker]);
    }

    function updateMarker(markerOriginal, markerActualizado) {
        setMarkers(markers => {
            const markersActualizados = markers.map(marker => {
                if (marker !== markerOriginal) {
                    return marker;
                }
                return markerActualizado;
            });
            return markersActualizados;
        })
    }

    function updateDeleteMarker(markerId) {
        setMarkers(markers => {
            const markersActualizados = markers.filter(marker => {
                return marker.id !== markerId;
            });
            return markersActualizados;
        })
    }

    function markersFiltrado() {
        return markers.filter(marker => {
            const index = marker.nombre.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase());
            const index2 = marker.descripcion.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase());

            if (index !== -1 || index2 !== -1) {
                return true;
            } else {
                return false;
            }
        });
    }

    if (loading) {
        return <p className="text-center pt-4">Cargando...</p>
    }

    return <>
        <div className="py-3"></div>
        <div className="px-4 mx-auto" style={{ maxWidth: '900px' }}>
            <div className="d-flex justify-content-between mb-5">
                <div>
                    <Form.Control
                        type="search"
                        placeholder="Buscar marker..."
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                <div>
                    <Button onClick={() => setPortalCreateMarker(true)}>Nuevo</Button>
                </div>
            </div>
            <Table size="sm" borderless hover>
                <thead>
                    <tr>
                        <th>Marker</th>
                        <th>Tipo</th>
                        <th className="text-right">Acci&oacute;n</th>
                    </tr>
                </thead>
                <tbody>
                    {markersFiltrado().map(marker => (
                        <tr key={marker.id}>
                            <td>
                                <div style={{ maxWidth: '400px' }}>
                                    <Marker
                                        image={`/apimuni/images/markers/${marker.image}`}
                                        descripcion={marker.descripcion}
                                        nombre={marker.nombre}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="text-small text-truncate" style={{ maxWidth: '200px' }}>
                                    {marker.marker_tipo.nombre}
                                </div>
                            </td>
                            <td className="text-right">
                                <Acciones
                                    marker={marker}
                                    updateMarker={updateMarker}
                                    updateDeleteMarker={updateDeleteMarker}
                                    showAlert={showAlert}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

        <MyPortal
            show={portalCreateMarker}
            onHide={() => setPortalCreateMarker(false)}>
            <CreateNarker
                updateNewMarker={newMarker}
                grupo={{ id: 1, nombre: 'james' }}
                showAlert={showAlert}
                onHide={() => setPortalCreateMarker(false)}
            />
        </MyPortal>
    </>
}


function Acciones({ marker, updateMarker, updateDeleteMarker, showAlert }) {
    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

    return <>
        <button className="btn" onClick={() => setModalUpdate(true)}>
            <i className="far fa-pen" />
        </button>
        <button className="btn" onClick={() => setModalDelete(true)}>
            <i className="far fa-trash-alt" />
        </button>

        <Modal show={modalDelete} onHide={() => setModalDelete(false)} size="sm" animation={false} centered>
            <Modal.Body>
                <DeleteMarker
                    id={marker.id}
                    updateDeleteMarker={updateDeleteMarker}
                    showAlert={showAlert}
                    closeModal={() => setModalDelete(false)}
                />
            </Modal.Body>
        </Modal>
        <Modal show={modalUpdate} onHide={() => setModalUpdate(false)} animation={false} centered>
            <Modal.Header closeButton>Actualizar marker</Modal.Header>
            <Modal.Body>
                <UpdateMarker
                    markerOriginal={marker}
                    updateMarker={updateMarker}
                    closeModal={() => setModalUpdate(false)}
                    showAlert={showAlert}
                />
            </Modal.Body>
        </Modal>
    </>
}

function DeleteMarker({ id, updateDeleteMarker, showAlert, closeModal }) {
    const [sending, setSending] = useState(false);

    async function deleteMarker() {
        if (sending) {
            return;
        }

        try {
            setSending(true)
            await Axios.delete(`/apimuni/markers/${id}`);
            updateDeleteMarker(id);
            showAlert('success', '1 marker eliminado');
            closeModal();
        } catch (error) {
            console.log(error);
            setSending(false)
            showAlert('error', 'Upps, sucedio algo inesperado, vuelva a intentar mas tarde.')
        }
    }

    return <div>
        <h4 className="mb-5">¿Eliminar este marker?</h4>
        <div className="text-right">
            <Button variant="light" className="mr-2" onClick={closeModal}>Cancelar</Button>
            <Button variant="danger" onClick={deleteMarker}>
                {sending ? 'Eliminando...' : 'Eliminar'}
            </Button>
        </div>
    </div>
}

function UpdateMarker({ markerOriginal, updateMarker, closeModal, showAlert }) {
    const [marker, setMarker] = useState(markerOriginal);
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        let isImageAActualizar = image.formImage !== '';
        let isMarkerAActualizar = marker !== markerOriginal;

        if (!isMarkerAActualizar && !isImageAActualizar) {
            closeModal();
            return;
        }

        let markerActualizado = marker;
        try {
            setSending(true);
            if (isImageAActualizar) {
                const formData = new FormData();
                formData.append('image', image.formImage);
                formData.append('path', 'markers');
                const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData);
                markerActualizado.image = apiImage.name;
            }

            await Axios({
                method: 'patch',
                url: `/apimuni/markers/${marker.id}`,
                params: markerActualizado
            });
            updateMarker(markerOriginal, markerActualizado);
            showAlert('success', '1 marker actualizado');
            closeModal();
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upps, sucedio algo inesperado, vuelva a intentar mas tarde');
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
        setMarker({ ...marker, [e.target.name]: e.target.value });
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Group>
            <label>Imagen</label>
            <div>
                <label
                    className="mb-0 ratio ratio-1x1 border rounded-circle overflow-hidden cursor-pointer"
                    style={{ width: '70px' }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            src={image.base64 !== ''
                                ? image.base64
                                : `/apimuni/images/markers/${marker.image}`
                            }
                            className="w-50"
                            alt="marker"
                        />
                        <div className="image-hover">
                            <i className="far fa-camera fa-lg text-white" />
                        </div>
                    </div>
                    <input
                        type="file"
                        className="d-none"
                        onChange={handleSelectImage}
                        accept="image/*"
                    />
                </label>
            </div>
        </Form.Group>
        <Form.Group>
            <label>T&iacute;tulo</label>
            <Form.Control
                type="text"
                name="nombre"
                value={marker.nombre}
                onChange={handleInputChange}
                required
            />
        </Form.Group>
        <Form.Group>
            <label>Descripci&oacute;n</label>
            <Form.Control
                type="text"
                name="descripcion"
                value={marker.descripcion}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group>
            <label>URL</label>
            <Form.Control
                type="url"
                name="url"
                value={marker.url}
                onChange={handleInputChange}
                required
            />
        </Form.Group>
        <div className="text-right">
            <Button variant="light" className="mr-2" onClick={closeModal}>Cancelar</Button>
            <Button type="submit">{sending ? 'Guardando...' : 'Guardar cambios'}</Button>
        </div>
    </Form>
}
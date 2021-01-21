import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import MyPortal from '../../components/MyPortal';
import CreateLink from '../Home/components/CreateLink';

export default function GrupoLink({ showAlert }) {
    const [portalCreateLink, setPortalCreateLink] = useState(false);
    const [linksPrincipal, setLinksPrincipal] = useState([]);
    const [linksSecundario, setLinksSecundario] = useState([]);
    const [grupo, setGrupo] = useState(null);

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function loadLinks() {
            try {
                const [apiLinksPrincipal, apiLinksSecundario] = await Promise.all([
                    Axios.get('/apimuni/carousellinks/grupo/principal', { cancelToken: source.token }).then(({ data }) => data),
                    Axios.get('/apimuni/carousellinks/grupo/secundario', { cancelToken: source.token }).then(({ data }) => data),
                ]);
                setLinksPrincipal(apiLinksPrincipal);
                setLinksSecundario(apiLinksSecundario);
            } catch (error) {
                console.log(error);
            }
        }
        loadLinks();

        return () => source.cancel('Cancelado');
    }, []);

    const openPortalCreateLink = (params) => {
        setPortalCreateLink(true);
        setGrupo(params)
    }

    function nuevoLink(newLink, grupo) {
        if (grupo === 'principal') {
            setLinksPrincipal([...linksPrincipal, newLink]);
        } else if (grupo === 'secundario') {
            setLinksSecundario([...linksSecundario, newLink])
        }
    }

    function updateLink(linkOriginal, linkUpdated, grupo) {
        if (grupo === 'principal') {
            setLinksPrincipal(links => {
                const linksUpdated = links.map(link => {
                    if (link !== linkOriginal) {
                        return link
                    }
                    return linkUpdated;
                });
                return linksUpdated;
            });
        } else if (grupo === 'secundario') {
            setLinksSecundario(links => {
                const linksUpdated = links.map(link => {
                    if (link !== linkOriginal) {
                        return link
                    }
                    return linkUpdated;
                });
                return linksUpdated;
            });
        }
    }

    function deleteLink(linkDelete, grupo) {
        if (grupo === 'principal') {
            setLinksPrincipal(linksPrincipal.filter(link => {
                return link.id !== linkDelete.id;
            }));
        } else if (grupo === 'secundario') {
            setLinksSecundario(linksSecundario.filter(link => {
                return link.id !== linkDelete.id;
            }));
        }
    }

    return <div className="px-xl-4">
        <div className="py-3"></div>
        {[
            { links: linksPrincipal, name: 'Links de intereses', grupo: 'principal' },
            { links: linksSecundario, name: 'Otros links', grupo: 'secundario' }
        ].map(grupo => (
            <div key={grupo.name} className="mb-4 px-4 py-3 border rounded bg-white">
                <div className="mb-4 d-flex align-items-center">
                    <h4 className="t4 mb-0">{grupo.name}</h4>
                    <button
                        className="ml-auto px-2 py-2 text-small font-weight-700 border-0 outline-none bg-green-100 rounded-lg"
                        style={{ color: 'var(--green-700' }}
                        onClick={openPortalCreateLink.bind(this, grupo.grupo)}>
                        Nuevo link
                </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
                    gap: '1rem',
                }}>
                    {grupo.links.map(link => (
                        <Link
                            key={link.id}
                            link={link}
                            grupo={grupo.grupo}
                            showAlert={showAlert}
                            updateLink={updateLink}
                            deleteLink={deleteLink}
                        />
                    ))}
                    {/* border dashed usa linear gradient */}
                    <div>
                        <button
                            className="ratio ratio-16x9 border-dashed rounded border-0 bg-green-100 outline-none"
                            onClick={openPortalCreateLink.bind(this, grupo.grupo)}>
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="font-weight-600" style={{ color: 'var(--green-500)' }}>Nuevo link</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        ))}

        <MyPortal
            show={portalCreateLink}
            onHide={() => setPortalCreateLink(false)}>
            <CreateLink
                grupo={grupo}
                updateNewLink={nuevoLink}
                showAlert={showAlert}
                onHide={() => setPortalCreateLink(false)}
            />
        </MyPortal>
    </div>
}

function Link({ link, grupo, showAlert, updateLink, deleteLink }) {
    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

    return <>
        <article
            key={link.id}
            className="rounded">
            <div className="ratio ratio-16x9 border rounded bg-grey-300">
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        src={`/apimuni/images/links/${link.image}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}
                        alt="link"
                        loading="lazy"
                    />
                    <div className="position-absolute" style={{ position: 'absolute', right: 0, top: 0 }}>
                        <button onClick={() => setModalUpdate(true)}><i className="far fa-pen" /></button>
                        <button onClick={() => setModalDelete(true)}><i className="far fa-times" /></button>
                    </div>
                </div>
            </div>
            <a
                className="text-smaller color-text-lighter py-2 text-truncate"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer">
                {link.url}
            </a>
        </article>

        <Modal show={modalDelete} onHide={() => setModalDelete(false)} animation={false} centered>
            <Modal.Header closeButton>Confirmar eliminaci&oacute;n</Modal.Header>
            <Modal.Body>
                <Delete
                    link={link}
                    grupo={grupo}
                    deleteLink={deleteLink}
                    closeModal={() => setModalDelete(false)}
                    showAlert={showAlert}
                />
            </Modal.Body>
        </Modal>

        <Modal show={modalUpdate} onHide={() => setModalUpdate(false)} animation={false} centered>
            <Modal.Header closeButton>Actualizar link</Modal.Header>
            <Modal.Body>
                <Update
                    data={link}
                    grupo={grupo}
                    updateLink={updateLink}
                    closeModal={() => setModalUpdate(false)}
                    showAlert={showAlert}
                />
            </Modal.Body>
        </Modal>
    </>
}

function Update({ data, grupo, closeModal, showAlert, updateLink }) {
    const [link, setLink] = useState(data);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });
    const [sending, setSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        // validando si hubo cambio
        let isImageAActualizar = image.formImage !== '';
        let isLinkAActualizar = link !== data;

        if (!isLinkAActualizar && !isImageAActualizar) {
            closeModal();
            return;
        }

        if (sending) {
            return;
        }

        let linkActualizado = link;
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

            if (isImageAActualizar) {
                const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData, config);
                linkActualizado.image = apiImage.name;
            }
            await Axios({
                method: 'patch',
                url: `/apimuni/carousellinks/${link.id}`,
                params: linkActualizado
            });
            updateLink(data, linkActualizado, grupo);
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

    return <>
        <Form onSubmit={handleSubmit}>
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
                <label>Url (Direcci&oacute;n que rediccionara el link)</label>
                <Form.Control type="url" name="url" value={link.url} onChange={handleInputChange} />
            </Form.Group>
            <div className="text-right">
                <button className="btn" onClick={closeModal}>Cancelar</button>
                <Button type="submit">Actualizar link</Button>
            </div>
        </Form>
    </>
}

function Delete({ link, grupo, deleteLink, closeModal, showAlert }) {
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
            deleteLink(link, grupo);
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
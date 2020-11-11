import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

export default function Nuevo() {
    const history = useHistory();
    const query = useQuery();
    const [subiendoImage, setSubiendoImage] = useState(false);
    const [grupoLinksTipo, setGrupoLinksTipo] = useState([]);
    const [grupoLink, setGrupoLink] = useState({
        titulo: '',
        image: '',
        url: '',
        grupo_link_tipo_id: query.get('tipo')
    });
    const [sending, setSending] = useState(false);

    useEffect(() => {
        async function loadGrupoLinkTipo() {
            const { data: apiGrupolinkstipo } = await Axios.get('/apimuni/grupolinkstipo/with/links');
            setGrupoLinksTipo(apiGrupolinkstipo);
        }

        loadGrupoLinkTipo();
    }, []);

    async function handleSumbmit(e) {
        e.preventDefault();

        try {
            setSending(true);
            const { data: apiGrupoLink } = await Axios({
                method: 'post',
                url: `/apimuni/grupolinks`,
                params: grupoLink
            });
            history.goBack();
            setSending(false)
        } catch (error) {

            setSending(false)
        }
    }

    async function handleImagenSeleccionada(e) {
        if (subiendoImage) {
            return;
        }

        try {
            setSubiendoImage(true);
            var formData = new FormData();
            formData.append('imagegrupolink', e.target.files[0]);

            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const { data: apiUpload } = await Axios.post('/apimuni/grupolinks/upload', formData, config);
            setGrupoLink({ ...grupoLink, image: apiUpload.filename })
            setSubiendoImage(false);
        } catch (error) {
            console.log(error);
            setSubiendoImage(false);
            return;
        }
    }

    function handleInputChange(e) {
        setGrupoLink({ ...grupoLink, [e.target.name]: e.target.value })
    }

    return <>
        <button className="mb-4" onClick={() => history.goBack()}>
            <span><i className="fas fa-arrow-left" /></span>
        </button>

        <h2 className="title-1 mb-4">Nuevo</h2>

        <label>Link</label>
        <Form onSubmit={handleSumbmit}>
            <LinkItem
                id="1"
                image={grupoLink.image && `/apimuni/images/grupolinks/${grupoLink.image}`}
                titulo={grupoLink.titulo}
                className="mb-4"
                handleImagenSeleccionada={handleImagenSeleccionada}
                handleInputChange={handleInputChange}
                subiendoImage={subiendoImage}
            />
            <Form.Group>
                <label>Redirigir a</label>
                <Form.Control
                    className="mb-4"
                    type="text"
                    name="url"
                    onChange={handleInputChange}
                    value={grupoLink.url}
                    placeholder="Ejm. https://cebtecp.com/admin"
                />
            </Form.Group>
            <Form.Group>
                <label>Grupo</label>
                <Form.Control
                    className="mb-4"
                    as="select"
                    name="grupo_link_tipo_id"
                    onChange={handleInputChange}
                    required
                    value={grupoLink.grupo_link_tipo_id}
                    disabled={query.get('tipo')}>
                    <option value="">Seleccione...</option>
                    {grupoLinksTipo.map(grupoLinkTipo => (
                        <option value={grupoLinkTipo.id}>{grupoLinkTipo.nombre}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Button type="submit" className="mb-5">{sending ? 'Creando...' : 'Nuevo link'}</Button>
        </Form>
    </>
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function LinkItem({ image, className, handleImagenSeleccionada, handleInputChange, subiendoImage, titulo }) {
    const style = {
        borderRadius: '10px'
    }

    return <div
        className={`${className} d-flex p-2 text-white text-decoration-none gradient-green-yellow hover-gradient-gren-yellow`}
        style={style}>
        <div className="p-2 mr-3">
            {subiendoImage ? (
                <span>Subiendo...</span>
            ) : (
                    <label className="mb-0 cursor-pointer">
                        {image ? (
                            <img src={image} alt="grupolink" width="40" height="40" />
                        ) : (
                                <span className="border-dotted-white d-inline-block" style={{ width: '40px', height: '40px' }}></span>
                            )}
                        <input 
                        type="file" 
                        className="d-none" 
                        onChange={handleImagenSeleccionada} 
                        accept=".jpg, .jpeg, .png, .gif, .svg"
                        />
                    </label>
                )}
        </div>
        <div className="text-left text-smaller w-100 align-self-center">
            <div className="d-flex">
                <Form.Control
                    className="flex-fill mr-1"
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={handleInputChange}
                    required
                    placeholder="Titulo"
                />
            </div>
        </div>
    </div>
}
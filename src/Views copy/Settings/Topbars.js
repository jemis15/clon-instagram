import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

import Title from './components/Title';
import imgNoTopbars from '../../assets/images/image3.svg';
import imgError from '../../assets/images/error.png';

export default function Topbars({ showAlert, showTopbar }) {
    const [titulo, setTitulo] = useState('__[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image');
    const [topbarId, setTopbarId] = useState(null);
    const [topbars, setTopbars] = useState([]);
    const [topbarActive, setTopbarActive] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadTopbars() {
            try {
                setLoading(true);
                // const { data: apiTopbas } = await Axios.get('/apimuni/topbars');
                setTopbars(simuladorTopbars);

                setTopbarActive(simuladorTopbars.find(topbar => {
                    return topbar.active === 1;
                }));
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError('Upps sucedio algo inesperado');
                setLoading(false);
            }
        }

        loadTopbars();
    }, [])

    async function handleActiveTopbar(topbarSelect) {
        setTopbarActive(topbarSelect);
        setTopbarId(topbarSelect.id);
        showTopbar(topbarSelect.contenido);
        showAlert('success', 'Se cambio el topbar');
    }
    async function handleRemoveTopbar(topbarSelect) {
        setTopbars(topbars.filter(topbar => {
            return topbar.id !== topbarSelect.id;
        }));
        topbarId === topbarSelect.id && setTopbarActive(null);
        topbarId === topbarSelect.id && showTopbar(null);
        showAlert('success', 'Se a eliminado un topbar');
    }

    async function handleDesactivarTopbar(topbarSelect) {
        try {
            // await Axios.patch('/apimuni/topbars/desactivar');
            setTopbarActive(null);
            showAlert('success', 'Se desactivo el topbar, ya no sera visible para nadie.')
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelectPreviewTopbar = (topbar) => {
        if (!topbar) {
            showTopbar(null);
            return;
        }

        setTopbarId(topbar.id);
        showTopbar(topbar.contenido);
    };

    if (loading) {
        return <div className="text-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    }

    if (error) {
        return <div className="mx-auto text-center mt-5" style={{ maxWidth: '350px' }}>
            <img
                className="mb-4"
                width="200"
                src={imgError}
                alt="error"
            />
            <h3>{error}</h3>
            <p className="text-small">Vuelva a intentarlo mas tarde :).</p>
        </div>
    }

    if (topbars.length <= 0) {
        return <div className="mx-auto text-center mt-5" style={{ maxWidth: '350px' }}>
            <img
                className="mb-4"
                width="200"
                src={imgNoTopbars}
                alt="info"
                loading="lazy"
            />
            <h3>Aun no se ha creado nada</h3>
            <p className="text-small">Agregar topbars para que todo persona que entre en la pagina lo vea en la parte superior.</p>
            <Button>Agregar topbar</Button>
        </div>
    }

    return <div>
        <div className="mb-4 d-flex">
            <Title>Topbars</Title>
            <div className="ml-auto">
                <Button size="sm">Nuevo topbar</Button>
            </div>
        </div>

        {topbarActive && <>
            <h5>Actualmente las persona lo pueden ver</h5>
            <div className="topbar-item rounded mb-5 py-2 px-3 cursor-pointer d-flex">
                {/* <div
                    className={`mr-2 ${topbarId === 0 && 'text-success'}`}
                    onClick={handleSelectPreviewTopbar.bind(this, topbarActive)}>
                    <i className="far fa-check-circle" />
                </div> */}
                <div className="topbar-item_content flex-fill">
                    <MDEditor.Markdown source={topbarActive.contenido} />
                </div>
                <div className="ml-auto text-nowrap">
                    <span className="d-inline-flex justify-content-center align-items-center rounded-circle icon mr-1 cursor-pointer"
                        onClick={handleDesactivarTopbar.bind(this, topbarActive)}>
                        <i className="far fa-arrow-down" />
                    </span>
                    <span className="d-inline-flex justify-content-center align-items-center rounded-circle icon cursor-pointer"
                        onClick={handleRemoveTopbar.bind(this, topbarActive)}>
                        <i className="far fa-times" />
                    </span>
                </div>
            </div>
        </>}

        <h5>Lista de topbars personalizados</h5>
        {topbars.map(topbar => (
            <div key={topbar.id}
                className="topbar-item rounded mb-2 py-2 px-3 cursor-pointer d-flex">
                <div
                    className={`mr-2 ${topbar.id === topbarId && 'text-success'}`}
                    onClick={handleSelectPreviewTopbar.bind(this, topbar)}>
                    <i className="far fa-check-circle" />
                </div>
                <div className="flex-fill topbar-item_content">
                    <MDEditor.Markdown source={topbar.contenido} />
                </div>
                {true && (
                    <div className="ml-auto text-nowrap">
                        <span className="d-inline-flex justify-content-center align-items-center rounded icon mr-1 cursor-pointer"
                            onClick={handleActiveTopbar.bind(this, topbar)}>
                            <i className="far fa-arrow-up" />
                        </span>
                        <span className="d-inline-flex justify-content-center align-items-center rounded icon cursor-pointer"
                            onClick={handleRemoveTopbar.bind(this, topbar)}>
                            <i className="far fa-times" />
                        </span>
                    </div>
                )}
            </div>
        ))}
        <div className="mb-4" />

        <Form.Control
            as="textarea"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            className="d-none"
        />
    </div>
}

const simuladorTopbars = [
    {
        id: 1,
        contenido: '__[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image',
        fecha_regresiva: '00',
        time: 1,
        active: 1,
    },
    {
        id: 2,
        contenido: 'Autoconverted link https://github.com/nodeca/pica (enable linkify to see) Autoconverted link https://github.com/nodeca/pica (enable linkify to see)  ',
        fecha_regresiva: '00',
        time: 1,
        active: 0,
    },
    {
        id: 3,
        contenido: 'see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.',
        fecha_regresiva: '00',
        time: 1,
        active: 0,
    },
    {
        id: 4,
        contenido: 'The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).',
        fecha_regresiva: '00',
        time: 1,
        active: 0,
    }
]
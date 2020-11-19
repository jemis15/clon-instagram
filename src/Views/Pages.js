import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Switch, Route, NavLink, useParams } from 'react-router-dom';

export default function Pages() {
    return <>
        <h2 className="text-center py-4"></h2>

        <Container>
            <Row>
                <Col md="9">
                    <Switch>
                        <Route path="/p/:page_nombre" render={() => <Contenido />} />
                    </Switch>
                </Col>
                <Col md="3">
                    <div className="content-lists-page">
                        <div className="lista-pages">
                            <h5>Programas</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="/p/vaso_de_leche"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Vaso de leche
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/demuna"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Demuna
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/omaped"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Omaped
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/adulto_mayor"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Adutlto mayor
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="lista-pages">
                            <h5>Seguridad</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="/p/direcctorio"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Directorio
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/codisec"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Codisec
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/seguridad_ciudadana"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Seguridad ciudadana
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/p/seguridad_y_salud_en_el_trabajo"
                                        className="px-3 py-1 d-inline-block text-decoration-none rounded-lg">
                                        Seguridad y salud en el trabajo
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    </>
}

function Contenido() {
    const { page_nombre } = useParams();
    const [page, setPage] = useState(null);
    const [loadingPage, setLoadingPage] = useState(true);
    const [activeMarkdown, setActiveMarkdown] = useState(false);

    useEffect(() => {
        async function loadPage() {
            try {
                setLoadingPage(true);
                const { data: apiPage } = await Axios.get(`/apimuni/pages/nombre/${getTitulo(page_nombre)}`);
                setPage(apiPage);
                setLoadingPage(false);
            } catch (error) {
                console.log(error);
                setLoadingPage(false);
            }
        }

        loadPage();
    }, [page_nombre]);

    function getTitulo(titulo) {
        var titulo_esplit = titulo.split('_');
        var textoLargo = '';

        titulo_esplit.map(titulo => {
            textoLargo += titulo + ' ';
        });

        return textoLargo;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data: apiPage } = await Axios({
                method: 'patch',
                url: `/apimuni/pages/${page.id}/contenido`,
                params: page
            });
            setPage(apiPage);
        } catch (error) {
            console.log(error);
        }

        setActiveMarkdown(false);
    }

    const handleInputChange = (e) => setPage({
        ...page,
        [e.target.name]: e.target.value
    });

    const toggleActiveMarkdown = () => setActiveMarkdown(!activeMarkdown);

    if (loadingPage) {
        return <p>Cargando...</p>
    }

    if (!page) {
        return <p>No se encontro resultados para esta pagina</p>
    }

    return <div>
        <Form onSubmit={handleSubmit}>
            <div className="pages-markdown edit position-relative">
                {activeMarkdown ? (
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            className="textarea-markdown"
                            name="contenido"
                            value={page.contenido}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                ) : (
                        <MDEditor.Markdown source={page.contenido} />
                    )}

                <div className="options">
                    {activeMarkdown ? (
                        <button type="submit" className="btn-guardar"></button>
                    ) : (
                            <span
                                className="icon mb-2"
                                onClick={toggleActiveMarkdown}>
                                <i className="fas fa-edit" />
                            </span>
                        )}
                </div>
            </div>
        </Form>
    </div>
}
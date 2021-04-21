import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useUser } from '../../Context/user-context';

import Avatar from '../../components/utilitarios/Avatar';

import Empresa from './Empresa';
import Users from './Usuarios';
import Topbars from './Topbars';
import Modals from './Modals';
import Perfil from './Perfil';
import Account from './Account';
import Seguridad from './Seguridad';

export default function Index({ settings, updateSettings, showAlert, showTopbar }) {
    const { user } = useUser();
    let { path, url } = useRouteMatch();

    if (!settings) {
        return null;
    }

    return <>
        <Container className="my-5">
            <div className="mb-4 d-flex align-items-center">
                <div className="me-3">
                    <Avatar
                        initials={user.nombre[0]}
                        size="md"
                        image={user.image}
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="text-dark text-truncate font-weight-600">{user.nombre}</div>
                    <div className="text-smaller">@{user.nickname}</div>
                </div>
            </div>
            <Row>
                <Col md="3">
                    <nav className="a_sidenav rounded mb-3">
                        <NavLink
                            to={`${url}/perfil`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Perfil</span>
                        </NavLink>
                        <NavLink
                            to={`${url}/cuenta`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Cuenta</span>
                        </NavLink>
                        <NavLink
                            to={`${url}/seguridad`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Seguridad</span>
                        </NavLink>
                    </nav>

                    <nav className="a_sidenav rounded mb-3">
                        <div className="px-3 py-2">
                            <span className="font-weight-600 text-small">{settings.nombre_oficial}</span>
                        </div>
                        <NavLink
                            to={`${url}/empresa`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Empresa</span>
                        </NavLink>
                        <NavLink
                            to={`${url}/usuarios`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Usuarios</span>
                        </NavLink>
                        <NavLink
                            to={`${url}/topbars`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Topbar</span>
                        </NavLink>
                        <NavLink
                            to={`${url}/modals`}
                            activeClassName="active"
                            className="a_sidenav-item px-3 py-2 text-small d-block position-relative text-decoration-none">
                            <span>Modales</span>
                        </NavLink>
                    </nav>
                </Col>
                <Col md="9">
                    <Switch>
                        <Redirect exact from={`${path}`} to={`${path}/perfil`} />
                        <Route path={`${path}/perfil`} render={() => <Perfil showAlert={showAlert} />} />
                        <Route path={`${path}/cuenta`} render={() => <Account showAlert={showAlert} />} />
                        <Route path={`${path}/seguridad`} render={() => <Seguridad showAlert={showAlert} />} />

                        <Route path={`${path}/empresa`} render={() => <Empresa data={settings} showAlert={showAlert} updateSettings={updateSettings} />} />
                        <Route path={`${path}/usuarios`} render={() => <Users showAlert={showAlert} />} />
                        <Route path={`${path}/topbars`} render={() => <Topbars showAlert={showAlert} showTopbar={showTopbar} />} />
                        <Route path={`${path}/modals`} render={() => <Modals showAlert={showAlert} />} />
                    </Switch>
                </Col>
            </Row>
        </Container>
    </>
}
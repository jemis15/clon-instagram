import React, { useState } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Noticias from './Noticias';
import Videos from './Videos';

export default function Lista() {
    const { path, url } = useRouteMatch();

    return <>
        <h3 className="mb-3 mt-4 container">Publicaciones de la web mazamari</h3>
        <div className="container mb-3">
            <nav className="border-bottom navigations">
                <NavLink
                    to={`${url}/noticias`}
                    className="me-4 fw-bold text-small navigation-item d-inline-block text-decoration-none"
                    activeClassName="active">
                    {'Noticias'}
                </NavLink>
                <NavLink
                    to={`${url}/videos`}
                    className="fw-bold text-small navigation-item d-inline-block text-decoration-none"
                    activeClassName="active">
                    {'Videos'}
                </NavLink>
            </nav>
        </div>
        <div className="mb-3">
            <div className="container d-flex">
                <div>
                    <input className="form-control" type="search" placeholder="Buscar" />
                </div>
                <div className="ms-auto">
                    <select className="form-select">
                        <option>Todos</option>
                        <option>Usuario 1</option>
                        <option>Usuario 2</option>
                    </select>
                </div>
            </div>
        </div>

        <Switch>
            <Route path={`${path}/noticias`} render={() => <Noticias />} />
            <Route path={`${path}/videos`} render={() => <Videos />} />
        </Switch>
    </>
}
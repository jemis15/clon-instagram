import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import CarouselLista from './Carousel/Lista';
import CarouselNuevo from './Carousel/Nuevo';
import CarouselEditar from './Carousel/Editar';
import LinkInteresesLista from './LinkIntereses/Lista';
import LinkInteresesNuevo from './LinkIntereses/Nuevo';
import LinkInteresesEditar from './LinkIntereses/Editar';
import GrupoLinksLista from './GrupoLinks/Lista';
import GrupoLinksNuevo from './GrupoLinks/Nuevo';
import GrupoLinksEditar from './GrupoLinks/Editar';
import GrupoLinksTipoNuevo from './GrupoLinksTipo/Nuevo';
import GrupoLinksTipoEditar from './GrupoLinksTipo/Editar';
import PlatoTipicosLista from './PlatoTipicos/Lista'
import TurismosLista from './Turismo/Lista'

import Blank from '../../Views/Blank';

export default function Dashboard() {
	return <>
		<Container className="mt-4">
			<Row>
				<Col className="mb-4 mb-lg-0" lg="4">
					<ul className="list-unstyled d-flex d-lg-block mb-0 menu-dashboard sticky-from-header-30 overflow-auto">
						<li>
							<NavLink to="/admin/carousel"
								className="menu-dashboard-link px-3 py-1 d-inline-block h-100 w-100 text-decoration-none"
								activeClassName="active">
								<span className="text-nowrap">Carousel</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/admin/linkintereses"
								className="menu-dashboard-link px-3 py-1 d-inline-block h-100 w-100 text-decoration-none"
								activeClassName="active">
								<span className="text-nowrap">Links de intereses</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/grupolinks"
								className="menu-dashboard-link px-3 py-1 d-inline-block h-100 w-100 text-decoration-none"
								activeClassName="active">
								<span className="text-nowrap">Grupo links</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/platotipicos"
								className="menu-dashboard-link px-3 py-1 d-inline-block h-100 w-100 text-decoration-none"
								activeClassName="active">
								<span className="text-nowrap">Plato tipicos</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/admin/turismos"
								className="menu-dashboard-link px-3 py-1 d-inline-block h-100 w-100 text-decoration-none"
								activeClassName="active">
								<span className="text-nowrap">Plato tipicos</span>
							</NavLink>
						</li>
					</ul>
				</Col>

				<Col lg="8">
					<Switch>
						{/* carousel */}
						<Route path="/admin/carousel" exact>
							<CarouselLista />
						</Route>
						<Route path="/admin/carousel/nuevo">
							<CarouselNuevo />
						</Route>
						<Route path="/admin/carousel/:carouselId">
							<CarouselEditar />
						</Route>
						{/* carousel links */}
						<Route path="/admin/linkintereses" exact>
							<LinkInteresesLista />
						</Route>
						<Route path="/admin/linkintereses/nuevo">
							<LinkInteresesNuevo />
						</Route>
						<Route path="/admin/linkintereses/:carouselLinkId">
							<LinkInteresesEditar />
						</Route>
						{/* Grupo links */}
						<Route path="/admin/grupolinks" exact>
							<GrupoLinksLista />
						</Route>
						<Route path="/admin/grupolinks/nuevo">
							<GrupoLinksNuevo />
						</Route>
						<Route path="/admin/grupolinks/:grupoLinkId" exact>
							<GrupoLinksEditar />
						</Route>
						{/* Grupo links Tipo */}
						<Route path="/admin/grupolinks/tipo/nuevo">
							<GrupoLinksTipoNuevo />
						</Route>
						<Route path="/admin/grupolinks/tipo/:grupoLinkTipoId">
							<GrupoLinksTipoEditar />
						</Route>
						{/* Platos tipicos */}
						<Route path="/admin/platotipicos">
							<PlatoTipicosLista />
						</Route>
						{/* Platos tipicos */}
						<Route path="/admin/turismos" exact>
							<TurismosLista />
						</Route>
						<Route path="/admin/turismos/markdown">
							<Blank />
						</Route>
						<Redirect to="/admin/carousel" />
					</Switch>
				</Col>
			</Row>
		</Container>
	</>
}

import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from './utilitarios/Avatar';

export default function Sidebar({ user, logout }) {
	function toggleCollapseSidebar() {
		document.body.classList.toggle("collapse-sidebar");
	}

	return <aside className="border-right sidebar overflow-auto">
		<header className="border-bottom overflow-hidden user-header d-flex flex-nowrap align-items-center justify-content-start hover-when-collapse-sidebar"
			onClick={toggleCollapseSidebar}>
			<div className="d-flex align-items-center">
				<Avatar className="mr-3" image={user.image && `/apimuni/images/faces/${user.image}`} size="sm" initials={user.nombre && user.nombre[0]} />
			</div>
			<div className="align-self-center overflow-hidden flex-fill d-none-when-collapse-sidebar">
				<p className="mb-0 color-text text-small text-truncate font-weight-700">
					{user.nombre}
				</p>
				<p className="text-smaller mb-0 text-muted text-truncate">@{user.nickname}</p>
			</div>
			<div className="mr-auto d-none-when-collapse-sidebar" onClick={toggleCollapseSidebar}>
				<span className="cursor-pointer color-text-light"
					onClick={toggleCollapseSidebar}>
					<i className="fas fa-bars fa-lg" />
				</span>
			</div>
		</header>
		<nav className="overflow-hidden">
			<ul className="list-unstyled mb-0 d-flex flex-column h-100">
				<li className="pt-3"></li>
				<li className="navigation-item">
					<NavigationLink
						to="/home"
						FAIcon="far fa-home"
						texto="Inicio"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/Cas"
						FAIcon="far fa-hammer"
						texto="Cas"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/comunidad"
						FAIcon="far fa-compass"
						texto="Comunidad"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/Blogs"
						FAIcon="far fa-project-diagram"
						texto="Blogs"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/Comunicados"
						FAIcon="far fa-bullhorn"
						texto="Comunicados"
					/>
				</li>

				<Separador />

				<li className="navigation-item">
					<NavigationLink
						to="/frame"
						FAIcon="far fa-crop-alt"
						texto="Espacio de trabajo"
					/>
				</li>

				<Separador />

				<li className="navigation-item">
					<NavigationLink
						to="/admin"
						FAIcon="far fa-cog"
						texto="Configuracion"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/settings"
						FAIcon="far fa-cog"
						texto="Ajustes"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to={`/@${user.nickname}`}
						FAIcon="far fa-user"
						texto="Perfil"
					/>
				</li>

				<li className="navigation-item mt-auto">
					<NavigationLinkClose onClick={logout} />
				</li>
			</ul>
		</nav>
	</aside >
}


function NavigationLink({ to, FAIcon, texto }) {
	return <NavLink
		to={to}
		className="px-4 text-nowrap d-block text-decoration-none navigation-link"
		activeClassName="active">
		<span className="font-weight-600 d-inline-block navigation-link-icon">
			<i className={`${FAIcon}`} />
		</span>
		<span className="text-small text-nowrap font-weight-600 d-none-when-collapse-sidebar">{texto}</span>
	</NavLink>
}
function NavigationLinkClose({ onClick }) {
	return <div className="px-4 text-nowrap text-decoration-none cursor-pointer navigation-link"
		onClick={onClick}>
		<span className="font-weight-600 d-inline-block navigation-link-icon">
			<i className="far fa-sign-out-alt" />
		</span>
		<span className="text-small text-nowrap font-weight-600 d-none-when-collapse-sidebar">Cerrar sessi&oacute;n</span>
	</div>
}

function Separador() {
	return <li className="border-bottom my-3" />;
}
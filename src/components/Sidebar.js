import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Avatar from './utilitarios/Avatar';
import ThemeButton from './utilitarios/ThemeButton';

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
				<p className="mb-0 color-text text-truncate font-weight-600">
					{user.nombre}
				</p>
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
						FAIcon="fas fa-home"
						texto="Inicio"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/admin"
						FAIcon="fas fa-globe-africa"
						texto="Configuracion"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/usuarios"
						FAIcon="fas fa-users"
						texto="Usuarios"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/frame"
						FAIcon="fas fa-crop-alt"
						texto="Espacio de trabajo"
					/>
				</li>
				<li className="navigation-item mt-auto">
					<ThemeButton className="text-nowrap d-inline-block w-100 h-100 px-4 py-3 text-left hover-sidebar-link" />
				</li>
				<li className="navigation-item">
					<NavigationLinkClose onClick={logout} />
				</li>
			</ul>
		</nav>
	</aside >
}


function NavigationLink({ to, FAIcon, texto }) {
	return <NavLink
		to={to}
		className="px-4 py-3 text-nowrap d-block text-decoration-none navigation-link"
		activeClassName="active">
		<span className="mr-2 font-weight-600 d-inline-block navigation-link-icon"><i className={`${FAIcon} fa-lg`} /></span>
		<span className="text-nowrap font-weight-600 d-none-when-collapse-sidebar">{texto}</span>
	</NavLink>
}
function NavigationLinkClose({ onClick }) {
	return <div className="px-4 py-3 text-nowrap text-decoration-none cursor-pointer navigation-link"
		onClick={onClick}>
		<span className="mr-2 font-weight-600 d-inline-block navigation-link-icon"><i className="fas fa-sign-out-alt fa-lg" /></span>
		<span className="text-nowrap font-weight-600 d-none-when-collapse-sidebar">Cerrar sessi&oacute;n</span>
	</div>
}
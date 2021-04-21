import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../Context/user-context';

import Avatar from './utilitarios/Avatar';

export default function Sidebar() {
	const { user, logout } = useUser();

	function toggleCollapseSidebar() {
		document.body.classList.toggle("collapse-sidebar");
	}

	return <aside className="sidebar overflow-auto" style={{ borderRight: '1px solid var(--grey-300)' }}>
		<header className="overflow-hidden user-header d-flex flex-nowrap align-items-center justify-content-start hover-when-collapse-sidebar"
			onClick={toggleCollapseSidebar}
			style={{ borderBottom: '1px solid var(--grey-300)' }}>
			<div className="d-flex align-items-center">
				<Avatar
					className="me-3"
					image={user.image}
					size="sm"
					initials={user.name}
				/>
			</div>
			<div className="align-self-center overflow-hidden flex-fill d-none-when-collapse-sidebar">
				<p className="mb-0 color-text text-small text-truncate font-weight-700">
					{user.name}
				</p>
				<p className="text-smaller mb-0 text-muted text-truncate">@{user.nickname}</p>
			</div>
			<div className="me-auto d-none-when-collapse-sidebar" onClick={toggleCollapseSidebar}>
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
						to="/frame"
						FAIcon="far fa-crop-alt"
						texto="Espacio de trabajo"
					/>
				</li>
				<li className="navigation-item">
					<NavigationLink
						to="/publicaciones"
						FAIcon="fab fa-twitch"
						texto="Publicaciones"
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

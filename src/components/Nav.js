import React from 'react';

import bolsaDeLaCompra from '../assets/images/icons/bolsa-de-la-compra.svg'

export default function AppNav({ container }) {
	return <nav className="App-nav align-self-center">
		<ul className={`d-flex ${container && 'justify-content-between container'} list-unstyled mb-0`}>
			<NavLi to="/" label={"Inicio"} />
			<NavLi to="#navli" label={"Municipalidad"}>
				<Menu />
			</NavLi>
			<NavLi to="#navli" label={"Normativa"}>
				<Menu />
			</NavLi>
			<NavLi to="#navli" label={"Transparencia"}>
				<Menu />
			</NavLi>
			<NavLi to="#navli" label={"Informacion en linea"}>
				<Menu />
			</NavLi>
		</ul>
	</nav>
}

function NavLi({ children, to, label }) {
	return <li className="mr-2 position-relative item-navigation hover-color-text">
		<a className="link text-small font-weight-semibold py-2 px-2 d-inline-block text-decoration-none"
			href={to}>
			<span>{label}</span>
		</a>
		{children}
	</li>
}


function Menu() {
	return <section className="grid-2 position-absolute drop-menu-container mt-2 rounded-lg opacity-0 shadow-sm ">
		<MenuLink />
		<MenuLink />
		<MenuLink />
		<MenuLink />
		<MenuLink />
	</section>
}

function MenuLink() {
	return <a className="sub-item-navigation d-inline-block text-decoration-none d-flex" href="#menulink">
		<div className="mr-3">
			<img src={bolsaDeLaCompra} width="35" alt="links" />
		</div>
		<div className="text-secondary">
			<p className="mb-1 text-small color-text">Titulo del link</p>
			<p className="text-smaller color-text-light mb-0">Descripcion del link otra descripcion.</p>
		</div>
	</a>
}
import React from 'react';
import { Dropdown } from 'react-bootstrap';

import AppNav from './Nav';

import logo from '../assets/images/logo.png';

export default function NavBar({ toggle, showLogin, user, logout }) {
	const style = {
		position: "sticky",
		top: "0",
		zIndex: 1500
	}

	return <div className="AppNavbar bg-white shadow-sm" style={style}>
		<div className="container-lg d-flex">
			<a className="mr-4" href="#local">
				<img src={logo} width="60px" alt="logo mazamari" />
			</a>
			<AppNav />
			<div className="ml-auto align-self-center d-flex align-items-center">
				<label className="mb-0 header-group-search position-relative border rounded-lg">
					<input type="text" className="mr-2 py-2 px-3" />
					<span className="icon-search p-2 text-secondary">
						<i className="fas fa-search" />
					</span>
				</label>
				<ButtonLoginUser onClick={showLogin} user={user} logout={logout} />
				<button
					size="sm"
					className="border-0 bg-transparent d-inline-block d-lg-none ml-2"
					onClick={toggle}>
					<i className="fas fa-bars fa-2x" />
				</button>
			</div>
		</div>
	</div>
}

function ButtonLoginUser({ onClick, user, logout }) {
	if (user) {
		return <>
			<Dropdown style={{ zIndex: '1021' }} className="d-inline-block">
				<Dropdown.Toggle size="sm" variant="light" style={{ width: '40px', height: '40px' }}>
					<img src={logo} className="img-fluid" alt="usuario logeado" />
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#action-1">Dashboard</Dropdown.Item>
					<Dropdown.Item href="#action-2">Perfil</Dropdown.Item>
					<Dropdown.Item href="#action-2" onClick={logout}>Salir</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>;
	}

	return <button className="ml-2 border-0 rounded-circle overflow-hidden"
		style={{ width: '40px', height: '40px' }}
		onClick={onClick}>
		<i className="fas fa-user fa-2x"></i>
	</button>
}
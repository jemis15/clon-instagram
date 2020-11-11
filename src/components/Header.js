import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppNav from './Nav';
import Avatar from './utilitarios/Avatar';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/faces/face1.jpg';

export default function Header({ toggle, user }) {

	// useEffect(() => {
	// 	let classlist = document.body.classList.value;
	// 	if (classlist.indexOf('with-transparent-header') !== -1) {
	// 		window.addEventListener('scroll', changeHeaderToSolid);
	// 	}

	// 	function changeHeaderToSolid() {
	// 		console.log('Hola mundo');
	// 		// document.documentElement.style.setProperty('--topbar-height', `${divTopbar.clientHeight}px`)
	// 	}

	// 	return () => document.removeEventListener('scroll', changeHeaderToSolid);
	// }, []);


	return <header className="header d-flex justify-content-center align-items-center border-bottom">
		<div className="container-lg d-flex">
			<Link className="mr-4" to="/">
				<img src={logo} width="60px" alt="logo mazamari" />
			</Link>
			<AppNav />
			<div className="ml-auto d-none align-self-center align-items-center">
				{/* <label className="mb-0 header-group-search position-relative border rounded-lg">
					<input type="text" className="mr-2 py-2 px-3" />
					<span className="icon-search p-2 text-secondary">
						<i className="fas fa-search" />
					</span>
				</label> */}
				{user ?
					<div className="rounded-circle overflow-hidden">
						<Link to="/james" className="d-inline-block">
							<Avatar image={avatar} size="sm" initials="FM" className="mb-0" />
						</Link>
					</div>
					:
					<Link className="btn btn-primary ml-2 button-login" to="/login">Iniciar sessión</Link>
				}
				<button
					size="sm"
					className="border-0 bg-transparent d-inline-block d-lg-none ml-2 button-bars"
					onClick={toggle}>
					<i className="fas fa-bars fa-2x" />
				</button>
			</div>
		</div>
	</header>
}
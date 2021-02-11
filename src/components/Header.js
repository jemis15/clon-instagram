import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppNav from './Nav';
import Avatar from './utilitarios/Avatar';
import defaultLogo from '../logo.svg';

export default function Header({ toggle, user, settings }) {
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
	const [dropMenuCreate, setDropMenuCreate] = useState(false);
	const location = useLocation();

	useEffect(() => {
		window.addEventListener('scroll', changeHeaderTransparent);

		function changeHeaderTransparent() {
			if (!document.body.classList.contains('with-transparent-header')) {
				setIsHeaderTransparent(false);
				return;
			}

			// posicion actual del scroll
			const scrollY = window.scrollY;

			if (scrollY < 20) {
				setIsHeaderTransparent(true);
			} else {
				setIsHeaderTransparent(false);
			}
		}

		changeHeaderTransparent();
		return () => window.removeEventListener('scroll', changeHeaderTransparent);
	}, []);

	useEffect(() => {
		// comparando la url actual con la lista de url's que tienen permitido un header transparent
		const index = urlWithHeaderTransparent.indexOf(location.pathname)
		if (index !== -1) {
			if (window.scrollY < 20) {
				setIsHeaderTransparent(true);
			}
			document.body.classList.add('with-transparent-header');
		} else {
			setIsHeaderTransparent(false);
			document.body.classList.remove('with-transparent-header');
		}
	}, [location]);

	if (!settings) {
		return null;
	}

	return <header
		className={`header ${isHeaderTransparent && 'is-transparent'} d-flex justify-content-center align-items-center`}>
		<div className="container d-flex align-items-center">
			<Link className="me-4" to="/">
				{settings && settings.logo
					? <img
						src={settings.logo}
						height="60px"
						loading="lazy"
						alt="logo mazamari"
					/>
					: <img
						src={defaultLogo}
						height="60px"
						loading="lazy"
						alt="default logo"
					/>
				}
			</Link>
			{user
				? <>
					<div className="ms-auto d-flex align-items-center">
						<div className="mr-3 position-relative">
							<button className="btn-color border-0 outline-none bg-transparent"
								onClick={() => setDropMenuCreate(true)}>
								<i className="far fa-plus fa-lg" />
							</button>
							<DropMenu show={dropMenuCreate} onHide={() => setDropMenuCreate(false)}>
								<DropLink to={{ pathname: `/img/new`, state: { background: location } }} label="Carousel" />
								<DropLink to="/links/new" label="Link" />
								<DropLink to="/markers/new" label="Marker" />
								<hr className="my-2" />
								<DropLink to="/users/invitar" label="Invitar usuario" />
							</DropMenu>
						</div>
						<div className="mr-3">
							<button className="btn-color border-0 outline-none bg-transparent">
								<i className="far fa-bell fa-lg" />
							</button>
						</div>
						<div className="mr-3 mr-xl-0">
							<button className="btn-color border-0 outline-none bg-transparent">
								<i className="far fa-bars fa-lg" />
							</button>
						</div>
						<div className="rounded-circle overflow-hidden d-xl-none"
							onClick={toggle}>
							<Avatar
								image={user.avatar}
								size="sm"
								initials={user.nombre[0]}
								className="mb-0"
							/>
						</div>
					</div>
				</>
				: <>
					<AppNav />
					<div className="ms-auto d-flex">
						<Link
							to="/login"
							className="mr-2 px-1 d-inline-block d-xl-none">
							<i className="fas fa-user fa-2x" />
						</Link>
						<a
							href="https://mesadepartevitual.munimazamari.gob.pe/inicio.php"
							target="__blank"
							rel="noopener noreferrer"
							className="mr-2 btn btn-primary text-decoration-none d-none d-xl-inline-block">
							Mesa de parte virtual
						</a>
						<div
							className="px-1 bg-transparent d-inline-block d-xl-none"
							onClick={toggle}>
							<i className="fas fa-bars fa-2x" />
						</div>
					</div>
				</>
			}
		</div>
		<a
			href="https://web.munimazamari.gob.pe"
			accessKey="a"
			target="__blank"
			rel="noopener noreferrer"
		/>
	</header>
}

function DropMenu({ show, onHide, children }) {
	if (!show) {
		return null;
	}

	return <div className="backglass active" onClick={onHide}>
		<div className="drop-menu py-2 rounded shadow-sm border position-absolute bg-white">
			{children}
		</div>
	</div>
}
function DropLink({ label, to }) {
	return <Link
		className="px-3 py-1 text-small d-block text-nowrap text-decoration-none link-normal"
		to={to}>
		{label}
	</Link>
}

const urlWithHeaderTransparent = [
	'/',
	'/historia',
	'/gastronomia',
	'/mazamari/gastronomias',
	'/mazamari/turismos',
	'/mazamari/agroindustrias',
	'/mazamari/hoteles',
	'/@'
];
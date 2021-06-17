import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppNav from './Nav';
import Avatar from './utilitarios/Avatar';
import defaultLogo from '../logo.svg';
import { useUser } from '../Context/user-context';
import { useSetting } from '../Context/setting-context';

export default function Header({ toggle }) {
	const { user } = useUser();
	const { settings } = useSetting();
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
		<div className="container-xxl d-flex align-items-center">
			<Link className="me-4" to="/">
				{settings && settings.logo && <img
						src={settings.logo}
						height="60px"
						loading="lazy"
						alt="logo mazamari"
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
								<DropLink to="/publicaciones/nuevo" label="Nueva publicación" />
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
								image={user.image}
								size="sm"
								initials={user.name[0]}
								className="mb-0"
							/>
						</div>
					</div>
				</>
				: <>
					<AppNav />
					<div className="ms-auto d-flex">
						<div className="btn-group">
							<Link to="/login" type="button" className="btn btn-light"><IconUser width="1em" /> Intranet</Link>
							<button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								<li>
									<a
										className="dropdown-item"
										href="https://mesadepartevitual.munimazamari.gob.pe/inicio.php"
										target="_blank"
										rel="noopener noreferrer">
										{'Mesa virtual'}
									</a>
								</li>
								<li>
									<a
										className="dropdown-item"
										href="http://181.65.201.166:9002/sistram/"
										target="_blank"
										rel="noopener noreferrer">
										{'Sistram'}
									</a>
								</li>
							</ul>
						</div>
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
			className="d-none"
			href="https://web.munimazamari.gob.pe"
			accessKey="a"
			target="_blank"
			rel="noopener noreferrer">
			{'Login'}
		</a>
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

const IconUser = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1em'} height={props.width || '1em'} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
		<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
	</svg>
)

const urlWithHeaderTransparent = [
	'/',
	'/mazamari/historia',
	'/mazamari/gastronomias',
	'/mazamari/turismos',
	'/mazamari/agroindustrias',
	'/mazamari/hoteles',
	'/mazamari/restaurantes',
	'/@'
];
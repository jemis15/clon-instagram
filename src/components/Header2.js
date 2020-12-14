import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppNav from './Nav2';
import Avatar from './utilitarios/Avatar';
import defaultLogo from '../logo.svg';

export default function Header({ toggle, user, settings }) {
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
	const params = useLocation();

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
		const index = urlWithHeaderTransparent.indexOf(params.pathname)
		if (index !== -1) {
			if (window.scrollY < 20) {
				setIsHeaderTransparent(true);
			}
			document.body.classList.add('with-transparent-header');
		} else {
			setIsHeaderTransparent(false);
			document.body.classList.remove('with-transparent-header');
		}
	}, [params]);

	if (!settings || !settings.logo) {
		return <p>No hay configuraci&oacute;n inicial</p>;
	}

	return <header
		className={`header ${isHeaderTransparent && 'is-transparent'} d-flex justify-content-center align-items-center`}>
		<div className="container-fluid d-flex">
			<Link className="mr-4" to="/">
				{settings && settings.logo
					? <img
						src={`/apimuni/images/settings/${settings.logo}`}
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
			<AppNav />
			<div className="ml-auto d-flex align-self-center align-items-center">
				{user ?
					<div className="rounded-circle overflow-hidden d-xl-none"
						onClick={toggle}>
						<Avatar image={user.avatar} size="sm" initials="FM" className="mb-0" />
					</div>
					: <>
						<Link
							to="/login"
							className="mr-2 px-1 d-inline-block d-xl-none">
							<i className="fas fa-user fa-2x" />
						</Link>
						<Link
							to="/login"
							className="mr-2 btn btn-outline-warning btn-sm text-small font-weight-600 text-decoration-none d-none d-xl-inline-block">
							Iniciar session
						</Link>
						<div
							className="px-1 bg-transparent d-inline-block d-xl-none"
							onClick={toggle}>
							<i className="fas fa-bars fa-2x" />
						</div>
					</>
				}
			</div>
		</div>
	</header>
}

const urlWithHeaderTransparent = ['/', '/historia', 'gastronomia'];
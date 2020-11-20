import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import AppNav from './Nav2';
import Avatar from './utilitarios/Avatar';

import logo from '../assets/images/logo.png';

export default function Header({ toggle, user }) {
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
	const params = useLocation();
	useEffect(() => {
		window.addEventListener('scroll', changeHeaderTransparent);

		function changeHeaderTransparent() {
			// pagina en la cual se esta navegando
			const pageActual = window.location;
			// posicion actual del scroll
			const scrollY = window.scrollY;
			var estaEnLaUrlCorrecta = false;

			switch (pageActual.pathname) {
				case '/':
					estaEnLaUrlCorrecta = true;
					break;
				case '/historia':
					estaEnLaUrlCorrecta = true;
					break;
				case '/gastronomiayturismo':
					estaEnLaUrlCorrecta = true;
					break;

				default:
					document.body.classList.remove('with-transparent-header');
					setIsHeaderTransparent(false);
					break;
			}

			if (estaEnLaUrlCorrecta) {
				if (scrollY < 20) {
					// activamos el header transparent
					document.body.classList.add('with-transparent-header');
					setIsHeaderTransparent(true);
					// document.body.classList.contains('with-transparent-header');
				} else {
					// le quitamos el header transparent
					document.body.classList.remove('with-transparent-header');
					setIsHeaderTransparent(false);
					// document.body.classList.contains('with-transparent-header')
				}
			}
		}


		changeHeaderTransparent();
		return () => window.removeEventListener('scroll', changeHeaderTransparent);
	}, [params]);

	return <header
		className={`header ${isHeaderTransparent && 'is-transparent'} d-flex justify-content-center align-items-center`}>
		<div className="container-fluid d-flex">
			<Link className="mr-4" to="/">
				<img src={logo} width="60px" alt="logo mazamari" />
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
							className="mr-2 py-2 px-3 btn-go_iniciar_session text-small font-weight-600 text-decoration-none d-none d-xl-inline-block">
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
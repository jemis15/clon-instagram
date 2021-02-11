import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';

import defaultLogo from '../logo.svg';
import BtnSocial from './BtnSocial';
import { useLocation } from 'react-router-dom';

export default function Footer({ settings, visitas }) {
	const about = {
		titulo: 'Municipalidad Distrital de Mazamari en el 2021',
		descripcion: 'Al 2021, Mazamari es un distrito saludable, inclusivo, intercultural, participativo y transparente; con habitantes amables, receptivos y organizados que desarrollan actividades agropecuarias, de transformación y de servicios con criterios de calidad, eficiencia y sostenibilidad”'
	}
	const diaHoy = moment().format('dddd').normalize("NFD").replace(/[\u0300-\u036f]/g, "");// lunes, martes, miercoles...
	const isLaborable = settings[`${diaHoy}_laborable`] === 1;// false - true
	const [isOpen, setIsOpen] = useState(false);
	const [localHorario, setLocalHorario] = useState(false);
	const location = useLocation();

	const toggleLocalHorario = () => setLocalHorario(!localHorario);
	useEffect(() => {
		const interval = setInterval(() => {
			if (!isLaborable) {
				return;
			}

			const date = new Date();
			let hora = date.getHours();
			if (hora < 10) {
				hora = "0" + hora;
			}
			let minutos = date.getMinutes();
			if (minutos < 10) {
				minutos = "0" + minutos;
			}
			const horayminutoActual = `${hora}:${minutos}`;

			if (horayminutoActual >= settings[`${diaHoy}_inicio`] && horayminutoActual <= settings[`${diaHoy}_fin`]) {
				setIsOpen(true);
			} else {
				setIsOpen(false);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [settings]);

	function findUrl(paths = []) {
		let encontrado = false;
		paths.forEach(path => {
			if (encontrado) {
				return;
			}

			if (path.exact) {
				encontrado = path.pathname === location.pathname;
			} else {
				const index = location.pathname.indexOf(path.pathname);
				encontrado = index === 0;
			}
		});
		return encontrado;
	}

	if (!findUrl(pathsWithFooter)) {
		return null;
	}

	return <>
		<footer className="footer pt-4">
			<Container className="pt-2">
				<div className="row">
					<div className="col-md-4 mb-4 mb-md-0">
						<div className="mx-auto mx-md-0" style={{ maxWidth: '200px' }}>
							{settings && settings.logo
								? <img
									className="img-fluid"
									src={settings.logo}
									loading="lazy"
									alt="logo mazamari"
								/>
								: <img
									src={defaultLogo}
									loading="lazy"
									alt="default logo"
								/>
							}
						</div>
					</div>
					<div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
						<h4 className="color-title">{about.titulo}</h4>
						<div className="text-small mb-3">{about.descripcion}</div>
					</div>
					<div className="col-md-4">
						<div>
							<ul className="list-unstyled mb-4">
								<li className={`mb-3 position-relative local-horario ${localHorario && 'active'} cursor-pointer`}
									onClick={toggleLocalHorario}>
									<span className="me-3 color-title">
										<i className="far fa-clock fa-lg" />
									</span>
									<div className="d-inline-block text-small">
										{isLaborable
											? <>
												<span>{isOpen ? 'Abierto ahora' : 'Cerrado ahora'}</span>
												<span className="abierto-cerrado_fecha">: {moment(settings[`${diaHoy}_inicio`], 'HH:mm').format('HH:mm')}–{moment(settings[`${diaHoy}_fin`], 'HH:mm').format('HH:mm')}</span>
											</>
											: <span>Hoy cerrado</span>
										}
									</div>
									<div className="collapse-horarios p-3 rounded shadow-sm">
										<table className="text-small color-text-light">
											<tbody>
												{['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map(dia => (
													<tr key={dia} className={`color-text ${dia === diaHoy && 'font-weight-600'}`}>
														<td className="pe-2">{dia}</td>
														<td>{settings[`${dia}_laborable`]
															? <>{moment(settings[`${dia}_inicio`], 'HH:mm:ss').format('HH:mm')}–{moment(settings[`${dia}_fin`], 'HH:mm:ss').format('HH:mm')}</>
															: 'Cerrado'
														}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</li>
								<li className="mb-3">
									<a className="text-decoration-none" href="https://goo.gl/maps/oRSHrJRTMbUvpbbN7" target="_blank">
										<span className="me-3 color-title">
											<i className="far fa-globe-americas fa-lg" />
										</span>
										<span className="text-small">{settings.direccion}</span>
									</a>
								</li>
								<li className="mb-3">
									<a className="text-decoration-none" href={`tel: (064) ${settings.telefono}`}>
										<span className="me-3 color-title">
											<i className="far fa-phone-alt fa-lg" />
										</span>
										<span className="text-small">{settings.telefono}</span>
									</a>
								</li>
								<li>
									<a className="text-decoration-none" href={`mailto:${settings.correo}`}>
										<span className="me-3 color-title">
											<i className="far fa-envelope fa-lg" />
										</span>
										<span className="text-small">{settings.correo}</span>
									</a>
								</li>
							</ul>

							<div>
								<h4 className="color-title text-center text-md-start">N&uacute;mero de visitantes</h4>
								{visitas && <ContadorVisitas number={visitas} />}
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Container className="pb-3">
				<ul className="list-unstyled d-flex justify-content-center mb-2">
					{['facebook', 'twitter', 'youtube', 'instagram'].map(social => {
						if (!settings[social]) {
							return null;
						}

						return <li className="me-2" key={social}>
							<BtnSocial
								className="rounded-circle"
								url={settings[social]}
								social={social}
								size="md"
								fill
							/>
						</li>
					})}
				</ul>
				<div className="text-center text-smaller">
					<span>Desarrollado por </span>
					<a
						href="https://centecp.com"
						title="centecp.com"
						target="_blank">
						CENTECP
					</a>
				</div>
			</Container>
		</footer >
	</>;
}

function ContadorVisitas({ number }) {
	const numberOfVisitas = number.split('');
	const cerosFaltantes = new Array(6 - numberOfVisitas.length).fill(0);
	const numbers = cerosFaltantes.concat(numberOfVisitas);

	const estilos = {
		backgroundColor: 'var(--grey-100)',
		color: 'var(--grey-900)'
	}

	return <div className="d-flex justify-content-center justify-content-md-start">
		{numbers.map((number, key) => (
			<div
				key={key}
				className="font-weight-800 rounded px-2 py-1 me-1"
				style={estilos}>
				{number}
			</div>
		))}
	</div>
}

const pathsWithFooter = [
	{ pathname: '/', exact: true },
	{ pathname: '/@', exact: false },
	{ pathname: '/equipo', exact: false },
	{ pathname: '/mazamari/gastronomias', exact: true },
	{ pathname: '/mazamari/turismos', exact: true },
	{ pathname: '/mazamari/agroindustrias', exact: true },
	{ pathname: '/mazamari/historia', exact: true },
	{ pathname: '/mazamari/hoteles', exact: true },
	{ pathname: '/muni/vision_mision', exact: true },
	// { pathname: '/muni/comisiones', exact: true },
];
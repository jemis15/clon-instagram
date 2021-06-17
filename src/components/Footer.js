import React from 'react';
import { useLocation } from 'react-router-dom';

import defaultLogo from '../logo.svg';
import BtnSocial from './BtnSocial';

export default function Footer({ settings, visitas }) {
	const about = {
		titulo: 'Municipalidad Distrital de Mazamari en el 2021',
		descripcion: 'Al 2021, Mazamari es un distrito saludable, inclusivo, intercultural, participativo y transparente; con habitantes amables, receptivos y organizados que desarrollan actividades agropecuarias, de transformación y de servicios con criterios de calidad, eficiencia y sostenibilidad”'
	}
	// const diaHoy = moment().format('dddd').normalize("NFD").replace(/[\u0300-\u036f]/g, "");// lunes, martes, miercoles...
	// const isLaborable = settings[`${diaHoy}_laborable`] === 1;// false - true
	// const [isOpen, setIsOpen] = useState(false);
	// const [localHorario, setLocalHorario] = useState(false);
	const location = useLocation();

	// const toggleLocalHorario = () => setLocalHorario(!localHorario);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (!isLaborable) {
	// 			return;
	// 		}

	// 		const date = new Date();
	// 		let hora = date.getHours();
	// 		if (hora < 10) {
	// 			hora = "0" + hora;
	// 		}
	// 		let minutos = date.getMinutes();
	// 		if (minutos < 10) {
	// 			minutos = "0" + minutos;
	// 		}
	// 		const horayminutoActual = `${hora}:${minutos}`;

	// 		if (horayminutoActual >= settings[`${diaHoy}_inicio`] && horayminutoActual <= settings[`${diaHoy}_fin`]) {
	// 			setIsOpen(true);
	// 		} else {
	// 			setIsOpen(false);
	// 		}
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, [settings]);

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
		<footer
			className="footer pt-4 overflow-hidden"
			style={{
				backgroundImage: 'url(/storage/images/utilitarios/BANNER.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom'
			}}>
			<div className="container-xxl pt-2">
				<div className="row">
					<div className="col-lg-9 d-md-flex">
						<div className="text-center mb-3 me-md-4">
							{settings && settings.logo
								? <img
									className="img-fluid"
									src={settings.logo}
									loading="lazy"
									alt="logo mazamari"
									style={{ maxWidth: '200px' }}
								/>
								: <img
									src={defaultLogo}
									loading="lazy"
									alt="default logo"
								/>
							}
						</div>
						<div className="mb-3 align-self-center px-lg-5 text-white fw-bold" style={{ textAlign: 'justify' }}>
							{about.descripcion}
						</div>
					</div>
					{/* <div className="d-none col-md-6 col-lg-3">
						<div>
							<ul className="list-unstyled mb-4">
								<li className={`mb-2 position-relative local-horario ${localHorario && 'active'} cursor-pointer`}
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
									<div className="collapse-horarios px-3 py-2 rounded shadow-sm">
										<table className="text-small">
											<tbody>
												{['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].map(dia => (
													<tr key={dia} className={`${dia === diaHoy && 'font-weight-600'}`}>
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
								<li className="mb-2 text-truncate">
									<a className="text-decoration-none" href="https://goo.gl/maps/oRSHrJRTMbUvpbbN7" title={settings.direccion} target="_blank">
										<span className="me-3 color-title">
											<i className="far fa-globe-americas fa-lg" />
										</span>
										<span className="text-small">{settings.direccion}</span>
									</a>
								</li>
								<li className="mb-2 text-truncate">
									<a className="text-decoration-none" href={`tel: ${settings.telefono}`} title={settings.telefono}>
										<span className="me-3 color-title">
											<i className="far fa-phone-alt fa-lg" />
										</span>
										<span className="text-small">{settings.telefono}</span>
									</a>
								</li>
								<li className="text-truncate">
									<a className="text-decoration-none text-truncate" href={`mailto:${settings.correo}`} title={settings.correo}>
										<span className="me-3 color-title">
											<i className="far fa-envelope fa-lg" />
										</span>
										<span className="text-small">{settings.correo}</span>
									</a>
								</li>
							</ul>
						</div>
					</div> */}
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0 text-md-start">
						<div className="mb-4">
							<h4 className="text-center text-white">N&uacute;mero de visitantes</h4>
							{visitas && (
								<ContadorVisitas
									today={visitas.visitsDay}
									week={visitas.visitsWeek}
									month={visitas.visitsMonth}
									total={visitas.visitsTotal}
								/>
							)}
						</div>
						<div className="d-none">
							<h4 className="text-center text-md-start">Redes Sociales</h4>
							<ul className="list-unstyled d-flex justify-content-center justify-content-md-start mb-2">
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
						</div>
					</div>
				</div>
			</div>

			<div className="text-dark" style={{ backgroundColor: 'rgba(32,112,55,.8)' }}>
				<div className="container-xxl d-flex align-items-center py-2">
					<ul className="mb-0 list-inline overflow-hidden">
						<li className="list-inline-item px-2 py-1 text-white">
							<a
								className="text-decoration-none text-nowrap d-inline-flex"
								href="https://goo.gl/maps/6GCapyFfP9WasJEE6"
								title={settings.direction}
								rel="noopener noreferrer"
								target="_blank">
								<span className="me-2">
									<i className="far fa-globe-americas" />
								</span>
								<span className="text-small">{settings.direction}</span>
							</a>
						</li>
						<li className="list-inline-item px-2 py-1 text-white">
							<a className="text-decoration-none text-nowrap d-inline-flex" href={`tel: ${settings.phone}`} title={settings.phone}>
								<span className="me-2">
									<i className="far fa-phone-alt" />
								</span>
								<span className="text-small">{settings.phone}</span>
							</a>
						</li>
						<li className="list-inline-item px-2 py-1 text-white">
							<a className="text-decoration-none text-nowrap d-inline-block" href={`mailto:${settings.email}`} title={settings.email}>
								<span className="me-2">
									<i className="far fa-envelope" />
								</span>
								<span className="text-small">{settings.email}</span>
							</a>
						</li>
					</ul>

					<ul className="mb-0 ms-auto list-inline">
						{['facebook', 'twitter', 'youtube', 'instagram'].map(social => {
							if (!settings[social]) {
								return null;
							}

							return <li className="list-inline-item" key={social}>
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

					<ul className="mb-0 ms-auto list-inline d-none">
						{settings.facebook && (
							<li className="list-inline-item">
								<a href={`https://facebook.com/${settings.facebook}`} className="rounded border border-success d-inline-block icon-facebook" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
						)}
						{settings.youtube && (
							<li className="list-inline-item">
								<a href={`https://youtube.com/channel/${settings.youtube}`} className="rounded border border-success d-inline-block icon-youtube" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-youtube"></i>
								</a>
							</li>
						)}
						{settings.whatsapp && (
							<li className="list-inline-item">
								<a href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`} className="rounded border border-success d-inline-block icon-whatsapp" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-whatsapp fa-lg"></i>
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</footer >
	</>;
}

function ContadorVisitas(props) {
	const numberOfVisitas = props.total ? props.total.toString().split('') : '0';
	const cerosFaltantes = new Array(6 - numberOfVisitas.length).fill(0);
	const numbers = cerosFaltantes.concat(numberOfVisitas);

	const estilos = {
		backgroundColor: 'var(--grey-100)',
		color: 'var(--grey-900)'
	}

	return <div className="border border-primary rounded p-4 overflow-hidden" style={{ backgroundColor: 'rgba(32,112,55,.8)' }}>
		<div className="mb-4 d-flex justify-content-center">
			{numbers.map((number, key) => (
				<div
					key={key}
					className="font-weight-800 rounded px-2 py-1 me-1"
					style={estilos}>
					{number}
				</div>
			))}
		</div>
		<ul className="mb-0 list-unstyled">
			<li className="text-white fw-bold d-flex justify-content-between">
				<div>Hoy</div>
				<div>{props.today}</div>
			</li>
			<li className="text-white fw-bold d-flex justify-content-between">
				<div>Esta semana</div>
				<div>{props.week}</div>
			</li>
			<li className="text-white fw-bold d-flex justify-content-between">
				<div>Este mes</div>
				<div>{props.month}</div>
			</li>
			<li className="text-white fw-bold d-flex justify-content-between">
				<div>Total</div>
				<div>{props.total}</div>
			</li>
		</ul>
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
	{ pathname: '/seguridad', exact: false },
	{ pathname: '/contactos', exact: false },
	{ pathname: '/cem', exact: true },
	{ pathname: '/muni/alcalde', exact: true },
	{ pathname: '/muni/funcionarios', exact: true },
	{ pathname: '/muni/regidores', exact: true },
	{ pathname: '/aprendoencasa', exact: true },
	{ pathname: '/c/', exact: false },
];
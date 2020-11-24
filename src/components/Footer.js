import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import logo from '../assets/images/logo.png';
import BtnSocial from './BtnSocial';

export default function Footer() {
	const [localHorario, setLocalHorario] = useState(false);

	const toggleLocalHorario = () => setLocalHorario(!localHorario);

	return <>
		<footer className="footer">
			<Container className="py-5">
				<Row>
					<Col md="4" className="text-center text-md-left mb-4">
						<img src={logo} className="img-fluid" width="200" />
					</Col>
					<Col md="4" className="mb-4 text-center text-md-left">
						<h4>Municipalidad distrital de Mazamari en el 2021</h4>
						<div className="text-small mb-3">
							Al 2021, Mazamari es un distrito saludable, inclusivo, intercultural, participativo y transparente; con habitantes amables, receptivos y organizados que desarrollan actividades agropecuarias, de transformación y de servicios con criterios de calidad, eficiencia y sostenibilidad”
						</div>
					</Col>
					<Col md="4">
						<div>
							<ul className="list-unstyled mb-5">
								<li className={`mb-3 position-relative local-horario ${localHorario && 'active'} cursor-pointer`} onClick={toggleLocalHorario}>
									<span className="mr-4 text-primary">
										<i className="far fa-clock fa-lg" />
									</span>
									<div className="d-inline-block text-small ">
										<span>Abierto ahora</span>
										<span className="abierto-cerrado_fecha">: 08:00─17:00</span>
									</div>
									<div className="collapse-horarios p-3 rounded shadow-sm">
										<table className="text-small color-text-light">
											<tbody>
												<tr className="color-text">
													<td className="pr-2">lunes</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">martes</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">miercoles</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">jueves</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">viernes</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">savado</td>
													<td>08:00─17:00</td>
												</tr>
												<tr>
													<td className="pr-2">domingo</td>
													<td>Cerrado</td>
												</tr>
											</tbody>
										</table>
									</div>
								</li>
								<li className="mb-3">
									<a href="https://goo.gl/maps/oRSHrJRTMbUvpbbN7" target="_blank">
										<span className="mr-4 text-primary">
											<i className="fas fa-globe-americas fa-lg" />
										</span>
										<span className="text-small ">Plaza Principal S/N – Puerto Prado</span>
									</a>
								</li>
								<li className="mb-3">
									<a href="tel: (064) 545187">
										<span className="mr-4 text-primary">
											<i className="fas fa-phone-alt fa-lg" />
										</span>
										<span className="text-small ">(064) 545187</span>
									</a>
								</li>
								<li className="mb-3">
									<a href="mailto:flores@gmail.com">
										<span className="mr-4 text-primary">
											<i className="far fa-envelope fa-lg" />
										</span>
										<span className="text-small ">munimazamarimcm@hotmail.com</span>
									</a>
								</li>
							</ul>

							<div>
								<h4 className="h5 text-center text-md-left">Numero de visitantes</h4>
								<div className="text-center text-md-left">
									<div className="contador-visitas text-small py-1 list-unstyled justify-content-start d-inline-block rounded">
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">3</span>
									</div>
									{/* <ul className="list-unstyled contador-visitas__old d-flex justify-content-start">
											<li>1</li>
											<li>0</li>
											<li>0</li>
											<li>8</li>
											<li>8</li>
											<li>3</li>
										</ul> */}
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

			<div className="footer-copy">
				<Container className="pt-2 pb-3 clearfix" style={{ fontSize: '14px' }}>
					<span>&copy; <a href="https://centecp.com" title="centecp.com" target="_blank">CENTECP</a> v1.0.0</span>
					<div className="float-right">
						<ul className="list-unstyled d-flex justify-content-center justify-content-md-start mb-0">
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="facebook" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="twitter" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="youtube" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="pinterest" fill /></li>
						</ul>
					</div>
				</Container>
			</div>
		</footer >
	</>;
}
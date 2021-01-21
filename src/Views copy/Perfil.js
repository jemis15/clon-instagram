import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import fondo1 from '../assets/images/fondos/fondo1.jpg';
import foto from '../assets/images/default.jpg';

export default function Perfil() {
	return <>
		<div className="bg-dark overflow-hidden d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
			<img src={fondo1} alt="fondo user" className="img-fluid" />
		</div>

		<Container className="mt-4">
			<Row>
				<Col xs={{ order: 1, span: 12 }} lg={3}>
					<div className="sticky-from-header-30 mb-4" style={{ marginTop: '-70px' }}>
						<section className="p-3 bg-dark rounded perfil-avatar">
							<div className="img-content text-center mb-2">
								<img src={foto} className="img-fluid" alt="perfil" width="125" height="125" />
							</div>
							<h4 className="title-3 text-white text-center">FLORES MEZA JAMES</h4>
						</section>
					</div>
				</Col>

				<Col xs={{ order: 3, span: 12 }} lg={6}>
					<Publicacion />
					<Publicacion />
					<Publicacion />
					<Publicacion />
					<Publicacion />
					<Publicacion />
					<Publicacion />
				</Col>

				<Col xs={{ order: 2, span: 12 }} lg={{ span: 3, order: 'last' }}>
					<div className="sticky-from-header-30 overflow-auto">
						<ul className="tabs-tab list-unstyled d-flex d-lg-block">
							<li className="tabs-item cursor-pointer text-smaller active text-nowrap px-3 py-2">
								<span className="mr-2"><i className="far fa-comment-alt" /></span>
								<span>Publicaciones</span>
							</li>
							<li className="tabs-item cursor-pointer text-smaller text-nowrap px-3 py-2">
								<span className="mr-2"><i className="far fa-comment-alt" /></span>
								<span>Publicaciones</span>
							</li>
							<li className="tabs-item cursor-pointer text-smaller text-nowrap px-3 py-2">
								<span className="mr-2"><i className="far fa-comment-alt" /></span>
								<span>Publicaciones</span>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</Container>
	</>
}

function Publicacion() {
	return <div className="bg-light mb-3 border p-3 rounded publication position-relative">
		<div className="publication-tag py-1 px-2 position-absolute text-smaller">
			<span className="mr-2"><i className="fas fa-book" /></span>
			<span>Aticulo del blog</span>
		</div>
		<header className="publication-header">
			<h5 className="title-3 mb-3">
				<a className="text-decoration-none" href="#titulo">Titulo de la publicacion</a>
			</h5>
			<div className="d-flex mb-1">
				<div className="mr-2">
					<img
						src={foto}
						alt="flores meza james"
						className="img-fluid"
						width="50"
					/>
				</div>
				<div>
					<h6 className="mb-0">Flores Meza James</h6>
					<p className="mb-0"><small>03/05/2020 a las 08:26pm</small></p>
				</div>
			</div>
		</header>
		<div className="publication-content">
			<p>
				Cuando en una oferta laboral les piden sus pretensiones salariales, ¿lo ven como positivo o negativo? Por ejemplo, yo pido pretensiones para no hacerle perder el tiempo a alguien a quien no voy a poder pagarle. Igual que cuando se pide cotización a un freelance. Pero me gustaría saber la opinión del otro lado, de quien postula.
				</p>
			<p>
				Luego, ¿cómo calculan cuánto pedir? Me ha pasado ver perfiles excelentes con una gran experiencia y yo para mis adentros pensando: "que buen perfil, pero no creo que pueda pagarle" hasta que veo sus pretensiones y no me las creo (por lo bajas que son). Y también al revés, pretensiones de manager con experiencia de recién egresado.
			</p>
			<p>
				Entender mejor a los postulantes nos ayuda a quienes estamos del otro lado a tomar la decisión correcta. Ambas partes ganan. Win / Win.
			</p>
		</div>

		<div className="grid-foto grid-mayor-5">
			<img
				src={foto}
				alt="publicacion"
				className="grid-image1 image-publicacion img-fluid"
			/>
			<img
				src={foto}
				alt="publicacion"
				className="grid-image2 image-publicacion img-fluid"
			/>
			<img
				src={foto}
				alt="publicacion"
				className="grid-image3 image-publicacion img-fluid"
			/>
		</div>
	</div>
}
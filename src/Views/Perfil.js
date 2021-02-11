import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import fondo1 from '../assets/images/fondos/fondo1.jpg';
import foto from '../assets/images/default.jpg';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export default function Perfil() {
	const { nickname } = useParams();
	const [miembro, setMiembro] = useState(null);
	const [loading, setLoading] = useState(false);
	const [tab, setTab] = useState('posts');

	useEffect(() => {
		async function loadMiembro() {
			try {
				setLoading(true);
				const { data: apiMiembro } = await Axios.get(`/apimuni/team/nickname/${nickname}`);
				setMiembro(apiMiembro);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadMiembro();
	}, [nickname]);

	if (loading) {
		return <p className="text-center">Cargando...</p>
	}

	if (!miembro) {
		return <p className="text-center">Este perfil no le pertenece a nadie.</p>
	}

	return <>
		<div className="bg-dark overflow-hidden d-flex justify-content-center align-items-center" style={{ height: '250px' }}>
			<img src={fondo1} alt="fondo user" className="img-fluid" />
		</div>

		<Container className="mt-4 mb-5">
			<Row>
				<Col xs={{ order: 1, span: 12 }} lg={3}>
					<div className="sticky-from-header-30 mb-4" style={{ marginTop: '-70px' }}>
						<section className="p-3 bg-white border rounded-3 shadow-sm perfil-avatar">
							<div className="mb-2 img-content text-center">
								<img
									src={miembro.image}
									className="img-fluid"
									alt="perfil"
									style={{ maxWidth: '130px', width: '100%' }}
								/>
							</div>
							<h3 className="mb-4 text-center text-capitalize">
								{miembro.nombre.toLowerCase()}
							</h3>
							{miembro.telefono && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i class="far fa-mobile" /></span>
										<span>N&uacute;mero de celular</span>
									</div>
									<div className="text-small text-dark">{miembro.telefono}</div>
								</div>
							)}
							{miembro.dni && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="far fa-passport" /></span>
										<span>Documento de indentidad (DNI)</span>
									</div>
									<div className="text-small text-dark">{miembro.dni}</div>
								</div>
							)}
							{miembro.grado_academico && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="far fa-graduation-cap" /></span>
										<span>Grado acad&eacute;mico</span>
									</div>
									<div className="text-small text-dark">{miembro.grado_academico}</div>
								</div>
							)}
							{miembro.lugar_nacimiento && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="far fa-map-marker-alt" /></span>
										<span>Lugar de nacimiento</span>
									</div>
									<div className="text-small text-dark">{miembro.lugar_nacimiento}</div>
								</div>
							)}
							{miembro.lugar_domicilio && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="far fa-map-marker-alt" /></span>
										<span>Lugar de domicilio</span>
									</div>
									<div className="text-small text-dark">{miembro.lugar_domicilio}</div>
								</div>
							)}
							{miembro.partido_politico && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="fas fa-award" /></span>
										<span>Partido pol&iacute;tico</span>
									</div>
									<div className="text-small text-dark">{miembro.partido_politico}</div>
								</div>
							)}
							{miembro.cargo && (
								<div className="mb-3">
									<div className="text-smaller mb-1">
										<span className="me-2"><i className="fas fa-award" /></span>
										<span>Cargo</span>
									</div>
									<div className="text-small text-white">
										<span className="px-2 py-1 bg-danger rounded d-inline-block">
											{miembro.cargo.nombre}
										</span>
									</div>
								</div>
							)}
						</section>
					</div>
				</Col>

				<Col xs={{ order: 3, span: 12 }} lg={6}>
					{tab === 'posts' && <>
						{miembro.cargo && miembro.cargo.nombre === 'ALCALDE'
							? (
								<div className="m_card shadow-sm rounded">
									<div className="m_card-header">
										<h4 className="mb-0">👋🏻 Saludo</h4>
									</div>
									<div className="m_card-body">
										<p className="mb-0">Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión. Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari. La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.</p>
									</div>
								</div>
							)
							: <>
								<div className="text-center mt-4">
									<i className="far fa-comment-alt me-2" />
									{'Sin publicaciones.'}
								</div>
							</>}
					</>}
					{tab === 'photos' && <>
						<div className="text-center mt-4">
							<i className="far fa-images me-2" />
							{'Este perfil no tiene fotos.'}
						</div>
					</>}
					{/* <Publicacion /> */}
				</Col>

				<Col xs={{ order: 2, span: 12 }} lg={{ span: 3, order: 'last' }}>
					<div className="sticky-from-header-30 overflow-auto">
						<ul className="tabs-tab list-unstyled d-flex d-lg-block">
							<li className={`px-3 py-2 tabs-item cursor-pointer ${tab === 'posts' && 'active'} text-nowrap`}
								onClick={() => setTab('posts')}>
								<span className="me-2"><i className="far fa-comment-alt" /></span>
								<span>Publicaciones</span>
							</li>
							<li className={`px-3 py-2 tabs-item cursor-pointer ${tab === 'photos' && 'active'} text-nowrap`}
								onClick={() => setTab('photos')}>
								<span className="me-2"><i className="far fa-camera-retro" /></span>
								<span>Fotos</span>
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
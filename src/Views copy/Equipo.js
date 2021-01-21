import React from 'react';
import { Container } from 'react-bootstrap';

import foto from '../assets/images/default.jpg';

export default function Equipo() {
	return <>
		<div className="position-relative bg-dark">
			<Container>
				<div className="text-white text-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
					<h2 className="title-1">ALCALDE Y REGIDORES GESTION 2019 - 2020</h2>
					<p>
						Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador.
					</p>
				</div>
			</Container>
		</div>

		<Container>
			<h2 className="title-1 text-center mt-5">ALCALDE Y REGIDORES GESTION 2019 - 2022</h2>
			<section className="d-flex justify-content-center align-items-center mt-5 pb-5">
				<div className="grid-team">
					<Article
						foto={foto}
						nombre="FLORES MEZA JAMES"
						area="ALCALDE"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="APELLIDO Y NOMBRE"
						area="PRESIDENTE"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="LIBRO Y CUADERNO"
						area="LOGISTICA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="NOMBRE DE PRUEBA"
						area="TESORERIA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="CAJA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="PRESIDENTE DEL AREA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="FLORES MEZA JAMES"
						area="ALCALDE"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="APELLIDO Y NOMBRE"
						area="PRESIDENTE"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="LIBRO Y CUADERNO"
						area="LOGISTICA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="NOMBRE DE PRUEBA"
						area="TESORERIA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="CAJA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="PRESIDENTE DEL AREA"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
					<Article
						foto={foto}
						nombre="ANONIMO"
						area="SIN ESPECIFICAR"
						texto="No hay nada mas importante en este mundo que la familia"
					/>
				</div>
			</section>
		</Container>
	</>
}

function Article({ foto, nombre, area, texto }) {
	return <article className="p-3">
		<div className="px-2">
			<div className="img-container rounded-pill mb-2 overflow-hidden">
				<a href="#team">
					<img src={foto} className="img-fluid" alt="team" />
				</a>
			</div>
		</div>
		<div className="text-center">
			<h4 className="title-4 mb-2">{nombre}</h4>
			<span className="btn btn-outline-primary  mb-2">{area}</span>
			<p className="mb-0">
				<i className="smaller">{texto}</i>
			</p>
		</div>
	</article>
}
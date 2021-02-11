import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

export default function Equipo() {
	const query = useQuery();
	const [data, setData] = useState([]);// contiene todo los datos del team
	const [team, setTeam] = useState([]);// contiene los datos que se van a mostrar
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadTeam() {
			try {
				setLoading(true);
				const [apiTeam] = await Promise.all([
					Axios.get('/apimuni/team').then(({ data }) => data),
					//Axios.get('/apimuni/cargoteam').then(({ data }) => data),
				]);
				setData(apiTeam);
				setTeam(apiTeam);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadTeam();
	}, []);

	useEffect(() => {
		setTeam(team.filter(team => team.id = 1));
	}, [query.get('cargo')]);

	function handleInputChange(e) {
		const value = e.target.value.toLowerCase();

		const resultados = data.filter(miembro => {
			return miembro.nombre.toLowerCase().indexOf(value) !== -1;
		});

		setTeam(resultados)
	}

	function teams() {
		return team.map(miembro => {
			return <Article
				key={miembro.id}
				foto={miembro.image}
				nickname={miembro.nickname}
				nombre={miembro.nombre}
				area={miembro.cargo.nombre}
				texto={miembro.partido_politico}
			/>
		});
	}

	return <>
		<div className="bg-green-700">
			<div className="py-5 px-3 mx-auto text-white text-center" style={{ maxWidth: '700px' }}>
				<h2 className="text-white">ALCALDE Y REGIDORES GESTION 2019 - 2022</h2>
				<p className="mb-0" style={{ color: 'var(--green-200)' }}>Tenemos el firme prop&oacute;sito de transformar de manera estructural la gesti&oacute;n del distrito con un enfoque innovador.</p>
			</div>
		</div>

		<div className="bg-white py-2" style={{
			position: 'sticky',
			top: 'calc(var(--topbar-height) + var(--header-height))',
			borderBottom: '1px solid var(--grey-300)'
		}}>
			<div className="container clearfix">
				<div className="float-start" style={{maxWidth: '300px', width: '100%'}}>
					<input 
					className="form-control" 
					type="search" 
					onChange={handleInputChange}
					placeholder="Nombre de la persona" 
					/>
				</div>
				<div className="float-end">
					<div className="d-flex">
						<label className="me-3 align-self-center">Periodo</label>
						<select className="form-select">
							<option value="2019-2020">2019 - 2020</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<Container>
			<h2 className="title-1 text-center mt-5">EL EQUIPO DE LA MUNICIPALIDAD DISTRITAL DE MAZAMARI</h2>

			<section className="mt-5 pb-5">
				{loading && <div className="text-center"><span>Cargando...</span></div>}
				<div className="grid-team">
					{teams()}
				</div>
			</section>
		</Container>
	</>
}

function Article({ foto, nickname, nombre, area, texto }) {
	return <article className="p-3">
		<div className="mb-2 text-center">
			<Link
				to={`@${nickname.toLowerCase()}`}
				className="d-inline-block">
				<img
					src={foto}
					className="w-100 h-100 rounded-circle"
					alt="team"
					loading="lazy"
				/>
			</Link>
		</div>
		<div className="text-center">
			<h4 className="mb-3 text-capitalize">{nombre.toLowerCase()}</h4>
			<span className="mb-3 btn btn-sm btn-outline-primary text-capitalize">
				{area.toLowerCase()}
			</span>
			<p className="mb-0 text-small fst-italic text-capitalize">{texto.toLowerCase()}</p>
		</div>
	</article>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardTeam from '../components/CardTeam';

export default function Equipo() {
	const [data, setData] = useState([]);// contiene todo los datos del team
	const [team, setTeam] = useState([]);// contiene los datos que se van a mostrar
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadTeam() {
			try {
				setLoading(true);
				const { data: apiTeam } = await Axios.get('/v1/team/group/regidores');
				setData(apiTeam.data);
				setTeam(apiTeam.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadTeam();
	}, []);

	function handleInputChange(e) {
		const value = e.target.value.toLowerCase();

		const resultados = data.filter(miembro => {
			const nombre = miembro.nombre.toLowerCase() + ' ' + miembro.apellido.toLowerCase();
			return nombre.indexOf(value) !== -1;
		});

		setTeam(resultados)
	}

	function teams() {
		return team.map(miembro => {
			return <CardTeam
				key={miembro.id}
				foto={miembro.image}
				nombre={miembro.nombre + ' ' + miembro.apellido}
				area={miembro.cargo}
				hoja_vida={miembro.hoja_vida}
				resolucion={miembro.resolucion}
				telefono={miembro.telefono}
				dni={miembro.dni}
				grado_academico={miembro.grado_academico}
				lugar_nacimiento={miembro.lugar_nacimiento}
				lugar_domicilio={miembro.lugar_domicilio}
				partido_politico={miembro.partido_politico}
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
				<div className="float-start" style={{ maxWidth: '300px', width: '100%' }}>
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
							<option value="2019-2020">2019 - 2022</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<Container>
			{/* <h2 className="title-1 text-center mt-5">EL EQUIPO DE LA MUNICIPALIDAD DISTRITAL DE MAZAMARI</h2> */}

			<section className="mt-5 pb-5">
				{loading && <div className="text-center"><span>Cargando...</span></div>}
				<div className="grid-team">
					{teams()}
				</div>
			</section>
		</Container>
	</>
}

const Container = (props) => <div className="container-xxl">{props.children}</div>
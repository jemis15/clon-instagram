import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Lista() {
	const [grupoLinksTipo, setGrupoLinksTipo] = useState([]);

	useEffect(() => {
		async function loadGrupoLinksTipo() {
			try {
				const { data: apiGrupoLinksTipo } = await Axios.get(`/apimuni/grupolinkstipo/with/links`);
				setGrupoLinksTipo(apiGrupoLinksTipo);
			} catch (error) {
				console.log(error);
			}
		}

		loadGrupoLinksTipo();
	}, []);

	return <>
		<h2 className="title-1 mb-4" id="james15">Grupo Links</h2>

		{grupoLinksTipo.map(grupoLinkTipo => (
			<React.Fragment key={grupoLinkTipo.id}>
				<h4 className="title-3 mb-3 when-hover-show-item cursor-pointer">
					<Link to={`/admin/grupolinks/tipo/${grupoLinkTipo.id}`} className="text-decoration-none">
						{grupoLinkTipo.icon && (
							<span><i className={`${grupoLinkTipo.icon} fa-lg mr-2`} /></span>
						)}
						<span className="mr-2">{grupoLinkTipo.nombre}</span>
						<span className="text-primary item-show-when-hover">
							<i className="fas fa-pen fa-sm" />
						</span>
					</Link>
				</h4>
				<div className="grid-3 grid-lg-2 mb-4">
					{grupoLinkTipo.links.map(link => (
						<LinkItem
							key={link.id}
							id={link.id}
							image={`/apimuni/images/grupolinks/${link.image}`}
							texto={link.titulo}
						/>
					))}
					<LinkAgregar params={`?tipo=${grupoLinkTipo.id}`} />
				</div>
			</React.Fragment>
		))}

		<Link className="btn btn-light mb-4 border"
			variant="light"
			to="/admin/grupolinks/tipo/nuevo">
			<i className="fas fa-plus mr-2 text-primary" />
			<span>Nuevo Grupo</span>
		</Link>
	</>
}

function LinkItem({ id, image, texto }) {
	const style = {
		borderRadius: '10px'
	}
	return <Link to={`/admin/grupolinks/${id}`}
		className="d-flex p-2 text-white text-decoration-none gradient-green-yellow hover-gradient-gren-yellow"
		style={style}>
		<div className="p-2 mr-3">
			<img src={image} width="40" alt="link" />
		</div>
		<div className="text-left text-smaller w-100 align-self-center">
			<span className="text-uppercase">{texto}</span>
		</div>
	</Link>
}

function LinkAgregar({ params }) {
	return <Link to={`/admin/grupolinks/nuevo${params}`} className="text-decoration-none d-flex justify-content-center align-items-center border rounded">
		<i className="fas fa-plus mr-2" />
		<span>Agregar</span>
	</Link>
}
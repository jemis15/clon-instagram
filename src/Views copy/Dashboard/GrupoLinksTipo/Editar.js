import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function Editar() {
	const history = useHistory();
	const { grupoLinkTipoId } = useParams();
	const [grupoLinkTipo, setGrupoLinkTipo] = useState([]);
	const [loading, setLoading] = useState(false);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		async function loadGrupoLinkTipo() {
			try {
				setLoading(true);
				const { data: apiGrupoLinkTipo } = await Axios.get(`/apimuni/grupolinkstipo/${grupoLinkTipoId}`);
				setGrupoLinkTipo(apiGrupoLinkTipo)
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadGrupoLinkTipo();
	}, [grupoLinkTipoId]);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setSending(true)
			await Axios({
				method: 'patch',
				url: `/apimuni/grupolinkstipo/${grupoLinkTipoId}`,
				params: grupoLinkTipo
			});
			setSending(false);
			history.goBack();
		} catch (error) {
			console.log(error);
			setSending(false)
		}
	}

	function handleInputChange(e) {
		setGrupoLinkTipo({ ...grupoLinkTipo, [e.target.name]: e.target.value });
	}

	if (loading) {
		return <p>Cangando...</p>
	}

	if (!grupoLinkTipo) {
		return <p>Up tubimos problemas al cargar el link</p>;
	}

	return <>
		<button className="mb-4" onClick={() => history.goBack()}>
			<span><i className="fas fa-arrow-left" /></span>
		</button>

		<h2 className="title-1 mb-4">Editar</h2>
		<h4 className="title-3">Vista preliminar</h4>
		<div className="border py-2 px-4 mb-4 d-inline-block gradient-green-yellow section-header">
			<span className="mr-2">
				<i className={`${grupoLinkTipo.icon}`} />
			</span>
			<span>{grupoLinkTipo.nombre}</span>
		</div>
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<label>Icono</label>
				<Form.Control
					type="text"
					name="icon"
					value={grupoLinkTipo.icon}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group>
				<label>Nombre del grupo</label>
				<Form.Control
					type="text"
					name="nombre"
					value={grupoLinkTipo.nombre}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Button type="submit" className="mb-5">{sending ? 'Guardando...' : 'Gruardar'}</Button>
		</Form>
	</>
}
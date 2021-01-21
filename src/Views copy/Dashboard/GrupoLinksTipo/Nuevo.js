import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Editar() {
	const history = useHistory();
	const [grupoLinkTipo, setGrupoLinkTipo] = useState({
        icon: '',
        nombre: ''
    });
	const [sending, setSending] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setSending(true)
			await Axios({
				method: 'post',
				url: `/apimuni/grupolinkstipo`,
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


	return <>
		<button className="mb-4" onClick={() => history.goBack()}>
			<span><i className="fas fa-arrow-left" /></span>
		</button>

		<h2 className="title-1 mb-4">Nuevo grupo link</h2>
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
			<Button type="submit" className="mb-5">{sending ? 'Creando...' : 'Crear'}</Button>
		</Form>
	</>
}
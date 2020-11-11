import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export default function Editar() {
	const history = useHistory();
	const { grupoLinkId } = useParams();
	const [grupoLinksTipo, setGrupoLinksTipo] = useState([]);
	const [grupoLink, setGrupoLink] = useState(null);
	const [loading, setLoading] = useState(false);
	const [subiendoImage, setSubiendoImage] = useState(false);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		async function loadGrupoLink() {
			try {
				setLoading(true);
				const { data: apiGrupoLink } = await Axios.get(`/apimuni/grupolinks/${grupoLinkId}`);
				const { data: apiGrupoLinksTipo } = await Axios.get(`/apimuni/grupolinkstipo/with/links`);
				setGrupoLink(apiGrupoLink);
				setGrupoLinksTipo(apiGrupoLinksTipo)
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadGrupoLink();
	}, [grupoLinkId]);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setSending(true)
			await Axios({
				method: 'patch',
				url: `/apimuni/grupolinks/${grupoLinkId}`,
				params: grupoLink
			});
			setSending(false);
			history.goBack();
		} catch (error) {
			console.log(error);
			setSending(false)
		}
	}

	async function handleImageSeleccionada(e) {
		var formData = new FormData();
		formData.append('imagegrupolink', e.target.files[0]);

		const config = {
			headers: {
				'Content-Type': "multipart/form-data"
			}
		}
		try {
			setSubiendoImage(true);
			const { data: apiGrupoLink } = await Axios.post(`/apimuni/grupolinks/${grupoLinkId}/upload`, formData, config);
			setGrupoLink({ ...grupoLink, image: apiGrupoLink.image });
			setSubiendoImage(false);
		} catch (error) {
			console.log(error);
			setSubiendoImage(false);
		}
	}

	async function handleDelete() {
		let isConfirmado = window.confirm('Estas seguro que deseas eliminar el grupo link');

		if (!isConfirmado) {
			return;
		}

		try {
			await Axios.delete(`/apimuni/grupolinks/${grupoLinkId}`);
			history.goBack();
		} catch (error) {
			console.log(error);
		}
	}

	function handleInputChange(e) {
		setGrupoLink({ ...grupoLink, [e.target.name]: e.target.value });
	}

	if (loading) {
		return <p>Cangando...</p>
	}

	if (!grupoLink) {
		return <p>Up tubimos problemas al cargar el link</p>;
	}

	return <>
		<button className="mb-4" onClick={() => history.goBack()}>
			<span><i className="fas fa-arrow-left" /></span>
		</button>

		<h2 className="title-1">Editar</h2>
		<h4 className="title-3">Link</h4>
		<Form onSubmit={handleSubmit}>
			<LinkItem
				id="1"
				className="mb-4"
				image={grupoLink.image && `/apimuni/images/grupolinks/${grupoLink.image}`}
				titulo={grupoLink.titulo}
				handleInputChange={handleInputChange}
				handleImageSeleccionada={handleImageSeleccionada}
				subiendoImage={subiendoImage}
			/>
			<Form.Group>
				<label>Titulo</label>
				<Form.Control
					type="text"
					name="titulo"
					value={grupoLink.titulo}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group>
				<label>Url</label>
				<Form.Control
					type="text"
					name="url"
					value={grupoLink.url}
					onChange={handleInputChange}
				/>
			</Form.Group>
			<Form.Group>
				<label>Grupo</label>
				<Form.Control
					as="select"
					name="grupo_link_tipo_id"
					value={grupoLink.grupo_link_tipo_id}
					onChange={handleInputChange}>
					<option value="">Seleccione...</option>
					{grupoLinksTipo.map(grupoLinkTipo => (
						<option value={grupoLinkTipo.id}>{grupoLinkTipo.nombre}</option>
					))}
				</Form.Control>
			</Form.Group>
			<Button type="submit" className="mb-4">{sending ? 'Guardando...' : 'Gruardar'}</Button>
		</Form>

		<h4 className="title-3 mb-3">Sona roja</h4>
		<Button variant="danger" onClick={handleDelete}>Eliminar</Button>
	</>
}

function LinkItem({ image, titulo, className, handleInputChange, handleImageSeleccionada, subiendoImage }) {
	const [textEditable, setTextEditable] = useState(false);
	const style = {
		borderRadius: '10px'
	}

	const toggle = () => setTextEditable(!textEditable);

	return <div
		className={`${className} d-flex p-2 text-white text-decoration-none gradient-green-yellow hover-gradient-gren-yellow`}
		style={style}>
		<div className="p-2 mr-3">
			<label className="mb-0 hover-border-dotted-white cursor-pointer">
				{subiendoImage ? (
					<span>Cargando...</span>
				) : <>
						<img src={image} width="40" alt="link" />
						<input
							type="file"
							className="d-none"
							onChange={handleImageSeleccionada}
						/>
					</>}
			</label>
		</div>
		<div className="text-left text-smaller w-100 align-self-center">
			{textEditable ?
				<div className="d-flex">
					<input
						className="flex-fill mr-1"
						size="sm"
						type="text"
						name="titulo"
						value={titulo}
						onChange={handleInputChange}
					/>
					<Button className="mr-1" size="sm" variant="danger" onClick={toggle}>Cerrar</Button>
				</div> :
				<span className="hover-border-dotted-white cursor-pointer" onClick={toggle}>{titulo}</span>}
		</div>
	</div >
}
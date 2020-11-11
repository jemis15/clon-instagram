import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Nuevo() {
	const history = useHistory();
	const [file, setFile] = useState(null);
	const [carouselLink, setCarouselLink] = useState({
		titulo: '',
		image: '',
		url: '',
		grupo: ''
	});
	const [imageSeleccionado, setImageSeleccionado] = useState(null);
	const [sending, setSending] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		let urlImage = null;

		// subiendo imgen
		setSending(true);
		try {
			var formData = new FormData();
			formData.append('imagecarousellink', file);

			const config = {
				headers: {
					'Content-Type': "multipart/form-data"
				}
			}
			const { data: apiUpload } = await Axios.post('/apimuni/carousellinks/upload', formData, config);

			urlImage = apiUpload.filename;
		} catch (error) {
			console.log(error);
			setSending(false);
			return;
		}

		//creando el carousel link
		try {
			const { data: apiCarouselLink } = await Axios({
				method: 'post',
				url: '/apimuni/carousellinks',
				params: { ...carouselLink, image: urlImage }
			});
			history.goBack();
			setSending(false);
		} catch (error) {
			console.log(error);
			setSending(false);
		}
	}

	function handleSelectImage(e) {
		const file = e.target.files[0]

		if (!file) {
			return;
		}

		if (
			file.type !== 'image/png' &&
			file.type !== 'image/jpg' &&
			file.type !== 'image/gif' &&
			file.type !== 'image/jpeg'
		) {
			alert('Seleccione una imagen valido');
			return;
		}

		setFile(file);
	}

	function handleInputChange(e) {
		setCarouselLink({ ...carouselLink, [e.target.name]: e.target.value });
	}

	return <>
		<button className="mb-4" onClick={() => history.goBack()}>
			<span><i className="fas fa-arrow-left" /></span>
		</button>
		<h2 className="title-1">Editar</h2>
		<h4 className="title-3 mb-3">Imagen</h4>
		<div className="mb-4">
			<label className="d-inline-block">
				<input type="file" name="imagecarousellink" onChange={handleSelectImage} />
			</label>
		</div>
		<h4 className="title-3">Otros datos</h4>
		<div className="mb-4">
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<label>Titulo</label>
					<Form.Control
						type="text"
						name="titulo"
						value={carouselLink.titulo}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<label>Url</label>
					<Form.Control
						type="text"
						name="url"
						value={carouselLink.url}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<label>Grupo</label>
					<Form.Control
						type="text"
						name="grupo"
						value={carouselLink.grupo}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button type="submit">{sending ? 'Guardando...' : 'Guardar'}</Button>
			</Form>
		</div>
		<div className="mb-5 pb-5" />
	</>
}
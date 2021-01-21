import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Form, InputGroup, Modal } from 'react-bootstrap';
import Cropper from 'react-easy-crop';
import { Link } from 'react-router-dom';

import { getCroppedImg } from '../Helpers/canvas-helper';

export default function Equipo() {
	const [team, setTeam] = useState([]);
	const [cargoTeam, setCargoTeam] = useState([]);
	const [modalNewParticipante, setModalNewParticipante] = useState(false);
	const [loading, setLoading] = useState(false);
	const [filter2, setFilter2] = useState({
		value: '',
		cargo: [1, 2]
	});

	useEffect(() => {
		async function loadTeam() {
			try {
				setLoading(true);
				const [apiTeam, apiCargoTeam] = await Promise.all([
					Axios.get('/apimuni/team').then(({ data }) => data),
					Axios.get('/apimuni/cargoteam').then(({ data }) => data),
				]);
				setTeam(apiTeam);
				setCargoTeam(apiCargoTeam);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}

		loadTeam();
	}, []);

	const toggleModalNewParticipante = () => setModalNewParticipante(!modalNewParticipante);

	function addParticipante(newTeam) {
		setTeam([...team, newTeam]);
	}

	function handleInputChange(e) {
		setFilter2({ ...filter2, value: e.target.value });
	}

	function changeFilterByCargo(idCargo) {
		const haveFilter = filter2.cargo.find(cargo => cargo === idCargo);
		if (haveFilter) {
			setFilter2({ ...filter2, cargo: filter2.cargo.filter(cargo => cargo !== idCargo) })
		} else {
			setFilter2({ ...filter2, cargo: [...filter2.cargo, idCargo] });
		}
	}

	function teams() {
		return team.map(team => {
			const nombre = team.nombre.toLowerCase();
			const valorABuscar = filter2.value.toLowerCase();

			if (nombre.indexOf(valorABuscar) === -1) {
				return null;
			}

			const haveCargo = filter2.cargo.find(cargo => cargo === team.cargo_id);

			return haveCargo && <Article
				key={team.id}
				foto={`/apimuni/images/team/${team.image}`}
				nombre={team.nombre}
				area={team.cargo && team.cargo.nombre}
				texto={team.bio}
			/>
		});
	}

	function cargoTeams() {
		return cargoTeam.map(cargo => {
			const active = filter2.cargo.find(cargof => cargof === cargo.id);

			return <button
				key={cargo.id}
				className={`mr-1 btn btn-sm ${active ? 'btn-primary' : 'btn-outline-primary'}`}
				onClick={active
					? () => setFilter2({ ...filter2, cargo: filter2.cargo.filter(cargof => cargof !== cargo.id) })
					: () => setFilter2({ ...filter2, cargo: [...filter2.cargo, cargo.id] })
				}>
				{cargo.nombre}
			</button>
		});
	}

	return <>
		<div className="position-relative bg-grey-900">
			<div className="py-5 px-3 mx-auto text-white text-center" style={{ maxWidth: '700px' }}>
				<h2 className="text-primary">ALCALDE Y REGIDORES GESTION 2019 - 2020</h2>
				<h4 className="text-white mb-5">Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador.</h4>
				<div className="mb-2">
					<InputGroup>
						<Form.Control
							type="text"
							placeholder="Buscar..."
							onChange={handleInputChange}
						/>
						<InputGroup.Append>
							<InputGroup.Text><i className="far fa-search" /></InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</div>
				<div>
					{loading && <p>Cargando...</p>}
					{cargoTeams()}
				</div>
			</div>
		</div>

		<Container>
			<h2 className="title-1 text-center mt-5">EL EQUIPO DE LA MUNICIPALIDAD DISTRITAL DE MAZAMARI</h2>
			<section className="mt-5 pb-5">
				<div className="grid-team">
					{loading && <span>Cargando...</span>}
					{teams()}
					<div
						className="rounded d-flex flex-column justify-content-center align-items-center cursor-pointer"
						style={{
							border: '1px dashed var(--grey-400)',
							minHeight: '250px'
						}}
						onClick={toggleModalNewParticipante}>
						<i className="far fa-plus mr-2 fa-2x mb-3" />
						<span className="text-small">Nuevo participante</span>
					</div>
				</div>
			</section>
		</Container>

		<Modal show={modalNewParticipante} onHide={toggleModalNewParticipante} animation={false} centered>
			<Modal.Header closeButton>Nuevo participante</Modal.Header>
			<Modal.Body>
				<NewParticipante cargoTeam={cargoTeam} addParticipante={addParticipante} closeModal={toggleModalNewParticipante} />
			</Modal.Body>
		</Modal>
	</>
}

function Article({ foto, nombre, area, texto }) {
	return <article className="p-3">
		<div className="mb-2 px-2 text-center">
			<Link
				to="@jemis15"
				className="d-inline-block"
				style={{ width: '130px', height: '130px' }}>
				<img
					src={foto}
					className="w-100 h-100 rounded-circle"
					alt="team"
					loading="lazy"
				/>
			</Link>
		</div>
		<div className="text-center">
			<h4 className="">{nombre}</h4>
			<span className="btn btn-sm btn-outline-primary mb-2">{area}</span>
			<p className="mb-0 text-small font-italic">{texto}</p>
		</div>
	</article>
}

function NewParticipante({ cargoTeam, addParticipante, closeModal }) {
	const [team, setTeam] = useState({
		nombre: '',
		bio: '',
		image: '',
		cargo_id: '',
		cargo: null
	});
	const [sending, setSending] = useState(false);
	const [cropImage, setCroppedImage] = useState(false);
	const [blobImage, setBlobImage] = useState(null);
	const [formImage, setFormImage] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();

		if (sending) {
			return;
		}

		try {
			setSending(true);
			const formData = new FormData();
			formData.append('image', formImage);
			formData.append('path', 'team');

			const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData)
			const teamWithImageActualizado = { ...team, image: apiImage.name };
			const { data: apiTeam } = await Axios({
				method: 'post',
				url: '/apimuni/team',
				params: teamWithImageActualizado
			});
			const cargoAsignado = cargoTeam.find(cargo => cargo.id == team.cargo_id)
			addParticipante({ ...apiTeam, cargo: cargoAsignado });
			closeModal();
		} catch (error) {
			console.log(error);
			setSending(false);
		}
	}

	function handleSelectImage(e) {
		const file = e.target.files[0];
		setFormImage(file);
	}

	function onCroppedImage(blobImage) {
		setCroppedImage(false);
		setBlobImage(blobImage);
	}

	const handleInputChange = (e) => setTeam({ ...team, [e.target.name]: e.target.value });

	if (cropImage) {
		return <RecortarImage onCroppedImage={onCroppedImage} />
	}

	return <Form onSubmit={handleSubmit}>
		<Form.Group>
			<label>Imagen</label>
			<div
				className="bg-grey-300"
				style={{ width: '130px', height: '130px' }}
				onClick={() => setCroppedImage(!cropImage)}>
				{blobImage && <img className="img-fluid" src={blobImage} alt="recortado" />}
			</div>
			<label><input type="file" onChange={handleSelectImage} /></label>
		</Form.Group>
		<Form.Group>
			<label>Nombre</label>
			<Form.Control
				type="text"
				name="nombre"
				value={team.nombre}
				onChange={handleInputChange}
			/>
		</Form.Group>
		<Form.Group>
			<label>Bio</label>
			<Form.Control
				as="textarea"
				name="bio"
				value={team.bio}
				onChange={handleInputChange}
			/>
		</Form.Group>
		<Form.Group>
			<label>Cargo</label>
			<Form.Control
				as="select"
				name="cargo_id"
				value={team.cargo_id}
				onChange={handleInputChange}>
				<option value="">Seleccione un cargo</option>
				{cargoTeam.map(cargo => (
					<option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
				))}
			</Form.Control>
		</Form.Group>
		<Button type="submit" block>
			{sending ? 'Enviando...' : 'Crea nuevo participante'}
		</Button>
	</Form>
}

function RecortarImage({ onCroppedImage }) {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [croppedImage, setCroppedImage] = useState(null);
	const [image, setImage] = useState({
		formImage: '',
		base64: ''
	});

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	async function cortarImagen() {
		const croppedImage = await getCroppedImg(image.base64, croppedAreaPixels);
		onCroppedImage(croppedImage);//blob
		setCroppedImage(croppedImage);
	}

	async function handleSelectImage(e) {
		const file = e.target.files[0];

		// finalizamos si no se selecciono nada.
		if (!file) {
			return;
		}

		if (file.type.indexOf('image/') === -1) {
			alert('Esto no parese ser una imagen');
			return;
		}

		const size = Math.round((file.size * 100) / 1024 / 1024) / 100;
		if (size > 5) {
			alert('Upps la imagen seleccionada es muy pesado(a), Por motivos de rendimiento de la pagina cancelamos la accion.');
			return;
		}

		var imageDataUrl = await readFile(file);
		setImage({
			formImage: file,
			base64: imageDataUrl
		});
	}

	function readFile(file) {
		return new Promise(resolve => {
			const reader = new FileReader()
			reader.addEventListener('load', () => resolve(reader.result), false)
			reader.readAsDataURL(file)
		});
	}

	return <div>
		{image.base64
			? <div className="mb-3 position-relative w-100" style={{ height: '300px' }}>
				<Cropper
					image={image.base64}
					crop={crop}
					zoom={zoom}
					aspect={1 / 1}
					onCropChange={setCrop}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</div>
			: <div
				className="d-flex justify-content-center align-items-center"
				style={{ height: '300px' }}>
				<span>Seleccione una imagen</span>
			</div>
		}
		<div className="text-right">
			<Button onClick={cortarImagen} size="sm" variant="secondary" className="mr-2">Usar esto como perfil</Button>
			<label for="seleccionar-image" className="mb-0 btn btn-sm btn-secondary">Seleccionar imagen</label>
			<input type="file" className="d-none" id="seleccionar-image" onChange={handleSelectImage} />
		</div>
	</div>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory, useParams, Route, Switch } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import Cuadro, { CuadroLeft, CuadroRight } from './components/Cuadro';

export default function ViewTurismo() {
	return <Cuadro>
		<Switch>
			<Route path="/frame/turismos" exact>
				<Lista />
			</Route>
			<Route path="/frame/turismos/:turismo_id">
				<Update />
			</Route>
		</Switch>
	</Cuadro>
}

function Turismos({ children }) {
	return <div>{children}</div>
}
function Turismo({ children }) {
	return <article className="lugar-turistico">
		{children}
	</article>
}

function Lista() {
	const { id } = useParams();
	const [turismos, setTurismos] = useState([]);
	const [modal, setModal] = useState(false);
	const [nombre, setNombre] = useState(null);

	useEffect(() => {
		async function loadTurismos() {
			try {
				// cargar todo los lugares turisticos
				const { data: turismo } = await Axios.get('/apimuni/turismos');
				setTurismos(turismo);
			} catch (error) {
				console.log(error);
			}
		}

		loadTurismos();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		const turismo = {
			nombre,
			titulo: '',
			descripcion: '',
			contenido: '',
		}
		try {
			const { data: apiTurismo } = await Axios({
				method: 'post',
				url: '/apimuni/turismos',
				params: turismo
			});;
		} catch (error) {
			console.log(error);
		}
	}

	const toggle = () => setModal(!modal);

	return <>
		<CuadroLeft>
			<div className="clearfix">
				<Button
					className="float-right"
					size="sm"
					onClick={toggle}>
					<i className="fas fa-plus mr-2" />
					<span>Nuevo turismo</span>
				</Button>
				<h4 className="mb-5">Encabezado</h4>
			</div>
			{turismos.map(turismo => (
				<Link to={`/frame/turismos/${turismo.id}`} className="text-decoration-none">
					<Row className="py-3 lista-item-turismo cursor-pointer">
						<Col xs="4">
							{turismo.image ? (
								<img src={`/apimuni/images/turismos/${turismo.image}`} className="img-fluid" />
							) : (
									<div className="border rounded bg-light d-flex justify-content-center align-items-center" style={{ height: '5rem' }}>
										<span>Sin imagen</span>
									</div>
								)}
						</Col>
						<Col xs="8">
							<h4>{turismo.titulo}</h4>
							<p>{turismo.descripcion}</p>
						</Col>
					</Row>
				</Link>
			))}
		</CuadroLeft>
		<CuadroRight>
			<p>Vacio</p>
		</CuadroRight>

		<Modal show={modal} onHide={toggle}>
			<Modal.Header closeButton>
				<Modal.Title>Nuevo lugar turistico</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleSubmit}>
				<Modal.Body>
					<Form.Group>
						<label>Nombre para el lugar turistico</label>
						<Form.Control
							type="text"
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={toggle}>Cancelar</Button>
					<Button type="submit">Crear</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	</>
}

function Update({ idTurismo }) {
	const history = useHistory();
	const { turismo_id } = useParams();
	const [turismo, setTurismo] = useState(null);

	useEffect(() => {
		async function loadTurismo() {
			try {
				const { data: apiTurismo } = await Axios.get(`/apimuni/turismos/${turismo_id}`);
				setTurismo(apiTurismo);
			} catch (error) {
				console.log(error);
			}
		}

		loadTurismo();
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const { data: apiTurismo } = await Axios({
				method: 'patch',
				url: `/apimuni/turismos/${idTurismo}`,
				params: turismo
			});
			console.log(apiTurismo);
			console.log('Exito se a guardado');
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSelectedImagePortada(e) {
		try {
			var formData = new FormData;
			formData.append('imageturismo', e.target.files[0]);

			const config = {
				headers: {
					'Content-Type': "multipart/form-data"
				}
			}
			const { data: apiTurismo } = await Axios.post(`/apimuni/turismos/${idTurismo}/upload_portada`, formData, config);
			setTurismo({ ...turismo, image: apiTurismo.image });
		} catch (error) {
			console.log(error);
		}
	}

	function handleInputChange(e) {
		console.log(turismo);
		setTurismo({ ...turismo, [e.target.name]: e.target.value });
	}
	function handleInputChecked(e) {
		setTurismo({ ...turismo, publicado: e.target.checked ? 1 : 0 });
	}

	if (!turismo) {
		return null;
	}

	return <>
		<CuadroLeft>
			<h4 className="mb-5">Encabezado</h4>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<label>Imagen</label>
					<label className="mb-0 border rounded upload-image text-center cursor-pointer overflow-hidden">
						<img src={`/apimuni/images/turismos/${turismo.image}`} className="img-fluid" />
						<span className="upload-image-icon rounded-circle">
							<i class="fas fa-arrow-up" />
						</span>
						<input type="file" className="d-none" onChange={handleSelectedImagePortada} />
					</label>
				</Form.Group>
				<Form.Group>
					<label>Titulo</label>
					<Form.Control
						value={turismo.titulo}
						name="titulo"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group>
					<label>Descripcion</label>
					<Form.Control
						as="textarea"
						name="descripcion"
						value={turismo.descripcion}
						onChange={handleInputChange}
						rows="7"
					/>
				</Form.Group>
				<Form.Group>
					<label>Contenido</label>
					<Form.Control
						as="textarea"
						name="contenido"
						value={turismo.contenido}
						onChange={handleInputChange}
						className="input-markdown-editor"
						rows="7"
					/>
				</Form.Group>

				<ImagesUtilitarios idTurismo={idTurismo} />

				<Form.Group>
					<label>Publicar</label>
					<Form.Check
						name="publicado"
						checked={turismo.publicado}
						onChange={handleInputChecked}
					/>
				</Form.Group>
				<Button
					type="submit"
					variant="light"
					className="mr-2"
					onClick={() => history.push('/frame/turismos')}>
					Cancelar
                </Button>
				<Button type="submit">Guardar</Button>
			</Form>
		</CuadroLeft>
		<CuadroRight>
			<h4 className="mb-5">Vista preliminar</h4>
			<p>Encabezado</p>
			<Turismos>
				<Turismo>
					<div className="py-2 mb-3">
						<Row>
							<Col md="5" className="align-self-center section-image">
								<div className="content-image-gastronomia-right overflow-hidden">
									{turismo.image ? (
										<img src={`/apimuni/images/turismos/${turismo.image}`}
											className="img-fluid rounded-lg"
											alt="lugar turistico"
										/>
									) : (
											<div className="upload-image border rounded"></div>
										)}
								</div>
							</Col>
							<Col md="7" className="align-self-center section-description">
								<h2 className="banner-title text-center text-md-left">
									{turismo.titulo}
								</h2>
								<p className="banner-descripcion text-center text-md-left">
									{turismo.descripcion}
								</p>
								<div className="text-center text-md-left">
									<Button className="lugar-turistico-button mt-3 mt-md-0"
										as={Link} to="/gastronomia?tipo=turismo&titulo=El lugar turistico">Ver mas detalle</Button>
								</div>
							</Col>
						</Row>
					</div>
				</Turismo>
			</Turismos>

			<p>Contenido</p>
			<div className="container border rounded py-4">
				<MDEditor.Markdown source={turismo.contenido} />
			</div>
		</CuadroRight>
	</>
}

function AddImageUtilitarios({ onSelectImage }) {
	return <label className="plus-utilitarios d-flex flex-center border rounded cursor-pointer h-100">
		<i className="fas fa-plus" />
		<input type="file" className="d-none" onChange={onSelectImage} />
	</label>
}

function ImageUtilitarios({ image, onDelete }) {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return <>
		<div className="content-image-markdown d-flex flex-center border position-relative">
			<img
				src={`/apimuni/images/turismos/${image.url}`}
				className="cursor-pointer"
				onClick={toggle}
				alt="markdown utilitarios"
			/>
			<span className="cursor-pointer px-1 rounded" onClick={onDelete.bind(this, image.id)}>
				<i className="fas fa-times" />
			</span>
		</div>
		<Modal show={modal} onHide={toggle}>
			<Modal.Body>
				<h4>Copia el texto para insertar la imagen</h4>
				<div className="bg-container px-3 py-2 rounded text-wrap">
					[![Descripcion](/apimuni/images/turismos/{image.url})](URL)
                </div>
			</Modal.Body>
		</Modal>
	</>
}

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function ImagesUtilitarios({ idTurismo }) {
	const [imageUtilitarios, setImageUtilitarios] = useState([]);

	useEffect(() => {
		async function loadImageUtilitarios() {
			try {
				const { data: apiImagesUtilitario } = await Axios.get(`/apimuni/turismos/${idTurismo}/images`);
				setImageUtilitarios(apiImagesUtilitario);
			} catch (error) {
				console.log(error);
			}
		}

		loadImageUtilitarios();
	}, [idTurismo]);

	async function handleSelectImageUtilitarios(e) {
		try {
			var formData = new FormData;
			formData.append('imageturismo', e.target.files[0]);

			const config = {
				headers: {
					'Content-Type': "multipart/form-data"
				}
			}
			const { data: apiImageUpload } = await Axios.post(`/apimuni/turismos/${idTurismo}/upload_utilitarios`, formData, config);
			setImageUtilitarios([...imageUtilitarios, apiImageUpload]);
		} catch (error) {
			console.log(error);
		}
	}

	function handleDeleteImageUtilitarios(idImage) {
		setImageUtilitarios(imageUtilitarios.filter(image => {
			return image.id !== idImage;
		}));
	}

	return <div className="contenedor-utilitarios d-flex mb-4 overflow-auto w-100">
		<AddImageUtilitarios onSelectImage={handleSelectImageUtilitarios} />
		{imageUtilitarios.map(image => (
			<ImageUtilitarios image={image} onDelete={handleDeleteImageUtilitarios} />
		))}
	</div>
}
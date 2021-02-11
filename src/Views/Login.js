import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function Login({ login }) {
	const history = useHistory();
	const [user, setUser] = useState({
		nickname: '',
		password: ''
	});
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();

		if (sending) return;

		try {
			setSending(true);
			await login(user);
			history.push('/');
		} catch (error) {
			console.log(error);
			if (error.response.status === 400) {
				setError(error.response.data.mensaje);
			}
			setSending(false);
		}
	}

	function handleInputChange(e) {
		setUser({ ...user, [e.target.name]: e.target.value });
	}

	return <div>
		<div className="mb-5" />
		<div className="mx-auto p-3 p-md-0" style={{ maxWidth: '450px', marginBottom: '150px' }}>
			<h2 className="title-2 color-text font-weight-600 text-center mb-4">INICIA SESSI&Oacute;N</h2>
			<Form className="mb-3" onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Usuario</Form.Label>
					<Form.Control
						type="text"
						name="nickname"
						value={user.nickname}
						onChange={handleInputChange}
						placeholder="Ingrese nombre de usuario"
						autoComplete="off"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Contrase&ntilde;a</Form.Label>
					<Form.Control
						type="password"
						name="password"
						value={user.password}
						onChange={handleInputChange}
						placeholder="Contrase&ntilde;a"
						autoComplete="off"
					/>
				</Form.Group>
				{error && <div className="alert alert-danger d-flex justify-content-between align-items-start">
					<div>{error}</div>
					<button
						type="button"
						className="mt-n1 mb-n2 btn btn-sm text-danger"
						onClick={() => setError(null)}>
						<i className="far fa-times" />
					</button>
				</div>}
				<Button type="submit" size="lg" block>
					{sending ? 'Verificando...' : 'Iniciar sessión'}
				</Button>
			</Form>
		</div>


	</div>
}
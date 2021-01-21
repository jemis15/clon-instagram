import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Login({ login }) {
	const [user, setUser] = useState({
		nickname: '',
		password: ''
	});

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			login(user);
			setUser({ nickname: '', password: '' });
		} catch (error) {
			console.log(error);
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
						placeholder="Ingrese nombre de usuario" />
				</Form.Group>
				<Form.Group>
					<Form.Label>Contrase&ntilde;a</Form.Label>
					<Form.Control
						type="text"
						name="password"
						value={user.password}
						onChange={handleInputChange}
						placeholder="Contrase&ntilde;a" />
				</Form.Group>
				<Button type="submit" size="lg" block>Iniciar sessi&oacute;n</Button>
			</Form>
			<div className="text-center">
				<a href="#olvide-mi-contraseña">¿Olvidaste tu contrase&ntilde;a?</a>
			</div>
		</div>
	</div>
}
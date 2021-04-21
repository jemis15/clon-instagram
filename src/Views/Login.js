import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useUser } from '../Context/user-context';

export default function Login() {
	const { login } = useUser();
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
				<div className="mb-3">
					<label className="form-label">Usuario</label>
					<Form.Control
						type="text"
						name="nickname"
						value={user.nickname}
						onChange={handleInputChange}
						placeholder="Ingrese nombre de usuario"
						autoComplete="off"
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Contrase&ntilde;a</label>
					<Form.Control
						type="password"
						name="password"
						value={user.password}
						onChange={handleInputChange}
						placeholder="Contrase&ntilde;a"
						autoComplete="off"
					/>
				</div>
				{error && <div className="alert alert-danger d-flex justify-content-between align-items-start">
					<div>{error}</div>
					<button
						type="button"
						className="mt-n1 mb-n2 btn btn-sm text-danger"
						onClick={() => setError(null)}>
						<i className="far fa-times" />
					</button>
				</div>}
				<button type="submit" className="btn btn-lg btn-primary w-100">
					{sending ? 'Verificando...' : 'Iniciar sessión'}
				</button>
			</Form>
		</div>


	</div>
}
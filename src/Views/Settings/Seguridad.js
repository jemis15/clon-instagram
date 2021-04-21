import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUser } from '../../Context/user-context';
import Title from './components/Title';

export default function Seguridad({ showAlert }) {
    const { user } = useUser();
    const [seguridad, setSeguridad] = useState({
        old_password: '',
        new_password: '',
        confirmar_password: ''
    });
    const [sending, setSending] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        if (seguridad.new_password !== seguridad.confirmar_password) {
            showAlert('error', 'La contrase\u00f1a no coincides.')
            return;
        }

        try {
            setSending(true);
            await Axios({
                method: 'post',
                url: `/apimuni/users/${user.id}/change/password`,
                params: { password: seguridad.new_password }
            });
            showAlert('success', 'Se cambio la contrase\u00f1a.');
            setSending(false);
        } catch (error) {
            console.log(error.response);
            showAlert('error', 'Upps sucedio algo inesperado, vuelve a intentar mas tarde.')
            setSending(false);
        }
    }

    const handleInputChange = e => {
        setSeguridad({ ...seguridad, [e.target.name]: e.target.value });
    }

    return <div>
        <Title>Seguridad</Title>
        <Form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Contrase&ntilde;a actual</label>
                <Form.Control
                    type="password"
                    name="old_password"
                    value={seguridad.old_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nueva contrase&ntilde;a</label>
                <Form.Control
                    type="password"
                    name="new_password"
                    value={seguridad.new_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar contrase&ntilde;a</label>
                <Form.Control
                    type="password"
                    name="confirmar_password"
                    value={seguridad.confirmar_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </div>
            <Button type="submit">
                {sending ? 'Enviando...' : 'Cambiar contraseña'}
            </Button>
        </Form>
    </div>
}
import Axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Title from './components/Title';

export default function Seguridad({ user, showAlert }) {
    const [dataUser, setDataUser] = useState(user);
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

        try {
            setSending(true);
            await Axios({
                method: 'post',
                url: '/apimuni/profile/{id}/changepassword',
                params: seguridad
            });
            showAlert('success', 'Se cambio la contraseña');
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
            <Form.Group>
                <label>Contrase&ntilde;a actual</label>
                <Form.Control
                    type="password"
                    name="old_password"
                    value={seguridad.old_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </Form.Group>
            <Form.Group>
                <label>Nueva contrase&ntilde;a</label>
                <Form.Control
                    type="password"
                    name="new_password"
                    value={seguridad.new_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </Form.Group>
            <Form.Group>
                <label>Confirmar contrase&ntilde;a</label>
                <Form.Control
                    type="password"
                    name="confirmar_password"
                    value={seguridad.confirmar_password}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </Form.Group>
            <Button type="submit">
                {sending ? 'Enviando...' : 'Cambiar contraseña'}
            </Button>
        </Form>
    </div>
}
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Title from './components/Title';

export default function Account({ data, showAlert }) {
    const [user, setUser] = useState(data);
    const [sending, setSending] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true);
            setTimeout(() => {
                showAlert('success', 'Se actualizo tu nombre de usuario');
                setSending(false);
            }, 2000);
        } catch (error) {
            console.log(error);
            setSending(false);
            showAlert('error', 'Upps, ocurrio algo inesperado, vuelva a internar mas tarde.');
        }
    }

    const handleInputChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    return <div>
        <Title>Cuenta</Title>
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <label>Nombre de usuario</label>
                <Form.Control
                    type="text"
                    name="nickname"
                    value={user.nickname}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </Form.Group>
            <Button type="submit">
                {sending
                    ? 'Enviando...'
                    : 'Actualizar nombre de usuario'
                }
            </Button>
        </Form>
    </div>
}
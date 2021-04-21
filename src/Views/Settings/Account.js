import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUser } from '../../Context/user-context';
import Title from './components/Title';

export default function Account({ showAlert }) {
    const {user, update} = useUser();
    const [nickname, setNickname] = useState(user.nickname);
    const [sending, setSending] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true);
            await Axios({
                method: 'patch',
                url: `/apimuni/users/${user.id}/change/nickname`,
                params: { nickname }
            });
            update({...user, nickname});
            showAlert('success', `Se cambio el nombre de usuario a ${nickname}.`);
            setSending(false);
        } catch (error) {
            console.log(error);
            setSending(false);
            showAlert('error', 'Upps, ocurrio algo inesperado, vuelva a internar mas tarde.');
        }
    }

    const handleInputChange = e => setNickname(e.target.value);

    return <div>
        <Title>Cuenta</Title>
        <Form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input
                    type="text"
                    className="form-control"
                    value={nickname}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </div>
            <Button type="submit">
                {sending
                    ? 'Enviando...'
                    : 'Actualizar nombre de usuario'
                }
            </Button>
        </Form>
    </div>
}
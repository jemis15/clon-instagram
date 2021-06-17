import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

import Title from './components/Title';
import imgNoTopbars from '../../assets/images/image3.svg';
import imgError from '../../assets/images/error.png';

export default function Topbars({ showTopbar }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [topbar, setTopbar] = useState(null);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function loadTopbars() {
            try {
                setLoading(true);
                const { data: apiTopbar } = await Axios.get('/v1/topbars', {
                    cancelToken: source.token
                });
                setTopbar(apiTopbar);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                console.log(error);
                setError('Upps sucedio algo inesperado');
                setLoading(false);
            }
        }

        loadTopbars();

        return () => source.cancel('Cancelado');
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            setSending(true);
            await Axios({
                method: 'post',
                url: `/v1/topbars/${topbar.id}`,
                params: topbar
            });
            showTopbar(topbar);
            setSending(false);
            showTopbar(topbar)
        } catch (error) {
            console.log(error);
            setSending(false);
        }
    }

    if (loading) {
        return <div className="text-center">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    }

    if (error) {
        return <div className="mx-auto text-center mt-5" style={{ maxWidth: '350px' }}>
            <img
                className="mb-4"
                width="200"
                src={imgError}
                alt="error"
            />
            <h3>{error}</h3>
            <p className="text-small">Vuelva a intentarlo mas tarde :).</p>
        </div>
    }

    if (!topbar) {
        return <div className="mx-auto text-center mt-5" style={{ maxWidth: '350px' }}>
            <img
                className="mb-4"
                width="200"
                src={imgNoTopbars}
                alt="info"
                loading="lazy"
            />
            <h3>Aun no se ha creado nada</h3>
            <p className="text-small">Agregar topbars para que todo persona que entre en la pagina lo vea en la parte superior.</p>
            <Button>Agregar topbar</Button>
        </div>
    }

    return <div>
        <Title className="mb-4">Topbar</Title>

        <Form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Titulo del topbar</label>
                <Form.Control
                    type="text"
                    value={topbar.descripcion}
                    onChange={(e) => setTopbar({ ...topbar, descripcion: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <Form.Check
                    label="Activo"
                    id="activar_topbar"
                    checked={topbar.active}
                    onChange={e => setTopbar({ ...topbar, active: e.target.checked ? 1 : 0 })}
                />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">{sending ? 'Actualizando...' : 'Actualizar'}</button>
        </Form>
    </div>
}
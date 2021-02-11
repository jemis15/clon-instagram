import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Title from './components/Title';

import Axios from 'axios';
import Loading from './components/Loading';

export default function Modals({ showAlert }) {
    const [modalBienvenida, setModalBienvenida] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function loadModalBienvenida() {
            try {
                setLoading(true);
                const { data: apiModalBienvenida } = await Axios.get('/apimuni/modalbienvenida', {
                    cancelToken: source.token
                });
                setModalBienvenida(apiModalBienvenida);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel) { return; }
                console.log(error);
                setLoading(false);
            }
        }

        loadModalBienvenida();

        return () => source.cancel('Cancelado');
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        let modalBienvenidaActualizado = modalBienvenida;
        try {
            setSending(true);
            if (image.formImage !== '') {
                const formData = new FormData();
                formData.append('image', image.formImage);
                formData.append('path', 'modalbienvenida');
                const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData);
                console.log(apiImage);
                modalBienvenidaActualizado.image = apiImage.name;
            }

            await Axios({
                method: 'put',
                url: '/apimuni/modalbienvenida',
                params: modalBienvenidaActualizado
            });
            setModalBienvenida(modalBienvenidaActualizado);
            showAlert('success', 'Modal principal actualizado');
            setSending(false);
        } catch (error) {
            console.log(error);
            showAlert('error', 'Upps, sucedio algo inesperado, vuelva a intentar mas tarde');
            setSending(false);
        }
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

        setImage({
            formImage: file,
            base64: await new Promise(resolve => {
                const reader = new FileReader()
                reader.addEventListener('load', () => resolve(reader.result), false)
                reader.readAsDataURL(file)
            })
        });
    }

    if (loading) {
        return <Loading />
    }

    return <div>
        <Title>Modal principal</Title>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <label>Image</label>
                <div className="border" style={{ maxWidth: '500px' }}>
                    <label className="pb-0">
                        {image.base64
                            ? <img className="img-fluid" src={image.base64} alt="modal bienvenida" />
                            : <img
                                className="img-fluid"
                                src={modalBienvenida.image}
                                alt="bienvenido"
                            />
                        }
                        <input
                            className="d-none"
                            type="file"
                            accept="image/*"
                            onChange={handleSelectImage}
                        />
                    </label>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    label="Activo"
                    id="activemodalbienvenida"
                    checked={modalBienvenida.active}
                    onChange={e => setModalBienvenida({ ...modalBienvenida, active: e.target.checked ? 1 : 0 })}
                />
            </Form.Group>
            <Button type="submit" className="mb-5">
                {sending ? 'Actualizando...' : 'Actualizar modal'}
            </Button>
        </Form>
    </div>
}
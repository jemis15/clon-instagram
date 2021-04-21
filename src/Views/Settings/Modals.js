import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Loading from './components/Loading';

export default function Modals({ showAlert }) {
    const [modals, setModals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();

        async function loadModalBienvenida() {
            try {
                setLoading(true);
                const { data: apiModals } = await Axios.get('/apimuni/modals', {
                    cancelToken: source.token
                });
                setModals(apiModals)
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                console.log(error);
                setLoading(false);
            }
        }

        loadModalBienvenida();

        return () => source.cancel('Cancelado');
    }, []);

    async function create(formData) {
        // subimos la image
        const { data: apiImage } = await Axios.post('/apimuni/upload/images', formData);
        //creamos el modal
        const { data: apiModal } = await Axios({
            method: 'post',
            url: '/apimuni/modals',
            params: { image: apiImage.name }
        });
        setModals([...modals, apiModal]);
    }

    async function remove(modalId) {
        const { data: apiModal } = await Axios.delete(`/apimuni/modals/${modalId}/remove`);
        setModals(modals.filter(modal => modal.id !== apiModal.id));
        showAlert('success', 'Se elimino el modal ' + modalId + '.');
    }

    async function change(value) {
        await Axios({
            method: 'post',
            url: '/apimuni/modals/change',
            params: { value }
        });
    }

    if (loading) {
        return <Loading />
    }

    return <div>
        <Title>Imagen al entrar a la pagina</Title>
        <p>Agrege y/o active la imagen cuando el usuario visite el sitio web</p>
        <ListModalBienvenida modals={modals} create={create} remove={remove} change={change} showAlert={showAlert} />
    </div>
}

function ListModalBienvenida({ modals, create, remove, change, showAlert }) {
    const [active, setActive] = useState(verifiActive());
    const [sending, setSending] = useState(false);

    function verifiActive() {
        const modal = modals.find(modal => modal.active === 1);
        if (modal) {
            return modal.id;
        } else {
            return 'disabled';
        }
    }

    // activamos el modal item seleccionado por el usuario
    async function handleChange(value) {
        // guardamos el valor anterior para restaurar en caso se produce un error
        const oldValueActive = active;

        if (sending) {
            return;
        }

        try {
            setActive(value);
            setSending(true);
            await change(value);
            showAlert('success', value === 'disabled' ? 'Modal desactivado.' : 'Se activo el modal ' + value + '.');
            setSending(false);
        } catch (error) {
            setSending(false);
            showAlert('error', 'Sucedio algo inesperado, vuelve a intentarlo mas tarde.');
            // restauramos al valor anterior
            setActive(oldValueActive);
            console.log(error);
        }
    }

    return <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))' }}>
        <ModalBienvenidaItemDisabled active={active === 'disabled'} change={handleChange} />
        {modals.map(modal => (
            <ModalBienvenidaItem
                key={modal.id}
                id={modal.id}
                image={modal.image}
                active={modal.id === active}
                change={handleChange}
                remove={remove}
                showAlert={showAlert}
            />
        ))}
        <ModalBienvenidaNew create={create} showAlert={showAlert} />
    </div>
}

const ModalBienvenidaItem = (props) => {
    const [confirmar, setConfirmar] = useState(false);

    return <>
        <div className="position-relative">
            <input
                className="form-check-input"
                name="modal-bienvenida"
                type="radio"
                id={`modal-${props.id}`}
                style={{ position: 'absolute', left: '1rem', bottom: '0.6rem' }}
                checked={props.active}
                onChange={props.change.bind(this, props.id)}
            />
            <span
                className="border rounded d-flex justify-content-center align-items-center cursor-pointer"
                onClick={() => setConfirmar(true)}
                style={{
                    position: 'absolute',
                    top: '0.4rem',
                    right: '0.5rem',
                    zIndex: '1',
                    display: 'inline-block',
                    background: 'white',
                    width: '1.5rem',
                    height: '1.5rem'
                }}>
                <IconClose size="1.5rem" />
            </span>
            <label htmlFor={`modal-${props.id}`} className={`pb-1 bg-white border ${props.active && 'border-primary'} rounded d-block cursor-pointer`}>
                <div className="mb-1 border-bottom ratio ratio-16x9 overflow-hidden">
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={props.image} alt="mazamari informa" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </div>
                </div>
                <span className="ms-5 text-small text-dark" onClick={() => console.log(confirmar)}>Modal {props.id}</span>
            </label>
        </div>
        {confirmar && <DeleteModalItem modalId={props.id} onHide={() => setConfirmar(false)} remove={props.remove} showAlert={props.showAlert} />}
        {/* <ModalConfirmar show={confirmar}>
            <DeleteModalItem modalId={props.id} onHide={() => setConfirmar(false)} remove={props.remove} showAlert={props.showAlert} />
        </ModalConfirmar> */}
    </>
}

const DeleteModalItem = ({ modalId, onHide, remove, showAlert }) => {
    const [sending, setSending] = useState(false);

    const handleDelete = async () => {
        if (sending) {
            return;
        }

        try {
            setSending(true);
            await remove(modalId);
            showAlert('success', 'Se elimino el modal ' + modalId + '.');
            // onHide();
        } catch (error) {
            showAlert('error', 'Sucedio algo inesperado, vuelve a intentarlo mas tarde.');
            setSending(false);
            console.log(error);
        }
    }
    return <>
        <div className="blackglass-modal" />
        <div className="modal-confirmar rounded bg-white">
            <div className="p-4">
                <h3>Confirmar eliminaci&oacute;n</h3>
                <p className="mb-4">Esta acci&oacute;n eliminara el item.</p>
                <div className="text-end">
                    <button className="me-2 btn btn-secondary" onClick={onHide}>Cancelar</button>
                    <button className="btn btn-primary" onClick={handleDelete}>{sending ? 'Eliminando...' : 'Eliminar item'}</button>
                </div>
            </div>
        </div>
    </>
}

const ModalBienvenidaItemDisabled = (props) => (
    <div className="position-relative">
        <input
            className="form-check-input"
            name="modal-bienvenida"
            type="radio"
            id="modal-disabled"
            style={{ position: 'absolute', left: '1rem', bottom: '0.55rem' }}
            checked={props.active}
            onChange={props.change.bind(this, 'disabled')}
        />
        <label htmlFor="modal-disabled" className={`pb-1 bg-white border ${props.active && 'border-primary'} rounded d-block cursor-pointer`}>
            <div className="mb-1 border-bottom ratio ratio-16x9 overflow-hidden">
                <div></div>
            </div>
            <span className="ms-5 text-small text-dark">Desactivado</span>
        </label>
    </div>
)

const ModalBienvenidaNew = ({ create, showAlert }) => {
    const inputFile = useRef();
    const [image, setImage] = useState({
        formImage: '',
        base64: ''
    });

    const handleClick = () => {
        // abrimos el administrador de archivos para seleccionar una image
        inputFile.current.click();
    }

    // guardamos la imagen en base 64
    const handleSelectImage = async (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        // el usuario tiene que selecionar uma image
        if (file.type.indexOf('image/') === -1) {
            alert('Esto no parese ser una imagen');
            return;
        }

        // guardamos la imagen(base64) en memoria
        setImage({
            formImage: file,
            base64: await new Promise(resolve => {
                const reader = new FileReader();
                reader.addEventListener('load', () => resolve(reader.result), false);
                reader.readAsDataURL(file);
            })
        });
    }

    // creamos y guardamos el modal
    const handleUploadImage = async () => {
        if (!image.formImage) {
            setImage({ formImage: '', base64: '' });
            return;
        }

        try {
            const formData = new FormData();
            formData.append('image', image.formImage);
            formData.append('path', 'modalbienvenida');
            await create(formData);
            showAlert('success', 'Se creo un modal.');
            setImage({ formImage: '', base64: '' });
        } catch (error) {
            showAlert('error', 'Sucedio algo inesperado, vuelve a intentarlo mas tarde.');
            console.log(error);
        }
    }

    if (image.base64) {
        return <div className="border rounded bg-white">
            <div className="ratio ratio-16x9 border-bottom">
                <div className="d-flex justify-content-center align-items-center"><img src={image.base64} style={{ maxWidth: '100%', maxHeight: '100%' }} /></div>
            </div>
            <div className="text-center">
                <button className="me-2 btn btn-sm btn-primary" onClick={handleUploadImage}>Guardar</button>
                <button className="btn btn-sm btn-secondary" onClick={() => setImage({ formImage: '', base64: '' })}>Descartar</button>
            </div>
        </div>
    }


    return <div className="py-5 d-flex justify-content-center align-items-center bg-white border rounded cursor-pointer" onClick={handleClick}>
        <span>agregar</span>
        <input ref={inputFile} type="file" onChange={handleSelectImage} hidden />
    </div>
}

const ModalConfirmar = ({ show, children }) => {
    let element = document.getElementById('myportal');
    if (!element) {
        element = document.createElement("div");
        element.setAttribute('id', 'myportal');
        document.body.appendChild(element);
    }

    if (!show) {
        document.body.removeChild(element);
        return null;
    }

    return ReactDOM.createPortal(<React.Fragment>{children}</React.Fragment>, element);
}

const IconClose = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "1rem"} height={props.size || "1rem"} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
)
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';

import DropdownMenu from '../../components/Dropdown';
import Avatar from '../../components/utilitarios/Avatar';
import Title from './components/Title';
import Loading from './components/Loading';

export default function Usuarios({ showAlert }) {
    const [users, setUsers] = useState([]);
    const [modalNewUser, setModalNewUser] = useState(false);
    const [modalInvitarUsuario, setModalInvitarUsuario] = useState(false);
    const [loading, setLoading] = useState(true)

    const toggleModalInvitarUsuario = () => setModalInvitarUsuario(!modalInvitarUsuario);
    const toggleModalNewUser = () => setModalNewUser(!modalNewUser);

    useEffect(() => {
        const source = Axios.CancelToken.source();

        let loadUsers = async () => {
            try {
                setLoading(true);
                const { data: apiUsers } = await Axios.get('/apimuni/users', {
                    cancelToken: source.token
                });
                setUsers(apiUsers);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                console.log(error);
                setLoading(false);
            }
        }
        loadUsers();
        
        return () => source.cancel('Cancelado');
    }, []);

    function addNewUser(newUser) {
        setUsers([newUser, ...users]);
    }

    function update(updateUser) {
        setUsers(users.map(user => {
            if (updateUser.id === user.id) {
                return updateUser;
            }
            return user;
        }));
    }

    function onDelete(user_id) {
        setUsers(users.filter(user => {
            return user.id !== user_id;
        }));
    }

    if (loading) {
        return <Loading />;
    }

    return <div>
        <Title>Usuarios</Title>
        {/* <div className="d-flex mb-5">
            <div>
                <Form.Control type="search" size="sm" placeholder="Buscar usuario..." />
            </div>
            <div className="ms-auto">
                <Button size="sm" onClick={toggleModalInvitarUsuario}>Invitar usuario</Button>
                <Button size="sm" onClick={toggleModalNewUser}>Agregar</Button>
            </div>
        </div> */}

        <div className="grid-users">
            <div className="bg-white border rounded d-flex justify-content-center align-items-center cursor-pointer" onClick={toggleModalNewUser}>
                Nuevo usuario
            </div>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                    update={update}
                    showAlert={showAlert}
                />
            ))}
        </div>

        <Modal show={modalNewUser} onHide={toggleModalNewUser}>
            <Modal.Header closeButton>Nuevo usuario</Modal.Header>
            <Modal.Body>
                <NewUser update={addNewUser} showAlert={showAlert} successful={toggleModalNewUser} />
            </Modal.Body>
        </Modal>
        <Modal show={modalInvitarUsuario} onHide={toggleModalInvitarUsuario} centered animation={false}>
            <Modal.Header closeButton>Invitar usuario</Modal.Header>
            <Modal.Body>
                <InivitarUsuario update={addNewUser} showAlert={showAlert} successful={toggleModalNewUser} />
            </Modal.Body>
        </Modal>
    </div>;
}

function User({ user, onDelete, update, showAlert }) {
    const [dropdown, setDropdown] = useState(false);
    const [modalChangePassword, setModalChangePassword] = useState(false);
    const [modalPrivilegios, setModalPrivilegios] = useState(false);
    const [modalSuspender, setModalSuspender] = useState(false);
    const [modalDeleteAccount, setModalDeleteAccount] = useState(false);

    const toggleDropdown = () => setDropdown(!dropdown);
    const toggleModalChangePassword = () => setModalChangePassword(!modalChangePassword);
    const toggleModalPrivilegios = () => setModalPrivilegios(!modalPrivilegios);
    const toggleModalSuspender = () => setModalSuspender(!modalSuspender);
    const toggleModalDeleteAccount = () => setModalDeleteAccount(!modalDeleteAccount);

    return <>
        <div className="pb-3 user d-flex position-relative">
            <div>
                <Avatar
                    className="me-3"
                    initials={user.nombre && user.nombre[0]}
                    image={user.image}
                    size="lg"
                />
            </div>
            <div>
                <div className="font-weight-500">
                    <Link className="font-weight-600 text-decoration-none" to={`/@${user.nickname}`}>{user.nombre}</Link>
                </div>
                <div className="mb-2 text-smaller">{user.nickname} · {moment(user.created_at).format('YYYY/MM/DD')}</div>

                <div className="position-relative">
                    <button className="btn-options py-1 px-2 rounded text-small font-weight-600"
                        onClick={toggleDropdown}>
                        <span className="me-1">Opciones</span>
                        <i className="fas fa-caret-down" />
                    </button>
                    <DropdownMenu active={dropdown} toggle={toggleDropdown} className="py-2">
                        <a
                            href="#option"
                            className="item-link px-3 py-1 d-block text-decoration-none text-nowrap"
                            onClick={toggleModalChangePassword}>
                            <span className="me-2"><i className="fas fa-key" /></span>
                            <span>Cambiar contrase&ntilde;a</span>
                        </a>
                        {/* <a
                            href="#option"
                            className="item-link px-3 py-1 d-block text-decoration-none"
                            onClick={toggleModalPrivilegios}>
                            <span className="me-2"><i className="fas fa-street-view" /></span>
                            <span>Privilegios</span>
                        </a>
                        <div className="border-bottom my-1"></div>
                        <a
                            href="#option"
                            className="item-link px-3 py-1 d-block text-decoration-none"
                            onClick={toggleModalSuspender}>
                            <span className="me-2"><i className="fas fa-user-clock" /></span>
                            <span>Banear cuenta</span>
                        </a> */}
                        <a
                            href="#option"
                            className="item-link px-3 py-1 d-block text-decoration-none"
                            onClick={toggleModalDeleteAccount}>
                            <span className="me-2"><i className="fas fa-times" /></span>
                            <span>Eliminar cuenta</span>
                        </a>
                    </DropdownMenu>
                </div>
            </div>
        </div>

        <Modal show={modalChangePassword} onHide={toggleModalChangePassword} animation={false} centered>
            <Modal.Header closeButton>Cambiar contrase&ntilde;a</Modal.Header>
            <Modal.Body>
                <ChangePassword user={user} successful={toggleModalChangePassword} showAlert={showAlert} />
            </Modal.Body>
        </Modal>

        <Modal show={modalPrivilegios} onHide={toggleModalPrivilegios} animation={false} centered>
            <Modal.Header closeButton>Privilegios</Modal.Header>
            <Modal.Body>
                <ChangePrivilegios successful={toggleModalPrivilegios} />
            </Modal.Body>
        </Modal>

        <Modal show={modalSuspender} onHide={toggleModalSuspender} animation={false} centered>
            <Modal.Header closeButton>Opciones de la cuenta</Modal.Header>
            <Modal.Body>
                <BanearCuenta user={user} successful={toggleModalSuspender} showAlert={showAlert} />
            </Modal.Body>
        </Modal>

        <Modal show={modalDeleteAccount} onHide={toggleModalDeleteAccount} animation={false} centered>
            <Modal.Header closeButton>¿Est&aacute;s seguro?</Modal.Header>
            <Modal.Body className="pt-0">
                <DeleteAccount user={user} onDelete={onDelete} successful={toggleModalDeleteAccount} showAlert={showAlert} />
            </Modal.Body>
        </Modal>
    </>
}

function NewUser({ update, showAlert, successful }) {
    const [user, setUser] = useState({
        nombre: '',
        nickname: '',
        password: '',
        admin: false
    });
    const [sending, setSending] = useState(false);

    const handleInputChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            // indicador de que se esta creando un usuario 
            setSending(true);
            // api para crear un usuario
            const { data: apiUser } = await Axios({
                method: 'post',
                url: '/apimuni/users',
                params: user
            });
            // agrega el nuevo usuario al estado inicial
            update(apiUser);
            // funcion que se ejecuta cuando aya tenido exito la creacion
            successful()
            // alerta que muestra un mensaje de que se a creado un usuario
            showAlert('success', `Nuevo usuario ${apiUser.nombre}`);
            // indicador de que se a terminado de crear un usuario
            setSending(false);
        } catch (error) {
            console.log(error);
            // mostrar error
            showAlert('error', error.response.data.mensaje);
            // fin
            setSending(false);
        }
    }

    return <Form onSubmit={handleSubmit}>
        <h4>Datos personales</h4>
        <div className="mb-4 d-flex align-items-center">
            <div className="me-3">
                <Avatar initials={user.nombre && user.nombre[0]} />
            </div>
            <Form.Control
                type="text"
                name="nombre"
                value={user.nombre}
                onChange={handleInputChange}
                placeholder="Nombre"
            />
        </div>
        <h4>Datos para el login</h4>
        <Form.Row>
            <Col>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <Form.Control
                        type="text"
                        name="nickname"
                        value={user.nickname}
                        onChange={handleInputChange}
                        placeholder="Nombre de usuario"
                    />
                </div>
            </Col>
            <Col>
                <div className="mb-3">
                    <label className="form-label">Contrase&ntilde;a</label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                        placeholder="Contraseña"
                    />
                </div>
            </Col>
        </Form.Row>
        <button type="submit" className="btn btn-primary w-100">
            {sending ? 'Creando...' : 'Crear usuario'}
        </button>
    </Form>
}

function InivitarUsuario() {
    const [invitacion, setInvitacion] = useState({
        correo: '',
        funcion: 'basico'
    });

    useEffect(() => {
        // focuseamos el input del correo
        document.getElementById('direccion_correo').focus();
    }, []);

    const handleInputChange = (e) => setInvitacion({ ...invitacion, [e.target.name]: e.target.value });

    return <div>
        <Form>
            <div className="mb-3">
                <label className="form-label">Direccion de correo electronico</label>
                <Form.Control
                    type="email"
                    id="direccion_correo"
                    name="correo"
                    value={invitacion.correo}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
                <Form.Text>Correo donde le llegara el link para que pueda terminar de registrarse.</Form.Text>
            </div>
            <div className="mb-3">
                <label className="form-label">Funcion</label>
                <Row noGutters>
                    <Col className={`select-function cursor-pointer d-flex p-2 rounded ${invitacion.funcion === 'basico' && 'active'}`}
                        onClick={() => setInvitacion({ ...invitacion, funcion: 'basico' })}>
                        <span className="me-2"><i className="fas fa-user-circle" /></span>
                        <div>
                            <div className="font-weight-600 text-small">Basico</div>
                            <div className="text-smaller">Puede crear post, añadir items al blog.</div>
                        </div>
                    </Col>
                    <Col className={`select-function cursor-pointer d-flex p-2 rounded ${invitacion.funcion === 'administrador' && 'active'}`}
                        onClick={() => setInvitacion({ ...invitacion, funcion: 'administrador' })}>
                        <span className="me-2"><i className="fas fa-crown" /></span>
                        <div>
                            <div className="font-weight-600 text-small">Administrador</div>
                            <div className="text-small text-smaller">Puede administra su sitio, determinar el acceso a los usuarios (como usted).</div>
                        </div>
                    </Col>
                </Row>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar invitaci&oacute;n</button>
        </Form>
    </div>
}

function ChangePassword({ user, successful, showAlert }) {
    const [newPassword, setNewPassword] = useState('');
    const [sending, setSending] = useState(false);

    useEffect(() => {
        // focuseamos el input cambiar password
        document.getElementById('input_change_password').focus();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            // indica de que se esta cambiando el password
            setSending(true);
            // api para cambiar el password
            await Axios({
                method: 'PATCH',
                url: `/apimuni/users/${user.id}/change/password`,
                params: { password: newPassword }
            });
            // indica que finalizo y se a cambiado el password
            setSending(false);
            // funcion para cerrar el modal se ejecutara cuando el cambio de password fue exitoso
            successful();
            showAlert('success', `Se cambio la contraseña de ${user.nombre}`);
        } catch (error) {
            console.log(error.response);
            // mostramos el error en un alert
            showAlert('error', error.response.data)
            // indica que finalizo y con error
            setSending(false);
        }
    }

    return <Form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center">
            <div>
                <Avatar
                    initials={user.nombre[0]}
                    image={user.image}
                    className="me-3"
                />
            </div>
            <h4>{user.nickname}</h4>
        </div>
        <div className="mb-3">
            <Form.Control
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Ingrese la nueva contraseña"
                required
                id="input_change_password"
            />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={newPassword === ''}>
            {sending ? 'Cambiando...' : 'Cambiar contraseña'}
        </button>
    </Form>
}

function ChangePrivilegios() {
    return <>
        <label>
            <input type="checkbox" className="me-2" />
            <span className="font-weight-600">Configuraciones</span>
        </label>
        <ul className="list-unstyled">
            <li>
                <span>Usuarios</span>
            </li>
            <li>
                <span>Cambiar contraseña</span>
            </li>
            <li>
                <span>Cambiar contraseña</span>
            </li>
            <li>
                <span>Cambiar contraseña</span>
            </li>
        </ul>
    </>
}

function BanearCuenta({ user, successful, showAlert }) {
    const medidas = [
        { cantidad: 1, medida: 'd', texto: '1 dia' },
        { cantidad: 3, medida: 'd', texto: '3 dias' },
        { cantidad: 5, medida: 'd', texto: '5 dias' },
        { cantidad: 1, medida: 'w', texto: '1 semana' },
        { cantidad: 1, medida: 'M', texto: '1 mes' },
        { cantidad: 1, medida: 'y', texto: '1 año' },
    ]
    const [dropdownTime, setDropdownTime] = useState(false);
    const [timeSelected, setTimeSelected] = useState({
        text: '',
        cantidad: '',
        medida: '',
        fechaFinalizar: ''
    });
    const [sending, setSending] = useState(false);

    function handleSelectTime(cantidad, medida, texto) {
        const fechaFinalizar = moment().add(cantidad, medida).format('YYYY-MM-DD');
        setTimeSelected({
            ...timeSelected,
            texto,
            cantidad,
            medida,
            fechaFinalizar
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            // indica que se esta baneando la cuenta
            setSending(true);
            // api que baneara la cuenta del usuario
            await Axios({
                method: 'patch',
                url: `/apimuni/users/${user.id}/ban`,
                params: { fecha: timeSelected.fechaFinalizar }
            })
            // se pasamos que se a terminado de banear
            setSending(false);
            // funcion para cerrar el modal
            successful();
            // mostrar una alerta indicando que se baneo la cuenta
            showAlert('success', `Cuenta de ${user.nombre} baneado hasta ${timeSelected.fechaFinalizar}`);
        } catch (error) {
            console.log(error);
            // error.response.status === 400 && showAlert('error', error.respose.data);
            // se pasamos que se a terminado de banear
            setSending(false);
        }
    }

    const toggleDropdownTime = () => setDropdownTime(!dropdownTime);

    return <Form onSubmit={handleSubmit}>
        <h4>Tiempo a banear</h4>
        <div className="position-relative">
            <button type="button"
                className="btn-options py-1 px-2 rounded text-small font-weight-600"
                onClick={toggleDropdownTime}>
                <span className="me-1">{timeSelected.texto ? timeSelected.texto : 'Opciones'}</span>
                <i className="fas fa-caret-down" />
            </button>
            <DropdownMenu active={dropdownTime} toggle={toggleDropdownTime} className="py-2">
                {medidas.map((medida, key) => (
                    <a
                        key={key}
                        className="px-3 py-1 item-link d-block text-decoration-none"
                        href="#banear"
                        onClick={handleSelectTime.bind(this, medida.cantidad, medida.medida, medida.texto)}>
                        <span>{medida.texto}</span>
                    </a>
                ))}
            </DropdownMenu>
        </div>
        {timeSelected.fechaFinalizar && <>
            <div className="border rounded bg-container mb-2 px-3 py-2 d-flex mt-4">
                <div className="me-2"><i className="fas fa-info-circle fa-lg" /></div>
                <div className="text-small">
                    La cuenta sera suspendido hasta el <span className="text-danger">{timeSelected.fechaFinalizar}</span>
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">{sending ? 'Procesando...' : 'Suspender'}</button>
        </>}
    </Form>
}

function DeleteAccount({ user, onDelete, successful, showAlert }) {
    const [textConfirm, setTextConfirm] = useState('');
    const [sending, setSending] = useState(false);

    useEffect(() => {
        document.getElementById('input_delete_confirm').focus();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending) {
            return;
        }

        try {
            // indica que se esta procesando la eliminacion de la cuenta
            setSending(true);
            await Axios.delete(`/apimuni/users/${user.id}`);
            // 
            onDelete(user.id);
            // se termino de procesar la eliminacion de la cuenta
            setSending(false);
            // funcion cuando haya tenido exito
            successful();
            // mostrar un alert
            showAlert('success', `El usuario ${user.nombre} ya no es parte del equipo.`)
        } catch (error) {
            // mostrando el error en un alert
            if (error.response.status === 400) {
                showAlert('error', error.response.data.mensaje);
            };
            // se termino de procesar la eliminacion de la cuenta
            setSending(false);
        }
    }

    return <Form onSubmit={handleSubmit}>
        <div className="py-3 px-3 mb-3 text-small"
            style={{ borderTop: '1px solid var(--red-400)', borderBottom: '1px solid var(--red-400)', backgroundColor: 'var(--red-100)' }}>
            <span style={{ color: 'var(--red-700)' }}>!Suceder&aacute;n cosas malas e inesperadas si no lee esto¡</span>
        </div>

        <p className="text-small">
            Esta accion no se puede deshacer. Esto eliminara permanentement la cuenta <b>{user.nickname}</b> y todas las publicaciones hechas por el usuario.
        </p>
        <p className="text-small">
            Escriba <b>{user.nickname}</b> para confirmar.
        </p>

        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                id="input_delete_confirm"
                value={textConfirm}
                onChange={(e) => setTextConfirm(e.target.value)}
            />
        </div>
        <button disabled={textConfirm !== user.nickname} className="btn btn-danger w-100" type="submit">
            {sending ? 'Eliminando...' : 'Entiendo las consecuencias, elimino esta cuenta'}
        </button>
    </Form>
}
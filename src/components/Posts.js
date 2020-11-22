import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { publicar } from '../Helpers/post-helper';

import Post from './Post';
import Avatar from './utilitarios/Avatar';

export default function Posts({ user, all }) {
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                setLoadingPosts(true);
                const { data: apiPosts } = await Axios.get('/apimuni/posts/public');
                setPosts(apiPosts);
                setLoadingPosts(false);
            } catch (error) {
                console.log(error);
                setLoadingPosts(false);
            }
        }
        async function loadPostsOfUser() {
            try {
                setLoadingPosts(true);
                const { data: apiPosts } = await Axios.get(`/apimuni/posts/user/${user.id}`);
                setPosts(apiPosts)
                setLoadingPosts(false);
            } catch (error) {
                console.log(error);
                setLoadingPosts(false);
            }
        }

        if (all) {
            loadPosts();
        } else {
            loadPostsOfUser();
        }
    }, [user]);

    function addNewPost(newPost) {
        setPosts([newPost, ...posts])
    }

    return <>
        {user && <UserCreatePost user={user} addNewPost={addNewPost} />}
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
        {posts.length === 0 && <div className="text-center">
            {all ? <>No hay posts para mostrar</> : <>
                {user ? <>No tienes publicaciones.</> : <>El usuario no tiene publicaciones</>}
            </>}
        </div>}

        {loadingPosts && <div className="text-center">Cargando...</div>}
    </>
}

function UserCreatePost({ user, addNewPost }) {
    const [modalCreatePost, setModalCreatePost] = useState(false);
    const [post, setPost] = useState({
        titulo: '',
        contenido: '',
        user_id: user.id,
        tipo_id: ''
    });
    const [creatingPost, setCreatingPost] = useState(false);

    const toggleModalCreatePost = () => setModalCreatePost(!modalCreatePost);

    async function handleSubmit(e) {
        e.preventDefault();

        if (creatingPost) {
            return;
        }

        try {
            setCreatingPost(true);
            const newPost = await publicar(post, user);
            addNewPost(newPost);
            setCreatingPost(false);
            setModalCreatePost(false);
        } catch (error) {
            console.log(error);
            setCreatingPost(false);
        }
    }

    function handleInputChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return <>
        <div className="px-3 py-2 border shadow-sm rounded mb-4 d-flex align-items-center">
            <Avatar
                className="mr-3"
                initials={user.nombre[0]}
                image={user.image && `/apimuni/images/faces/${user.image}`}
            />
            <div className="flex-fill">
                <Button
                    onClick={toggleModalCreatePost}
                    variant="secondary"
                    block>
                    agrega una publicaci&oacute;n
          </Button>
            </div>
        </div>

        <Modal show={modalCreatePost} onHide={toggleModalCreatePost} centered>
            <Modal.Header closeButton>Crear publicaci&oacute;n</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-start mb-3">
                        <Avatar
                            className="mr-3"
                            initials={user.nombre[0]}
                            image={user.image && `/apimuni/images/faces/${user.image}`}
                        />
                        <div className="flex-fill">
                            <div className="font-weight-600 text-small">
                                <span>{user.nombre}</span>
                            </div>
                            <Form.Control
                                as="select"
                                size="sm"
                                name="tipo_id"
                                onChange={handleInputChange}
                                value={post.tipo_id}>
                                <option value="1">Comunicado</option>
                                <option value="2">Publicaci&oacute;n</option>
                                <option value="3">Blog</option>
                            </Form.Control>
                        </div>
                    </div>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="titulo"
                            value={post.titulo}
                            onChange={handleInputChange}
                            placeholder="Titulo de tu publicacion"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            placeholder="Escribe tu publicacion..."
                            rows="8"
                            name="contenido"
                            value={post.contenido}
                            onChange={handleInputChange}
                        />
                        <Form.Text>Este campo soporta markdown</Form.Text>
                    </Form.Group>
                    <div className="border rounded bg-container mb-2 px-3 py-2 d-flex">
                        <div className="mr-2"><i className="fas fa-info-circle fa-lg" /></div>
                        <div className="text-small">
                            Tu publicacion sera visto por todas las personas
                        </div>
                    </div>
                    <Button type="submit" block>{creatingPost ? 'Publicando...' : 'Publicar'}</Button>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}
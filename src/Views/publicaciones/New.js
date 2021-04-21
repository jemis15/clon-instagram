import Axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import React, { useContext, useEffect, useReducer } from 'react';

const initialState = {
    post: {
        titulo: {
            value: 'Mi primer titulo',
            error: null,
            dirty: false
        },
        image: {
            value: '',
            error: null,
        },
        video: {
            value: 'gADgM89skZQ',
            error: null,
        },
        contenido: {
            value: 'Mi primer contenido',
            error: null,
            dirty: false
        },
        tipo: {
            value: '',
            error: null,
            dirty: false
        }, // image - video
        image_of_video: {
            value: true,
            error: null
        },
        video_from: {
            value: 'youtube',
            error: null
        },
        produccion: {
            value: true,
            error: null
        },
        user_id: {
            value: '',
            error: null
        },
        tipo_id: {
            value: '',
            error: null
        }
    },
    categories: [],
    isValidatedPost: false
};
const PostCreateContext = React.createContext(initialState);

function reducer(state, action) {
    switch (action.type) {
        case 'update':
            switch (action.key) {
                case 'titulo':
                    var validated = validTitle(action.value);
                    var isValidated = null;

                    if (validated.error) {
                        isValidated = false
                    } else {
                        isValidated = verifyIfAllIsValid(state);
                    }

                    var post = { ...state.post, titulo: validated };
                    return { ...state, post, isValidatedPost: isValidated };

                default:
                    return state;
            }

        case 'updateCategories':
            return {...state, categories: state.value};

        case 'restar':
            return state;

        default:
            return state;
    }
}

function validTitle(value) {
    var error = null;
    var titleLogitud = value.length;

    if (titleLogitud > 100) {
        error = 'Escribe un título mas corto.';
    } else if (titleLogitud === 0) {
        error = 'Ingrese un titulo válido.';
    } else {
        error = '';
    }

    return { value, error, dirty: true };
}

function verifyIfAllIsValid(state) {
    const values = ['titulo', 'image', 'video', 'contenido', 'tipo', 'video_from', 'tipo_id'];
    const isValidated = true;
    values.forEach(value => {
        if (state.post[value]) {
            if (!state.post[value].dirty || state.post[value].error) {
                return false
            }
        }
    });

    return isValidated;
}

export default function New() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue = {
        post: state.post,
        categories: state.categories,
        isValidatedPost: state.isValidatedPost,
        dispatch
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Publicacion Guardada');
    }

    useEffect(() => {
        async function loadCategories() {
            try {
                const {data: apiCategories} = await Axios.get('/v1/postcategorias');
                dispatch({type: 'updateCategories', value: apiCategories});
            } catch (error) {
                console.log(error);
            }
        }

        loadCategories();
    });

    return <PostCreateContext.Provider value={contextValue}>
        <form onSubmit={handleSubmit}>
            <div className="mt-5 container-xxl">
                <HeaderPostCreate />

                <div className="row g-5">
                    {/* Detalle */}
                    <div className="col-md-8">
                        <FormGroupTitle />
                        <PostContenido />
                        <FormGroupCategoria />
                        <FormGroupProduccion />
                    </div>

                    {/* Media */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center">
                            <FormTitle>Media</FormTitle>
                            <div className="ms-auto">
                                <button type="button" className="btn btn-sm" title="editar">
                                    <IconEdit />
                                </button>
                                <button type="button" className="btn btn-sm" title="eliminar">
                                    <IconDelete />
                                </button>
                            </div>
                        </div>
                        {/* <div className="mb-3 py-5 bg-white border rounded cursor-pointer">
                        <h5 className="text-center">Agrege una <br /> Foto o Video</h5>
                        <div className="text-center"><IconMedia width="1.5rem" /></div>
                    </div> */}
                        {/* <div className="mb-3 text-center border rounded">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.asajacyl.com%2Fwp-content%2Fuploads%2F2017%2F09%2Ffoto21.jpg&f=1&nofb=1" className="img-fluid" />
                    </div> */}
                        <div className="mb-4">
                            <div className="border ratio ratio-16x9">
                                <div>
                                    <VideoYoutube video_id="sseQjNzQ3cE" />
                                </div>
                            </div>
                            <div className="py-2 px-2 bg-white border-start border-end border-bottom rounded">
                                <h6 className="mb-0">Enlace del video</h6>
                                <a href="https://youtu.be/sseQjNzQ3cE" className="small link-warning" target="_blank" rel="noopener noreferrer">https://youtu.be/sseQjNzQ3cE</a>
                            </div>
                        </div>

                        <div>
                            <div className="d-flex align-items-center">
                                <FormTitle>Miniatura</FormTitle>
                                <div className="ms-auto">
                                    <button type="button" className="btn btn-sm" title="editar">
                                        <IconEdit />
                                    </button>
                                    <button type="button" className="btn btn-sm" title="eliminar">
                                        <IconDelete />
                                    </button>
                                </div>
                            </div>
                            <p className="text-smaller">Selecciona o sube una imagen que refleje el contenido del vídeo. Una buena miniatura destaca y llama la atención de los usuarios.</p>
                            <div className="ratio ratio-16x9 overflow-hidden">
                                <div>
                                    <img src="https://img.youtube.com/vi/sseQjNzQ3cE/0.jpg" className="img-object-fit" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>

        {/* <div className="mx-auto mt-5" style={{ maxWidth: '800px', width: '100%' }}>
            <div className="mb-3">
                <div className="mb-3 d-flex">
                    <h2>Nueva publicación</h2>
                    <div className="ms-auto">
                        <button className="btn btn-primary disabled" disabled>Guardar</button>
                    </div>
                </div>

                <Portada />

                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <textarea className="form-control" placeholder="Escribe un titulo"></textarea>
                </div>
                <PostContenido />
            </div>
        </div> */}
    </PostCreateContext.Provider>
}

function HeaderPostCreate() {
    const { post, isValidatedPost } = useContext(PostCreateContext);

    return <div className="pb-2 border-bottom mb-4 d-flex align-items-center">
        <h3 className="mb-0">{post.titulo.value || 'Titulo de mi publicación'}</h3>
        <button type="submit" className="ms-auto btn btn-primary" disabled={!isValidatedPost}>Guardar</button>
    </div>
}

function FormGroupTitle() {
    const { post, dispatch } = useContext(PostCreateContext);

    function handleInputChange(e) {
        dispatch({ type: 'update', key: 'titulo', value: e.target.value });
    }

    return <div className="mb-3">
        <FormTitle htmlFor="postTitle">Título</FormTitle>
        <input
            type="text"
            className={`form-control ${post.titulo.error && 'is-invalid'}`}
            id="postTitle"
            value={post.titulo.value}
            onChange={handleInputChange}
            placeholder="Escribe un titulo para la publicacion"
        />
        {post.titulo.error && (
            <div className="invalid-feedback">
                {post.titulo.error}
            </div>
        )}
    </div>
}

function PostContenido() {
    const { post, dispatch } = useContext(PostCreateContext);

    return <div className="mb-3">
        <FormTitle>Contenido</FormTitle>
        <MDEditor
            onChange={(e) => dispatch({ type: 'update', key: 'contenido', value: e })}
            height={500}
            value={post.contenido.value || ""}
        />
    </div>
}

function FormGroupCategoria() {
    const { post, categories, dispatch } = useContext(PostCreateContext);
    console.log(categories);
    return <div className="mb-3">
        <FormTitle htmlFor="postCategoria">Categoria</FormTitle>
        <select
            className="form-select"
            id="postCategoria"
            aria-label="Default select example"
            onChange={(e) => dispatch({ type: 'update', key: 'categoria', value: e.target.value })} value={post.tipo_id.value}>
            <option value="">Seleccione una categoria</option>
            {/* {categories.map(category => (
                <option value={category.id}>{category.name}</option>
            ))} */}
        </select>
    </div>
}

function FormGroupProduccion() {
    const { post, dispatch } = useContext(PostCreateContext);

    return <div className="form-check">
        <input className="form-check-input" type="checkbox" onChange={e => dispatch({ type: 'update', key: 'produccion', value: e.target.checked })} value={post.produccion} id="postProduccion" />
        <label className="form-check-label" htmlFor="postProduccion">Publicar video</label>
    </div>
}

function Portada() {
    const { state } = useContext(PostCreateContext);

    if (state.tipo === 'video') {
        return <div className="mb-3">
            <label className="form-label">Imagen</label>
            <div>
                {state.image_from === 'youtube' && state.image_of_video
                    ? <img src={`https://img.youtube.com/vi/${state.video}/0.jpg`} className="w-100" />
                    : <img src={state.image} className="w-100" />
                }
            </div>
        </div>
    }

    return <div className="mb-3">
        <label className="form-label">Video de youtube</label>
        <div className="ratio ratio-16x9 border rounded bg-light">
            <div></div>
        </div>
    </div>
}

const FormTitle = (props) => (
    <label className="form-label text-dark fw-bold" htmlFor={props.htmlFor}>{props.children}</label>
)

const IconEdit = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1em'} height={props.width || '1em'} fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
    </svg>
)
const IconDelete = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1em'} height={props.width || '1em'} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
)

const IconMedia = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '1em'} height={props.width || '1em'} fill="currentColor" className="bi bi-collection" viewBox="0 0 16 16">
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
    </svg>
)

const VideoYoutube = (props) => (
    <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${props.video_id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
)
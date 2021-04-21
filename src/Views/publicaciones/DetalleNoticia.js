import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MAXNUMBERIMAGE = 6;

const ThemeContext = React.createContext('light');
export default function DetalleNoticia() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    // const [photos, setPhotos] = useState([
    //     { id: '1', url: 'https://tinypng.com/images/social/website.jpg' },
    //     { id: '2', url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg' },
    //     { id: '3', url: 'https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg' },
    // ]);
    const [isEditable, setIsEditable] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        async function loadPost() {
            try {
                const { data: apiPost } = await Axios.get(`/apimuni/posts/${id}`);
                setPost(apiPost)
            } catch (error) {
                console.log(error);
            }
        }

        loadPost();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();

        if (sending || !isEditable) {
            return;
        }

        try {
            setSending(true);
            await Axios({
                method: 'post',
                url: `/apimuni/posts/${post.id}/update`,
                params: post
            });
            setSending(false);
        } catch (error) {
            console.log(error);
            setSending(false);
        }
    }

    if (!post) {
        return <p>Cargando...</p>;
    }

    return (
        <ThemeContext.Provider value={post}>
            <form onSubmit={handleSubmit}>
                <div className="mt-3 mb-5 container">
                    <div className="mb-4 d-flex">
                        <div>
                            <h3>Detalles de la noticia</h3>
                        </div>
                        <div className="ms-auto d-flex">
                            <button type="submit" className="me-2 btn btn-primary disabled">Guardar</button>
                            <div className="dropdown">
                                <button
                                    className="btn"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-v" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <span className="me-2"><i className="fas fa-trash" /></span> <span>Borrar</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-8">
                            <InputTitle className="mb-4" value={post.titulo} onChange={(e) => setPost({ ...post, titulo: e })} />
                            <InputDescription className="mb-4" value={post.contenido} onChange={(e) => setPost({ ...post, contenido: e })} />

                            {/* <PhotoInput photos={photos} maxPhotos={MAXNUMBERIMAGE} /> */}
                        </div>
                        <div className="col-md-4">
                            <MediaPreviewWrapper type="video" media={'props.media'} />

                            <InputVisibilidad />
                        </div>
                    </div>
                </div>
            </form>
        </ThemeContext.Provider>
    );
}

const InputTitle = (props) => {
    const myContext = useContext(ThemeContext);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const len = parseInt(value.length) || 0;

        if (len <= 0) {
            setError('Ingrese un t\u00edtulo valido');
        } else if (len > 100) {
            setError('Escribe un t\u00edtulo mas corto.');
        } else {
            setError(null);
        }

        props.onChange(value);
    }

    return <div className={`${props.className} form-floating`}>
        <textarea
            value={props.value}
            onChange={handleInputChange}
            onBlur={(e) => props.onChange(e.target.value)}
            className={`form-control ${error && 'is-invalid'}`}
            placeholder="Leave a comment here"
            id="floatingTextareaTitle"
            style={{ height: '90px' }}
        />
        <label htmlFor="floatingTextareaTitle">T&iacute;tulo</label>
        {error && (
            <div className="invalid-feedback">{error}</div>
        )}
    </div>
}

const InputDescription = (props) => {
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const len = parseInt(value.length) || 0;

        if (len > 5000) {
            setError('Ingrese una descripci\u00f3n mas corto');
        } else {
            setError(null);
        }

        props.onChange(value);
    }

    return <div className={`${props.className} form-floating`}>
        <textarea
            defaultValue={props.value}
            onChange={handleInputChange}
            onBlur={(e) => props.onChange(e.target.value)}
            className={`form-control ${error && 'is-invalid'}`}
            placeholder="Leave a comment here"
            id="floatingTextareaDescription"
            style={{ height: '500px' }}
        />
        <label htmlFor="floatingTextareaDescription">Descripci&oacute;n (opcional)</label>
        {error && (
            <div className="invalid-feedback">{error}</div>
        )}
    </div>
}

const InputVisibilidad = (props) => {
    const post = useContext(ThemeContext);
    const visibilidad = props.produccion ? 'publico' : 'borrador';

    return <div className="form-floating">
        <select className="form-select" value={visibilidad} id="floatingSelectVisibilidad" aria-label="Floating label select example">
            <option value="borrador">Borrador</option>
            <option value="publico">P&uacute;blico</option>
        </select>
        <label htmlFor="floatingSelectVisibilidad">Visibilidad</label>
        {post.produccion
            ? <div className="form-text">Cualquir usuario podra ver tu publicaci&oacute;n</div>
            : <div className="form-text">Solo tu puedes ver la publicaci&oacute;n</div>
        }
    </div>
}

const MediaPreviewWrapper = (props) => {
    const post = useContext(ThemeContext);

    // si no esta definido el tipo, suponemos que se esta subiendo el post
    switch (post.tipo) {
        case 'video':
            return <>
                <MediaVideo className="mb-2" media={props.media} />
                <button className="mb-4 btn btn-outline-primary w-100">
                    <i className="me-2 fas fa-cloud-upload-alt"></i>
                    {'Subir video'}
                </button>
            </>

        case 'image':
            return <MediaImage className="mb-4" media={props.media} />

        case 'noticia':
            return <MediaImage className="mb-4" media={props.media} />

        default:
            return <UploadingMedia />
    }
}

const MediaVideo = (props) => {
    const post = useContext(ThemeContext);

    return <div className={`${props.className} ratio ratio-16x9 rounded-3 overflow-hidden bg-grey-300`}>
        <div>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${post.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                webkitallfullscreen="true"
                mozallfullscreen="true"
                oallowfullscreen="true"
                msallowfullscreen="true"
            />
        </div>
    </div>
}
const MediaImage = (props) => {
    const post = useContext(ThemeContext);
    return <div className={`${props.className} rounded-3 overflow-hidden`}>
        <img className="img-fluid" src={post.image} alt="numicipalidad mazamari publicaciones" />
    </div>
}

const UploadingMedia = _ => {
    return <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

// const PhotoInput = (props) => {
//     const myref = createRef();

//     useEffect(() => {
//         myref.current.addEventListener('change', (e) => {
//             console.log(e.target.files);
//         });
//     }, []);

//     return <div className={props.className}>
//         <h4>Imagenes</h4>
//         <FrancyButton ref={myref} />
//         <p className="text-small">Fotos &middot; {props.photos.length} / {props.maxPhotos} - Puedes agregar un m&aacute;ximo de {props.maxPhotos} fotos.</p>
//         <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
//             {props.photos.map(photo => (
//                 <HighlightPreviewWrapper key={photo.id} image={photo.url} loading={photo.loading} />
//             ))}
//         </div>
//     </div>
// }

// const FrancyButton = forwardRef((props, ref) => {
//     return <label>
//         <input
//             ref={ref}
//             onChange={(e) => console.log(e.target.files, 'files files files')}
//             accept="image/*"
//             className="d-none"
//             type="file"
//         />
//         {'Subir archivos'}
//     </label>
// });

// const HighlightPreviewWrapper = (props) => {
//     return <div className="ratio ratio-1x1 border rounded-3 bg-grey-300">
//         <div>
//             {props.loading
//                 ? <div className="d-flex justify-content-center align-items-center h-100">
//                     <div className="spinner-grow" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//                 : <img className="img-object-fit" src={props.image} alt="municipalidad mazamari publicacion" />
//             }
//             <div className="preview-wrapper-icons">
//                 <DeleteMediaButton onClick={() => console.log('deleted')} />
//             </div>
//         </div>
//     </div>
// }

// const DeleteMediaButton = (props) => (
//     <button className="delete-media-button rounded-circle outline-none" type="button" onClick={props.onClick ? props.onClick : undefined}>
//         <i className="far fa-times" />
//     </button>
// );


// function ButtonAddImage(props) {
//     return <label
//         htmlFor={props.inputFile}
//         className="mb-0 outline-none border bg-grey-300 rounded-3 d-flex flex-column justify-content-center align-items-center"
//         onClick={props.onClick ? props.onClick : undefined}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
//             <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
//             <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
//         </svg>
//         <div className="text-small">Agregar foto</div>
//     </label>
// }
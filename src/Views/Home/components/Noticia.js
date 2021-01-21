import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyPortal from '../../../components/MyPortal';

export default function CardPost({ titulo, image, fecha, type }) {
    const [previewImage, setPreviewImage] = useState(false);

    return <>
        <div
            className="shadow-sm bg-grey-900 rounded-lg position-relative overflow-hidden d-flex justify-content-center align-items-center"
            style={{ height: "300px" }}
            onClick={() => setPreviewImage(true)}>
            <Link to={`/posts/titulo/${getTitulo(titulo)}`} className="h-100 d-flex justify-content-center align-items-center">
                <img className="h-100 post-image" src={image} alt="galeria" />
            </Link>
            <div
                className="text-left px-3 py-2"
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    background: 'linear-gradient(transparent, #000000)',
                }}>
                <h4 className="text-white">{titulo}</h4>
                <span className="text-white text-small">{fecha}</span>
            </div>
        </div>
        <MyPortal show={previewImage} onHide={() => setPreviewImage(false)}>
            {type === 'programa' && (
                <PreviewImage image={image} onHide={() => setPreviewImage(false)} />
            )}
            {type === 'video' && (
                <PreviewVideo videoId="tXLn9bugnGE" onHide={() => setPreviewImage(false)} />
            )}
        </MyPortal>
    </>
}

function PreviewImage({ onHide, image }) {
    return <div
        style={{
            position: 'fixed',
            zIndex: 2000,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0, 0.85)'
        }}>
        <div
            className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
            style={{ position: 'relative', zIndex: 1 }}>
            <img
                src={image}
                className="mb-2"
                alt="preview"
                style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh'
                }}
            />
            <h4 className="container" style={{ color: 'var(--yellow-500)' }}>Hola</h4>
        </div>
        <button
            id="botonClose"
            onClick={onHide}
            className="rounded-circle"
            style={{
                border: 0,
                backgroundColor: 'white',
                width: '2.5rem',
                height: '2.5rem',
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 1,
            }}>
            <i className="far fa-times fa-lg" />
        </button>
    </div>
}

function PreviewVideo({ onHide, videoId }) {
    const idVideo = videoId;

    return <div
        id="previewVideo"
        onClick={onHide}
        style={{
            position: 'fixed',
            zIndex: 2000,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0, 0.85)'
        }}>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <iframe
                width="80%"
                height="80%"
                src={`https://www.youtube.com/embed/${idVideo}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
        <button
            onClick={onHide}
            className="rounded-circle"
            style={{
                border: 0,
                backgroundColor: 'var(--yellow-300)',
                width: '2.5rem',
                height: '2.5rem',
                position: 'absolute',
                top: '1rem',
                right: '1rem',
            }}>
            <i className="far fa-times fa-lg" />
        </button>
    </div>
}

function getTitulo(titulo) {
    const arrayTitle = titulo.split(' ');
    let result = '';
    for (let i = 0; i < arrayTitle.length; i++) {
        const element = arrayTitle[i];
        if (i === 0) {
            result += element;
        } else {
            result += '_' + element;
        }
    }
    return result;
}
import React from 'react';

export default function ModalBienvenida({ image, onHide, staticBackdrop }) {
    return <>
        <div className="blackglass-modal" onClick={staticBackdrop ? undefined : onHide} />
        <div className="modal-bienvenida rounded overflow-hidden">
            <button
                className="rounded"
                onClick={onHide}
                style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 1000 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.6rem" height="1.6rem" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            <img
                src={image}
                style={{ maxWidth: '90vw', maxHeight: '90vh' }}
                alt="bienvenida mazamari"
            />
        </div>
    </>
}
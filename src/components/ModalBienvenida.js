import React from 'react';

export default function ModalBienvenida({ image, onHide, show, staticBackdrop, url }) {
    if (!show) {
        return null;
    }

    function downdload() {
        const fichero = url
        var nombre = 'aviso_senace.pdf';
        const blob = new Blob(fichero);
        //Creamos un link
        const guardar = document.createElement('a');
        //Le asigna el ObjectURL que "apunta" al Blob
        guardar.href = URL.createObjectURL(blob);
        //Preferiblemente descargar (con el nombre indicado), 
        //sino, entonces que por lo menos abra en otra ventana
        guardar.download = nombre || 'archivo.pdf';
        guardar.target = '_blank';

        //Simulamos un clic del usuario
        //Nota: no es necesario agregar el link al DOM
        var eventoClic = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        guardar.dispatchEvent(eventoClic);

        //Al final removemos el ObjectURL para liberar recursos
        URL.revokeObjectURL(guardar.href);
    }

    return <>
        <div className="blackglass-modal" onClick={staticBackdrop ? undefined : onHide} />
        <div className="modal-bienvenida bg-white rounded overflow-hidden">
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: '1000' }}>
                <ul className="list-unstyled ">
                    <li>
                        <button
                            className="btn-close-modal shadow-sm"
                            onClick={onHide}
                            title="cerrar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <a
                            href={url}
                            className="btn-close-modal shadow-sm"
                            title="ver"
                            target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href={url}
                            className="btn-download shadow-sm"
                            title="ver"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="descargar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <img
                src={image}
                style={{ maxWidth: '90vw', maxHeight: '90vh' }}
                alt="bienvenida mazamari"
            />
        </div>
    </>
}
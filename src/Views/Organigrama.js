import React from 'react';

export default function Organigrama() {
    const linkPdf = 'https://web.munimazamari.gob.pe/admin/contenido/archivos/agro/1612062300boleta.pdf';

    return <div className="d-flex flex-column" style={{ height: 'calc(100vh - var(--topbar-height) - var(--header-height))' }}>
        <div className="bg-white py-2">
            <div className="container clearfix">
                <h3 className="mb-0 mt-1 text-center float-start">Organigrama Municipal</h3>
                {/* <a
                    href={linkPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger float-end">
                    <i className="far fa-download" /> 
                    {' Descargar'}
                </a> */}
            </div>
        </div>
        <div className="h-100">
            {/* <embed
                src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${linkPdf}`}
                width="100%"
                height="100%"
            /> */}
            <p className="text-center mt-5">Sucedio algo inesperado.</p>
        </div>
    </div>
}
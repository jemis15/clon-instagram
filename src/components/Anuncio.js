import React from 'react';

export default function Anuncio({ children, onHide }) {
    return <div>
        <div className="anuncio p-4 bg-white border rounded shadow-sm">
            <button className="close-anuncio" onClick={onHide}>
                <i className="far fa-times" />
            </button>
            {children}
        </div>
    </div>
}
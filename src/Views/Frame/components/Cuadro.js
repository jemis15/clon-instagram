import React from 'react';

export default function Cuadro({ children }) {
    return <div className="frame d-flex flex-column flex-md-row">
        {children}
    </div>
}

export function CuadroLeft({ children }) {
    return <section className="frame-metadata">
        <div className="container py-4 h-100">{children}</div>
    </section>
}
export function CuadroRight({ children }) {
    return <section className="frame-preview">
        <div className="container py-4">{children}</div>
    </section>
}
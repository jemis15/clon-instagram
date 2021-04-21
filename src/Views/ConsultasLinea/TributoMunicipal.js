import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function TributoMunicipal() {
    async function handleSubmit(e) {
        e.preventDefault();
    }

    return <>
        <h3 className="mb-4 mt-5">Tributo Municipal</h3>
        <Tabs className="d-flex" defaultActiveKey="home" transition={false} id="noanim-tab-example">
            {/* Tab Consulta */}
            <Tab eventKey="home" title="Consulta" className="bg-white border rounded-bottom border-top-0 px-3 py-4">
                <div className="card mx-auto mb-4" style={{ maxWidth: '350px' }}>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">C&oacute;digo Municipal</label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Clave Virtual</label>
                                <input className="form-control" type="password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                        </form>
                    </div>
                </div>
                <p className="text-small mb-0">
                    Si desconoces tu C&oacute;digo Municipal y/o Clave Virtual, puedes solicitarlo a trav&eacute;s de
                    la Unidad de Cobranzas en la Gerencia de Gesti&oacute;n Tributaria: llamando al
                    {' '}<span className="text-primary fw-bold">(064) 548187</span> o escr&iacute;benos tu nombre completo y escanea tu documento de identidad a
                    {' '}<span className="text-primary fw-bold">munimazamarimcm@hotmail.com</span>.
                </p>
            </Tab>

            {/* Tab Documentos */}
            <Tab eventKey="profile" title="Informaci&oacute;n" className="bg-white border rounded-bottom border-top-0 px-3 py-4">
                <Informacion grupo="TRIBUTO MUNICIPAL" />
            </Tab>
        </Tabs>
    </>
}
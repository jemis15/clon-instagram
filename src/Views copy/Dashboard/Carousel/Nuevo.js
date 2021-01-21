import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Editar() {
    const history = useHistory();

    return <>
        <button className="mb-4" onClick={() => history.goBack()}>
            <span><i className="fas fa-arrow-left" /></span>
        </button>
        <h2 className="title-1">Editar</h2>
        <h4 className="title-3 mb-3">Imagen</h4>
        <div className="mb-4">
            <label className="d-inline-block">
                <input type="file" />
            </label>
        </div>
        <h4 className="title-3">Otros datos</h4>
        <div className="mb-4">
            <Form.Group>
                <label>Url</label>
                <Form.Control type="text" />
            </Form.Group>
        </div>
        <Button>Guardar</Button>
        <div className="mb-5 pb-5" />
    </>
}
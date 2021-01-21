import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import image1 from '../../../assets/images/img1.jpg';

export default function Editar() {
    const history = useHistory();
    const { carouselId } = useParams();

    return <>
        <button className="mb-4" onClick={() => history.goBack()}>
            <span><i className="fas fa-arrow-left" /></span>
        </button>
        <h2 className="title-1">Editar item numero {carouselId}</h2>
        <h4 className="title-3 mb-3">Imagen</h4>
        <div className="mb-4">
            <label className="d-inline-block position-relative hover-content-black cursor-pointer">
                <img src={image1} alt="carousel" className="img-fluid" />
                <input type="file" className="d-none" style={{ top: 0, left: 0, zIndex: -1 }} />
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
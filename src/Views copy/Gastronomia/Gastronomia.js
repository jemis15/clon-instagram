import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

export default function Gastronomia() {
    const { titulo } = useParams();
    const [gastronomia, setGastronomia] = useState(null);

    useEffect(() => {
        async function loadGastronomia() {
            const { data: apiGastronomia } = await Axios.get(`/apimuni/gastronomias/${getTitulo(titulo)}/titulo`);
            setGastronomia(apiGastronomia);
        }

        loadGastronomia();
    }, []);

    function getTitulo(titulo) {
        let titulo_formateado = titulo.toUpperCase();

        let letras = titulo_formateado.split('_');
        let letra_completo = '';

        letras.forEach(letra => {
            letra_completo += letra + ' ';
        });

        return letra_completo;
    }

    function getImageFromApi(url) {
        return '/apimuni/images/gastronomias/' + url;
    }

    if (!gastronomia) {
        return <EmptyGastronomia />
    }

    return <>
        <div className="py-5 mb-5 banner bg-container">
            <Container>
                <Row>
                    <Col md="7" className="align-self-center">
                        <h1 className="banner-title text-center text-md-left">
                            {gastronomia.titulo}
                        </h1>
                        <p className="banner-descripcion text-center text-md-left">
                            {gastronomia.descripcion}
                        </p>
                    </Col>
                    <Col md="5" className="align-self-center">
                        <img src={getImageFromApi(gastronomia.image)} className="img-fluid rounded-lg" alt="gastonomia y turismo" />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="py-3 mb-5 container border rounded" style={{ maxWidth: '700px' }}>
            <MDEditor.Markdown source={gastronomia.contenido} />
        </div>
    </>
}

function EmptyGastronomia() {
    return <div className="py-xl text-center">Vacio</div>
}
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

export default function Turismo() {
    const { titulo } = useParams();
    const [turismo, setTurismo] = useState(null);

    useEffect(() => {
        async function loadTurismo() {
            const { data: apiTurismo } = await Axios.get(`/apimuni/turismos/${getTitulo(titulo)}/titulo`);
            setTurismo(apiTurismo);
        }

        loadTurismo();
    }, [titulo]);

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
        return '/apimuni/images/turismos/' + url;
    }

    if (!turismo) {
        return <EmptyTurismo />
    }

    return <>
        <div className="py-5 mb-5 banner bg-container">
            <Container>
                <Row>
                    <Col md="7" className="align-self-center">
                        <h1 className="banner-title text-center text-md-left">
                            {turismo.titulo}
                        </h1>
                        <p className="banner-descripcion text-center text-md-left">
                            {turismo.descripcion}
                        </p>
                    </Col>
                    <Col md="5" className="align-self-center">
                        <img src={getImageFromApi(turismo.image)}
                            className="img-fluid rounded-lg"
                            alt="gastonomia y turismo"
                        />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="py-3 mb-5 container border rounded" style={{ maxWidth: '700px' }}>
            Hola mundo
            <MDEditor.Markdown source={turismo.contenido} />
        </div>
    </>
}

function EmptyTurismo() {
    return <div className="py-xl text-center">Vacio</div>
}
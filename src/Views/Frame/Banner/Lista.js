import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Form, Modal, ModalBody, Row } from 'react-bootstrap';
import Cuadro, { CuadroLeft, CuadroRight } from '../components/Cuadro';

import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default function Lista() {
    const history = useHistory();
    const [banners, setBanners] = useState([]);
    const [banner, setBanner] = useState({
        titulo: 'Titulo de prueba'
    });
    const [loadingBanners, setLoadingBanners] = useState(true);
    const [modalNew, setModalNew] = useState(false);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        
        async function loadBanners() {
            try {
                setLoadingBanners(true);
                const { data: apiBanners } = await Axios.get('/apimuni/banners', { cancelToken: source.token});
                setBanners(apiBanners);
                setLoadingBanners(false);
            } catch (error) {
                if (Axios.isCancel) { return; }
                console.log(error);
                setLoadingBanners(false);
            }
        }
        loadBanners();

        return () => source.cancel();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data: apiBanner } = await Axios({
                method: 'POST',
                url: '/apimuni/banners',
                params: {
                    ...banner,
                    descripcion: '',
                    url: ''
                }
            });
            history.push(`/frame/banners/${apiBanner.id}`);
        } catch (error) {
            console.log(error);
        }
    }

    const toggleModalNew = () => setModalNew(!modalNew);
    const handleInputChange = (e) => setBanner({ ...banner, [e.target.name]: e.target.value });

    return <Cuadro>
        <CuadroLeft>
            <div className="clearfix mb-5">
                <Button
                    size="sm"
                    className="float-right"
                    onClick={toggleModalNew}>
                    <i className="fas fa-plus mr-2" />
                    Nuevo banner
                </Button>
                <h4>Banners</h4>
            </div>

            {loadingBanners ? <BannersLoading /> : (
                <>
                    {banners.map(banner => (
                        <Link
                            key={banner.id}
                            to={`/frame/banners/${banner.id}`}
                            className="text-decoration-none d-block banner-list_item py-3">
                            <Row>
                                <Col sm="4">
                                    {banner.image ? (
                                        <img
                                            src={`/apimuni/images/banners/${banner.image}`}
                                            className="w-100"
                                            alt="default"
                                        />
                                    ) : (
                                            <div className="d-flex align-items-center border rounded" style={{ height: '60px' }}>
                                                <span className="text-center">Sin imagen</span>
                                            </div>
                                        )}
                                </Col>
                                <Col sm="8">
                                    <h4>{banner.titulo}</h4>
                                    <p>{banner.url}</p>
                                </Col>
                            </Row>
                        </Link>
                    ))}
                </>
            )}
        </CuadroLeft>
        <CuadroRight>
            Vacio
        </CuadroRight>

        <Modal show={modalNew} onHide={toggleModalNew}>
            <ModalHeader closeButton>Nuevo banner</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <label>Titulo para el banner</label>
                        <Form.Control type="text" name="titulo" value={banner.titulo} onChange={handleInputChange} />
                    </Form.Group>
                    <div className="text-right">
                        <Button
                            className="mr-2"
                            variant="light"
                            onClick={toggleModalNew}>
                            Cancelar
                        </Button>
                        <Button type="submit">Nuevo banner</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    </Cuadro>
}

function BannersLoading() {
    const numbersOfItemLoading = new Array(8).fill(null);

    return <div>
        {numbersOfItemLoading.map((item, key) => (
            <div key={key} className="bg-container mb-3" style={{ height: '100px' }} />
        ))}
    </div>
}
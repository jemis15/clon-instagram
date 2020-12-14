import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Title from './components/Title';

import imageCarousel from '../../assets/images/default.jpg';
import MyPortal, { PortalContent, PortalHeader } from '../../components/MyPortal';
import Axios from 'axios';

export default function Modals() {
    const [pantalla, setPantalla] = useState(false);
    const [modals, setModals] = useState([]);

    const togglePantalla = () => setPantalla(!pantalla);

    useEffect(() => {
        async function loadModals() {
            try {
                const {data: apiModals} = await Axios.get('/apimuni/modals');
                setModals(apiModals);
            } catch (error) {
                console.log(error);
            }
        }

        loadModals();
    }, []);

    return <div>
        <Title>Carousel principal</Title>
        <Button className="mb-5" size="sm" onClick={togglePantalla}>Nuevo carousel</Button>

        <Table size="sm" bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Detalle</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Saludo para todo mazamari</td>
                    <td><img
                        width="50"
                        className="img-fluid"
                        src={imageCarousel}
                        alt="satiludo todo mazamari"
                    /></td>
                    <td>
                        <Button className="mr-2" size="sm"><i className="far fa-pen" /></Button>
                        <Button className="mr-2" variant="danger" size="sm"><i className="far fa-trash" /></Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Saludo para todo mazamari</td>
                    <td><img
                        width="50"
                        className="img-fluid"
                        src={imageCarousel}
                        alt="satiludo todo mazamari"
                    /></td>
                    <td>
                        <Button className="mr-2" size="sm"><i className="far fa-pen" /></Button>
                        <Button className="mr-2" variant="danger" size="sm"><i className="far fa-trash" /></Button>
                    </td>
                </tr>
            </tbody>
        </Table>

        <MyPortal show={pantalla}>
            <PortalContent>
                <PortalHeader onHide={togglePantalla} />
            </PortalContent>
        </MyPortal>

    </div>
}
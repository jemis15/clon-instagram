import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Restaurantes() {
    return <div className="container my-5 border contentRes border" style={{ width: '700px' }}>
        <div className="imgRestaurante mx-n3 ">
            <img src="https://image.freepik.com/free-vector/vietnamese-new-year-concept-tet-viet-mean-lunar-new-year-vietnam_40345-1014.jpg" alt="restaurante" />
        </div>
        <div className="Titulo_Restaurante  mx-n3 ">
            <p>Restaurante y Recepciones</p>
            <b style={{ fontSize: '40pt' }}>La Orilla</b>
        </div>
        <Row style={{ backgroundColor: 'rgba(204, 206, 122, 0.795)', backgroundImage: `url(https://image.freepik.com/free-photo/trendy-house-interior-with-modern-furniture-glass-windows_181624-26452.jpg)` }}>
            <Col>
                <div className="Descrip_rest p-3 my-3">
                    <p><b className="mb-2"> Platos Tipicos</b></p>
                    <ul className="pl-5 ">
                        <li className="mb-1">Ceviche Mixta</li>
                        <li className="mb-1">Chicharrón de Doncella</li>
                        <li className="mb-1">Doncella frita</li>
                        <li className="mb-1">Chaufa la cecina</li>
                        <li className="mb-1">Sudado mixto a la cabaña</li>
                    </ul>
                    <p><b className="mb-2"> Bebidas</b></p>
                    <ul className="pl-5 ">
                        <li className="mb-1">Cafe nativa</li>
                        <li className="mb-1">vinos</li>
                        <li className="mb-1">tragos exoticos</li>
                        <li className="mb-1">cappuchino</li>
                        <li className="mb-1">Cafè clasico</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className="Imagenes_Restaurante mt-3">
                    <img src="https://image.freepik.com/free-vector/vietnamese-new-year-concept-tet-viet-mean-lunar-new-year-vietnam_40345-1014.jpg" alt="restaurante" className="img_plato1" />
                </div>
                <img src="https://image.freepik.com/free-vector/vietnamese-new-year-concept-tet-viet-mean-lunar-new-year-vietnam_40345-1014.jpg" alt="restaurante" className="img_plato" />
                <img src="https://image.freepik.com/free-vector/vietnamese-new-year-concept-tet-viet-mean-lunar-new-year-vietnam_40345-1014.jpg" alt="restaurante" className="img_plato" />
            </Col>
        </Row>
        <div className="Informes_Restaurantes mx-n3">
            <label><i class="fas fa-map-marked-alt pr-2"></i>Av. Republica Suiza Nª 365 </label>
            <label> <i class="fab fa-facebook pl-2 pr-2"></i>Recreo la Orilla</label>
            <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>Reservas: 963245871</label>
        </div>
    </div>
}
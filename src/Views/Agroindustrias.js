import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import img_logoAgro from '../assets/images/web/cafe.png';
import img_Agro from '../assets/images/web/catarata.jpg';
import img_fondoAgro from '../assets/images/web/paisajeCafe.jpg';
import img_Bolsa from '../assets/images/web/BolsaCafe.png';

export default function Agroindustrias(){
    return <div className="container border my-5 " style={{width:'700px'}}>
         <div className="mx-n3 qwer mb-n3" style={{background:' linear-gradient(180deg,  rgba(48, 4, 4, 0.87), white)', padding:'30px'}}></div>
        <Row>
            <Col>
                <div className="DescripcionAgro">
                    <div className="logoEmpresa" style={{position:'relative', top:'-25px'}}>
                        <img src={img_logoAgro } className="imgLogoAgro" alt="Agroindustrias" />
                    </div>
                    <p>
                    La planta o árbol del café llega a medir entre 4 y 6 metros de altura, aunque mayormente la 
                    cortan para que los granos no se produzcan a tanta altura. Por su parte el grano del café mide aproximadamente 1 centímetro.
                    Dichos granos se utilizan para la preparación de la infusión al ser tostados y mezclados 
                    con agua caliente para la elaboración del café.
                    La acidez dependerá de la planta de cafeto así también como de la zona donde se coseche el café. 
                    Los cafés de plantas de América Latina son, generalmente, más ácidos que de otras partes del mundo 
                    por ser suelos volcánicos, ricos en minerales.
                    </p>
                    <Table bordered hover>
                        <tbody>
                            <tr>
                            <td colSpan="2">MARCA: Gial coffe</td>
                            </tr>
                            <tr>
                            <td colSpan="2">DESCRIPCION DEL PRODUCTO</td>
                            </tr>
                            <tr>
                            <td colSpan="2">Cafe tostado molido de diversas variedades ...</td>
                            </tr>
                            <tr>
                            <td>Materia prima</td>
                            <td>Café Especial</td>
                            </tr>
                            <tr>
                            <td>Insumos</td>
                            <td>Café</td>
                            </tr>
                            <tr>
                            <td>Insumos</td>
                            <td>Café</td>
                            </tr>
                            <tr>
                            <td>Insumos</td>
                            <td>Café</td>
                            </tr>
                            <tr>
                            <td>Insumos</td>
                            <td>Café</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
            </Col>
            <Col>
                <div className="Circulo mt-5 cir1">
                <img src={img_Agro } alt="Agroindustrias" />
                </div>
                <div className="Circulo ">
                <img src={img_Agro } alt="Agroindustrias" />
                </div>
                <div className="Circulo3">
                <img src={img_Agro } alt="Agroindustrias" />
                </div>
                <div className="Bolsa">
                <img src={img_Bolsa } alt="Agroindustrias" />
                </div>
            </Col>
        </Row>
        <div className="mx-n3 qwer mb-n3" style={{background:' linear-gradient(0,  rgba(48, 4, 4, 0.87), white)'}}>
            <div className="pl-5 mt-4">
                <ul className="list-unstyled text-smaller pb-3 pt-3">
                    <li><i class="fas fa-home pr-2"></i>Asociacion agroindustrial alto9 florida de lurinchincha</li>
                    <li><i class="fas fa-map-marker-alt pr-2"></i>Av. Botto Bernales N°1626 - Mazamari</li>
                    <li><i class="fas fa-mobile-alt pr-2"></i>963547812</li>
                    <li><i class="fas fa-envelope pr-2"></i>granodeoro@gmail.com</li>
                    <li ><i class="fab fa-facebook pr-2 "></i> Grano de oro</li>
                </ul>
            </div>
        </div>
    </div>
}
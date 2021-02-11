import React, {useState} from 'react';
import {Col, Row, Table} from 'react-bootstrap';

export default function InformacionAgro () {
  const [mazamari, setmazamari] = useState ({
    nombre: 'fasdfasdfadfasd',
    descripcion: 'La planta o árbol del café llega a medir entre 4 y 6 metros de altura, aunque mayormente la para que los granos no se produzcan a tanta altura. Por su parte el grano del café mide aproximadamente 1 centímetro  Dichos granos se utilizan para la preparación de la infusión al ser tostados y mezclados con agua caliente para la elaboración del café.La acidez dependerá de la planta de cafeto así también como de la zona donde se coseche el café.os cafés de plantas de América Latina son, generalmente, más ácidos que de otras partes del mundo',
    direccion: 'av. pangoa N° 455',
    telefono: '932168579',
    email: 'AGROI@gmail.com',
    redSocial: 'granos de oro',
    image: 'https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg'
  });
  const [platos_Resta, setplatos_Resta] =useState({
    lugares: 'Restaurantes ',
  });
  return (
    <div className="container py-5 " style={{width: '500px'}}>
      <Row>
        <Col
          sm="12"
          md="12"
          lg="4"
          style={{backgroundColor: 'var(--green-200)'}}
        >
          <div className="d-md-flex flex-lg-column" >
            <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <img
                src={mazamari.image}
                alt="Agroindustrias"
                style={{width: '100%'}}
              />
            </div>
            <div>
              <h2 className="text-center">{mazamari.nombre}</h2>
              <ul className="list-unstyled  pb-3 pt-3">
                <li className=" mb-3 d-flex">
                  <i class="fas fa-map-marker-alt pr-2 " /><a className="pl-3">
                  {mazamari.direccion}
                  </a>
                </li>
                <li className=" mb-3 d-flex">
                  <i class="fas fa-mobile-alt pr-2 " />
                    <a className="pl-3">
                    {mazamari.telefono}
                  </a>
                </li>
                <li className=" mb-3 d-flex">
                  <i class="fas fa-envelope pr-2 " /><a className="pl-3">{mazamari.email} </a>
                </li>
                <li className=" mb-3 d-flex">
                  <i class="fab fa-facebook pr-2 " /> <a className="pl-3">{mazamari.redSocial}</a>
                </li>
              </ul>
            </div>

                  <h3 className="lugar">{platos_Resta.lugares} </h3>
            <div className="cajaList">
              {lista.map(listaPlatRest =>(
                <ul key={listaPlatRest.id} className="pl-5"> 
                  <li className="align-self-center" >
                      <a href="#">{listaPlatRest.listaPlato} </a>
                      </li>
                </ul>
              ))}
            </div>

          </div>

        </Col>
        <Col sm="12" md="12" lg="8" className="border ">
          <div className="DescripcionAgro mt-3 mb-3">
            <p>{mazamari.descripcion} </p>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td colSpan="2">MARCA: Gial coffe</td>
                </tr>
                <tr>
                  <td colSpan="2">DESCRIPCION DEL PRODUCTO</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    Cafe tostado molido de diversas variedades ...
                  </td>
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
            <div
              className="photos">
              {images.map (imagen => (
                <div key={imagen.id} className="shadow-lg mb-2"  >
                  <img src={imagen.image} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const images = [
    {id: 1, image: 'https://image.freepik.com/free-vector/city-skyline-landmarks-illustration_23-2148810172.jpg'},
    {id: 1, image: 'https://image.freepik.com/free-psd/telegram-icons-around-smartphone-app-mockup-3d_1379-5099.jpg'},
    {id: 1, image: 'https://image.freepik.com/free-psd/close-up-hand-holding-phone_23-2148792186.jpg'},
    {id: 1, image: 'https://image.freepik.com/free-vector/display-template-with-clapperboard-glasses_79603-1244.jpg'}
];

const lista =[
  {id: 1, listaPlato: 'La cabaña'},
  {id: 1, listaPlato: 'Delicias'},
  {id: 1, listaPlato: 'Leña Azul'},
  {id: 1, listaPlato: 'Rinconcito Huancaino'},
  {id: 1, listaPlato: 'La cabaña'},
  {id: 1, listaPlato: 'Delicias'},
  {id: 1, listaPlato: 'Leña Azul'},
  {id: 1, listaPlato: 'Los 3 desasd'}
  
];

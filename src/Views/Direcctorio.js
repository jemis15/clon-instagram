import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import img_defensaCivil from '../assets/images/web/defensaCivil.png';
import img_demuna from '../assets/images/web/demuna.png';
import img_policia from '../assets/images/web/logoPolicia.jpg';
import img_serenazgo from '../assets/images/web/LogoSerenazgo.jfif';
import img_bombero from '../assets/images/web/LogoBombero.png';
import img_ambulancia from '../assets/images/web/cruzRoja.png';
import img_muni from '../assets/images/web/mazamari.png';
import img_codisec from '../assets/images/web/codisec.png';
import img_salud from '../assets/images/web/salud.png';

export default function Direcctorio() {
  const [telefonos, setTelefonos] = useState(numbers);

  function handleInputSearchChange(e) {
    setTelefonos(numbers.filter(telefono => {
      const nombre = telefono.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const index = nombre.toLowerCase().indexOf(e.target.value);
      return index !== -1;
    }));
  }

  return <>
    <Content className="my-5">
      <h2 className="pb-3 mb-5 text-center border-bottom border-3 border-primary">DIRECTORIO DE TEL&Eacute;FONOS DE LA MUNICIPALIDAD</h2>
      <Row className="mt-3 border-bottom my-3 ">
        <Col>
          <div className="mb-3">
            <label className="form-label">Anexo</label>
            <Form.Control type="text" placeholder="Ingresar Anexo" onChange={handleInputSearchChange} />
          </div>
        </Col>
        <Col xs='auto' className="ms-auto text-center">
          <h4>Telefono Central</h4>
          <p>(064) 548187</p>
        </Col>
      </Row>
      <Row>
        {/* Telefonos del 21 al 32 */}
        <Col sm='6'>
          <div className="CajaSec" >
            <ul className="list-unstyled mt-3">
              {telefonos.map((number, key) => {
                if (key > 11) {
                  return null;
                }
                return <TelefonoItem key={key} nombre={number.nombre} numero={number.numero} />
              })}
            </ul>
          </div>
        </Col>
        {/* Telefonos del 33 al 44 */}
        <Col sm='6'>
          <div className="CajaSec" >
            <ul className="list-unstyled mt-3">
              {telefonos.map((number, key) => {
                if (key < 12) {
                  return null;
                }
                return <TelefonoItem key={key} nombre={number.nombre} numero={number.numero} />
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </Content>

    <Content className="mb-5">
      <h2 className="pb-3 mb-5 text-center border-bottom border-primary border-3">DIRECT&Oacute;RIO DE TELEFONOS</h2>
      <Row>
        <Col lg="6" className="mt-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32152.931400173315!2d-74.55051917219659!3d-11.324202354620748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910b95bae025fe01%3A0x24f5accad5bc7182!2sMazamari!5e1!3m2!1ses-419!2spe!4v1607106819285!5m2!1ses-419!2spe"
            width="100%"
            height="600px"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Col>
        <Col lg="6">
          <div className="align-self-center mb-4" align="center">
            <h3 style={{ color: 'var(--red-800)' }}>N&Uacute;MEROS DE CONTACTO</h3>
          </div>

          <div className="telefonos" style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gridGap: '1rem'
          }}>
            <Telefono image={img_policia} nombre="Policías" numero="-----" />
            <Telefono image={img_serenazgo} nombre="Serenazgos" numero="948324242" />
            <Telefono image={img_bombero} nombre="Bomberos" numero="-----" />
            <Telefono image={img_ambulancia} nombre="Ambulancias" numero="-----" />
            <Telefono image={img_defensaCivil} nombre="Defensa Civil" numero="964324242" />
            <Telefono image={img_demuna} nombre="Demuna" numero="-----" />
            <Telefono image={img_muni} nombre="Municipalidad" numero="(064) 548187" />
            <Telefono image={img_codisec} nombre="Codisec" numero="-----" />
            <Telefono image={img_salud} nombre="Red de salud" numero="-----" />
          </div>
        </Col>
      </Row>
    </Content>
  </>
}

const TelefonoItem = (props) => (
  <li className="mb-2 clearfix">
    <div className="float-start">{props.nombre}</div>
    <div className="float-end">{props.numero}</div>
  </li>
);

const Telefono = (props) => (
  <div className="border p-2 rounded shadow-sm">
    <div className="mb-2 mx-auto ratio ratio-1x1 w-50">
      <div className="d-flex justify-conent-center align-items-center">
        <img
          src={props.image}
          className="img-fluid"
          alt="mazamari icono seguridad"
          loading="lazy"
        />
      </div>
    </div>
    <div className="text-center">{props.nombre}</div>
    <div className="text-center fw-bold fs-5">{props.numero}</div>
  </div>
);

const Content = (props) => (
  <div className={`${props.className} p-3 p-sm-5 container shadow-sm rounded bg-white`} style={{border: '1px solid var(--grey-300)'}}>{props.children}</div>
);

const numbers = [
  { nombre: 'Secretaria General / Operadora', numero: '#21' },
  { nombre: 'Serv. Educativos e Inclusion Social', numero: '#22' },
  { nombre: 'Ger. de Des Social y Gestión Comunitaria Participativa', numero: '#23' },
  { nombre: 'Sb-Ger. Administración Tributaria (Rentas)', numero: '#24' },
  { nombre: 'Mesa de Partes', numero: '#25' },
  { nombre: 'Oficina de Registro Civil', numero: '#26' },
  { nombre: 'Sub-Gerencia Servicios Públicos', numero: '#27' },
  { nombre: 'Gerencia de Desarrollo de Domunidades Indígenas', numero: '#28' },
  { nombre: 'Unidad de Almacén', numero: '#29' },
  { nombre: 'Alcaldía', numero: '#30' },
  { nombre: 'Secretaria Gerencia Municipal y Gerencia Municipal', numero: '#31' },
  { nombre: 'Serenazgo y Procuratoria', numero: '#32' },
  { nombre: 'Sub Gerencia Maquinarias', numero: '#33' },
  { nombre: 'Sb-Ger. Presupuesto y Coperación Técnica', numero: '#34' },
  { nombre: 'Sub Ger. Desarrollo Urbano y Rural / Obras', numero: '#35' },
  { nombre: 'Unidad de Arquitectura y Catastro', numero: '#36' },
  { nombre: 'Unidad de Logística y Adquisiciones', numero: '#37' },
  { nombre: 'Contabilidad', numero: '#38' },
  { nombre: 'Gerencia de Gestión Ambiental y Servicios Públicos', numero: '#39' },
  { nombre: 'Unidad de Informática', numero: '#40' },
  { nombre: 'Unidad RR.HH / Archivo / Administración', numero: '#41' },
  { nombre: 'Imagen Institucional', numero: '#42' },
  { nombre: 'Desarrollo economico Productivo', numero: '#43' },
  { nombre: 'Tesoreria', numero: '#44' },
];
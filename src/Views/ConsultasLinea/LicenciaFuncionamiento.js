import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form, Nav, Row, Tab } from 'react-bootstrap';
import Informacion from './components/Accordion';

export default function LicenciaFuncionamiento() {
  return <>
    <h3>Licencia de Funcionamiento</h3>
    <Tab.Container defaultActiveKey="#ConsultaRegistro">
      <Card className="mt-3">
        <Card.Header>
          <Nav className="d-flex" variant="tabs">
            <Nav.Item>
              <Nav.Link href="#ConsultaRegistro">Consulta</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Informacion_Registro">Informaci&oacute;n</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Tab.Content className="px-4 my-4">
          <Tab.Pane eventKey="#ConsultaRegistro">
            <FormConsultaLicencia />
          </Tab.Pane>
          <Tab.Pane eventKey="#Informacion_Registro">
            <Informacion grupo="LICENCIA DE FUNCIONAMIENTO" />
          </Tab.Pane>
        </Tab.Content>
      </Card>
    </Tab.Container>
  </>
}

const FormConsultaLicencia = () => {
  const [consulta, setConsulta] = useState({
    year: new Date().getFullYear(),
    numberLicencia: ''
  });
  const [licencia, setLicencia] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setConsulta({ ...consulta, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (sending) {
      return;
    }

    try {
      setSending(true);
      const { data: apiLicencia } = await Axios.get(`/apimuni/licenciasfuncionamiento/consulta?year=${consulta.year}&number=${consulta.numberLicencia}`);
      if (apiLicencia) {
        setLicencia(apiLicencia);
        setError(null);
      } else {
        setLicencia(null);
        setError('No encontramos la licencia.');
      }
      setSending(false);
    } catch (error) {
      setError('Lo sentimos se a producido un error desconocido.')
      setLicencia(null);
      setSending(false);
    }
  }

  return <div>
    <div className="p-4 rounded-3 border">
      <Form className="pl-2 pt-4" onSubmit={handleSubmit}>
        <Row>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Fecha de Licencia:</label>
              <select className="form-select" name="year" onChange={handleInputChange} value={consulta.year}>
                {getYears().map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">N° Licencia:</label>
              <input
                className="form-control"
                type="text"
                name="numberLicencia"
                onChange={handleInputChange}
                value={consulta.numberLicencia}
                placeholder="N° Licencia"
              />
            </div>
          </div>
        </Row>
        <div className="text-center">
          <Button variant="primary" type="submit">{sending ? 'Buscando...' : <>Buscar licencia <i className="fas fa-search ms-2" /></>}</Button>
        </div>
      </Form>
    </div>

    {error && (
      <div className="alert alert-danger mt-3" role="alert">
        {error}
      </div>
    )}

    {licencia && (
      <div className="p-4 mt-4 rounded-3 border">
        <h3 className="text-center">Informaci&oacute;n de Licencia</h3>
        <ul className="list-unstyled mt-3">
          <li className="border-bottom clearfix py-3">
            <div className="float-start">A&ntilde;o y N° Licencia Funcionamiento</div>
            <div className="float-end fw-bold">{licencia.year} {licencia.numero_licencia}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Contribuyente</div>
            <div className="float-end fw-bold">{licencia.contribuyente}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Domicilio</div>
            <div className="float-end fw-bold">{licencia.domicilio_fiscal}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">N° Expediente</div>
            <div className="float-end fw-bold">{licencia.numero_expediente}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Raz&oacute;n social</div>
            <div className="float-end fw-bold">{licencia.razon_social}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">C&oacute;digo Catastral</div>
            <div className="float-end fw-bold">{licencia.codigo_catrastal}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">DNI</div>
            <div className="float-end fw-bold">{licencia.dni}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">RUC</div>
            <div className="float-end fw-bold">{licencia.ruc}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Estado</div>
            <div className="float-end fw-bold">
              {licencia.estado == 1
                ? <span className="text-success">Vigente</span>
                : <span className="text-danger">Caducado</span>}
            </div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">ID Licencia Funcionamiento</div>
            <div className="float-end fw-bold">{licencia.codigo}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Fecha Registro</div>
            <div className="float-end fw-bold">{licencia.created_at}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">&Aacute;rea</div>
            <div className="float-end fw-bold">{licencia.area}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Horario Atenci&oacute;n</div>
            <div className="float-end fw-bold">{licencia.horario_atencion}</div>
          </li>
          <li className="border-bottom clearfix py-3">
            <div className="float-start">Fecha Expedici&oacute;n</div>
            <div className="float-end fw-bold">{licencia.fecha_expedicion}</div>
          </li>
          <li className="clearfix py-3">
            <div className="float-start">Fecha Caducidad</div>
            <div className="float-end fw-bold">{licencia.fecha_caducidad}</div>
          </li>
        </ul>
      </div>
    )}
  </div>
}

function getYears() {
  const years = [];
  let currentYear = new Date().getFullYear();
  const yearInit = 2017;

  do {
    years.push(currentYear);
    currentYear--;
  } while (currentYear >= yearInit);

  return years;
}
import React, { useState } from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import EmpTransportePublico from './EmpTransportePublico';
import PadronEmpresa from './PadronEmpresa';
import Papeletas from './Papeletas';
import ConsultaVehicular from './ConsultaVehicular';
import Informacion from './components/Accordion';

export default function TransportePublico() {
  const [consulta, setConsulta] = useState('Transporte_Publico');

  return <>
    <Tab.Container defaultActiveKey="#ConsultaRegistro">
      <h3>Transaporte P&uacute;blico</h3>
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
          {/* Consulta */}
          <Tab.Pane eventKey="#ConsultaRegistro">
            <div className="tansporte-publico-consulta">
              <div>
                <div>
                  <ul className="list-unstyled">
                    <li>
                      <button type="button" className={`${consulta === 'Transporte_Publico' && 'active'} w-100 text-start rounded-3 outline-none menu-link`}
                        onClick={() => setConsulta("Transporte_Publico")}>
                        {'Empresa de Transporte Público'}
                      </button>
                    </li>
                    <li>
                      <button type="button" className={`${consulta === 'padron_por_empresas' && 'active'} w-100 text-start rounded-3 outline-none menu-link`}
                        onClick={() => setConsulta("padron_por_empresas")}>
                        {'Padron por Empresas'}
                      </button>
                    </li>
                    <li>
                      <button type="button" className={`${consulta === 'papeleta' && 'active'} w-100 text-start rounded-3 outline-none menu-link`}
                        onClick={() => setConsulta("papeleta")}>
                        {'Papeletas'}
                      </button>
                    </li>
                    <li>
                      <button type="button" className={`${consulta === 'Consulta_Vehicular' && 'active'} w-100 text-start rounded-3 outline-none menu-link`}
                        onClick={() => setConsulta("Consulta_Vehicular")}>
                        {'Consulta Vehicular'}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-sm-4 flex-fill">
                {consulta === 'Transporte_Publico' && <>
                  <EmpTransportePublico />
                </>}
                {consulta === 'padron_por_empresas' && (
                  <PadronEmpresa />
                )}
                {consulta === 'papeleta' && (
                  <Papeletas />
                )}
                {consulta === 'Consulta_Vehicular' && (
                  <ConsultaVehicular />
                )}
              </div>
            </div>
          </Tab.Pane>

          {/* Informacion */}
          <Tab.Pane eventKey="#Informacion_Registro">
            <Informacion grupo="REGISTRO CIVIL" />
          </Tab.Pane>
        </Tab.Content>
      </Card>
    </Tab.Container>
  </>
}
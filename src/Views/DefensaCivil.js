import React from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';

export default function DefensaCivil() {
  return <div className="container shadow my-5" style={{ border: '1px solid #008000' }}>
    <div className="cabecera p-3 mb-5 d-flex flex-nowrap mx-n3" style
      ={{ borderBottom: '4px solid #F8DE5E', background: '#008000' }}>
      <h4 style={{ color: 'white' }} >Defensa Civil</h4>
    </div>
    <Tab.Container defaultActiveKey="#Requisitos">
      <Card className="mt-3">
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link action href="#Requisitos">Requisitos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link action href="#Consultas">consulta </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link action href="#Verificación">verificación </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Tab.Content className="px-4 my-4">
          <Tab.Pane eventKey="#Requisitos">
            <h1 className="text-center">Instrucciones</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.</p>
            <div className="doc">
              <div className="row">
                <div className="col-sm-6 col-center">
                  <div className="card border">
                    <div>
                      <embed src="file:///C:/Users/usuario/Downloads/77-documento0.pdf" type="application/pdf" width="100%" height="500px" />
                    </div><br />
                    <div className="card-body  ">
                      <button type="button" className="btn btn-success btn-lg btn-block ">Descargar Fut</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border">
                    <div>
                      <embed src="file:///C:/Users/usuario/Downloads/77-documento0.pdf" type="application/pdf" width="100%" height="500px" />
                    </div><br />
                    <div className="card-body  ">
                      <button type="button" className="btn btn-success btn-lg btn-block ">Descargar Solicitud</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#Consultas">
            <div className="row">
              <div className="col-md-2"><input type="text" placeholder="Solicitud ITDC N°" className="form-control" /></div>
              <div className="col-md-2"><select className="form-control form-control-sm">
                <option>RUC</option>
                <option >DNI</option>
              </select></div>
              <div className="col-md-2"><input type="text" placeholder="RUC o DNI" className="form-control" /></div>
              <div className="col-md-3"><input type="text" placeholder="Nombres y Apellidos" className="form-control" /></div>
              <div className="col-md-3"><input type="text" placeholder="Razón social" className="form-control" /></div>
            </div>
            <br />
            <button type="button" className="btn btn-info mb-3">BUSCAR</button>
            <div className="ibox-content">
              <table className="table table-bordered table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>ITDC N°</th>
                    <th>RUC</th>
                    <th>DNI</th>
                    <th>NOMBRES Y APELLIDOS</th>
                    <th>RAZÓN SOCIAL</th>
                    <th>ÁREA</th>
                    <th>FECHA</th>
                    <th>PLAZO</th>
                    <th>OBSERVACIONES</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#Verificación">
            <div className="shadow p-3">
              <div className="row mb-3">
                <div className="col-sm-2">
                  <label >N° Certificado: </label>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" placeholder="N° Certificado" />
                </div>
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary mb-2">Buscar</button>
                </div>
              </div>
              <p>Resultados de la Búsqueda:</p>
              <div className="border p-3">
                <div className="row ">
                  <div className="col-sm-4">
                    <label >Razón Social</label>
                    <input type="text" className="form-control" placeholder="Razón Social" readOnly />
                  </div>
                  <div className="col-sm-4">
                    <label >Ubicación</label>
                    <input type="text" className="form-control" placeholder="Ubicación" readOnly />
                  </div>
                  <div className="col-sm-4">
                    <label >Solicitante</label>
                    <input type="text" className="form-control" placeholder="Solicitante" readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label >Fecha de Expedición</label>
                    <input type="date" className="form-control" placeholder="Fecha de Expedición" readOnly />
                  </div>
                  <div className="col-sm-6">
                    <label >Fecha de Renovación</label>
                    <input type="date" className="form-control" placeholder="Fecha de Renovación" readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label >Exp. Administrativo</label>
                    <input type="text" className="form-control" placeholder="Exp. Administrativo" readOnly />
                  </div>
                  <div className="col-sm-4">
                    <label >Informe</label>
                    <input type="text" className="form-control" placeholder="Informe" readOnly />
                  </div>
                  <div className="col-sm-4">
                    <label >Área</label>
                    <input type="text" className="form-control" placeholder="Área" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Card>
    </Tab.Container>
  </div>
}
import React from 'react';
import { Button, Card, Col, Form, InputGroup, Nav, Row, Tab, Table } from 'react-bootstrap';

export default function AgregarTransporte(){
    const styleScroll = {
        width: '100%', 
        height: 'auto', 
        overflow: 'scroll' ,
        overflowY:'hidden',
        whiteSpace: 'nowrap'
    }
    return <div className="container my-5">
      <Form className="shadow p-5">
      <div className="mb-5 " style={{borderBottom:'6px solid #EDD016', color:'#008000'}}>
            <p className="mb-0">FORMULARIO PARA</p>
            <h3 style={{color:'#008000'}}> Registro De Transportes</h3>
        </div>
        <Tab.Container  defaultActiveKey="#form">
            <Card className="mt-3">
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link action href="#form">Usuario</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form1">Empresa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form2">Propietario</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form3">Conductor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form4">Soat</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form5">Vehículos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#form6">Papeletas</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                  <Tab.Pane eventKey="#form">
                  <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i> 
                        DATOS DEL USUARIO
                        </p>
                        <Form.Row>
                            <Col>
                              <Form.Group >
                                <Form.Label>DNI</Form.Label>
                                <Form.Control type="text" placeholder="DNI"  />
                              </Form.Group>
                            </Col>
                          <Col >
                            <Form.Group >
                              <Form.Label>Nombre y Apellido</Form.Label>
                              <Form.Control type="text" placeholder="Nombre y Apellido"  />
                            </Form.Group>
                          </Col>
                            <Col>
                              <Form.Group >
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="Dirección"  />
                              </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                        <Col>
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control as="select" defaultValue="Junín">
                          <option>Junín</option>
                          <option>...</option>
                        </Form.Control>
                        </Col>
                        <Col>
                      <Form.Group >
                      <Form.Label>Provincia</Form.Label>
                        <Form.Control as="select" defaultValue="Satipo">
                          <option>Satipo</option>
                          <option>...</option>
                        </Form.Control>
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Distrito </Form.Label>
                          <Form.Control as="select" defaultValue="Mazamari">
                            <option>Mazamari</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                            <Col>
                              <Form.Group >
                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="text" placeholder="Celular"  />
                              </Form.Group>
                            </Col>
                          <Col sm="8" >
                            <Form.Group >
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email"  />
                            </Form.Group>
                          </Col>
                        </Form.Row>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form1">
                        <Form>
                        <div className="Datos border p-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-building pr-2"></i> 
                        DATOS DE LA EMPRESA
                        </p>
                        <Form.Row>
                            <Col>
                              <Form.Group >
                                <Form.Label>RUC</Form.Label>
                                <Form.Control type="text" placeholder="RUC"  />
                              </Form.Group>
                            </Col>
                          <Col sm="8">
                            <Form.Group >
                              <Form.Label>Nombre Empresa</Form.Label>
                              <Form.Control type="text" placeholder="Nombre Empresa"  />
                            </Form.Group>
                          </Col>
                          
                        </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Resolución MDM
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"   />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                            <Form.Label>N° Resolución</Form.Label>
                            <Form.Control type="text" placeholder="N° Resolución"   />
                          </Form.Group>
                        </Col>
                      <Col>
                      <Form.Group >
                        <Form.Label>Telefono de la empresa</Form.Label>
                        <Form.Control type="text" placeholder="Telefono de la empresa" Only />
                      </Form.Group>
                      </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email de la Empresa</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        </Col>
                      <Col >
                      <Form.Group >
                        <Form.Label>Dirección de la empresa</Form.Label>
                        <Form.Control type="text" placeholder="Dirección de la empresa"  />
                      </Form.Group>
                      </Col>
                          <Col >
                            <Form.Group >
                              <Form.Label>Nro Partida</Form.Label>
                              <Form.Control type="text" placeholder="Nro Partida"  />
                            </Form.Group>
                          </Col>
                      </Form.Row>
                      </div>
                        <div className="Datos border p-3 mt-3 mb-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i> 
                        DATOS DEL REPRESENTANTE
                        </p>
                      
                      <Form.Row>
                        <Col >
                        <Form.Group >
                            <Form.Label>DNI</Form.Label>
                            <Form.Control type="text" placeholder="DNI"  />
                        </Form.Group>
                        </Col>
                        <Col sm="8">
                        <Form.Group >
                            <Form.Label>Representante</Form.Label>
                            <Form.Control type="text" placeholder="Representante"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Dirección del Representante</Form.Label>
                        <Form.Control type="text" placeholder="Dirección del Representante" Only />
                      </Form.Group>
                        </Col>
                      <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email del Representante</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Telefono del Representante </Form.Label>
                          <Form.Control type="text" placeholder="N° Telefono"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>N° Partida</th>
                                <th>Nombre Empresa</th>
                                <th>Representante</th>
                                <th>Dirección Empresa</th>
                                <th>Teléfono Empresa</th>
                                <th>Fecha Resolución</th>
                                <th>N° Resolución</th>
                                <th>Email Empresa</th>
                                <th>RUC</th>
                                <th>Dirección Representante</th>
                                <th>Email Representante</th>
                                <th>Teléfono Representante</th>
                                <th>Acciones</th>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="text-center">
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form2">
                    <Form>
                        <div className="Datos border p-3 mt-3 mb-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i> 
                        DATOS DEL PROPIETARIO
                        </p>
                        
                      <Form.Row>
                        <Col  >
                        <Form.Group >
                            <Form.Label>DNI</Form.Label>
                            <Form.Control type="text" placeholder="DNI"  />
                        </Form.Group>
                        </Col>
                        <Col  sm="8">
                        <Form.Group >
                            <Form.Label>Nombres y Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Nombres y Apellidos"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Dirección </Form.Label>
                        <Form.Control type="text" placeholder="Dirección " Only />
                      </Form.Group>
                        </Col>
                      <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Teléfono </Form.Label>
                          <Form.Control type="text" placeholder="N° Teléfono"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control as="select" defaultValue="Junín">
                          <option>Junín</option>
                          <option>...</option>
                        </Form.Control>
                        </Col>
                        <Col>
                      <Form.Group >
                      <Form.Label>Provincia</Form.Label>
                        <Form.Control as="select" defaultValue="Satipo">
                          <option>Satipo</option>
                          <option>...</option>
                        </Form.Control>
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Distrito </Form.Label>
                          <Form.Control as="select" defaultValue="Mazamari">
                            <option>Mazamari</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>N° DNI</th>
                                <th>Nombres y Apellidos</th>
                                <th>Dirección </th>
                                <th>Teléfono </th>
                                <th>Email </th>
                                <th>Departamento</th>
                                <th>Provincia</th>
                                <th>Distrito</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>12365478</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                                <tr>
                                <td>12365478</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form3">
                    <Form>
                        <div className="Datos border p-3 mt-3 mb-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i> 
                        DATOS DEL CONDUCTOR
                        </p>
                        
                      <Form.Row>
                        <Col  >
                        <Form.Group >
                            <Form.Label>DNI</Form.Label>
                            <Form.Control type="text" placeholder="DNI"  />
                        </Form.Group>
                        </Col>
                        <Col sm="8">
                        <Form.Group >
                            <Form.Label>Nombres y Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Nombres y Apellidos"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Dirección </Form.Label>
                        <Form.Control type="text" placeholder="Dirección " />
                      </Form.Group>
                        </Col>
                      <Col sm="8">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>N° Licencia </Form.Label>
                        <Form.Control type="text" placeholder="N° Licencia " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Lugar de Licencia </Form.Label>
                        <Form.Control type="text" placeholder="Lugar de Licencia " />
                      </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Emisión Lic.
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"   />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Caducidad Lic.
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"   />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Clase </Form.Label>
                        <Form.Control type="text" placeholder="Clase "  />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Categoría </Form.Label>
                        <Form.Control type="text" placeholder="Categoría "  />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                      <Col>
                        <Form.Group >
                          <Form.Label>Teléfono </Form.Label>
                          <Form.Control type="text" placeholder="N° Teléfono"  />
                        </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Libro </Form.Label>
                        <Form.Control type="text" placeholder="Libro "  />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Folio </Form.Label>
                        <Form.Control type="text" placeholder="Folio "  />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>N° DNI</th>
                                <th>Nombres y Apellidos</th>
                                <th>Dirección </th>
                                <th>Teléfono </th>
                                <th>Email </th>
                                <th>N° Licencia</th>
                                <th>Lugar de Lic.</th>
                                <th>Fecha Emisión Lic.</th>
                                <th>Fecha Caducidad Lic.</th>
                                <th>Clase</th>
                                <th>Categoría</th>
                                <th>Libro</th>
                                <th>Folio</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>12365478</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form4">
                    <Form>
                        <div className="Datos border p-3 mt-3 mb-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-address-card pr-3"></i>
                        SOAT
                        </p>
                        
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>DNI </Form.Label>
                        <Form.Control type="text" placeholder="DNI " Only />
                      </Form.Group>
                        </Col>
                      <Col sm="8">
                      <Form.Group >
                        <Form.Label>Contratante </Form.Label>
                        <Form.Control type="text" placeholder="Contratante " Only />
                      </Form.Group>
                        </Col>
                        
                      </Form.Row>
                      <Form.Row>
                        <Col >
                        <Form.Group >
                            <Form.Label>N° Poliza</Form.Label>
                            <Form.Control type="text" placeholder="N° Poliza"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Teléfono </Form.Label>
                          <Form.Control type="text" placeholder="N° Teléfono"  />
                        </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>RUC </Form.Label>
                        <Form.Control type="text" placeholder="RUC " Only />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Dirección </Form.Label>
                        <Form.Control type="text" placeholder="Dirección " Only />
                      </Form.Group>
                        </Col>
                        
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Emisión 
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"   />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Vencimiento 
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"   />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>N° Poliza</th>
                                <th>Fecha Emisión</th>
                                <th>Fecha Vencimiento </th>
                                <th>Contratante </th>
                                <th>DNI </th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>RUC</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>12365478</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form5">
                        <Form>
                        <div className="DatosVehiculo border p-3">
                      <p className="font-weight-bold mb-3">
                        <i class="fas fa-car pr-2"/> 
                        DATOS DEL VEHÍCULO
                        </p>
                        <Form.Row>
                          <Col>
                            <Form.Group >
                              <Form.Label>Placa</Form.Label>
                              <Form.Control type="text" placeholder="N° placa" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group >
                              <Form.Label>Categoría</Form.Label>
                              <Form.Control type="text" placeholder="Categoría" />
                            </Form.Group>
                          </Col>
                          <Col>
                      <Form.Group >
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca"  />
                      </Form.Group>
                      </Col>
                          
                        </Form.Row>
                      <Form.Row>
                      <Col>
                            <Form.Group >
                              <Form.Label>Modelo</Form.Label>
                              <Form.Control type="text" placeholder="Modelo" />
                            </Form.Group>
                          </Col>
                          <Col >
                      <Form.Group >
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" placeholder="Color" />
                      </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group >
                        <Form.Label>Motor</Form.Label>
                        <Form.Control type="text" placeholder="Motor"  />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                      <Col>
                      <Form.Group >
                        <Form.Label>VIM</Form.Label>
                        <Form.Control type="text" placeholder="VIM"  />
                      </Form.Group>
                      </Col>
                        <Col>
                        <Form.Label>Serie / Chasis</Form.Label>
                        <Form.Control type="text" placeholder="Serie/chasis"  />
                        </Col>
                        <Col>
                        <Form.Label>Año Fabricación</Form.Label>
                        <Form.Control type="text" placeholder="Año Fabricación"  />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group >
                          <Form.Label>Año Modelo</Form.Label>
                          <Form.Control type="text" placeholder="Año Modelo" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Ejes</Form.Label>
                          <Form.Control type="text" placeholder="Ejes"/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Asientos</Form.Label>
                          <Form.Control type="text" placeholder="Asientos"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group >
                          <Form.Label>Ruedas</Form.Label>
                          <Form.Control type="text" placeholder="Ruedas" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Carrocería</Form.Label>
                          <Form.Control type="text" placeholder="Carrocería"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Zona Registral</Form.Label>
                          <Form.Control type="text" placeholder="Zona Registral" />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group >
                          <Form.Label>Oficina Registral</Form.Label>
                          <Form.Control type="text" placeholder="Oficina Registral" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>DUA - DAM</Form.Label>
                          <Form.Control type="text" placeholder="DUA - DAM"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Título</Form.Label>
                          <Form.Control type="text" placeholder="Título"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                      <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Título
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha de Título"  rea />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>DNI Propietario</Form.Label>
                          <Form.Control type="text" placeholder="DNI Propietario"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>DNI Conductor</Form.Label>
                          <Form.Control type="text" placeholder="DNI Conductor"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group >
                          <Form.Label>N° Poliza</Form.Label>
                          <Form.Control type="text" placeholder="N° Poliza"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>N° Flota</Form.Label>
                          <Form.Control type="text" placeholder="N° Flota"  />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>N° Partida</Form.Label>
                          <Form.Control type="text" placeholder="N° Partida"  />
                        </Form.Group>
                        </Col>
                      </Form.Row>

                      </div>
                        </Form>
                        <Button variant="primary"  size="lg" block className="mb-3 mt-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>N° Placa</th>
                                <th>Categoría</th>
                                <th> Marca</th>
                                <th>Modelo</th>
                                <th> Color</th>
                                <th>Motor</th>
                                <th>VIM</th>
                                <th>Serie/Chasis</th>
                                <th>Año Fabricación</th>
                                <th>Año Modelo</th>
                                <th>Ejes</th>
                                <th>Asientos</th>
                                <th>Ruedas</th>
                                <th>Carrocería</th>
                                <th>Zona Registral</th>
                                <th>DUA - DAM</th>
                                <th>Título</th>
                                <th>Fecha Título</th>
                                <th> DNI Propietario</th>
                                <th>DNI Conductor</th>
                                <th>N° Poliza</th>
                                <th> N° Flota</th>
                                <th>N° Partida</th>
                                <th>Acciones</th>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#form6">
                    <Form>
                        <div className="Datos border p-3 mt-3 mb-3">
                      <p className="font-weight-bold mb-3">
                      <i class="far fa-newspaper pr-3"></i>
                        PAPELETAS
                        </p>
                        
                      <Form.Row>
                        <Col >
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Transportista" />
                        </Form.Group>
                        </Col>
                        <Col >
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Concesionaria" />
                        </Form.Group>
                        </Col>
                        <Col >
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Conductor" />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>DNI</Form.Label>
                        <Form.Control type="text" placeholder="DNI" />
                      </Form.Group>
                        </Col>
                      <Col sm="8">
                      <Form.Group >
                        <Form.Label>Apellidos y Nombres </Form.Label>
                        <Form.Control type="text" placeholder="Apellidos y Nombres " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Razón Social </Form.Label>
                        <Form.Control type="text" placeholder="Razón Social " />
                      </Form.Group>
                        </Col>
                        <Col sm="8">
                      <Form.Group >
                        <Form.Label>Dirección </Form.Label>
                        <Form.Control type="text" placeholder="Dirección " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <div className="Datos_Vehiculo border p-3 mt-3">
                      <p className="font-weight-bold mb-3">
                        <i class="fas fa-car pr-2"/> 
                        DATOS DEL VEHÍCULO
                        </p>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>N° Placa</Form.Label>
                        <Form.Control type="text" placeholder="N° Placa" />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Marca </Form.Label>
                        <Form.Control type="text" placeholder="Marca " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Color </Form.Label>
                        <Form.Control type="text" placeholder="Color " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>   N° Tarj. Propiedad</Form.Label>
                        <Form.Control type="text" placeholder="N° Tarj. Propiedad" />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Año </Form.Label>
                        <Form.Control type="text" placeholder="Año " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Modalidad de Servicio de Transporte </Form.Label>
                        <Form.Control type="text" placeholder="Modalidad de Servicio de Transporte " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      
                      <Form.Row>
                        <Col sm="8">
                      <Form.Group >
                        <Form.Label>Ruta en que Presta Servicios Origen</Form.Label>
                        <Form.Control type="text" placeholder="Ruta en que Presta Servicios" />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Destino </Form.Label>
                        <Form.Control type="text" placeholder="Destino " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                      <div className="Datos_Infractor border p-3 mt-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i>  
                        DATOS DEL INFRACTOR
                        </p>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Licencia de Conducir </Form.Label>
                        <Form.Control type="text" placeholder="Licencia de Conducir " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Clase </Form.Label>
                        <Form.Control type="text" placeholder="Clase " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control type="text" placeholder="Categoría " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Apellidos y Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos y Nombres" />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Distrito </Form.Label>
                        <Form.Control type="text" placeholder="Distrito " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" placeholder="Provincia " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="Departamento" />
                      </Form.Group>
                        </Col>
                        <Col >
                      <Form.Group >
                        <Form.Label>Lugar de Ocurrencia </Form.Label>
                        <Form.Control type="text" placeholder="Lugar de Ocurrencia " />
                      </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Infracción</Form.Label>
                        <Form.Control type="text" placeholder="Infracción" />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Código </Form.Label>
                        <Form.Control type="text" placeholder="Código " />
                      </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha 
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="date" placeholder="Fecha"  />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                      <Form.Group >
                        <Form.Label>Hora</Form.Label>
                        <Form.Control type="text" placeholder="Hora" />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col >
                      <Form.Group >
                        <Form.Label>Observaciones Inspector MDM</Form.Label>
                        <Form.Control type="text" placeholder="Observaciones Inspector MDM " />
                      </Form.Group>
                        </Col>
                        <Col >
                      <Form.Group >
                        <Form.Label>Observaciones Conductor</Form.Label>
                        <Form.Control type="text" placeholder="Observaciones Conductor " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                      <div className="testigo border p-3 mt-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i>  
                        DATOS DEL TESTIGO QUE PRESENTA LA DENUNCIA
                        </p>
                        <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Doc. Identidad</Form.Label>
                        <Form.Control type="text" placeholder="Doc. Identidad" />
                      </Form.Group>
                        </Col>
                        <Col sm="8" >
                      <Form.Group >
                        <Form.Label>Apellidos y Nombres </Form.Label>
                        <Form.Control type="text" placeholder="Apellidos y Nombres " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col sm="8">
                          <p>Medio Comprobatorio: </p>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Fílmico" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Fotográfo" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Otros" />
                        </Form.Group>
                        <Form.Group>
                          <Form.File id="exampleFormControlFile1" label="Firma Del Testigo" />
                        </Form.Group>
                        </Col>
                        <Col>
                          <div style={{width:'200px', height:'200px', border: 'green 3px dashed'}} >
                          {/* <img src={img_firma} alt="..." className="rounded"/> */}
                          </div>
                        </Col>
                      </Form.Row>
                      </div>
                      <div className="testigo border p-3 mt-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-3"></i>  
                        DATOS DE AUTORIDAD QUE LEVANTA EL ACTA DE CONTROL Y FISCALIZACIÓN
                        </p>
                        <Form.Row>
                        <Col >
                      <Form.Group >
                        <Form.Label>Apellidos y Nombres </Form.Label>
                        <Form.Control type="text" placeholder="Apellidos y Nombres " />
                      </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col sm="8">
                        <Form.Group>
                          <Form.File id="exampleFormControlFile1" label="Firma Inspector MDM" />
                        </Form.Group>
                        <Form.Group>
                          <Form.File id="exampleFormControlFile1" label="Firma del Conductor" />
                        </Form.Group>
                        </Col>
                        <Col>
                          <div style={{width:'200px', height:'200px', border: 'green 3px dashed'}} >
                          {/* <img src={img_firma} alt="..." className="rounded"/> */}
                          </div>
                        </Col>
                      </Form.Row>

                      </div>
                      </div>
                        <Button variant="primary"  size="lg" block className="mb-3">Guardar</Button>
                        <div className="TablaVista" style={styleScroll}>
                        <Table bordered size="sm">
                            <thead className="thead-dark">
                                <tr>
                                <th>Tipo</th>
                                <th>Razón Social</th>
                                <th>DNI Propietario</th>
                                <th>Nombres y Ap. Propietario</th>
                                <th>Dirección Propietario </th>
                                <th>Departamento Propietario</th>
                                <th>Provincia Propietario</th>
                                <th>Distrito Propietario</th>
                                <th>N° Placa</th>
                                <th>Marca</th>
                                <th>Color</th>
                                <th>N° Tarj. Propietario</th>
                                <th>Año</th>
                                <th>Modalidad del Servicio</th>
                                <th>Destino</th>
                                <th>Licencia Conducir Infractor</th>
                                <th>Acciones</th>
                                {/* <th>Categoría</th>
                                <th>Apellidos Nombres Infractor</th>
                                <th>Departamento Infractor</th>
                                <th>Provincia Infractor</th>
                                <th>Distrito Infractor</th>
                                <th>Lugar de Ocurrencia</th>
                                <th>Código</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Obs. Inspector MDM</th>
                                <th>Obs. Conductor</th>
                                <th>DNI Testigo</th>
                                <th>Nombres Ap. Testigo</th>
                                <th>Medio Probatorio</th>
                                <th>Firma Testigo</th>
                                <th>Nombres y Ap. Autoridad</th>
                                <th>Firma Inspector</th>
                                <th>Firma Conductor</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>12365478</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td className="text-center"> 
                                    <i className="fas fa-edit mt-3 pr-3" style={{color:'var(--green-500)'}}></i>
                                    <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                                </td>
                                </tr>
                            </tbody>
                            </Table>
                            </div>
                        </Form>
                    </Tab.Pane>
                </Tab.Content>
            </Card>
        </Tab.Container>
        </Form>
    </div>

}
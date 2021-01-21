import React from 'react';
import { Form } from 'react-bootstrap';

export default function AgregarEmpresa(){
    return<>
    <Form>
    <div className="Tranporte">
                    <Row>
                      <Col>
                        <Form.Control placeholder="N° de placa" />
                      </Col>
                      <Button variant="success">Buscar
                      <i className="fas fa-search pl-2"></i>
                      </Button>
                      <Col sm='3'>
                        <Button variant="info">
                        <i class="pr-2 fas fa-plus"/>
                          Nuevo Registro
                      </Button>
                      </Col>
                    </Row>
                    <Row className="mt-3 mx-2">
                      <Col className="border p-3">
                        <div className="DatosVehiculo border p-3">
                      <p className="font-weight-bold mb-3">
                        <i class="fas fa-car pr-2"/> 
                        DATOS DEL VEHÍCULO
                        </p>
                        <Form.Row>
                          <Col sm="3">
                            <Form.Group >
                              <Form.Label>Nro</Form.Label>
                              <Form.Control type="text" placeholder="Nro flota" readOnly />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group >
                              <Form.Label>Placa</Form.Label>
                              <Form.Control type="text" eholder="N° placa" readOnly />
                            </Form.Group>
                          </Col>
                        </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Inscripción
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha de inscripción"  readOnly />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                            <Form.Label>Año de Fabricación</Form.Label>
                            <Form.Control type="text" placeholder="Año de Fabricación"  readOnly />
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Row>
                      <Col>
                      <Form.Group >
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca" Only />
                      </Form.Group>
                      </Col>
                      
                      <Col >
                      <Form.Group >
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" placeholder="Color" readOnly />
                      </Form.Group>
                      </Col>
                      </Row>
                      
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Motor</Form.Label>
                        <Form.Control type="text" placeholder="Motor" Only />
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Label>Serie</Form.Label>
                        <Form.Control type="text" placeholder="Serie/chasis" Only />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                        <Form.Group >
                          <Form.Label>Situación Vehículo</Form.Label>
                          <Form.Control type="text" placeholder="Situación Vehículo" readOnly />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group >
                          <Form.Label>Estado</Form.Label>
                          <Form.Control type="text" placeholder="Estado" dOnly />
                        </Form.Group>
                        </Col>
                      </Form.Row>
                      </div>
                      <div className="empresa border mt-3 p-3">
                        <h4><i class="fas fa-building pr-2"></i> EMPRESA</h4>
                        <Row>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Ruc</Form.Label>
                            <Form.Control type="text" placeholder="Ruc" ly />
                          </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Razón Social </Form.Label>
                            <Form.Control type="text" placeholder="Razón Social"  readOnly />
                          </Form.Group>
                          </Col>
                        </Row>
                          <Form.Group  className="mb-0">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="text" placeholder="Monto" readOnly />
                          </Form.Group>
                          <Form.Group  className="mb-0">
                            <Form.Label>Curso Vial</Form.Label>
                            <Form.Control type="text" placeholder="Curso Vial" readOnly />
                          </Form.Group>
                      </div>
                      </Col>
                    <Col className="DatosTitulo border p-3 ml-3">
                      <div className="DatosTitulo border p-3">
                      <h4><i class="fas fa-file-invoice pr-2"></i>AFOCAT</h4>
                      <div className="d-flex">
                          <Form.Group className="pr-2" >
                          <Form.Label htmlFor="inlineFormInputGroup" >
                            Fecha Emisión
                          </Form.Label>
                          <InputGroup >
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha emisión" readOnly />
                          </InputGroup>
                          </Form.Group>
                          <Form.Group >
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha Vencimiento
                            </Form.Label>
                            <InputGroup >
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha Vencimiento" readOnly />
                            </InputGroup>
                          </Form.Group>
                      </div>
                      </div>
                      <div className="Propietario border mt-3 p-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-2"></i>
                        PROPIETARIO
                        </p>

                        <Form.Group className="pr-2">
                            <Form.Label>Documento Identidad</Form.Label>
                            <Form.Control type="text" placeholder="
                            DNI"  readOnly />
                          </Form.Group>
                        <Form.Group  className="mb-0">
                            <Form.Label>Nombres y Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Nombres y Apellidos" readOnly />
                          </Form.Group>
                        <Form.Group className="pr-2">
                            <Form.Label>Nro Tarjeta Propiedad</Form.Label>
                            <Form.Control type="text" placeholder="
                            Nro Tarjeta Propiedad" readOnly />
                          </Form.Group>
                        <Form.Group  className="mb-0">
                            <Form.Label>Domicilio</Form.Label>
                            <Form.Control type="text" placeholder="Domicilio" readOnly />
                          </Form.Group>
                        <Form.Group  className="mb-0">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="text" placeholder="Celular" readOnly />
                          </Form.Group>
                      </div>
                      <div className="Bajas border p-3 mt-3">
                        <p className="font-weight-bold mb-3">
                        <i class="fas fa-thumbs-down pr-2"></i>
                         BAJA
                        </p>
                        <Row>
                          <Col>
                        <Form.Group  className="mb-0">
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha baja
                            </Form.Label>
                            <InputGroup >
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha Baja" readOnly />
                            </InputGroup>
                          </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Motivo Baja</Form.Label>
                            <Form.Control type="text" placeholder="Motivo Baja"  readOnly />
                          </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    </Row>
                    </div>
    </Form>
    </>
}
import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function LicenciaEdificacion(){
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const tooggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);

    return <>
    <Tab.Container  defaultActiveKey="#link1">
    <div className="cabecera border-bottom d-flex flex-nowrap" >
                <h2 className="py-2">Licencia de Edificación</h2>
                <div className="AgregarElemento ml-auto align-self-start">
                  <Button variant="info" onClick={tooggleModalNewGrupo}>
                    <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
                </div>
              </div>
            <Card className="mt-3">
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link action href="#link1">Consulta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#link2">Informacion</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    <Tab.Pane eventKey="#link1">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Recurrente: </Form.Label>
                                    <Form.Control type="text" placeholder="Recurrente" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>N° Licencia: </Form.Label>
                                    <Form.Control type="text" placeholder="N° Licencia" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Ubicación: </Form.Label>
                                    <Form.Control type="text" placeholder="Ubicación" />
                                </Form.Group>
                            </Col>
                            <Col  md="auto">
                            <Button variant="primary" type="submit" className="float-right mt-4">
                                Buscar 
                                <i class="fas fa-search pl-2" />
                            </Button>
                            </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                    <Accordion defaultActiveKey="0" >
                        <AcordionItem eventKey="0" titulo="Formularios" />
                        <AcordionItem eventKey="1" titulo="Requisitos Licencia de Edificación y Habilitación Urbanas"/>
                        <AcordionItem eventKey="2" titulo="Requisitos Autorización Obras en Vía Pública"/>
                        <AcordionItem eventKey="3" titulo="Normatividad"/>
                        <AcordionItem eventKey="4" titulo="Otros"/>
                      </Accordion>
                    </Tab.Pane>
                </Tab.Content>
                </Card>
            </Tab.Container>
            
            <Modal show={modalNewGrupo} onHide={tooggleModalNewGrupo}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                    Nueva Informacion
                </Modal.Header>
                <Modal.Body>
                    <NewGrupo closeModalGrupo={tooggleModalNewGrupo} />
                </Modal.Body>
            </Modal>
    </>
}

function NewGrupo({closeModalGrupo}){
    return <Form>
        <Form.Group>
            <label >Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripción"/>
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary" onClick={closeModalGrupo}>Cancelar</Button>{' '}
            <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
        </Form.Group>
    </Form>
}
function NewItem({closeModalItem}){
    return <Form>
        <Form.Group>
            <label>Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripcion"></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.File id="Archivo1"/>
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary" onClick={closeModalItem}>Cancelar</Button>{' '}
            <Button variant="primary"onClick={GuardarCambios}>Agregar</Button>{' '}
        </Form.Group>
    </Form>
}

function AcordionItem({eventKey, titulo}) {
    const [modalNewItem, setModalNewItem] = useState(false);

    function toggleModalNewItem() {
        setModalNewItem(!modalNewItem);
    }

    return <>
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey={eventKey}  className="Simbolo d-flex flex-nowrap">
    <b>{titulo} </b>
    <div className="ml-auto">
            <i class="far fa-plus pr-3" onClick={toggleModalNewItem}></i>
        <i class="fas fa-pencil-alt pr-3" onClick={toggleModalNewItem} ></i>
        <i class="fas fa-trash-alt pr-3" onClick={showAletEliminar} ></i>
        <span className="align-self-start">
        <i class="far fa-angle-down"></i>
        </span>
        </div>
    <span>
    <i class="far fa-angle-down"></i>
    </span>
  </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>
          <div  className="clearfix">
              <ul className="list-unstyled mt-2">
                  <li className="border-bottom py-2">
                      <div className="float-right">
                          <Button type="submit" className="btn-success btn-sm">
                          Descargar 
                          <i className="far fa-file-pdf pl-2"></i>
                          </Button>
                      </div>
                      <p>1.- Formulario N° 00012020</p>
                  </li>
                  <li className="border-bottom py-2">
                      <div className="float-right">
                          <Button type="submit" className="btn-success btn-sm">
                          Descargar 
                          <i className="far fa-file-pdf pl-2"></i>
                          </Button>
                      </div>
                      <p>2.- Formulario N° 00022020</p>
                  </li>
              </ul>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Modal show={modalNewItem} onHide={toggleModalNewItem}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                    Agregar Información
                </Modal.Header>
                <Modal.Body>
                    <NewItem closeModalItem={toggleModalNewItem} />
                </Modal.Body>
            </Modal>
  </>
}
function showAletEliminar() {
    Swal.fire({
        title: '¿Desea Eliminar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar!',
        confirmButtonText: 'Si, Eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'correctamente',
            'success'
          )
        }
      })
  }
  function GuardarCambios() {
    Swal.fire({
        icon: 'success',
        title: 'Se Guardaron los cambios correctamente',
        showConfirmButton: false,
        timer: 1500
      })
  }
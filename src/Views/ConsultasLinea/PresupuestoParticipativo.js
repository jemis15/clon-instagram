import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function PresupuestoParticipativo(){
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);

    return <>
 <Tab.Container  defaultActiveKey="#ConsultaRegistro">
            <div className="cabecera border-bottom">
                <h2 className="py-2">Presupuesto Participativo</h2>
                <div className="AgregarElemento float-right mt-n5">
                <Button variant="info" onClick={toggleModalNewGrupo}>
                    <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
                </div>
              </div>
            <Card className="mt-3">
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link action href="#ConsultaRegistro">Consulta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#Información_RegistroC">Informacion</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    <Tab.Pane eventKey="#ConsultaRegistro">
                        <Informacion tema="Presupuesto Participativo"/>
                        <Informacion tema="¿Qué es un Presupuesto Prticipativo?"/>
                        <Informacion tema="¿Cúales son los objetivos del Presupuesto Prticipativo?"/>
                        <Informacion tema="¿Qué entidades del estado hacen Presupuesto Prticipativo?"/>
                        <Informacion tema=" El Presupuesto Prticipativo Cumple con lo Siguiente"/>
                        <Informacion tema=" Sistema Nacional se Presupuesto Público"/>
                        <Informacion tema="Fases del Proceso"/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Información_RegistroC">
                    <Accordion defaultActiveKey="0">
                        <AcordionItem eventKey="0" titulo="Presupuesto Participativo 2019">
                                <File />
                                <File />
                                <File />
                                <File />
                        </AcordionItem>
                        <AcordionItem eventKey="1" titulo="Presupuesto Prticipativo 2020">
                            <File />
                            <File />
                        </AcordionItem>
                    </Accordion>
                    </Tab.Pane>
                </Tab.Content>
            </Card>
            </Tab.Container>

            <Modal show={modalNewGrupo} onHide={toggleModalNewGrupo}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                    Nueva Informacion
                </Modal.Header>
                <Modal.Body>
                    <NewGrupo closeModalGrupo={toggleModalNewGrupo}/>
                </Modal.Body>
            </Modal>
    </>
}
function File({showModalEdit}) {
    return <li className="border-bottom py-2">
        <div className="float-right">
            <Button type="submit" className="btn-success btn-sm">
                Descargar
                <i className="far fa-file-pdf pl-2"/>
            </Button>
            <i class="fas fa-pencil-alt pr-3  pl-3" onClick={showModalEdit} ></i>
            <i class="fas fa-trash-alt pr-3" onClick={showAletEliminar} ></i>
        </div>
        <p>1. Codigo de etica N° 0012</p>
    </li>
} 

function NewGrupo({closeModalGrupo}) {
    return <Form>
        <Form.Group>
            <label> Descripción</label>
        <Form.Control type="text" placeholder="Ingresa Descripción" />
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary" onClick={closeModalGrupo}>Cancelar</Button>{' '}
            <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
        </Form.Group>
    </Form>
  }
  
  
  function NewItem({closeModalItem}) {
    return <Form>
        <Form.Group>
            <Form.Label> Descripción</Form.Label>
        <Form.Control type="text" placeholder="Ingresa Descripción" />
        </Form.Group>
        <Form.Group>
            <Form.File id="exampleFormControlFile1"  />
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary" onClick={closeModalItem}>Cancelar</Button>{' '}
            <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
        </Form.Group>
    </Form>
  }
  

function AcordionItem({eventKey, titulo, children}) {
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
  </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>
          <div  className="clearfix">
              <ul className="list-unstyled mt-2">
                  {children}
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
                    <NewItem closeModalItem={toggleModalNewItem}/>
                </Modal.Body>
            </Modal>
  </>
}
function Informacion({tema}) {
    return <>
    <Card className="mb-3">
        <Card.Header as="h5">{tema}</Card.Header>
        <Card.Body>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
    </Card>
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
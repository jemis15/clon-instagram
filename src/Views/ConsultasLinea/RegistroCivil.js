import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal, Nav, Tab } from 'react-bootstrap';
import Certificacion from './Certificacion';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function RegistroCivil() {
    const [modalNewGrupo, setModalNewGrupo] = useState(false);
    const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);

    return <>
        <Tab.Container  defaultActiveKey="#ConsultaRegistro">
              <div className="cabecera border-bottom">
                <h2 className="py-2">Registro Civil</h2>
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
                        <Certificacion />
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Información_RegistroC">
                    <Accordion defaultActiveKey="0" >
                        <AcordionItem eventKey="0" titulo="Adictos Matrimoniales 2019"/>
                      <AcordionItem eventKey="1" titulo="Adictos Matrimoniales 2018"/>
                      <AcordionItem eventKey="2" titulo="Adictos Matrimoniales 2017"/>
                      <AcordionItem eventKey="3" titulo="Adictos Matrimoniales 2016"/>
                      </Accordion>
                    </Tab.Pane>
                </Tab.Content>
            </Card>
            </Tab.Container>

            <Modal show={modalNewGrupo} onHide={toggleModalNewGrupo}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>Nueva Información</Modal.Header>
                <Modal.Body>
                    <NewGrupo  closeModalGrupo={toggleModalNewGrupo} />
                </Modal.Body>
            </Modal>
    </>
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
                <label> Descripción</label>
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
    <span>
    <i class="far fa-angle-down"></i>
    </span>
    </div>
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
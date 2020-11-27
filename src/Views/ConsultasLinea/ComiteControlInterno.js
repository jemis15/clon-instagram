import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function ComiteControlInterno(){
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const tooggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);
const [modalNewItem, setModalNewItem] = useState(false);

    function toggleModalNewItem() {
        setModalNewItem(!modalNewItem);
     }
    return <>

    <div className="cabecera border-bottom mb-3 d-flex flex-nowrap" >
                <h2 className="py-2">Comite de Control interno</h2>
                <div className="AgregarElemento ml-auto align-self-start">
                  <Button variant="info" onClick={tooggleModalNewGrupo}>
                    <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
                </div>
              </div>
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Integrantes">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Actas">
                            <Accordion defaultActiveKey="2" >
                                <AcordionItem eventKey="3" titulo="2017">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                                <AcordionItem eventKey="4" titulo="2016">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                        <AcordionItem eventKey="5" titulo="Normatividad">
                            <Accordion defaultActiveKey="5" >
                                <AcordionItem eventKey="6" titulo="Normatividad General">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                                <AcordionItem eventKey="7" titulo="Normatividad Específica">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                        <AcordionItem eventKey="8" titulo="Material Dinámico">
                            <File showModalEdit={toggleModalNewItem} />
                            <File showModalEdit={toggleModalNewItem} />
                        </AcordionItem>
                        <AcordionItem eventKey="9" titulo="Videos Didácticos">
                            <File showModalEdit={toggleModalNewItem} />
                            <File showModalEdit={toggleModalNewItem} />
                        </AcordionItem>
                    </Accordion>


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
function NewItem(closeModalItem){
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
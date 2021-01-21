import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, InputGroup, Modal, Nav, Row, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function TributoMunicipal(){
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);

    return <>
       <Tab.Container  defaultActiveKey="#ConsultaRegistro">
              <div className="cabecera border-bottom d-flex flex-nowrap">
                <h2 className="py-2">Tributo Municipal</h2>
                <div className="AgregarElemento ml-auto align-self-start">
                  <Button variant="info" onClick={toggleModalNewGrupo}>
                    <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
                </div>
              </div>
            <Card className="mt-3 ">
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
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Form.Group >
                            <Form.Label>Código Municipal</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar Código Municipal" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Clave Virtual</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar Clave Virtual" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Código de Verificación</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Ingresar Código" />
                                </Col>
                                <Col>
                                <InputGroup className="mb-2">
                                    <Form.Control id="inlineFormInputGroup" placeholder="Código" />
                                    <InputGroup.Prepend>
                                    <InputGroup.Text><i class="fas fa-circle-notch"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Código
                                </Form.Label>
                                </InputGroup>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button variant="info" size="lg" block>Consultar</Button>
                        </Card.Body>
                    </Card>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#Información_RegistroC">
                    <Accordion defaultActiveKey="0" >
                      <AcordionItem eventKey="0" titulo="Declaración de Deudad de Cobranza Dudosa"/>
                      <AcordionItem eventKey="1" titulo="Caracteristicas y Forma para Determinar Impuesto Predial"/>
                      <AcordionItem eventKey="2" titulo="Formas y Lugares de pago"/>
                      <AcordionItem eventKey="3" titulo="Indicaciones para el llenado de los formularios  Icluyendo Ejemplos Práctivos"/>
                      <AcordionItem eventKey="4" titulo="Impuestos as Patrimonio Vehicular"/>
                      <AcordionItem eventKey="5" titulo="Fraccionamiento"/>
                      <AcordionItem eventKey="6" titulo="Legislación, Tablas, Planos, Tasas, Otros Docuemntos Regulatorios"/>
                    </Accordion>
                      
                    </Tab.Pane>
                </Tab.Content>
            </Card>
            </Tab.Container>

            <Modal show={modalNewGrupo} onHide={toggleModalNewGrupo}  animation={false}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>Nueva Información</Modal.Header>
                <Modal.Body>
                    <NewGrupo closeModal={toggleModalNewGrupo} />
                </Modal.Body>
            </Modal>
    </>
    }
    function NewGrupo({closeModal}) {
        return <Form>
            <Form.Group>
                <label> Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripción" />
            </Form.Group>
            <Form.Group className="float-right">
                <Button variant="secondary" onClick={closeModal}>Cancelar</Button>{' '}
                <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
            </Form.Group>
        </Form>
}
function NewItem({closeModalitem}) {
        return <Form>
            <Form.Group>
                <label> Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripción" />
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1"  />
            </Form.Group>
            
            <Form.Group className="float-right">
                <Button variant="secondary" onClick={closeModalitem}>Cancelar</Button>{' '}
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
    <span className="align-self-start">
    <i class="far fa-angle-down"></i>
    </span>
    </div>
  </Accordion.Toggle>
  <Accordion.Collapse eventKey={eventKey}>
    <Card.Body>
        <div  className="clearfix">
            <ul className="list-unstyled mt-2">
               <File showModalEdit={toggleModalNewItem} />
               <File showModalEdit={toggleModalNewItem}/>
            </ul>
        </div>
    </Card.Body>
  </Accordion.Collapse>
</Card>

<Modal show={modalNewItem} onHide={toggleModalNewItem}  animation={false}>
              <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                  Agregar Información
              </Modal.Header>
              <Modal.Body>
                  <NewItem closeModalitem={toggleModalNewItem} />
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


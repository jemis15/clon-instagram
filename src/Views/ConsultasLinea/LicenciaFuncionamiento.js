import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function LicenciaFuncionamiento() {
  const [modalNewGrupo, setModalNewGrupo] = useState(false);
  const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);
  return <>
    <Tab.Container defaultActiveKey="#ConsultaRegistro">
      <div className="cabecera  d-flex flex-nowrap" style={{ borderBottom: '1px solid #EDD016' }}>
        <h3 className="py-2" style={{ color: 'green' }}>Licencia Funcionamiento</h3>
        <div className="AgregarElemento ml-auto align-self-start">
          <Button variant="info" onClick={toggleModalNewGrupo}>
            <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
        </div>
      </div>
      <Card className="mt-3">
        <Card.Header>
          <Nav className="d-flex" variant="tabs">
            <Nav.Item>
              <Nav.Link action href="#ConsultaRegistro">Consulta</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link action href="#Información_RegistroC">Información</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Tab.Content className="px-4 my-4">
          <Tab.Pane eventKey="#ConsultaRegistro">
            <Form className="pl-2 pt-4">
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Fecha de Licencia: </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>N° Licencia: </Form.Label>
                    <Form.Control type="text" placeholder="N° Licencia" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Buscar Licencia
                  <i class="fas fa-search pl-2" />
              </Button>
            </Form>

            <div className="alert alert-danger mt-3" role="alert">
              No se encontraron resultados
                <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div
              className="Resultado p-5 my-lg-3 mx-auto shadow p-3 mb-5 bg-white rounded"
              style={{ maxWidth: '600px' }}
            >
              <h3 className="text-center">Información de Licencia</h3>
              <ul className="list-unstyled mt-3">
                <li className="border-bottom py-3">
                  <b>Año y N° Licencia Funcionamiento</b>
                  <div className="float-right font-italic">25/01/2020</div>
                </li>
                <li className="border-bottom py-3">
                  <b>Contribuyente</b>
                  <div className="float-right font-italic">
                    Pedrito Suares Ramos
                    </div>
                </li>
                <li className="border-bottom py-3">
                  <b>Domicilio</b>
                  <div className="float-right font-italic">
                    Av. Arequipa N° 1748
                    </div>
                </li>
                <li className="border-bottom py-3">
                  <b>N° Expediente</b>
                  <div className="float-right font-italic">00015625</div>
                </li>
                <li className="border-bottom py-3">
                  <b>Razón social</b>
                  <div className="float-right font-italic">
                    Abarrotes JUANITA
                    </div>
                </li>
                <li className="border-bottom py-3">
                  <b>Código Catastral</b>
                  <div className="float-right font-italic">002456</div>
                </li>
                <li className="border-bottom py-3">
                  <b>DNI</b>
                  <div className="float-right font-italic">98564275</div>
                </li>
                <li className="border-bottom py-3">
                  <b>RUC</b>
                  <div className="float-right font-italic">21035647895</div>
                </li>
                <li className="border-bottom py-3">
                  <b>Estado</b>
                  <div className="float-right font-italic">Activo</div>
                </li>
                <li className="border-bottom py-3">
                  <b>ID Licencia Funcionamiento</b>
                  <div className="float-right font-italic">6546565485</div>
                </li>
              </ul>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#Información_RegistroC">
            <Accordion defaultActiveKey="0" >
              <AcordionItem eventKey="0" titulo="Procedimiento" />
              <AcordionItem eventKey="1" titulo="Formularios" />
              <AcordionItem eventKey="2" titulo="Legislación" />
            </Accordion>
          </Tab.Pane>
        </Tab.Content>
      </Card>
    </Tab.Container>

    <Modal show={modalNewGrupo} onHide={toggleModalNewGrupo} animation={false}>
      <Modal.Header closeButton style={{ background: '#DFE8F3' }}>Nueva Información</Modal.Header>
      <Modal.Body>
        <NewGrupo closeModalGrupo={toggleModalNewGrupo} />
      </Modal.Body>
    </Modal>
  </>
}

function AcordionItem({ eventKey, titulo }) {
  const [modalNewItem, setModalNewItem] = useState(false);

  function toggleModalNewItem() {
    setModalNewItem(!modalNewItem);
  }


  return <>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey} className="Simbolo d-flex flex-nowrap">
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
          <div className="clearfix">
            <ul className="list-unstyled mt-2">
              <File showModalEdit={toggleModalNewItem} />
              <File showModalEdit={toggleModalNewItem} />
            </ul>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>

    <Modal show={modalNewItem} onHide={toggleModalNewItem}>
      <Modal.Header closeButton style={{ background: '#DFE8F3' }} animation={false}>
        Agregar Información
                  </Modal.Header>
      <Modal.Body>
        <NewItem closeModalItem={toggleModalNewItem} />
      </Modal.Body>
    </Modal>
  </>
}
function File({ showModalEdit }) {
  return <li className="border-bottom py-2">
    <div className="float-right">
      <Button type="submit" className="btn-success btn-sm">
        {'Descargar'}
        <i className="far fa-file-pdf pl-2" />
      </Button>
      <i class="fas fa-pencil-alt pr-3  pl-3" onClick={showModalEdit} ></i>
      <i class="fas fa-trash-alt pr-3" onClick={showAletEliminar} ></i>
    </div>
    <ol>
      <li>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer">
          {'Requisitos para obtener una nueva Licencia de Funcionamiento (Virtual)'}
        </a>
      </li>
    </ol>
  </li>
}

function NewGrupo({ closeModalGrupo }) {
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


function NewItem({ closeModalItem }) {
  return <Form>
    <Form.Group>
      <Form.Label> Descripción</Form.Label>
      <Form.Control type="text" placeholder="Ingresa Descripción" />
    </Form.Group>
    <Form.Group>
      <Form.File id="exampleFormControlFile1" />
    </Form.Group>
    <Form.Group className="float-right">
      <Button variant="secondary" onClick={closeModalItem}>Cancelar</Button>{' '}
      <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
    </Form.Group>
  </Form>
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


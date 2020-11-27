import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Nav, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function TransportePublico() {
    const [activeTab, setActiveTab] = useState('consultas');
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);
    return <> 
    <div className="cabecera border-bottom mb-3 d-flex flex-nowrap">
    <h2 className="py-2">Transaporte Publico</h2>
    <div className="AgregarElemento ml-auto align-self-start">
      <Button variant="info" onClick={toggleModalNewGrupo}>
        <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
    </div>
  </div>
            <Card>
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                    <Nav.Link href="#" onClick={() => setActiveTab('consultas')} active={activeTab === 'consultas'}>CONSULTA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#" onClick={() => setActiveTab('informacion')} active={activeTab === 'informacion'}>INFORMACIÓN</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Card.Body>
                {activeTab === 'consultas' &&
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>Buscar:  </Form.Label>
                          <Form.Control  as="select">
                            <option>Seleccione una opción</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>N° Placa </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="N° placa o código de seguridad"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs="auto">
                        <Button type="submit" className="mt-3">
                          Buscar
                          <i class="fas fa-search pl-2" />
                        </Button>
                      </Col>
                    </Row>}

                    {activeTab === 'informacion' && (
                        <Accordion defaultActiveKey="0" >
                          <AcordionItem eventKey="0" titulo="Resoluciones"/>
                          <AcordionItem eventKey="1" titulo="Normas Vigentes"/>
                        </Accordion>
                    )}
                </Card.Body>
              </Card>


            <Modal show={modalNewGrupo} onHide={toggleModalNewGrupo}>
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
          <Form.Label>Descripcion</Form.Label>
          <Form.Control  type="text" placeholder="Ingresar Descripción"/>
        </Form.Group>
          <Form.Group className="float-right">
                <Button variant="secondary" onClick={closeModal}>Cancelar</Button>{' '}
                <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
          </Form.Group>
    </Form>
}

function NewItem({closeItem}) {
  return <Form>
    <Form.Group>
      <label>Descripción:</label>
      <Form.Control type="text" placeholder="Ingresa Descripción"/>
      </Form.Group>
      <Form.Group>
        <Form.File id="exampleFormControlFile1"/>
      </Form.Group>
      <Form.Group className="float-right">
        <Button variant="secondary" onClick={closeItem}>Cancelar</Button>{' '}
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

<Modal show={modalNewItem} onHide={toggleModalNewItem}>
              <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                  Agregar Información
              </Modal.Header>
              <Modal.Body>
                  <NewItem closeItem={toggleModalNewItem} />
              </Modal.Body>
          </Modal>
</>
}
function File({showModalEdit}){
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

function showAletEliminar(){
  Swal.fire({
    title:'¿Desea Eliminar?',
    icon: 'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
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

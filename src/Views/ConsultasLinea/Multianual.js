import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
// import pdf from '../assets/images/web/Organigrama.PDF';

export default function Multianual() {
    return <>
    <Row>
        <Col>
            <div className="cabecera  mb-3 d-flex flex-nowrap" style={{borderBottom:'1px solid #EDD016'}}>
                <h3 className="py-2" style={{color:'green'}}>Programa Multianual de Inversión</h3>
            </div>
            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0" titulo="2020">
                    <File />
                    <File/>
                </AccordionItem>
                <AccordionItem eventKey="1" titulo="2019">
                    <File />
                    <File/>
                </AccordionItem>
            </Accordion>
        </Col>
        <Col>
        {/* <div id="pdfComisiones" className="text-center mb-3">
        <embed src={pdf} type="application/pdf" style={{width:'95%', height:'100px'}}/>
    </div> */}
            <div className="border mb-5 shadow" style={{height: "500px"}}></div>
        </Col>
    </Row>
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

function AccordionItem({eventKey, titulo, children}) {
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
  <Modal show={modalNewItem} onHide={toggleModalNewItem}  animation={false}>
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
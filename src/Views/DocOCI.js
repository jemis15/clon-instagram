import React, { useState } from 'react';
import { Form, Button, Accordion, Card, Modal } from 'react-bootstrap';

export default function NormasPublicas(){
    const [modalNewItem, setModalNewItem] = useState(false);

    function toggleModalNewItem() {
        setModalNewItem(!modalNewItem);
     }
    return <div className="container my-5 pl-5 pr-5 pb-5 shadow" style={{border:'1px solid #008000'}}>
        <div className="mb-4 mt-3 " style={{borderBottom:"3px solid #EDD016"}} >
            <h3 className="p-2" >ÓRGANO DE CONTROL INSTITUCIONAL</h3>
        </div>
        <Form>
        <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Informes de Auditoría">
                            <Accordion defaultActiveKey="1" >
                                <AcordionItem eventKey="2" titulo="Informes">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                        <AcordionItem eventKey="3" titulo="Reportes de Denuncias Presentadas">
                            <Accordion defaultActiveKey="3" >
                                <AcordionItem eventKey="4" titulo="2020">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                                <AcordionItem eventKey="7" titulo="2019">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                    </Accordion>
        </Form>
    </div>
}
function File({showModalEdit}) {
    return <li className="border-bottom py-2">
        <div className="float-right">
            <Button type="submit" className="btn-success btn-sm">
                Descargar
                <i className="far fa-file-pdf pl-2"/>
            </Button>
            <i class="fas fa-pencil-alt pr-3  pl-3" onClick={showModalEdit} ></i>
            <i class="fas fa-trash-alt pr-3"></i>
        </div>
        <p>1. Descripcion,.,.... </p>
    </li>
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
            <Button variant="primary">Agregar</Button>{' '}
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
        <i class="fas fa-trash-alt pr-3"></i>
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
import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Modal } from 'react-bootstrap';

export default function Codisec(){
//     const [modalNewGrupo, setModalNewGrupo] = useState(false);

//     const tooggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);
 const [modalNewItem, setModalNewItem] = useState(false);

    function toggleModalNewItem() {
        setModalNewItem(!modalNewItem);
     }
    return <div className="container shadow pl-5 pr-5 pb-5 my-5 " style={{ border:'1px solid #008000'}}> 

    <div className="cabecera p-3 mb-5 d-flex flex-nowrap mx-n5 " style
        ={{borderBottom: '4px solid #F8DE5E', background:'#008000'}}>
                <h4  style={{color:'white'}}>CODISEC - Comité Distrital de Seguridad Ciudadana</h4>
                {/* <div className="AgregarElemento ml-auto align-self-start">
                  <Button variant="info" onClick={tooggleModalNewGrupo}>
                    <i class="fas fa-plus pr-2"></i>Nueva Información</Button>{' '}
                </div> */}
              </div>
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Codisec 2021">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Cosisec 2020">
                            <Accordion defaultActiveKey="2" >
                                <AcordionItem eventKey="3" titulo="Plan">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                                <AcordionItem eventKey="4" titulo="Mapa de Delito">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                        <AcordionItem eventKey="5" titulo="Cosisec 2019">
                            <Accordion defaultActiveKey="5" >
                                <AcordionItem eventKey="6" titulo="Plan">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                                <AcordionItem eventKey="7" titulo="Mapa de Delito">
                                <File showModalEdit={toggleModalNewItem} />
                                <File showModalEdit={toggleModalNewItem} />
                                </AcordionItem>
                            </Accordion>
                        </AcordionItem>
                    </Accordion>


            {/* <Modal show={modalNewGrupo} onHide={tooggleModalNewGrupo} animation={false}>
                <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                    Nueva Informacion
                </Modal.Header>
                <Modal.Body>
                    <NewGrupo closeModalGrupo={tooggleModalNewGrupo} />
                </Modal.Body>
            </Modal> */}
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
        <p>1. Descripción ...........</p>
    </li>
    }
// function NewGrupo({closeModalGrupo}){
//     return <Form>
//         <Form.Group>
//             <label >Descripción</label>
//             <Form.Control type="text" placeholder="Ingresa Descripción"/>
//         </Form.Group>
//         <Form.Group className="float-right">
//             <Button variant="secondary" onClick={closeModalGrupo}>Cancelar</Button>{' '}
//             <Button variant="primary" onClick={GuardarCambios}>Agregar</Button>{' '}
//         </Form.Group>
//     </Form>
// }
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
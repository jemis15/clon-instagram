import React, { useState }  from 'react';
import { Row, Col, Nav, Card, Tab, Accordion, Form, Button, Modal } from 'react-bootstrap';
import img_platos from '../assets/images/web/chicharron.jpg';
import pdf from '../assets/images/web/Resolucion.pdf';

export default function Proyectos(){

    const[modalVer, setModalVer] = useState(false);
    const toggleModalVer = () => setModalVer(!modalVer);

    return <div className="container my-3  shadow" style={{border:'2px solid #008000'}}>
        <div className="mx-n3" style={{backgroundColor:"#008000"}} >
            <h3 className="text-center  p-3" style={{color:'white'}}>Proyectos </h3>
        </div>
        <div className="p-4">
        <h3 className="text-center mb-3">Titulo</h3>
        <p>El martes 04 de setiembre se realizó la premiación del I Concurso Incubadoras de la Innovación Educativa, en Mazamari, en el marco del programa de financiamiento Escuelas Semilla, cuyo propósito es mejorar el proceso de gestión escolar a través de los proyectos en las instituciones educativas de este distrito.  Tanto el Fondo Nacional de Desarrollo de la Educación Peruana (FONDEP),  la Municipalidad Distrital de Mazamari  y la UGEL Satipo premiaron a 11 escuelas de la región, quienes destacaron por sus iniciativas que reúne esfuerzos de tres niveles de gobierno.
        </p>
        <div className="align-self-center">
        <Row className="mt-3 m-3 ">
        <Col xs="auto">
          <img
            src={img_platos}
            className="imgAlcalde"
            alt="alcalde"
            style={{width: '150px', height: '10rem', border: 'solid'}}
          />
        </Col>
        <Col  className="align-self-end">
          <h5>Nombre y apellido</h5>
          <ul className="pl-4 mb-0">
            <li className="mb-1">Nombre: dhaudiuasyd</li>
            <li className="mb-1">Cargo: ijsdihfuid</li>
            <li  className="mb-1"><a href="">Hoja de vida: nwiduhged</a></li>
          </ul>
        </Col>
      </Row>
        </div>
        <Tab.Container  defaultActiveKey="#proyecto1">
            <Card className="mt-3">
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link action href="#proyecto1">Proyectos Agricultura</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#proyecto2">Proyectos Piscicultura</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#proyecto3">Proyectos Producción</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#proyecto4">Proyectos Construcción</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    <Tab.Pane eventKey="#proyecto1">
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Aprobados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Ejecución: ">
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="3" titulo="Culminados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                    </Accordion>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="#proyecto2">
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Aprobados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Ejecución: ">
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="3" titulo="Culminados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                    </Accordion>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#proyecto3">
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Aprobados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Ejecución: ">
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="3" titulo="Culminados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                    </Accordion>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="#proyecto4">
                    <Accordion defaultActiveKey="1">
                        <AcordionItem eventKey="1" titulo="Aprobados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="2" titulo="Ejecución: ">
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                                <FileEjecución toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                        <AcordionItem eventKey="3" titulo="Culminados: ">
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                                <File toggleModalVer={toggleModalVer}  />
                        </AcordionItem>
                    </Accordion>
                    
                    </Tab.Pane>
                </Tab.Content>
            </Card>
            </Tab.Container>
            </div>
            <Modal show={modalVer} onHide={toggleModalVer} animation={false}>
        <Modal.Header closeButton style={{background:'#DFE8F3'}}>
            Visualizador de pdf
        </Modal.Header>
        <Modal.Body>
            <div id="pdfConvocatoria" className="text-center">
                    <embed src={pdf} type="application/pdf" style={{width:'90%', height:'650px'}}/>
                </div>
        </Modal.Body>
    </Modal>
    </div>
    
}
function File({toggleModalVer}) {
    return <li className="border-bottom py-2">
        <div className="float-right">
            <Button size="sm" className="mr-3" variant="info" href="./DetalleProyecto"> 
                Resumen
            </Button>
            <Button  size="sm" variant="danger" onClick={toggleModalVer}>
                Pdf
                <i className="far fa-file-pdf pl-2"/>
            </Button>
        </div>
        <p>1. Proyecto Agricultura N°01 </p>
    </li>
    }
function FileEjecución({toggleModalVer}) {
    return <li className="border-bottom py-2">
        <div className="float-right">
            <Row>
                <Col sm='auto'>
                    %
                </Col>
                <Col >
                    <Button size="sm" className="mr-3" variant="info" href="./DetalleProyecto"> 
                        Resumen
                    </Button>
                </Col>
                <Col >
                    <Button  size="sm" variant="danger" onClick={toggleModalVer} >
                        Pdf
                        <i className="far fa-file-pdf pl-2"/>
                    </Button>
                </Col>
            </Row>
        </div>
        <p>1. Proyecto Agricultura N°01 </p>
    </li>
    }

function AcordionItem({eventKey,titulo, children}) {

    return <>
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey={eventKey}  className="Simbolo d-flex flex-nowrap">
    <b>{titulo} </b>
    <div className="ml-auto mb-0">
    <Form.Group as={Row}>
    <Form.Label column sm="auto">
      Periodo:
    </Form.Label>
    <Col>
    <Form.Control as="select" >
      <option>2016-2020</option>
    </Form.Control>
    </Col>
    <Col sm="auto">
        <span className="align-self-start">
        <i class="far fa-angle-down font-weight-bold"></i>
        </span>
    </Col>
  </Form.Group>
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
  
  </>
}
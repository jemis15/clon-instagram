import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, FormControl, InputGroup, Modal, Nav, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function TransportePublico() {
    const [activeTab, setActiveTab] = useState('consultas');
    const [modalNewGrupo, setModalNewGrupo] = useState(false);

    const toggleModalNewGrupo = () => setModalNewGrupo(!modalNewGrupo);
    const [transporte, setTransporte] = useState({
      placa:'der42-245',
      modalidad:'sdff',
      fechaInscripcion:'12/05/2020',
      añoFabricacion:'1999',
      asientos:'15',
      marca:'toyota',
      modelo:'toyota',
      clase:'a',
      motor:'asgduye-54689',
      serie:'364687615',
      situacion:'normal',
      estado:'operativo',
      autorizacion:'hgvuyfud',
      fechaEmision:'20/03/1998',
      fechaVencimiento: '30/02/2022',
      nTuc:'1656546',
      fechaEmisionTarjeta:'20/01/2021',
      fechaVenciTarjeta:'12/01/2025',
      docIdentidad:'23654789',
      nTarjetaPropiedad:'6467482',
      fechaTarjeta:'10/02/2023',
      NombreApellido:'Lucia Perez Fernandez',
      ruc:'46878765659',
      razonSocial:'company SAC',
      fechaBaja:'20/10/2020',
      motivoBaja:'ugdwuhbxjaishednbaushd jsahdu'
    });

    const obj={
      placa:'',
      modalidad:'',
      fechaInscripcion:'',
      añoFabricacion:'',
      asientos:'',
      marca:'',
      modelo:'',
      clase:'',
      motor:'',
      serie:'',
      situacion:'',
      estado:'',
      autorizacion:'',
      fechaEmision:'',
      fechaVencimiento: '',
      nTuc:'',
      fechaEmisionTarjeta:'',
      fechaVenciTarjeta:'',
      docIdentidad:'',
      nTarjetaPropiedad:'',
      fechaTarjeta:'',
      NombreApellido:'',
      ruc:'',
      razonSocial:'',
      fechaBaja:'',
      motivoBaja:''
    };

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
                <Form>
                  {/* {transporte.map (Transporte => ( */}
                    <div className="Tranporte">
                    <Row>
                      <Col>
                        <Form.Control placeholder="N° de placa" />
                      </Col>
                      <Button variant="success">Buscar
                      <i className="fas fa-search pl-2"></i>
                      </Button>
                      <Col sm='3'>
                        <Button variant="info">
                        <i class="pr-2 fas fa-plus"/>
                          Nuevo Registro
                      </Button>
                      </Col>
                    </Row>
                    <Row className="mt-3 mx-2">
                      <Col className="border p-3">
                        <div className="DatosVehiculo border p-3">
                      <p className="font-weight-bold mb-5">
                        <i class="fas fa-car pr-2"/> 
                        DATOS DEL VEHÍCULO
                        </p>
                      <Form.Group >
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="text" value={transporte.placa} placeholder="N° placa" readOnly />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label>Modalidad</Form.Label>
                        <Form.Control type="text" placeholder="Modalidad" value={transporte.modalidad} readOnly />
                      </Form.Group>
                      <Form.Row>
                        <Col>
                          <Form.Group >
                          <Form.Label htmlFor="inlineFormInputGroup">
                            Fecha Inscripción
                          </Form.Label>
                          <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha de inscripción" value={transporte.fechaInscripcion} readOnly />
                          </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                            <Form.Label>Año de Fabricación</Form.Label>
                            <Form.Control type="text" placeholder="Año de Fabricación" value={transporte.añoFabricacion} readOnly />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group >
                            <Form.Label>Asientos</Form.Label>
                            <Form.Control type="number" placeholder="Asientos" value={transporte.asientos}  readOnly/>
                          </Form.Group>
                        </Col>
                      </Form.Row>
                      <Form.Group >
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca" value={transporte.marca} readOnly />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="Modelo" value={transporte.modelo} readOnly />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label>Clase</Form.Label>
                        <Form.Control type="text" placeholder="Clase" value={transporte.clase} readOnly />
                      </Form.Group>
                      <Form.Row>
                        <Col>
                      <Form.Group >
                        <Form.Label>Motor</Form.Label>
                        <Form.Control type="text" placeholder="Motor" value={transporte.motor} readOnly />
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Label>Serie/Chasis</Form.Label>
                        <Form.Control type="text" placeholder="Serie/chasis" value={transporte.serie} readOnly />
                        </Col>
                      </Form.Row>
                      <Form.Group >
                        <Form.Label>Situación Vehículo</Form.Label>
                        <Form.Control type="text" placeholder="Situación Vehículo" value={transporte.situacion} readOnly />
                      </Form.Group>
                      <Form.Group >
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="Estado" value={transporte.estado} readOnly />
                      </Form.Group>
                      </div>
                      </Col>
                    <Col className="DatosTitulo border p-3 ml-3">
                      <div className="DatosTitulo border p-3">
                      <p className="font-weight-bold mb-3">
                        DATOS DEL TITULO HABILITANTE
                        </p>
                      <h4>Resolución Autorización</h4>
                      <div className="d-flex"style={{borderBottom: 'var(--grey-500) 1px dashed'}}>
                        <Form.Group className="pr-2">
                            <Form.Label>Autorización</Form.Label>
                            <Form.Control type="text" placeholder="
                            Autorización" value={transporte.autorizacion} readOnly />
                          </Form.Group>
                          <Form.Group className="pr-2" >
                          <Form.Label htmlFor="inlineFormInputGroup" >
                            Fecha Emisión
                          </Form.Label>
                          <InputGroup >
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha emisión" value={transporte.fechaEmision} readOnly />
                          </InputGroup>
                          </Form.Group>
                          <Form.Group >
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha Vencimiento
                            </Form.Label>
                            <InputGroup >
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha Vencimiento" value={transporte.fechaVencimiento} readOnly />
                            </InputGroup>
                          </Form.Group>
                      </div>
                      <div className="TarjetaCirculación mt-3">
                        <div className="d-flex">
                        <Form.Group className="pr-2">
                            <Form.Label>Número TUC</Form.Label>
                            <Form.Control type="text" placeholder="N° TUC" value={transporte.nTuc} readOnly />
                          </Form.Group>
                          <Form.Group className="pr-2" >
                          <Form.Label htmlFor="inlineFormInputGroup" >
                            Fecha Emisión
                          </Form.Label>
                          <InputGroup >
                            <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha emisión" value={transporte.fechaEmisionTarjeta} readOnly />
                          </InputGroup>
                          </Form.Group>
                          <Form.Group >
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha Vencimiento
                            </Form.Label>
                            <InputGroup >
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha Vencimiento" value={transporte.fechaVenciTarjeta} readOnly />
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>
                      </div>
                      <div className="Propietario border mt-3 p-3">
                      <p className="font-weight-bold mb-3">
                      <i class="fas fa-male pr-2"></i>
                        PROPIETARIO
                        </p>
                      <div className="d-flex">
                        <Form.Group className="pr-2">
                            <Form.Label>Documento Identidad</Form.Label>
                            <Form.Control type="text" placeholder="
                            DNI" value={transporte.docIdentidad} readOnly />
                          </Form.Group>
                        <Form.Group className="pr-2">
                            <Form.Label>Nro Tarjeta Propiedad</Form.Label>
                            <Form.Control type="text" placeholder="
                            Nro Tarjeta Propiedad" value={transporte.nTarjetaPropiedad} readOnly />
                          </Form.Group>
                          <Form.Group >
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha Tarjeta
                            </Form.Label>
                            <InputGroup>
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha tarjeta" value={transporte.fechaTarjeta} readOnly />
                            </InputGroup>
                          </Form.Group>
                        </div>
                        <Form.Group  className="mb-0">
                            <Form.Label>Nombres y Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Nombres y Apellidos" value={transporte.NombreApellido} readOnly />
                          </Form.Group>
                      </div>
                      <div className="Bajas border p-3 mt-3">
                        <p className="font-weight-bold mb-3">
                        <i class="fas fa-thumbs-down pr-2"></i>
                         BAJA
                        </p>
                        <Row>
                          <Col>
                        <Form.Group  className="mb-0">
                            <Form.Label htmlFor="inlineFormInputGroup" >
                              Fecha baja
                            </Form.Label>
                            <InputGroup >
                              <InputGroup.Prepend>
                              <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Fecha Baja" value={transporte.fechaBaja} readOnly />
                            </InputGroup>
                          </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Motivo Baja</Form.Label>
                            <Form.Control type="text" placeholder="Motivo Baja" value={transporte.motivoBaja} readOnly />
                          </Form.Group>
                          </Col>
                        </Row>
                      </div>
                      <div className="empresa border mt-3 p-3">
                        <h4><i class="fas fa-building pr-2"></i> EMPRESA</h4>
                        <Row>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Ruc</Form.Label>
                            <Form.Control type="text" placeholder="Ruc" value={transporte.ruc} readOnly />
                          </Form.Group>
                          </Col>
                          <Col>
                          <Form.Group  className="mb-0">
                            <Form.Label>Razón Social </Form.Label>
                            <Form.Control type="text" placeholder="Razón Social" value={transporte.razonSocial} readOnly />
                          </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    </Row>
                    </div>
                    {/* ))} */}
                    </Form>
                    }

                    {activeTab === 'informacion' && (
                        <Accordion defaultActiveKey="0" >
                          <AcordionItem eventKey="0" titulo="Resoluciones"/>
                          <AcordionItem eventKey="1" titulo="Normas Vigentes"/>
                        </Accordion>
                    )}
                </Card.Body>
              </Card>


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

<Modal show={modalNewItem} onHide={toggleModalNewItem}  animation={false}>
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
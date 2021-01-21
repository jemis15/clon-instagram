import React from 'react';

function File() {
    return  <li className="border-bottom py-2">
    <div className="float-right">
        <Button type="submit" className="btn-success btn-sm">
        Descargar
        <i className="far fa-file-pdf pl-2"></i>
        </Button>
    </div>
    <p>2.- Formulario N° 00022020</p>
</li>
}

function NewGrupo(){
    return <Form>
        <Form.Group>
            <label >Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripción"/>
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary">Cancelar</Button>{' '}
            <Button variant="primary">Agregar</Button>{' '}
        </Form.Group>
    </Form>
}
function NewItem(){
    return <Form>
        <Form.Group>
            <label>Descripción</label>
            <Form.Control type="text" placeholder="Ingresa Descripcion"></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.File id="Archivo1"/>
        </Form.Group>
        <Form.Group className="float-right">
            <Button variant="secondary">Cancelar</Button>{' '}
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
    <Button className="Insertar ml-auto align-self-start"  variant="primary" onClick={toggleModalNewItem} >
      <i class="fas fa-file-plus pr-2"></i>Agregar
    </Button>
    <span>
      <i className="fas fa-plus" />
    </span>
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
                    <NewItem/>
                </Modal.Body>
            </Modal>
  </>
}
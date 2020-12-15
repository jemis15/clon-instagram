import React, { useState } from 'react';
import { Col, Row, Card, Form, Button, Modal, Label } from 'react-bootstrap';
import img_reclamos from '../assets/images/web/libro.png';
export default function QuejaReclamo() {
  const [modalReclamo, setModalReclamo] = useState(false);
  const toggleModalReclamo = () => setModalReclamo(!modalReclamo);
  function handleSubmit(e){
    e.preventDefault()
  }
  const style = {
    backgroundImage: `url(${img_reclamos})`,
    backgroundRepeat:'no-repeat',
    height:'100px',
    width:'100px',
    backgroundPosition:'center',
	  backgroundAttachment: 'contain',
    backgroundSize: 'cover',
    border:0
}

return <div className="container mt-4"  >
  <Modal show={modalReclamo} onHide={toggleModalReclamo}  animation={false}>
              <Modal.Header closeButton style={{background:'#DFE8F3'}}>
                  <h1>Hoja de Reclamos</h1>
              </Modal.Header>
              <Modal.Body>
                <Row className="mb-5">
                  <Col sm="2">
                  Selecione: 
                  </Col>
                  <Col sm="3">
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                  </Col>
                  <Col sm="2">
                  <Form.Check type="checkbox" label=" Reclamos" />
                  </Col>
                </Row>
                <Form.Control className="mb-3" type="text" placeholder="Nombres y Apellidos" />
                <Form.Control className="mb-3" type="email" placeholder="Email" />
                <Form.Control className="mb-3" type="text" placeholder="Dirección" />
                <Form.Control className="mb-3" type="text" placeholder="DNI" />
                <Form.Control className="mb-3" type="text" placeholder="Telefono" />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describa los hechos y motivos de la queja o reclamación que presenta ante el Servicio de Atención al Cliente de la sociedad:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" size="lg" block>
                  Enviar
                </Button>
              </Modal.Body>

          </Modal>

  <Button  type="button" onClick={toggleModalReclamo} style ={style} />

</div>
}
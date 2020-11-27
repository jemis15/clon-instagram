import React from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';

export default function QuejaReclamo() {
return <div className="container mt-4"  style={{maxWidth: '900px'}} >
<h1 className="text-center">HOJA DE QUEJAS Y RECLAMACIONES</h1>
<Form className="pl-2 pt-4 shadow p-3 mb-5 bg-white rounded" >
                <Row >
                  <Col>
                    <Form.Group>
                      <Form.Label>Fecha: </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Selecciona el tipo de reclamo: </Form.Label>
                        <Form.Check type="radio" label="Queja" />
                        <Form.Check type="radio" label="Reclamo"  className="mt-1"/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button variant="info" type="submit">
                    Enviar
                    <i class="fas fa-paper-plane"></i>
                    </Button>
                  </Col>
                </Row>
                <Form.Label>Nombres y Apellidos </Form.Label>
                      <Form.Control type="text" placeholder="Nombres y Apellidos" />
                <Row className="mt-3">
                  <Col>
                  <Form.Group  controlId="formHorizontalEmail">
                        <Form.Label >
                        Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                  <Col >
                    <Form.Group>
                      <Form.Label>Dirección </Form.Label>
                      <Form.Control type="text" placeholder="Dirección" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row >
                  <Col>
                    <Form.Group>
                      <Form.Label>DNI: </Form.Label>
                      <Form.Control type="text" placeholder="DNI" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group >
                      <Form.Label>Telefono </Form.Label>
                      <Form.Control type="text" placeholder="Telefono" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Describa los hechos y motivos de la queja o reclamación que presenta ante el Servicio de Atención al Cliente de la sociedad:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <p style={{fontSize:'9pt'}}> * Por la presente declaro no tener conocimiento de que la materia objeto de la queja o reclamación está siendo sustanciada a través de un procedimiento administrativo, arbitral o judicial.
                Acepto expresamente la inclusión de los datos proporcionados en este formulario, así como los derivados de la propia tramitación de mi expediente, en el fichero automatizado de datos de carácter personal cuyo titular es Cevs Gestión de Redes, S.L situada en la calle López de Hoyos 190 de Madrid con código postal 28002. La inclusión de mis datos en dicho fichero tendrá como única finalidad tramitar mi queja o reclamación ante la Compañía o Correduría de Seguros según lo dispuesto en la Orden Ministerial Eco/734/2004, en todo momento podré ejercitar mi derecho de acceso, rectificación o cancelación de datos y oposición, siempre que resultase pertinente, así como el de revocación del consentimiento para la cesión de mis datos o para cualquiera de los usos antes señalados.

                En cumplimiento de la legislación vigente, se me ha informado en caso de que mi queja o reclamación llegase al Comisionado para la Defensa del Asegurado y del Partícipe en Planes de Pensiones, Cevs Gestión de Redes S:l esta obligada legalmente a informar de los datos (incluidos los personales) a esta figura de la Dirección General de Seguros y Fondos de Pensiones para que pueda tramitar mi expediente.
                </p>
              </Form>
              
</div>
}
import React from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';

export default function RealizarReclamo(){
    return <div className="container my-5 shadow" style={{border:'2px solid #008000'}}>
        <div className="mx-n3 " style={{backgroundColor:"#008000"}} >
            <h3 className="text-center px-n2  p-3 mb-0" style={{color:'white'}}>REGISTRO RECLAMOS Y SUGERENCIAS </h3>
        </div>
        <div className="mensaje  text-center pl-5 pr-5 mx-n3 pt-3 pb-3 mb-3 mt-0" style={{background:'#F1EEED'}}>
            <p>¡TE ESCUCHAMOS!</p>
<p>Estás en el sistema de reclamos y sugerencias. Aquí podrás realizar el registro de un reclamo, una sugerencia, una denuncia o la solicitud de orientación con relación a cualquier servicio público que brinda la corporación municipal.</p>
        </div>
        <Card>
  <Card.Header style={{background:'#008000', color:'white', borderBottom:'3px solid #EDD016'}}>I. PARÁMETROS DE LA INCIDENCIA</Card.Header>
  <Card.Body>
    <Form>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Tipificación de la Incidencia</Form.Label>
                    <Form.Control as="select" name="tipo">
                        <option>--Seleccione--</option>
                        <option value="0">Reclamos</option>
                        <option value="1">Sugerencias</option>
                        <option value="2">Orientaciones</option>
                        <option value="3">Denuncias</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Realizar la Incidencia de Manera</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                        <option value="0">Anónima</option>
                        <option value="1">Con Reserva de datos</option>
                        <option value="2">Sin reserva de datos</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  </Card.Body>
</Card>
        <Card className="mt-5">
  <Card.Header style={{background:'#008000', color:'white', borderBottom:'3px solid #EDD016'}}>II. DATOS DEL CIUDADANO</Card.Header>
  <Card.Body>
    <Form>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                        <option value="0">DNI</option>
                        <option value="1">CE</option>
                        <option value="2">RUC</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Nombres" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Distrito</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                        <option value="0">Mazamari</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono Celular</Form.Label>
                    <Form.Control type="text" placeholder="Teléfono Celular" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>N° Documento</Form.Label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="N° Documento"/>
                        <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                        <option value="0">Satipo</option>
                        <option value="1">Coviriali</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Teléfono Fijo</Form.Label>
                    <Form.Control type="text" placeholder="Teléfono Celular" />
                </Form.Group>
            </Col>
        </Row>
    </Form>
  </Card.Body>
</Card>
<Card className="mt-5">
  <Card.Header style={{background:'#008000', color:'white', borderBottom:'3px solid #EDD016'}}>III. DETALLE DE LA INCIDENCIA</Card.Header>
  <Card.Body>
    <Form>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Área de reclamo o de la sugerencia</Form.Label>
                    <Form.Control as="select" name="tipo">
                        <option>--Seleccione--</option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Tématica</Form.Label>
                    <Form.Control as="select" name="forma">
                        <option>--Seleccione--</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <p>Ubique el lugar de los hechos en el mapa  (opcional)</p>
        <Button variant="info"> <i class="fas fa-map-marked-alt pr-2"></i>Mapa</Button>
        <Form.Group>
                    <Form.Label>Descripción de la incidencia</Form.Label>
                    <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Adjuntar Archivo" />
  </Form.Group>
  <Row>
      <Col>
      <Button variant="primary"  size="lg" block>Guardar</Button>
      </Col>
      <Col>
      <Button variant="danger" size="lg" block>Cancelar</Button>
      </Col>
  </Row>
    </Form>
  </Card.Body>
</Card>
    </div>
}
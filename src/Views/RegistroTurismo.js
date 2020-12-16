import React from 'react';
import { InputGroup, Button, FormControl, Form, Row, Col, Table  } from 'react-bootstrap';
import img_turismo from '../assets/images/web/obras.jfif';

export default function RegistroTurismo(){
    const style={
        overflow:'hidden',
        width:'100%',
        height:'100%',
        border: '2px solid var(--green-800)',
        padding: '2px',
        borderStyle: 'dotted ',
        borderWidth: '1px'

    }
    const styleScroll = {
        width: '100%', 
        height: '300px', 
        overflow: 'scroll' ,
        overflowX:'hidden',
        whiteSpace: 'nowrap'
    }
    const styleScrollImg = {
        width: '30%', 
        height: '300px', 
        overflow: 'scroll' ,
        overflowX:'hidden',
        whiteSpace: 'nowrap'
    }
    return <div className="container border my-5"  >
        <h1 className="text-center"> Registro Lugares Turisticos</h1>
        
        <Form>
        <Form.Group >
            <Form.Label>Nombre Del Lugar:</Form.Label>
            <Form.Control type="text" placeholder="Nombre Lugar Turistico" />
        </Form.Group>
        <Form.Group >
            <Form.Label>Descripción:</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Ubicación:</Form.Label>
                    <Form.Control type="text" placeholder="Ubicación" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Como Llegar:</Form.Label>
                    <Form.Control type="text" placeholder="Google Maps" />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Button variant="info"  className="mb-3 float-right" style={{width:'100%'}}>
                    Guardar
                </Button>
            </Col>
        </Row>
        <div className="imagenes">
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Agregar Imagenes: " />
            </Form.Group>
            <div className="contenidoImagenes mt-3" 
        style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gridGap: '1rem'
            }}>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_turismo} className="img_restaurante  " style={style} />
                </div>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_turismo} className="img_restaurante  " style={style} />
                </div>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_turismo} className="img_restaurante  " style={style} />
                </div>
                
        </div>
        </div>
    </Form>
        
        <div className="d-flex mt-3 mb-3">
            <div className="TablaImagenes border p-3" style={styleScrollImg}>
                <h4><i className="fas fa-images pr-3 "></i>Imagenes</h4>
                <div className="CajaTurismo shadow position-relative"  >
                    <img  src={img_turismo} className="img_restaurante  " style={style} />
                </div>
                <p className="text-center " style={{fontSize:'10px'}}>descripcion de imagen</p>
                <Table  className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>Imagenes</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                    <td>
                    <img  src={img_turismo} className="img_Turismo " style={{width:'50px', height:'50px'}} />
                    </td>
                    <td>
                        <i className="fas fa-edit pr-3 mt-3" style={{color:'var(--green-500)', fontSize:'1.5rem'}}></i>
                        <i className="fas fa-trash" style={{color:'var(--red-600)', fontSize:'1.5rem'}}></i>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <img  src={img_turismo} className="img_Turismo " style={{width:'50px', height:'50px'}} />
                    </td>
                    <td>
                        <i className="fas fa-edit pr-3 mt-3" style={{color:'var(--green-500)', fontSize:'1.5rem'}}></i>
                        <i className="fas fa-trash" style={{color:'var(--red-600)', fontSize:'1.5rem'}}></i>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <img  src={img_turismo} className="img_Turismo " style={{width:'50px', height:'50px'}} />
                    </td>
                    <td>
                        <i className="fas fa-edit pr-3 mt-3" style={{color:'var(--green-500)', fontSize:'1.5rem'}}></i>
                        <i className="fas fa-trash" style={{color:'var(--red-600)', fontSize:'1.5rem'}}></i>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <div className="TablaOperadores border ml-3 p-3" style={styleScroll}>
                <h4><i className="fas fa-id-card pr-3 mb-3"/>Operadores Turisticos</h4>
                <Row>
                <Col>
                    <Form.Control type="text" placeholder="Ruc" />
                </Col>
                <Col>
                <Form.Control as="select">
                    <option>Razon Social</option>
                </Form.Control>
                </Col>
                <Col sm="auto">
                <Button variant="info"  className="mb-3">
                    Agregar
                </Button>
                </Col>
                </Row>
                <Table  className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>RUC</th>
                    <th>Razon Social</th>
                    <th>Encargado</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>fdgdg</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>hdewuirhi@gmail.com</td>
                    <td>ajadhnijd</td>
                    <td className="text-center">
                        <i className="fas fa-edit pr-3 " style={{color:'var(--green-500)'}}></i>
                        <i className="fas fa-trash" style={{color:'var(--red-600)'}}></i>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
</div>
}
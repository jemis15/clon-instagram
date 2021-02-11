import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import img_Anuncios from '../assets/images/web/obras.jfif';

export default function Anuncios(){
    const style = {
        padding: '5px',
        width: '100%',
        fontFamily: 'sans-serif',
        fontSize:'10pt',
        display:' block',
        backgroundColor: '#367F13',
        position: 'absolute',
        color:'white',
        left:' 50%',
        bottom: '0px',
        transform: 'translateX(-50%)',
        textAlign:'center'
    }
    return <div className="container my-5 border shadow pl-5 pr-5 pb-5" >
        <div className="mb-4 mt-3 " style={{borderBottom:"3px solid #EDD016"}} >
            <h3 className="p-2" >ANUNCIOS</h3>
        </div>
        <Form className="border p-4 mb-3">
                    <Form.Group >
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Asunto" />
                    </Form.Group>
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Desde</Form.Label>
                        <Form.Control size="sm" type="date"  />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group >
                        <Form.Label>Hasta</Form.Label>
                        <Form.Control size="sm" type="date"/>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="info">Buscar<i className="fas fa-search pl-2" ></i></Button>
            
        </Form>
        <Alert variant="success" className="mb-5" >
                <Alert.Heading>Resultados</Alert.Heading>
            </Alert>
        <div className="contenido" 
        style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap: '1rem'
            }}>
                <div className=" shadow position-relative"  style={{height:'250px'}}>
                    <img  src={img_Anuncios} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                    ATENCIÓN EN DEMUNA
                    <br/>
                    <i class="fal fa-calendar-alt ">{' '} 12/12/20220</i>
                        </span>
                </div>
                <div className=" shadow position-relative"  >
                    <img  src={img_Anuncios} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                    DÍA DE LA CANCIÓN CRIOLLA
                    <br/>
                    <i class="fal fa-calendar-alt ">{' '} 12/12/20220</i>
                        </span>
                </div>
                <div className=" shadow position-relative"  >
                    <img  src={img_Anuncios} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                    CONFERENCIA  
                    <br/>
                    <i class="fal fa-calendar-alt ">{' '} 12/12/20220</i>
                        </span>
                </div>
        </div>
    </div>
}
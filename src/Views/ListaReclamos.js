
import React, { useState } from 'react';
import { Table, Button, Card, Modal } from 'react-bootstrap';

export default function ListaReclamos(){
return <div className="container  my-5" style={{width:'800px'}}>
    <div className="TituloReclamo mb-5" style={{textAlign:'center', fontFamily: "cursive"}}>
        
        <h2>Reclamos Realizados</h2>
    </div>
    <div className="ListaReclamos my-3">
        <Card  className="mb-3" style={{border:"1px solid #771212 "}}>
            <Card.Body>
                <Card.Title style={{color:'#771212 '}}>Pedro Cardenas Veliz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CardenasVelizPedrito@gmail.com</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">21-10-2020</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Por medio de la siguiente carta de reclamo, quisiera hacer constar mi insatisfacción con respecto al trato obtenido en su sucursal, por parte del operario Don Francisco García que amablemente nos atendió en un principio, hasta que la conversación tomó derroteros más calientes que finalizaron con una agresión a mi señora esposa.

                    No hemos realizado ninguna denuncia en la policía y preferimos que este lamentable
                     suceso se arregle por la vía amistosa.

                    Sin embargo le transmito mi más profundo malestar por lo sucedido y le aplazo una 
                    reunión con usted y con el señor Francisco presente para que arreglemos todo de una forma civilizada.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Pedro Cardenas Veliz</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CardenasVelizPedrito@gmail.com</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">21-10-2020</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.Por medio de la siguiente carta de reclamo, quisiera hacer constar mi insatisfacción con respecto al trato obtenido en su sucursal, por parte del operario Don Francisco García que amablemente nos atendió en un principio, hasta que la conversación tomó derroteros más calientes que finalizaron con una agresión a mi señora esposa.

                    No hemos realizado ninguna denuncia en la policía y preferimos que este lamentable
                     suceso se arregle por la vía amistosa.

                    Sin embargo le transmito mi más profundo malestar por lo sucedido y le aplazo una 
                    reunión con usted y con el señor Francisco presente para que arreglemos todo de una forma civilizada.
                </Card.Text>
            </Card.Body>
        </Card>
   </div>
</div>
}
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img_Hoteles from '../assets/images/web/restaurante.jpg';

export default function ListHoteles(){
    return <div className="container mb-3">
        <h1 className="text-center"> Hoteles de Mazamari</h1>
        <div className="Lista_Hoteles mt-3" style={{ width: '90%', display: 'grid',  
        gridTemplateColumns:' repeat(2, minmax(200px, 1fr))',  gridGap: '1rem'}}>
            <div>
            <Card style={{ width: '18rem', padding:'5px', border:'1px solid green' }}>
                <Card.Img variant="top" src={img_Hoteles} />
                <a className="align-self-center mt-1">Hotel Presidencial</a>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem', padding:'5px', border:'1px solid green' }}>
                <Card.Img variant="top" src={img_Hoteles} />
                <a className="align-self-center mt-1">Hotel Presidencial</a>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem', padding:'5px', border:'1px solid green' }}>
                <Card.Img variant="top" src={img_Hoteles} />
                <a className="align-self-center mt-1">Hotel Presidencial</a>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem', padding:'5px', border:'1px solid green' }}>
                <Card.Img variant="top" src={img_Hoteles} />
                <a className="align-self-center mt-1">Hotel Presidencial</a>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem', padding:'5px', border:'1px solid green' }}>
                <Card.Img variant="top" src={img_Hoteles} />
                <a className="align-self-center mt-1">Hotel Presidencial</a>
            </Card>
            </div>
        </div>
        
    </div>
}

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import img_restaurante from '../assets/images/web/restaurante.jpg';

export default function ListRestaurantes(){
    return <div className="container mb-3 ">
        <h1 className="text-center mb-4">Restaurantes de Mazamari</h1>
        <div className="contenido" style={{ width: '90%', display: 'grid',  gridTemplateColumns:' repeat(auto-fit, minmax(200px, 1fr))',  gridGap: '2rem'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img_restaurante} className="img_restaurante  my-3 mx-3" style={{overflow:'hidden', padding:'10px', border:'3px solid green', width:'90%'}} />
            <Card.Body>
                <Card.Title>Restautante el buen sabor</Card.Title>
                <Card.Text>
                <p>Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                <label><i class="fas fa-map-marked-alt pr-2 pl-2"></i>Av. Republica Suiza Nª 365 </label>
                <label> <i class="fab fa-facebook pl-2 pr-2"></i>Recreo la Orilla</label>
                <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>Reservas: 963245871</label>
                </Card.Text>
                <Button variant="primary" className="float-right" src="/Restaurantes">Visitar</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img_restaurante} className="img_restaurante  my-3 mx-3" style={{overflow:'hidden', padding:'10px', border:'3px solid green', width:'90%'}} />
            <Card.Body>
                <Card.Title>Restautante el buen sabor</Card.Title>
                <Card.Text>
                <p>Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                <label><i class="fas fa-map-marked-alt pr-2 pl-2"></i>Av. Republica Suiza Nª 365 </label>
                <label> <i class="fab fa-facebook pl-2 pr-2"></i>Recreo la Orilla</label>
                <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>Reservas: 963245871</label>
                </Card.Text>
                <Button variant="primary" className="float-right" src="/Restaurantes">Visitar</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img_restaurante} className="img_restaurante  my-3 mx-3" style={{overflow:'hidden', padding:'10px', border:'3px solid green', width:'90%'}} />
            <Card.Body>
                <Card.Title>Restautante el buen sabor</Card.Title>
                <Card.Text>
                <p>Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                <label><i class="fas fa-map-marked-alt pr-2 pl-2"></i>Av. Republica Suiza Nª 365 </label>
                <label> <i class="fab fa-facebook pl-2 pr-2"></i>Recreo la Orilla</label>
                <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>Reservas: 963245871</label>
                </Card.Text>
                <Button variant="primary" className="float-right" src="/Restaurantes">Visitar</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={img_restaurante} className="img_restaurante  my-3 mx-3" style={{overflow:'hidden', padding:'10px', border:'3px solid green', width:'90%'}} />
            <Card.Body>
                <Card.Title>Restautante el buen sabor</Card.Title>
                <Card.Text>
                <p>Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
                <label><i class="fas fa-map-marked-alt pr-2 pl-2"></i>Av. Republica Suiza Nª 365 </label>
                <label> <i class="fab fa-facebook pl-2 pr-2"></i>Recreo la Orilla</label>
                <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>Reservas: 963245871</label>
                </Card.Text>
                <Button variant="primary" className="float-right" src="/Restaurantes">Visitar</Button>
            </Card.Body>
        </Card>
        </div>
    </div>
}
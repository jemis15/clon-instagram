import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export default function Hoteles() {
    const style = {
        height: '400px',
        backgroundImage: `url(https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg)`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover'
    }
    return <div className="container my-5 border " style={{ width: '700px' }}>
        <div className="Cont_imagenes mx-n3" style={style}>
            <div className="Nombre_Hotel ">
                <p>Hospedaje Presidencial</p>
            </div>
            <div className="my-5 mazamari" >
                <p className="mb-0 " style={{ fontFamily: 'fantasy', fontSize: '20pt', margin: '10px' }}>MAZAMARI</p>
                <p style={{ fontFamily: 'fantasy', fontSize: '13pt', paddingLeft: '10px', fontWeight: '200' }}>Espera por ti</p>
            </div>
            <div className="Imagen_muestra pl-5 pr-5">
                <div>
                    <img src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" alt="hotel" className="img-fluid " />
                </div>
                <div>
                    <img src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" alt="hotel" className="img-fluid" />
                </div>
                <div>
                    <img src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" alt="hotel" className="img-fluid" />
                </div>
            </div>
        </div>
        <CardDeck className="mt-5">
            <Card className="shadow">
                <Card.Img variant="top" src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="shadow">
                <Card.Img variant="top" src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="shadow">
                <Card.Img variant="top" src="https://image.freepik.com/free-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_159024-225.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <div className="Informes_Hoteles mx-n3 mt-3">
            <label><i class="fas fa-map-marked-alt pr-2"></i>Av. Republica Suiza Nª 365 </label>
            <label> <i class="fab fa-facebook pl-2 pr-2"></i>Hospedaje Presidencial</label>
            <label> <i class="fas fa-phone-alt pl-2 pr-2"></i>963245871 / 963245781</label>
        </div>
    </div>
}
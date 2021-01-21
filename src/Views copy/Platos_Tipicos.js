import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img_Plato from '../assets/images/web/chicharron.jpg'

export default function Platos_Tipicos(){
    return <div className="container border my-5 pl-5 pr-5 pb-5" style={{width:'700px'}}>
        <div className="NombrePlato p-3 mx-n5 mb-3" style={{fontFamily:' Arial, Helvetica, sans-serif',fontSize:'30pt',  textAlign:'center', background:'#49B023'}}>
            <label>Chicharrón de Doncella</label>
        </div>
        <Row>
            <Col className="align-self-center">
                <div className="Ingredientes align-self-center p-3" >
                    <p className="font-weight-700" style={{fontFamily: '"Times New Roman", Times, serif', fontSize:'20pt'}}>Ingreditentes: </p>
                    <ul className="p-4 rounded" style={{background:'rgba(25, 163, 163, 0.541)'}}>
                        <li>Merluza (puede ser congelada) – 500 g</li>
                        <li>Maicena o harina de maíz – 250 g</li>
                        <li>Ajo en polvo – 2 cucharaditas</li>
                        <li>Huevos – 2 unidades</li>
                        <li>Romero seco - ½ cucharadita</li>
                        <li>Sal – al gusto</li>
                        <li>Pimienta – ¼ de cucharadita</li>
                        <li>Zumo de limón – el de un limón</li>
                        <li>Aceite de oliva sabor suave –80 ml</li>
                    </ul>
                </div>
            </Col>
            <Col className="align-self-center">
            <div>
                <img src={img_Plato}  alt="Plato_Tipico" className="img-fluid rounded shadow" style={{width:'100%'}} />
            </div>
            </Col>
        </Row>
        <div>
                <div className="Preparación">
                    <p className="font-weight-700" style={{fontFamily: '"Times New Roman", Times, serif', fontSize:'20pt'}}>Preparación: </p>
                    <ul className="pl-5  pr-5 pt-3 pb-3 rounded " style={{background:'#EEB2BA'}}>
                        <li className="mb-2">El chicharrón se puede hacer con otros pescados como el lenguado o el bacalao, 
                            si lo compras congelado, es conveniente lo dejes en la nevera la noche anterior. 
                            Así estará descongelado para la receta. Seca bien el pescado con un paño o papel de
                            cocina. Cortar el pescado en trocitos del tamaño de un bocado.
                        </li>
                        <li className="mb-2">Añade la harina de maíz en un recipiente, mezcla con el romero, el zumo de limón, 
                            sal, ajo en polvo, y pimienta. Incorpora los trozos de pescado a esta mezcla y reboza bien
                            por todos lados. Deja reposar diez minutos.
                        </li>
                        <li className="mb-2">
                        Prepara dos platos, uno con los dos huevos batidos, otro con papel de de cocina.
                         Prepara una sartén con aceite a fuego flojo, mientras el pescado que tenemos rebozado 
                         lo pasamos por el huevo batido. Escurre y a la sartén. Sube el fuego a media temperatura.
                          Cocina el pescado hasta que quede dorado. Dejar que repose en el plato con papel de cocina
                        </li>
                        <li className="mb-2">
                        Servir acompañado de limón o mayonesa.
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{background:'#DB6E6E', padding:'5px', textAlign:'center', fontFamily:'cursive', fontSize:'15pt'}}>
                Restaurantes donde Encontras
            </div>
            <div className="Restaurant mx-5 mt-3 p-3  d-flex"  >
                <div>
                    <ul className="d-flex flex-wrap list-unstyled justify-content-center">
                        <li className="mb-2 text-nowrap px-2 py-1  ml-1" style={{border:'3px solid #96EF37', background:'#96EF37'}}><a href="#"><i class="fas fa-utensils pr-2"></i>Las Palmeras</a></li>
                        <li className="mb-2 text-nowrap px-2 py-1 ml-1" style={{border:'3px solid #96EF37', background:'#96EF37'}}><a href="#"><i class="fas fa-utensils pr-2"></i>Las Palmeras</a></li>
                        <li className="mb-2 text-nowrap px-2 py-1 ml-1" style={{border:'3px solid #96EF37', background:'#96EF37'}}><a href="#"><i class="fas fa-utensils pr-2"></i>Las Palmeras</a></li>
                        <li className="mb-2 text-nowrap px-2 py-1  ml-1" style={{border:'3px solid #96EF37', background:'#96EF37'}}><a href="#"><i class="fas fa-utensils pr-2"></i>Las Palmeras</a></li>
                        <li className="mb-2 text-nowrap px-2 py-1 ml-1" style={{border:'3px solid #96EF37', background:'#96EF37'}}><a href="#"><i class="fas fa-utensils pr-2"></i>Las Palmeras</a></li>
                    </ul>
                </div>
            </div>
    </div>
}
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import img_platos from '../assets/images/web/chicharron.jpg';

export default function ListPlatosTipicos(){
    return <div className="container mb-3">
        <h1 className="text-center mb-4">Platos Tipicos </h1>
        <div className="contenido" 
        style={{ width: '90%', display: 'grid',  gridTemplateColumns:' repeat(2, minmax(200px, 1fr))',  gridGap: '1rem'}}>

                        <div className="plat1 d-flex p-2 shadow" style={{border:'1px solid purple'}}>
                            <img src={img_platos} alt="" className="rounded-circle align-self-center" style={{height:'100px', width:'100px'}} />    
                            <div className="pl-2 align-self-center">
                                <a href="#" style={{color:'purple', fontFamily:'cursive', fontWeight:'400'}} >Tacacho con cecina y chorizo</a >
                                <p className="mt-2">Plato emblemático de la selva peruana. Consta de plátano verde (frito o asado) 
                                    el cual es machacado y mezclado con manteca de cerdo.</p>
                            </div>
                        </div>
                        <div className="plat1 d-flex p-2 shadow" style={{border:'1px solid purple'}}>
                            <img src={img_platos} alt="" className="rounded-circle align-self-center" style={{height:'100px', width:'100px'}} />    
                            <div className="pl-2 align-self-center">
                                <a href="#" style={{color:'purple', fontFamily:'cursive', fontWeight:'400'}} >Inchicapi de gallina con maní</a>
                                <p className="mt-2">Exquisita sopa de la Amazonía, la cual tiene como peculiar ingrediente a la gallina criada en corral (gallina doméstica),
                                     maní licuado o molido, maíz, yuca y cilantro. </p>
                            </div>
                        </div>
                        
                        <div className="plat1 d-flex p-2 shadow" style={{border:'1px solid purple'}}>
                            <img src={img_platos} alt="" className="rounded-circle align-self-center" style={{height:'100px', width:'100px'}} />    
                            <div className="pl-2 align-self-center">
                                <a href="#" style={{color:'purple', fontFamily:'cursive', fontWeight:'400'}} >Tacacho con cecina y chorizo</a>
                                <p className="mt-2">Plato emblemático de la selva peruana. Consta de plátano verde (frito o asado) 
                                    el cual es machacado y mezclado con manteca de cerdo.</p>
                            </div>
                        </div>
                        <div className="plat1 d-flex p-2 shadow" style={{border:'1px solid purple'}}>
                            <img src={img_platos} alt="" className="rounded-circle align-self-center" style={{height:'100px', width:'100px'}} />    
                            <div className="pl-2 align-self-center">
                                <a href="#" style={{color:'purple', fontFamily:'cursive', fontWeight:'400'}} >Inchicapi de gallina con maní</a>
                                <p className="mt-2">Exquisita sopa de la Amazonía, la cual tiene como peculiar ingrediente a la gallina criada en corral (gallina doméstica),
                                     maní licuado o molido, maíz, yuca y cilantro. </p>
                            </div>
                        </div>
        </div>
    </div>
}
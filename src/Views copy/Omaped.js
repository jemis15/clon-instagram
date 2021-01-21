import React from 'react';
import foto from '../assets/images/web/cosechaCafe.jpg';

export default function Omaped(){
    return <div className="container my-5   pl-5 pr-5  pb-5 shadow" style={{width:'800px', border:'2px solid #008000'}}>
        <h4 className="text-center mb-4  p-4 mx-n5"  style={{ background:' #008000', color:'white'}}>OMAPED - Oficina Municipal de Atención a las Personas con Discapacidad</h4>
        <div className="imagen text-center mb-5" >
        <img src={foto} alt="Omaped" class="rounded" />
        </div>
        <b className="mt-5">¿Que es Omaped?</b>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enimvoluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
        <b className="mt-4">Servicios</b>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
    </div>
}
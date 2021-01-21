import React from 'react';
import foto from '../assets/images/web/cosechaCafe.jpg';

export default function Piced(){
    return <div className="container my-5   pl-5  pr-5 pb-5 shadow" style={{width:'800px', border:'2px solid #008000'}}>
        <h4 className="text-center mb-4  p-4 mx-n5"  style={{ background:' #008000', color:'white'}}>PICED - Centro de Estimulación Temprana para niños de 0 a 3 años de edad y estimulación prenatal para madres gestantes</h4>
        <div className="imagen text-center mb-5" >
        <img src={foto} alt="VasoLeche" class="rounded" />
        </div>
        <b className="mt-5">¿Que es PICED?</b>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enimvoluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
        <b className="mt-4">Atenciones y Consultas</b>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
    </div>
}
import React from 'react';
import foto from '../assets/images/web/cosechaCafe.jpg';

export default function Policlinico(){
    return <div className="container my-5   pl-5 pr-5 pb-5 shadow" style={{width:'800px', border:'2px solid #008000'}}>
        <h4 className="text-center mb-4  p-4 mx-n5"  style={{ background:' #008000', color:'white'}}>Policlínico Municipal</h4>
        <div className="imagen text-center mb-5" >
        <img src={foto} alt="   policlinico" class="rounded" />
        </div>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enimvoluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.periam sequi enim voluptatum quod aliquid blanditiis, magnam fugiat sint? Natus, architecto fuga. Saepe natus illo nihil? Quam neque commodi corporis quae.
        </p>
    </div>
}
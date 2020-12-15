import React from 'react';

import img_vision from '../assets/images/web/paisaje.jpg';

export default function VisionMision() {

    return <div className="container border rounded p-5 my-5" style={{width:"800px"}}>
        <img src={img_vision} className="rounded mx-auto d-block" alt="vision y mision" style={{width:"700px"}} />
        <br />
    {/* Mision */}
    <div className="vision">
        <div className="clearfix">
            <h3>Vision Institucional</h3>
                <p className="float-right border rounded text-justify p-2" style={{width:"650px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias
                orem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias
                orem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias</p>
                
            <div>
            <ul className="float-right">
                    <li className="list-unstyled" style={{color:"green"}} ><i class="fa fa-file pr-2 pr-2" aria-hidden="true" /><a href="#">Plan estrategico 2019-2022</a></li>
                    <li className="list-unstyled" style={{color:"green"}} ><i class="fa fa-file pr-2 pr-2" aria-hidden="true" /><a href="#">Plan estrategico 2019-2022</a></li>
            </ul>
            </div>
        
        </div>
    </div>
    <div className="mision">
        <div className="clearfix">
            <h3>Mision Institucional</h3>
                <p className="float-right border rounded text-justify p-2" style={{width:"650px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias
                orem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias
                orem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias</p>
                
            <div>
            <ul className="float-right">
            <li className="list-unstyled" style={{color:"green"}} ><i class="fa fa-file pr-2 pr-2" aria-hidden="true" /><a href="#">Plan estrategico 2019-2022</a></li>
                    <li className="list-unstyled" style={{color:"green"}} ><i class="fa fa-file pr-2 pr-2" aria-hidden="true" /><a href="#">Plan estrategico 2019-2022</a></li>
            </ul>
            </div>
        
        </div>
    </div>
  </div>
}
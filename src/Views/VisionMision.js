import React from 'react';

import img_vision from '../assets/images/web/descarga.jpg';

export default function VisionMision() {

    return <div className="container">
        <img src={img_vision} className="rounded mx-auto d-block" alt="vision y mision" />
        <br />
    {/* Mision */}
    <div className="row">
        <div className="col-sm-3">
            <img src={img_vision} className="img-thumbnail" alt="vision" />
        </div>
        <div className="col-sm-9">
        <h3>Mision Institucional</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias, placeat commodi dolores tempore hic quisquam molestiae magnam explicabo sint temporibus culpa tenetur velit voluptatem non eius! Reprehenderit!</p>
        </div>
    </div>
  {/* vISION */}
    <br />
    <div className="row">
        <div className="col-sm-9">
            <h3>Vision Institucional</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perspiciatis, dicta alias, placeat commodi dolores tempore hic quisquam molestiae magnam explicabo sint temporibus culpa tenetur velit voluptatem non eius! Reprehenderit!</p>
        </div>
        <div className="col-sm-3">
        <img src={img_vision} className="img-thumbnail" alt="mision" />
        </div>
    </div>
  </div>
}
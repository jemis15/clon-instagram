import React from 'react';

import image from '../../../assets/images/img1.jpg';

export default function Lista() {
    return <>
        <h3 className="h3 font-weight-bold">Plato Tipicos</h3>
        <div className="grid-plato-tipicos">
            <div className="border rounded bg-light">
                <img src={image} className="img-fluid" />
            </div>
            <div className="border rounded bg-light">
                <img src={image} className="img-fluid" />
            </div>
            <div className="border rounded bg-light">
                <img src={image} className="img-fluid" />
            </div>
            <div className="border rounded bg-light">
                <img src={image} className="img-fluid" />
            </div>
        </div>
    </>
}
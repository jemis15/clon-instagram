import React from 'react';

export default function Lista() {
    return <>
        <h2 className="mb-2 h2 font-weight-bold">Turismo</h2>

        <div className="grid-turismos">
            <div>
                <img src="/apimuni/images/carousellinks/20201103173845.png" className="img-fluid" alt="turismo" />
                <p>Catarata de los cielos</p>
            </div>
            <div>
                <img src="/apimuni/images/carousellinks/20201103173845.png" className="img-fluid" alt="turismo" />
                <p>Ciudad de los duendes</p>
            </div>
            <div>
                <img src="/apimuni/images/carousellinks/20201103173845.png" className="img-fluid" alt="turismo" />
                <p>Pasaje en bote</p>
            </div>
        </div>
    </>
}
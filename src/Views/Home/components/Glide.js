import Glide from '@glidejs/glide';
import React, { useEffect, useRef } from 'react';

export default function GlideComponent(props) {
    const myref = useRef();
    var options = props.options ? props.options : {};

    useEffect(() => {
        if (myref.current) {
            new Glide(myref.current, options).mount();
        }
    }, [myref.current]);

    return <div ref={myref} className="glide">
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
                {props.children}
            </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                <i className="fa-lg fas fa-angle-left"></i>
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                <i className="fa-lg fas fa-angle-right"></i>
            </button>
        </div>
    </div>
}

export function GlideItem(props) {
    return <li className={`glide__slide ${props.className}`}>
        {props.children}
    </li>
}

/*
{
    type: 'carousel',
    perView: 7,
    gap: '16',
    autoplay: '3000',
    animationDuration: 700,
    breakpoints: {
        800: { perView: 5 },
        600: { perView: 3 },
        400: { perView: 2 },
    }
}
*/
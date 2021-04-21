import React, { useEffect, useRef } from 'react';
import CarouselLink from './CarouselLink';
import Glide from '@glidejs/glide';
import { useLink } from '..';

export default function CarouselLinksFooter() {
    const { links } = useLink();

    if (links.intereses.length === 0) {
        return null;
    }

    return <Carousel links={links} />
}

function Carousel({ links }) {
    const myref = useRef();

    useEffect(() => {
        if (myref.current) {
            new Glide(myref.current, {
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
            }).mount()
        }
    }, [myref]);

    return <div className="py-5 border-5 border-top border-bottom border-white">
        <div className="container-xxl">
            <div ref={myref} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {links.intereses.map(link => (
                            <li key={link.id} className="glide__slide">
                                <CarouselLink
                                    key={link.id}
                                    url={link.redirect_to}
                                    image={link.image}
                                />
                            </li>
                        ))}
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
        </div>
    </div>
}
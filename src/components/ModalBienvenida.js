import Glide from '@glidejs/glide';
import React, { useEffect, useRef } from 'react';

export default function ModalBienvenida({ data, onHide }) {
    const listaModales = data;
    // ocultemos el scroll y escuchemos el presionado del Escape para salir
    useEffect(() => {
        document.body.style = "overflow: hidden;"
        document.body.addEventListener('keydown', miEscuchadorDeEventos);
        
        function miEscuchadorDeEventos(e) {
            if (e.key === 'Escape') {
                onHide();
            }
        }

        return () => {
            document.body.style = "overflow: auto";
            document.body.removeEventListener('keydown', miEscuchadorDeEventos);
        }
    }, []);

    if (!listaModales || listaModales.length === 0) {
        return null;
    }

    return <ContainerModal>
        {listaModales.length === 1
            ? <Content type={listaModales[0].type} url={listaModales[0].url} />
            : <Carousel options={{ gap: 0 }}>
                {listaModales.map((modal, key) => (
                    <CarouselItem key={key}>
                        <Content type={modal.type} url={modal.url} />
                    </CarouselItem>
                ))}
            </Carousel>
        }
        <ButtonClose onClick={onHide} />
    </ContainerModal>
}

const ContainerModal = (props) => (
    <div
        onKeyPress={() => console.log('Hola mundo')}
        className="overflow-hidden d-flex justify-content-center align-items-center"
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
        {props.children}
    </div>
)

const ButtonClose = (props) => (
    <button
        onClick={props.onClick}
        className="d-flex justify-content-center align-items-center"
        style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            border: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
    </button>
)

function Content(props) {
    switch (props.type) {
        case 'video-facebook':
            return <EmbedVideoFacebook url={props.url} />;
        case 'image':
            return <EmbedImage url={props.url} />;
        default:
            return <div>El formato no es compatible.</div>
    }
}

function EmbedVideoFacebook(props) {
    return <div className="bg-dark" style={{ maxWidth: '1000px', width: '100%' }}>
        <div
            className="fb-video"
            data-href={props.url}
            data-show-text="false"
            data-autoplay="true"
            data-lazy="true">
            <blockquote
                cite={props.url}
                className="fb-xfbml-parse-ignore">
                <a href={props.url}>How to Share With Just Friends</a>
                <p>How to share with just friends.</p>Publicado por <a href="https://www.facebook.com/facebookapp/">Facebook App</a> en Viernes, 5 de diciembre de 2014
            </blockquote>
        </div>
    </div>
}

function EmbedImage(props) {
    return <img
        src={props.url}
        style={{ maxWidth: '100%', maxHeight: '60%' }}
        alt="Mazamari comunica."
    />
}

function Carousel(props) {
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

function CarouselItem(props) {
    return <li
        className={`glide__slide d-flex justify-content-center align-items-center ${props.className}`}
        style={{ height: '100vh' }}>
        {props.children}
    </li>
}
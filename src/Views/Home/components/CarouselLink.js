import React from 'react';

export default function CarouselLink({ link }) {
    if (!link.image || !link.url) {
        return null;
    }

    return <div className="ratio ratio-16x9">
        <a
            className="d-flex justify-content-center align-items-center"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={link.image}
                alt="carousel link"
                loading="lazy"
                className="post-image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </a>
    </div>
}
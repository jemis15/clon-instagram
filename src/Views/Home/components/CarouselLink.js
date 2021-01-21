import React from 'react';

export default function CarouselLink({ link }) {
    if (!link.image || !link.url) {
        return null;
    }

    return <div className="ratio ratio-16x9 bg-grey-300">
        <a
            className="d-flex w-100 h-100 justify-content-center align-items-center"
            href={link.url}
            target="_blank">
            <img
                src={`/apimuni/images/links/${link.image}`}
                alt="carousel link"
                loading="lazy"
                className="post-image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </a>
    </div>
}
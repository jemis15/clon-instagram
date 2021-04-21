import React from 'react';

export default function CarouselLink({ url, image }) {
    if (!image || !url) {
        return null;
    }

    return <div className="ratio ratio-16x9 bg-white rounded-3" style={{border: '1px solid var(--grey-300)'}}>
        <a
            className="d-flex justify-content-center align-items-center"
            href={url}
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={image}
                alt="carousel link"
                loading="lazy"
                className="post-image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </a>
    </div>
}
import React from 'react';

export default function CircleBadgeIcon({ className, image }) {
    return <img
        src={image}
        className={`circleBadge-icon ${className}`}
        loading="lazy"
        alt="link"
    />
}
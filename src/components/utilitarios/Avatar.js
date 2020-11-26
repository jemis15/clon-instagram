import React from 'react';

export default function Avatar({ size, className, image, initials }) {
    return <div className={`avatar avatar-${size} ${className} rounded-circle overflow-hidden d-block bg-primary`}>
        {initials && !image && <div className="text-center user-initials text-white">{initials}</div>}
        {image && <img
            src={image}
            className="img-fluid"
            alt="avatar"
            loading="lazy"
        />}
    </div>
}
import React from 'react';

export default function Avatar({ size, className, image, initials }) {
    return <div
        className={`avatar avatar-${size} ${className} rounded-circle overflow-hidden d-flex justify-content-center align-items-center bg-primary`}>
        {initials && !image && <div className="user-initials text-white">{initials}</div>}
        {image && <img
            src={image}
            className="w-100"
            alt="avatar"
            loading="lazy"
        />}
    </div>
}
import React from 'react';

export default function Avatar({ size, className, image, initials }) {
    return <div
        className={`avatar avatar-${size} ${className} rounded-circle overflow-hidden d-flex justify-content-center align-items-center bg-light`}>
        <img src={image || `https://ui-avatars.com/api/?name=${initials}&size=200&background=random`} className="w-100" alt="avatar" loading="lazy" />
    </div>
}
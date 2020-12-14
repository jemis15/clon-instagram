import React from 'react';

export default function CircleBadge({ className, children }) {
    return <div className={`circleBadge ${className}`}>{children}</div>
}
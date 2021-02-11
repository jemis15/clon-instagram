import React from 'react';
import CircleBadge from '../Views/Home/components/CircleBadge';
import CircleBadgeIcon from '../Views/Home/components/CircleBadgeIcon';

export default function Marker({ url, image, descripcion, nombre }) {
    return <a
        href={url}
        target="_blank"
        className="marker hover rounded-lg d-flex text-decoration-none">
        <div className="me-3">
            <CircleBadge>
                <CircleBadgeIcon image={image} />
            </CircleBadge>
        </div>
        <div>
            <div className="font-weight-600" style={{color: 'var(--grey-700)'}}>
                {nombre}
            </div>
            <div className="text-small">
                {descripcion}
            </div>
        </div>
    </a>
}
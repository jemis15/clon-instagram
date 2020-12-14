import React from 'react';
import CircleBadge from './CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';

export default function Marker({ url, image, descripcion, nombre }) {
    return <a
        href={url}
        target="_blank"
        className="marker hover rounded-lg d-flex text-decoration-none">
        <div className="mr-3">
            <CircleBadge>
                <CircleBadgeIcon image={image} />
            </CircleBadge>
        </div>
        <div>
            <div className="font-weight-600">
                {nombre}
            </div>
            <div className="text-small color-text-light">
                {descripcion}
            </div>
        </div>
    </a>
}
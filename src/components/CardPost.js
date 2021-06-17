import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';

import Avatar from './utilitarios/Avatar';

export default function CardPost({ type, image, title, category, created_at, image_of_video, video_from, user_image, user_name }) {
    const location = useLocation();
    let image_publication = image;

    if (image_of_video && type === 'video' && video_from === 'youtube') {
        image_publication = `https://img.youtube.com/vi/${image}/0.jpg`;
    }

    return <div className="h-100 position-relative hover-post d-flex flex-column bg-white shadow-sm rounded overflow-hidden">
        <div className="mb-3 ratio ratio-16x9 overflow-hidden">
            <div>
                <img src={image_publication} className="img-object-fit" />
            </div>
        </div>
        <div className="mx-3 mb-3">
            <h4><Link to={{ pathname: getLink(title, type), state: { background: location } }} className="text-decoration-none stretched-link">{title}</Link></h4>
            {/* {new String(titulo).substring(0, 50)} */}
        </div>
        <div className="mx-3 mb-3 mt-auto d-flex align-items-center">
            <div className="me-3">
                <Avatar image={user_image} size="sm" initials={user_name} />
            </div>
            <div className="overflow-hidden">
                <p className="small mb-0 text-dark lh-2 text-truncate">{user_name}</p>
                <p className="small mb-0 lh-1 text-truncate">{moment(created_at).format('LL')}</p>
            </div>
        </div>
        {category && <BadgePost text={category} bgColor="#1f9359" />}
    </div>
}

function getLink(text, type) {
    // switch (type) {
    //     case 'video':
    //         return '/publicaciones/videos/' + text.toLocaleLowerCase().split(' ').join('-');
    //     case 'noticia':
    //         return '/publicaciones/noticias/' + text.toLocaleLowerCase().split(' ').join('-');
    //     default:
    //         return '/';
    // }
    return '/publicaciones/' + text.toLocaleLowerCase().split(' ').join('-');
}

const BadgePost = ({ text, bgColor }) => {
    const style = {
        background: bgColor,
        position: 'absolute',
        top: '1rem',
        right: '1rem'
    }

    return <span className="badge text-uppercase" style={style}>{text}</span>
};
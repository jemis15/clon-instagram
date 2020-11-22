import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Avatar from '../components/utilitarios/Avatar';

function remplace(texto) {
    const textoMinuscula = texto.toLowerCase();
    return textoMinuscula.replaceAll(' ', '-');
}

export default function Post({ post }) {
    const {
        titulo,
        contenido,
        tipo: tag,
        user: usuarioDelPost,
        images,
        created_at
    } = post;

    return <article className="post rounded-lg p-3 mb-3 shadow-sm border">
        <div className="mb-2 d-flex flex-nowrap">
            <div>
                <Link
                    to={remplace(titulo)}
                    className="text-decoration-none post-title font-weight-700">
                    {titulo}
                </Link>
            </div>
            {tag && (
                <div className="ml-auto">
                    <PostTag color={tag.color} className="mr-n3" tagText={tag.nombre} />
                </div>
            )}
        </div>
        <PostUser
            user={usuarioDelPost}
            fecha={moment(created_at).format('YYYY/MM/DD')}
            time={moment(created_at).format('hh:mm:ss a')}
        />
        <div className="py-3">
            {/* aqui markdown */}
            <MDEditor.Markdown source={contenido} />
            {/* fin markdown */}
        </div>
        {images && images.length > 0 && (
            <div className="d-flex justify-content-center">
                <img src={`/apimuni/images/posts/${images[0].image}`} className="img-fluid" />
            </div>
        )}
    </article>
}

function PostUser({ user, fecha, time }) {
    return <div className="user-container d-flex">
        <Avatar className="mr-3" size="sm" image={`/apimuni/images/faces/${user.image}`} />
        <div className="user-name">
            <div>
                <Link
                    to={remplace(user.nombre)}
                    className="text-decoration-none text-small font-weight-600">
                    {user.nombre}
                </Link>
            </div>
            <div className="text-smaller">
                <time dateTime={fecha}>{fecha}</time> a las <time dateTime={time}>{time}</time>
            </div>
        </div>
    </div>
}

function PostTag({ className, tagText, color }) {
    const style = {
        background: color,
        color: 'white',
        borderColor: color
    }
    return <div className={`post-tag tag-red ${className} text-nowrap`} style={style}>
        <span className="mr-2"><i className="fas fa-book" /></span>
        <span className="text-nowrap">{tagText}</span>
    </div>
}
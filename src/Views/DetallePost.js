import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';

export default function DetallePost() {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title=title.split('-').join(' ');
    const source = Axios.CancelToken.source();
    async function loadNotica() {
      try {
        setLoading(true);
        const { data: apiPost } = await Axios.get(`/v1/posts/details/title?value=${title.split('-').join(' ')}`, {
          cancelToken: source.token
        });
        setPost(apiPost);
        setLoading(false);
      } catch (error) {
        if (Axios.isCancel(error)) { return; }
        setLoading(false);
        setError('No se a podido encontrar la publicacion.');
        console.log(error);
      }
    }

    loadNotica();
    return () => source.cancel('cancelado')
  }, [title]);

  if (loading) {
    return <div className="text-center my-3">Cargando...</div>
  }

  if (!post) {
    return <Error404 />;
  }

  return <>
    <div className="my-5 mx-auto rounded bg-white shadow-sm overflow-hidden" style={{ maxWidth: '800px', border: '1px solid var(--grey-300)' }}>
      {post.tipo === 'image'
        ? <img
          className="mb-3 w-100"
          src={post.image}
          alt="publicaciones mazamari"
        />
        : <div className="ratio ratio-16x9">
          <div>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${post.video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              webkitallfullscreen="true"
              mozallfullscreen="true"
              oallowfullscreen="true"
              msallowfullscreen="true"
            />
          </div>
        </div>
      }
      <div className="p-4">
        <h2 className="t1 mb-3">{post.titulo}</h2>
        <MDEditor.Markdown source={post.contenido} />
      </div>
    </div>
  </>
}
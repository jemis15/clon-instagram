import MDEditor from '@uiw/react-md-editor';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function GastronomiaDescripcion() {
    const { titulo } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadData() {
            try {
                setLoading(true);
                const { data: apiData } = await Axios.get(`/apimuni/gastronomias/titulo/${titulo}?format=_`, {
                    cancelToken: source.token
                });
                setData(apiData);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        loadData();

        return () => source.cancel('Cancelado');
    }, [titulo]);

    if (loading) {
        return <div className="text-center mt-5">Cargando...</div>
    }

    return <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <div className="border-end">
                    <div className="px-3">
                        <div className="mb-3">
                            <img src={data.image} alt={data.titulo} className="img-fluid" />
                        </div>
                        {data.titulo && (
                            <h4>{data.titulo}</h4>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-8">
                <MDEditor.Markdown source={data.contenido} />
                {/* {JSON.stringify(data)} */}
            </div>
        </div>
    </div>
}
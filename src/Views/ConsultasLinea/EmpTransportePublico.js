import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function EmpTransportePublico() {
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = Axios.CancelToken.source();
        async function loadEmpresas() {
            try {
                setLoading(true);
                const { data: apiEmpresa } = await Axios.get(`/v1/empresas`, {
                    cancelToken: source.token
                });
                setEmpresas(apiEmpresa.data);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log('Es cancelado');
                    return;
                 }
                setLoading(false);
                setError('Sucecion algo inesperado. Vuelve a intentar mas tarde :)');
                console.log(error);
            }
        }

        loadEmpresas();
        return () => source.cancel('Cancelado');
    }, []);

    if (loading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    return <div>
        <div className="mb-4 clearfix">
            <div className="float-end">
                <input type="text" className="form-control" placeholder="Buscar..." />
            </div>
        </div>

        {Array.isArray(empresas) && empresas.map(empresa => (
            <ItemTransportePublico
                key={empresa.id}
                className="mb-5"
                titulo={empresa.nombre_empresa}
                representante={`${empresa.apellido_representante} ${empresa.nombre_representante}`}
                direccion={empresa.direccion_empresa}
                telefono={empresa.telefono_empresa}
                correo={empresa.email_empresa}
                numeroPartida={empresa.numero_partida}
                resolucion={empresa.numero_resolucion}
                ruc={empresa.ruc}
            />
        ))}
    </div>
}

const ItemTransportePublico = (props) => <div className={`${props.className} table-responsive`}>
    <table className="mb-0 table border-dark table-sm table-bordered">
        <thead>
            <tr>
                <th scope="col" colSpan="2" className="text-center">
                    <h4 className="mb-0">Empresa de Transporte P&uacute;blico</h4>
                    <h3 className="mb-0">{props.titulo ? props.titulo : '---'}</h3>
                </th>
            </tr>
        </thead>
        <tbody className="text-small">
            <tr>
                <td scope="row" width="200"><div className="px-3 fw-bold">Representante</div></td>
                <td><div className="px-3">{props.representante ? props.representante : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">Direcci&oacute;n</div></td>
                <td><div className="px-3">{props.direccion ? props.direccion : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">Tel&eacute;fono</div></td>
                <td><div className="px-3">{props.telefono ? props.telefono : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">Correo</div></td>
                <td><div className="px-3">{props.correo ? props.correo : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">N° Partida</div></td>
                <td><div className="px-3">{props.numeroPartida ? props.numeroPartida : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">Resoluci&oacute;n</div></td>
                <td><div className="px-3">{props.resolucion ? props.resolucion : '---'}</div></td>
            </tr>
            <tr>
                <td scope="row"><div className="px-3 fw-bold">Ruc</div></td>
                <td><div className="px-3">{props.ruc ? props.ruc : '---'}</div></td>
            </tr>
        </tbody>
    </table>
</div>
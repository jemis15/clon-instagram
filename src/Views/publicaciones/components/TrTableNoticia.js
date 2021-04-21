import moment from 'moment';
import React, { useState } from 'react';
import CheckBox from './CheckBox';

export default function TrTableNoticia(props) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [dropdownOptions, setDropdownOptions] = useState(false);

    return <tr>
        <td width="20" className="cursor-pointer" onClick={() => props.onSelected(props.id)}>
            <CheckBox checked={props.selected} />
        </td>
        <td width="500px">
            <div className="d-flex">
                <div className="me-3 ratio ratio-16x9 bg-grey-400 rounded" style={{ width: '120px' }}>
                    <div></div>
                </div>
                <div>
                    <h5 className="mb-0 text-truncate">{props.titulo}</h5>
                    <p className="mb-0 text-smaller text-muted">{props.descripcion}</p>
                </div>
            </div>
        </td>
        <td>
            <div className="d-inline-block position-relative">
                <button
                    className="text-small text-nowrap border-0 bg-transparent outline-none"
                    onClick={() => setDropdownActive(!dropdownActive)}>
                    <span className="me-2">
                        {props.visibilidad === 'publico'
                            ? <><i className="far fa-eye" /> P&uacute;blico</>
                            : <><i className="far fa-eye-slash" /> Borrador</>
                        }
                    </span>
                    <i className="fas fa-caret-down" />
                </button>
                {dropdownActive && (
                    <div
                        className="py-2 border rounded bg-white dropdow-body shadow-sm"
                        onClick={() => setDropdownActive(!dropdownActive)}>
                        {props.visibilidad === 'publico'
                            ? <button className="w-100 text-start text-nowrap bg-transparent border-0 px-3" onClick={() => console.log('Hola mundo 2')}>
                                <span className="me-2"><i className="far fa-eye-slash" /></span> <span>Cambiar a borrador</span>
                            </button>
                            : <button className="w-100 text-start text-nowrap bg-transparent border-0 px-3" onClick={() => console.log('Hola mundo 1')}>
                                <span className="me-2"><i className="far fa-eye" /></span> <span>Cambiar a p&uacute;blico</span>
                            </button>
                        }
                    </div>
                )}
            </div>
        </td>
        <td>
            <div className="text-small">{moment(props.fecha).format('DD MMM YYYY')}</div>
            <div className="text-smaller text-muted">Publicado</div>
        </td>
        <td className="text-end">
            <div className="d-inline-block position-relative">
                <button
                    className="border-0 bg-transparent outline-none"
                    onClick={() => setDropdownOptions(true)}>
                    <i className="fas fa-ellipsis-h" />
                </button>
                {dropdownOptions && (
                    <div
                        className="py-2 border rounded bg-white dropdow-body shadow-sm"
                        onClick={() => setDropdownOptions(false)}>
                        <button className="w-100 text-start text-nowrap bg-transparent border-0 px-3">
                            <span className="me-3"><i className="fas fa-pen" /></span> <span>Editar noticia</span>
                        </button>
                        <button className="w-100 text-start text-nowrap bg-transparent border-0 px-3">
                            <span className="me-3"><i className="fas fa-trash" /></span> <span>Borrar noticia</span>
                        </button>
                    </div>
                )}
            </div>
        </td>
    </tr>
}
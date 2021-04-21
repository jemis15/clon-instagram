import React, { useEffect, useState } from 'react';
import CheckBox from './components/CheckBox';
import Pagination from './components/Pagination';
import TrTableNoticia from './components/TrTableNoticia';

import emptyNoticia from '../../assets/images/empty/not-video.svg';
import Axios from 'axios';

export default function Noticias() {
    const limitNoticias = 10;
    const [page, setPage] = useState(1);
    const [selectedItems, setSelectedItems] = useState([]);
    const [noticias, setNoticias] = useState([
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
    ]);

    function changePage(number) {
        setPage(number);
    }

    function onSelected(id) {
        const existe = selectedItems.find(item => item === id);
        if (existe) {
            setSelectedItems(selectedItems.filter(item => item !== id))
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    }

    function unCheckAll() {
        setSelectedItems([]);
    }
    function checkAll() {
        let items = [];
        noticias.forEach(noticia => {
            items.push(noticia.id);
        });
        setSelectedItems(items);
    }
    function toggleCheckAll() {
        const numberNoticias = noticias.length;
        const isCheckAll = selectedItems.length === numberNoticias;

        if (isCheckAll) {
            unCheckAll();
        } else {
            checkAll();
        }
    }

    useEffect(() => {
        async function loadNoticias() {
            try {
                // const {data: apiNoticias} = await Axios.get('/apimuni/posts/noticias');
                // setNoticias(apiNoticias);
            } catch (error) {
                console.log(error);
            }
        }        
    }, []);

    return <div>
        <div className={`selected_items-content ${selectedItems.length > 0 && 'open'} bg-dark overflow-hidden d-flex align-items-center overflow-auto`}>
            {selectedItems.length > 0 && (
                <div className="container d-flex flex-nowrap align-items-center">
                    <ul className="mb-0 list-inline">
                        <li className="list-inline-item">
                            <div className="text-white text-small text-nowrap">{selectedItems.length} elementos seleccionados</div>
                        </li>
                        <li className="list-inline-item">
                            <button className="me-2 btn btn-sm btn-dark text-nowrap">
                                <span className="me-3"><i className="far fa-eye-slash" /></span>
                                <span>Cambiar a borrador</span>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="me-2 btn btn-sm btn-dark text-nowrap">
                                <span className="me-3"><i className="far fa-eye" /></span>
                                <span>Cambiar a p&uacute;blico</span>
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="btn btn-sm btn-dark text-nowrap">
                                <span className="me-3"><i className="fas fa-trash" /></span>
                                <span>Borrar noticias</span>
                            </button>
                        </li>
                    </ul>
                    <button className="ms-auto btn btn-dark" onClick={unCheckAll}>
                        <i className="far fa-times fa-lg" />
                    </button>
                </div>
            )}
        </div>
        <TableNoticias
            noticias={noticias}
            toggleCheckAll={toggleCheckAll}
            selectedItems={selectedItems}
            isSelectedAll={noticias.length === selectedItems.length}
            onSelected={onSelected}
        />
    </div>
}

function TableNoticias(props) {
    return <div className="container table-responsive">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th onClick={props.toggleCheckAll}>
                        <CheckBox
                            checked={props.isSelectedAll}
                            type={!props.isSelectedAll && 'indeterminate'}
                        />
                    </th>
                    <th>Noticia</th>
                    <th>Visibilidad</th>
                    <th>Fecha</th>
                    <th className="text-end">Acci&oacute;n</th>
                </tr>
            </thead>
            {props.noticias.length > 0 && (
                <tbody>
                    {props.noticias.map(noticia => (
                        <TrTableNoticia
                            key={noticia.id}
                            id={noticia.id}
                            titulo="Titulo de prueba"
                            descripcion="Descripcion de la noticia"
                            visibilidad="publico"
                            fecha="2021-01-05"
                            onSelected={props.onSelected}
                            selected={props.selectedItems.includes(noticia.id)}// si el elemento es checked
                        />
                    ))}
                </tbody>
            )}
        </table>
    </div>
}
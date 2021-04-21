import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import Pagination from './components/Pagination';
import TrTableNoticia from './components/TrTableNoticia';

import emptyNoticia from '../../assets/images/empty/not-posts.svg';

export default function Videos() {
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
        <div className="container table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th onClick={toggleCheckAll}>
                            <CheckBox
                                checked={selectedItems.length > 0}
                                type={selectedItems.length !== noticias.length && 'indeterminate'}
                            />
                        </th>
                        <th>Video</th>
                        <th>Visibilidad</th>
                        <th>Fecha</th>
                        <th className="text-end">Acci&oacute;n</th>
                    </tr>
                </thead>
                {noticias.length > 0 && (
                    <tbody>
                        {noticias.map((noticias) => (
                            <TrTableNoticia
                                key={noticias.id}
                                id={noticias.id}
                                titulo="Titulo de prueba"
                                descripcion="Descripcion de la noticia"
                                visibilidad="publico"
                                fecha="2021-01-05"
                                onSelected={onSelected}
                                selected={selectedItems.includes(noticias.id)}// si el elemento es checked
                            />
                        ))}
                    </tbody>
                )}
            </table>
            {noticias.length === 0 && (
                <div className="text-center">
                    <img src={emptyNoticia} width="250" />
                    <h4>Aun no tienes Noticias</h4>
                    <p className="text-muted text-small">Agrega noticias</p>
                </div>
            )}
            {noticias.length > limitNoticias && (
                <div className="clearfix border-bottom">
                    <Pagination className="float-end" pages={5} pageActive={page} changePage={changePage} />
                </div>
            )}
        </div>
    </div>
}
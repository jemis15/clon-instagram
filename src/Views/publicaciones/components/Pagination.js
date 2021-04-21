import React from 'react';

export default function Pagination(props) {
    function previewPage() {
        if (props.pageActive > 1) {
            props.changePage(props.pageActive - 1);
        }
    }
    function nextPage() {
        if (props.pageActive < props.pages) {
            props.changePage(props.pageActive + 1);
        }
    }

    return <nav className={`${props.className}`}>
        <ul className="pagination">
            <li className="page-item">
                <button className="page-link" href="#" onClick={previewPage}>{'<'}</button>
            </li>
            {new Array(props.pages).fill(null).map((number, key) => (
                <li key={key} className={`page-item ${key + 1 === props.pageActive && 'active'}`}>
                    <button className="page-link" href="#" onClick={() => props.changePage(key + 1)}>{key + 1}</button>
                </li>
            ))}
            <li className="page-item">
                <button className="page-link" href="#" onClick={nextPage}>{'>'}</button>
            </li>
        </ul>
    </nav>
}
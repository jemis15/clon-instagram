import React from 'react';

const Title1 = (props) => <h3 className={`${props.className} fs-2 t1`}>{props.children}</h3>
const Title2 = (props) => <h5 className={`${props.className} fs-4 t2`}>{props.children}</h5>
const MainContent = (props) => <div className={`p-4 bg-white shadow-sm rounded-3 container-info ${props.className}`} style={{border: '1px solid var(--grey-300)'}}>{props.children}</div>

export {Title1, Title2, MainContent};
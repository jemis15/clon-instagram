import React from 'react';

const Title1 = (props) => <h3 className={`${props.className} t1`}>{props.children}</h3>
const Title2 = (props) => <h5 className={`${props.className} t2`}>{props.children}</h5>
const MainContent = (props) => <div className={`px-3 container-info ${props.className}`}>{props.children}</div>
const LinkPdf = (props) => {
    return <a className="link-danger" href={props.src} target="_blank" rel="noopener noreferrer">{props.children}</a>
}

export { Title1, Title2, MainContent, LinkPdf };
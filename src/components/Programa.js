import React from 'react';

const BannerImage = (props) => (
    <img
        src={props.image}
        alt="VasoLeche"
        class="img-thumbnail rounded"
    />
)

const UserPhoto = (props) => (
    <div
        className={`${props.className} shadow-sm border border-light d-flex justify-content-center align-items-center`}
        style={{ width: '240px', height: '288px' }}>
        <img
            src={props.image}
            alt="mazamari perfil de usuario"
            className="img-fluid"
        />
    </div>
);

const UserDetails = (props) => (
    <ul className="list-unstyled">
        {props.correo && (
            <li className="mb-2 text-truncate text-nowrap">
                <a href={`mailto:${props.correo}`} className="text-decoration-none text-nowrap" title={props.correo}>
                    <span className="d-inline-block text-primary" style={{ width: '1.9rem' }}>
                        <i className="fa-lg far fa-envelope" />
                    </span>
                    <span>{props.correo}</span>
                </a>
            </li>
        )}
        {props.celular && (
            <li className="mb-2 text-truncate text-nowrap">
                <a href={`tel:+51${props.celular}`} className="text-decoration-none text-nowrap" title={props.celular}>
                    <span className="d-inline-block text-primary" style={{ width: '1.9rem' }}>
                        <i className="fa-lg fas fa-mobile-alt" />
                    </span>
                    <span>{props.celular}</span>
                </a>
            </li>
        )}
        {props.direccion && (
            <li className="mb-2 text-truncate text-nowrap">
                <div className="text-decoration-none text-nowrap" title={props.direccion}>
                    <span className="d-inline-block text-primary" style={{ width: '1.9rem' }}>
                        <i className="fa-lg far fa-map-marker-alt" />
                    </span>
                    <span>{props.direccion}</span>
                </div>
            </li>
        )}
    </ul>
);

const MainTitle = (props) => (
    <h2 className="mb-5 pb-3 text-center border-bottom border-primary border-5">
        {props.title}
    </h2>
);

const ContentTitle = (props) => (
    <h3 className="mt-4 mb-3">{props.title}</h3>
);

const MainContent = (props) => (
    <div
        className={`${props.className} px-5 py-5 container shadow bg-white`}
        style={{ border: '1px solid var(--grey-300' }}>
        {props.children}
    </div>
);


export { MainContent, BannerImage, UserPhoto, UserDetails, MainTitle, ContentTitle };
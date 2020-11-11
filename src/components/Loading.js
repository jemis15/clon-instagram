import React from 'react';

import logo from '../assets/images/logo.png';

export default function Loading() {

	return <div className="loading position-fixed d-flex justify-content-center align-items-center bg-white">
		<div className="spinner-border mr-3 text-primary" role="status">
			<span className="sr-only">Loading...</span>
		</div>
		<span className="title-1 text-dark">Cargando...</span>
	</div>
}
import React from 'react';
import logo from '../assets/images/logo.png';

export default function Loading() {
	return <div className="loading position-fixed d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(255,255,255,0.9)'}}>
		<div className="text-center">
			<img src={logo} width="100" alt="Municipalidad de Mazamari" />
			<div className="mt-3 fs-5 fw-bold" style={{maxWidth: '300px'}}>Municipalidad Distrital de Mazamari</div>
		</div>
	</div>
}
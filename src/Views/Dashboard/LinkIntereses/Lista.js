import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Lista() {
	const [carouselLinksPrincipal, setCarouselLinksPrincipal] = useState([]);
	const [carouselLinksSecundario, setCarouselLinksSecundario] = useState([]);

	useEffect(() => {
		async function loadCarouselLinks() {
			try {
				const { data: apiCarouselPrincipal } = await Axios.get('/apimuni/carousellinks/grupo/principal');
				const { data: apiCarouselSecundario } = await Axios.get('/apimuni/carousellinks/grupo/secundario');
				setCarouselLinksPrincipal(apiCarouselPrincipal);
				setCarouselLinksSecundario(apiCarouselSecundario);
			} catch (error) {
				console.log(error);
			}
		}

		loadCarouselLinks();
	}, []);

	return <>
		<h2 className="title-1 mb-4">Carousel Links</h2>

		<h4 className="title-3 mb-3">Lista principal</h4>
		<div className="grid-lista-carousel mb-4">
			{carouselLinksPrincipal.map(carouselLink => (
				<Link to={`/admin/linkintereses/${carouselLink.id}`} key={carouselLink.id}>
					<div className="hover-content-black position-relative cursor-pointer">
						<img src={`/apimuni/images/carousellinks/${carouselLink.image}`}
							className="img-fluid rounded"
							alt="carousellink"
							loading="lazy"
						/>
					</div>
				</Link>
			))}
			<Link to="/admin/linkintereses/nuevo"
				className="d-flex flex-column justify-content-center align-items-center bg-white border text-decoration-none">
				<i className="fas fa-plus fa-2x" />
				<span>Agregar</span>
			</Link>
		</div>

		<h4 className="title-3 mb-3">Lista secundario</h4>
		<div className="grid-lista-carousel mb-5">
			{carouselLinksSecundario.map(carouselLink => (
				<Link to={`/admin/linkintereses/${carouselLink.id}`} key={carouselLink.id}>
					<div className="hover-content-black position-relative cursor-pointer">
						<img src={`/apimuni/images/carousellinks/${carouselLink.image}`}
							className="img-fluid rounded"
							alt="carousellink"
							loading="lazy"
						/>
					</div>
				</Link>
			))}
			<Link to="/admin/linkintereses/nuevo"
				className="d-flex flex-column justify-content-center align-items-center bg-white border text-decoration-none">
				<i className="fas fa-plus fa-2x" />
				<span>Agregar</span>
			</Link>
		</div>
	</>
}
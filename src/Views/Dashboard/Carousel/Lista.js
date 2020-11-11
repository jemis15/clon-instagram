import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../../../assets/images/img1.jpg';
import image2 from '../../../assets/images/img2.jpg';
import image3 from '../../../assets/images/img3.jpg';
import image4 from '../../../assets/images/img4.jpg';
import image5 from '../../../assets/images/img5.jpg';
import image6 from '../../../assets/images/img6.jpg';
import image7 from '../../../assets/images/img7.jpg';
import image8 from '../../../assets/images/img8.jpg';

const listDefault = [
	{
		id: 1,
		image: image1,
	},
	{
		id: 2,
		image: image2,
	},
	{
		id: 3,
		image: image3,
	},
	{
		id: 4,
		image: image4,
	},
	{
		id: 5,
		image: image5,
	},
	{
		id: 6,
		image: image6,
	},
	{
		id: 7,
		image: image7,
	},
	{
		id: 8,
		image: image8,
	},
	{
		id: 9,
		image: image1,
	}
]

export default function Lista() {
	const [lista, setLista] = useState([]);

	useEffect(() => {
		setLista(listDefault);
	});

	return <>
		<h2 className="title-1 mb-4">Carousel</h2>
		<h4 className="title-3">Lista</h4>
		<div className="grid-lista-carousel">
			{lista.map(lista => (
				<Link to={`/admin/carousel/${lista.id}`} key={lista.id}>
					<div className="hover-content-black position-relative cursor-pointer">
						<img src={lista.image} className="img-fluid rounded" alt="carousel" loading="lazy" />
					</div>
				</Link>
			))}
		</div>
	</>
}
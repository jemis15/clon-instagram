import { useState, useEffect } from 'react';

export default function useScroll() {
	const [height, setHeight] = useState(null);
	
	useEffect(() => {
		let content_topbar = document.getElementById('topbar');
		
		content_topbar.addEventListener('resize', function () {
			setHeight('hola');
			console.log('Hola');
		});

		// return () => window.removeEventListener("onresize");
	}, []);

	return height;
}
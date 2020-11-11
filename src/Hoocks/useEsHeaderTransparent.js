import { useState, useEffect } from 'react';

export default function useEsHeaderTransparent() {
	const [esHeaderTransparente, setEsHeaderTransparente] = useState(null);
    console.log('tranpanret');
	useEffect(() => {
		function revisarSiEsTransparente() {
			console.log('tranpanret2');
			if (window.scrollY === 0) {
				setEsHeaderTransparente(true);
			} else {
				setEsHeaderTransparente(false)
			}
        }
        
		revisarSiEsTransparente();
		window.addEventListener('scroll', revisarSiEsTransparente)

		return () => window.removeEventListener('scroll',revisarSiEsTransparente);
	}, []);

	return esHeaderTransparente;
}
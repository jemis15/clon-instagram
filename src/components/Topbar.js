import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const TOPBAR = 'removed_topbar';
const CLASE_TOPBAR = 'has-topbar';
export default function Topbar() {
    // verificando si el usuario clickeo en cerrar topbar
    const clientRemovedTheTopbar = localStorage.getItem(TOPBAR);
    // verificando si el body contiene la clase has-topbar
    let containsClassTopbar = document.body.classList.contains(CLASE_TOPBAR)
    const [topbar, setTopbar] = useState(null);

    console.log(clientRemovedTheTopbar);

    useEffect(() => {
        async function loadTopbar() {
            // validando si el usuario cerro el topbar
            if (!clientRemovedTheTopbar) {
                try {
                    // Obteniendo topbar de la Base de datos  
                    // const {data: apiTopbar} = await Axios.get('/apimuni/topbar');
                    // setTopbar(topbar);
                    setTopbar("Esto es un mensaje del otro mundo");
                } catch (error) {
                    console.log(error);
                }
            }
        }

        loadTopbar();
    }, []);

    // useEffect(() => {
    //     let divTopbar = document.getElementById('topbar');
    //     window.addEventListener('resize', cambiarHeightTopbar);
    //     function cambiarHeightTopbar() {
    //         console.log('desde el otro useefet');
    //         if (divTopbar) {
    //             document.documentElement.style.setProperty('--topbar-height', `${divTopbar.clientHeight}px`);
    //         }
    //     }
    //     return () => window.removeEventListener('resize', cambiarHeightTopbar);
    // }, []);

    // preguntado si el estado topbar tiene algo que mostrar
    // false = remove class y null
    // true = agrega class y show
    function handleTopbarRemove() {
        setTopbar(null);
        localStorage.setItem(TOPBAR, true);
    }

    if (!topbar) {
        // agregamos la clase has-topbar si es que no lo tiene
        if (containsClassTopbar) {
            document.body.classList.remove('has-topbar');
        }
        return null;
    }

    // agregamos la clase has-topbar si es que no lo tiene
    if (!containsClassTopbar) {
        document.body.classList.add('has-topbar');
    }

    return <div className="bg-primary text-center topbar">
        <div className="container-lg py-2 d-flex">
            <div className="flex-fill mr-3">
                <a href="#inicio"
                    className="mb-0 py-2 text-white text-small text-decoration-none"
                    style={{ fontSize: '17px' }}>
                    <span>{topbar}</span>
                </a>
            </div>
            <span className="text-white align-self-center cursor-pointer"
            onClick={handleTopbarRemove}>
                <i className="fas fa-times" />
                </span>
        </div>
    </div>
}
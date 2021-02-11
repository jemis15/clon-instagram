import React from 'react';

export default function Historia() {
    return <div className="container mt-5 mb-5 p-4 border rounded bg-white shadow-sm overfow-hidden" style={{ maxWidth: '800px' }}>
        <h1 className="mb-5 text-center">Distrito de Mazamari</h1>
        <div className="ratio ratio-16x9 mb-3">
            <div>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/sa_rwHrF15g"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>

        <p className="mb-5" style={{ textAlign: 'justify' }}>
            El Distrito de Mazamari es uno de los nueve distritos de la Provincia de Satipo, ubicada en el Departamento de Jun&iacute;n, bajo la administraci&oacute;n del Gobierno regional de Jun&iacute;n, perteneciente al Per&uacute;.
            Desde el punto de vista jer&aacute;rquico de la Iglesia cat&oacute;lica, forma parte de la Vicariato apost&oacute;lico de San Ram&oacute;n.1
            Es considerado a nivel nacional como la puerta de oro hacia los grandes r&iacute;os del Per&uacute;.
        </p>


        <h3 className="mb-3">Historia</h3>
        <p style={{ textAlign: 'justify' }}>Mazamari se eleva a la categor&iacute;a de distrito integrante de la Provincia de Satipo en m&eacute;rito a la Ley Nº 15481 del 26 de marzo de 1965 emitido en el primer gobierno del Presidente Fernando Bela&uacute;nde Terry que a la letra dice.</p>
        <p style={{ textAlign: 'justify' }}>“El Distrito de Mazamari queda conformado por los siguientes centros poblados: Mazamari, que ser&aacute; la capital y Todos los Santos; y sus l&iacute;mites ser&aacute;n los siguientes: por el norte, con el Distrito de Satipo; por el este con el Distrito de R&iacute;o Tambo hasta el r&iacute;o Ene, siguiendo el curso del r&iacute;o Anapati; por el sur con el Distrito de Pangoa, hasta la confluencia de los r&iacute;os Mazamari, Pongoa y Coviriali”.</p>
        <p style={{ textAlign: 'justify' }}>Seg&uacute;n se registra la pluma de Fr. Buenaventura Le&oacute;n, Mazamari era habitado por tribus de Ash&aacute;nincas, Campas, Nomatsiguenga, Kakinte y Tiboris.</p>
        <p style={{ textAlign: 'justify' }}>En los años de 1873 a 1885, el Misionero Franciscano Manuel Biedma incursiona en el sector de Mazamari, en compañ&iacute;a de pobladores Andamarquinos, quienes se dedicaron al cultivo de la coca y la explotaci&oacute;n de caucho. En 1913 habitaban los curacas Curihuanti, Quinchocri con su gente se sublevaron logrando retirar a todos los migrantes.</p>
        <p style={{ textAlign: 'justify' }}>A Mazamari llegan 111 colonos Austriacos, H&uacute;ngaros y Alemanes, encabezado por Augusto Hilser se sit&uacute;an por la margen derecha de Pauriali donde lo llamaron Villa Flavia al no tener ayuda del gobierno piden ser repatriados.</p>
        <p style={{ textAlign: 'justify' }}>Por los años 1930 a 1940, regresan a Mazamari los colonos fundadores, estableci&eacute;ndose al costado del campo de aviaci&oacute;n. EL caser&iacute;o de Mazamari fue inaugurado oficialmente el 7 de octubre de 1952 con el nombre de San Juan de Villa Falvia, contando con una escuela y capilla. En 1956 qued&oacute; expedito el campo de aterrizaje tras largos trabajos de desmontes, se le bautiza con el nombre de “Campo de Aviaci&oacute;n Manuel Prado”, bajo la direcci&oacute;n del Agente Municipal Eduardo Alarc&oacute;n y Teniente Gobernador Juan Gutarra.1958, tras la hazaña de Hans Linder y Horacio Merino, se conform&oacute; el Comit&eacute; Pro Carretera Satipo - Pangoa.</p>
        <p style={{ textAlign: 'justify' }}>1959 Siendo Agente Municipal del Anexo de Mazamari el Sr. Fidel Escobar, se aprueba el plano urbano por la oficina central del Ministerio de Fomento y Obras P&uacute;blicas.</p>
        <p className="mb-5" style={{ textAlign: 'justify' }}>El 26 de marzo de 1965 con ley N° 15481, se eleva a Satipo como Provincia contando con los siguientes Distritos: Satipo, R&iacute;o Negro, Coviriali, Mazamari, Pangoa, LLaylla, Pampa Hermosa y Rio Tambo, siendo Presidente el Arq. Fernando Belaunde Terry. La ley constaba con 10 art&iacute;culos, en su art&iacute;culo 6 señala que el distrito de Mazamari queda conformado por los siguientes Centros Poblados: Mazamari, la capital y Todos los Santos. Sus l&iacute;mites son: Por el Norte con Satipo, por el Este con el Distrito de Rio Tambo, por el Sur con el Distrito de Pangoa y Coviriali. Los ciudadanos se re&uacute;nen en un Cabildo Abierto para nombrar a Julio Cuba Armez, su Primer Alcalde Distrital.</p>

        <h3 className="mb-3">Imagenes</h3>
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '1rem'
        }}>
            <div className="ratio ratio-1x1 overflow-hidden rounded-3">
                <div className="">
                    <img
                        className="object-fit img-thumbnail"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHav0Fi5pUJRdd7yZWoAv4E6T-Z_zWkR-6w&usqp=CAU"
                        alt="parque ecologico mazamari"
                    />
                </div>
            </div>
            <div className="ratio ratio-1x1 overflow-hidden rounded-3">
                <div className="">
                    <img
                        className="object-fit img-thumbnail"
                        src="http://1.bp.blogspot.com/-u8j8aTp03do/Vi00kZL1LPI/AAAAAAAAAJw/uh8lGynhwsU/s1600/julio1.jpg"
                        alt="bienvenida mazamari"
                    />
                </div>
            </div>
            <div className="ratio ratio-1x1 overflow-hidden rounded-3">
                <div className="">
                    <img
                        className="object-fit img-thumbnail"
                        src="https://selvacentralsite.files.wordpress.com/2017/12/23897825_1618457138212471_2095608532_n.jpg"
                        alt="parque ecologico mazamari"
                    />
                </div>
            </div>
        </div>
    </div >
}
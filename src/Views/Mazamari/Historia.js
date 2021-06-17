import React from 'react';
import vistaPanoramicaMazamari from '../../assets/images/muni-mazamari-vista-panoramico.jpeg';
import ubicacionGeografica from '../../assets/images/ubicacion-geografica.jpg';

export default function Historia() {
    return <>
        <div className="bg-dark d-flex align-items-center justify-content-center position-relative"
            style={{ marginTop: 'calc(var(--transparent-header-height) * -1)' }}>
            <div className="position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <img src={vistaPanoramicaMazamari} alt="vista panoramico municipalidad" className="img-object-fit" />
                <div className="position-absolute" style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,.4)',
                    backgroundImage: 'linear-radient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'
                }}
                />
            </div>
            <div className="position-relative d-flex justify-content-center align-items-center"
                style={{ height: '400px', zIndex: 1, paddingTop: 'var(--transparent-header-height)' }}>
                <h1 className="text-white">{`Municipalidad Distrital de Mazamari`}</h1>
            </div>
        </div>
        <div className="container-xxl my-5">
            <div className="row">
                <div className="col-md-8 col-lg-9">
                    <Mazamari />
                </div>
                <div className="mt-4 mt-md-0 col-md-4 col-lg-3">
                    <div style={{position: 'sticky', top: 'calc(var(--header-height) + var(--topbar-height) + 2rem)'}}>
                        <div>
                            <h4 className="pb-2 color-text-light border-bottom">Navegaci&oacute;n</h4>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="text-decoration-none" href="#reseña-historia">Reseña Historia</a></li>
                                <li className="mb-1"><a className="text-decoration-none" href="#creacion-politica">Creación Política</a></li>
                                <li className="mb-1"><a className="text-decoration-none" href="#ubicacion-geografica">Ubicación Geográfica</a></li>
                                <ul className="ms-3 list-unstyled">
                                    <li className="mb-1"><a className="text-decoration-none" href="#limites">Lítites</a></li>
                                    <li className="mb-1"><a className="text-decoration-none" href="#coordenadas">Coordenadas</a></li>
                                    <li className="mb-1"><a className="text-decoration-none" href="#superficie">Superficie</a></li>
                                    <li className="mb-1"><a className="text-decoration-none" href="#altitud">Altitud</a></li>
                                    <li className="mb-1"><a className="text-decoration-none" href="#clima">Clima</a></li>
                                    <li className="mb-1"><a className="text-decoration-none" href="#accecibilidad">Accecibilidad</a></li>
                                    <ul className="ms-3 list-unstyled">
                                        <li className="mb-1"><a className="text-decoration-none" href="#via-terrestre">Vía terrestre</a></li>
                                        <li className="mb-1"><a className="text-decoration-none" href="#via-aerea">Vía aerea</a></li>
                                        <li><a className="text-decoration-none" href="#via-fluida">Vía fluida</a></li>
                                    </ul>
                                </ul>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <h4 className="pb-2 color-text-light border-bottom">Video</h4>
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
                        </div>
                        <div className="mt-5">
                            <h4 className="pb-2 color-text-light border-bottom">Imagenes</h4>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                                gap: '0.5rem'
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const Mazamari = () => <>
    <div className="p-4 rounded bg-white shadow-sm position-relative" style={{ zIndex: 10 }}>
        <h3 className="mb-3" id="reseña-historia">Rese&ntilde;a Historia</h3>
        <p style={{ textAlign: 'justify' }}>
            {`El 13 de enero de 1928 se da la reforma social firmada por el gobierno de Augusto B. Leguía
                            en el que el Estado reserva 40 hectáreas de tierra, para ubicar la futura ciudad de Satipo,
                            posteriormente se emite otra resolución que asigna a cada colono 1,200 m2 para la
                            construcción de sus viviendas.`}<br />
            {`Entre los 1930 a 1940, llegaron a Mazamari los primeros agricultores colonos,
                            estableciéndose en estos lugares, los cuales ejecutaron trochas de acceso de Satipo a
                            Mazamari entre otros lugares, con la finalidad de trasladar sus productos. En 1952 se
                            construye una escuela primaria y una capilla, siendo en este periodo en el que se forma el
                            primer Centro Poblado.`}<br />
            {`Las tierras del ámbito del distrito pertenecían hasta el año 1930 al Estado peruano en su
                            totalidad por las comunidades Ashaninkas, Piros o Sinarínches, los cuales no tenían títulos de
                            propiedad de los terrenos en los cuales habitaban. A partir de 1930 empezaron a llegar los
                            primeros colonos al actual distrito de Mazamari a los cuales la delegación de colonización les
                            otorgaba un certificado de posesión a los colonos con 30 hectáreas por familia en aplicación
                            de la Ley N° 1220`}<br />
            {`El 01 de noviembre de 1947 se produce un violento terremoto que destruye la ciudad,
                            desapareciendo pueblos enteros como: Calabaza, San Antonio, Pampa Hermosa, San
                            Dionisio, Santa Viviana y San Pedro; posteriormente el Gobierno de Bustamante, así como la
                            Misión Apostólica de San Ramón, brindaron su apoyo desde un primer momento, después de
                            10 años se volvió a repoblar`}<br />
            {`El 22 de marzo de 1960 el Ministerio de Agricultura mediante Resolución Ministerial adjudica
                            145 hectáreas y 3,790 m2 para el área urbana de Mazamari. El 23 de marzo de 1960 el
                            Ministerio de Fomento y Obras Públicas aprueba la habilitación urbana con Resolución
                            Ministerial N° 182`}<br />
            {`El distrito de Mazamari fue creado por Ley N° 15481 el 26 de marzo de 1965 durante el
                            gobierno del Arq. Fernando Belaúnde Terry, al mismo tiempo que los demás distritos y la
                            provincia de Satipo, formando parte geográfica del departamento de Junín.`}
            {`En 1991, llegó el batallón contra subversivo “Natalio Sánchez” N° 324 al mando del Capitán
                            Calos Méndez, iniciándose de esta manera la pacificación, que fue posible gracias a la
                            decidida participación de la rondas campesinas y nativas, quienes combatieron heroicamente
                            dando sus vidas, quedando un espantoso saldo de 3,000 niños huérfanos, incontables
                            nuestros y desaparecidos.`}
        </p>

        <h3 className="mt-5 mb-3" id="creacion-politica">Creaci&oacute;n Pol&iacute;tica</h3>
        <p style={{ textAlign: 'justify' }}>
            {`El pueblo de Mazamari fue creado en mérito a la Resolución N° 509 del Ministerio de
                            Agricultura el 22 de marzo del año 1960 en el que adjudica 145 hectáreas y 3,790 m2,
                            refrendado por el Ministerio de Fomento mediante Resolución N° 182 del 23 de marzo de
                            1960.`}
        </p>
        <p style={{ textAlign: 'justify' }}>
            {`Mazamari se eleva a la categoría del distrito integrante de la provincia de Satipo en mérito
                            a la Ley N° Nº 15481 del 26 de marzo del 1965 emitido en el Gobierno de Fernando
                            Belaunde Terry.`}
        </p>
        <p style={{ textAlign: 'justify' }}>
            {`Es así que según el artículo 6, en el que se establece que, “el Distrito de Mazamari queda
                            conformado por los siguientes centros poblados: Mazamari, que será la capital y Todos
                            Los Santos; y sus límites serán los siguientes: por el Norte, con el Distrito de Satipo; por el
                            Este, con el Distrito de Río Tambo hasta el Río Ene, siguiendo el curso del río Anapati; por
                            el Sur, con el Distrito de Pangoa hasta la confluencia de los ríos Mazamari, Pangoa y
                            Coviriali”.`}
        </p>

        <h3 className="mt-5 mb-3" id="ubicacion-geografica">Ubicaci&oacute;n Geogr&aacute;fica</h3>
        <p style={{ textAlign: 'justify' }}>{`Mazamari es uno de los ocho (08) distritos de la Provincia de Satipo, del departamento de Junín.`}</p>
        <ol>
            <li><h4 id="limites">Limites</h4></li>
            <p>{`El límite con los Distritos adyacentes es de la siguiente manera:`}</p>
            <ul>
                <li>{`Por el norte con el Distrito de Satipo desde el Punto M-T3-GPS-012 hasta el Punto
                                    identificado como M-T02-GPS-001.`}</li>
                <li>{`Por el sur con el Distrito de San Martín de Pangoa desde el punto M-T4-GPS-002
                                    hasta el punto M-TI-GPS-005`}</li>
                <li>{`Por el este con el Distrito de Río Tambo desde el punto M–T02-001 hasta el punto
                                    M-T4-GPS-002`}</li>
                <li>{`Por el oeste con el Distrito de Llaylla desde el punto M-TI-GPS-005 hasta el punto
                                    M–T3–GPS–005 y el Distrito de Coviriali desde el punto M–T3–GPS–005 hasta el
                                    punto M–T3–GPS–012.`}</li>
            </ul>
            <img src={ubicacionGeografica} alt="ubicacion geografica" className="img-fluid" />
            <li><h4 id="coordenadas">Coordenadas</h4></li>
            <p style={{ textAlign: 'justify' }}>{`Los valores numéricos (coordenadas) de los puntos que conforman la línea perimétrica
                                    que define los límites geográficos del distrito de Mazamari abarca la totalidad
                                    perimétrica del territorio distrital comprendida entre los límites geográficos siguientes:
                                    `}</p>
            <ul>
                <li>{`Latitud Sur : 10º8´53.96” – 11º55´52.00”`}</li>
                <li>{`Longitud Oeste : 73º55´36.69” – 74º36´45.27”`}</li>
                <li>{`Zona UTM : 18`}</li>
                <li>{`Franja Latitudinal : L`}</li>
            </ul>
            <li><h4 id="superficie">Superficie</h4></li>
            <p style={{ textAlign: 'justify' }}>{`La superficie ocupada por el Distrito de Mazamari en su totalidad es de 2 311,7665
                                km² y su perímetro total es de 328 926,2423 m.`}</p>
            <li><h4 id="altitud">Altitud</h4></li>
            <p style={{ textAlign: 'justify' }}>{` En general el Distrito se encuentra aproximadamente entre las altitudes de 230
                                m.s.n.m. en la confluencia de los Ríos Ene y Perené y los 1,900 m.s.n.m. en la cumbre
                                del cerro ubicado en Los Ángeles de Edén, la Capital distrital se encuentra a 640
                                m.s.n.m.`}</p>
            <li><h4 id="clima">Clima</h4></li>
            <p style={{ textAlign: 'justify' }}>{`El tipo de clima principalmente corresponde a un clima húmedo con pequeñas
                                variaciones relacionadas con la altitud`}</p>
            <li><h4 id="accesibilidad">Accesibilidad</h4>
            </li>
            <p>{`El acceso al distrito de Mazamari, se realiza a través de vía terrestre, fluvial y aérea.`}</p>
            <ul>
                <li><h4 id="via-terrestre">V&iacute;a  Terestre</h4></li>
                <p style={{ textAlign: 'justify' }}>
                    {`A través de la ruta Lima – Mazamari, con un recorrido de 410 km, esta
                                            carretera nacional, cruza los distritos de Lurigancho (Provincia de Lima),
                                            distrito de Ricardo Palma, Matucana, San Mateo, Casapalca, Ticlio, La Oroya,
                                            Provincia de Tarma, Distrito de San Ramón, Pichanaki y Satipo.`}<br />
                    {`Este recorrido se hace aproximadamente en 11 horas en buses
                                            interprovinciales.`}<br />
                    {`A través de la ruta Huancayo – Mazamari, con un recorrido de 329 km,
                                            cruzando la ciudad de Tarma, San Ramón, La Merced, Pichanaki y Satipo. Este
                                            recorrido dura aproximadamente 8 horas.`}<br />
                    {`Además, el distrito de Mazamari, se encuentra integrado con los distritos
                                            vecinos a través de una red de carreteras:`}
                </p>
                <ul>
                    <li>{`Mazamari – Satipo (23 km)`}</li>
                    <li>{`Mazamari – San Martin de Pangoa (18 km )`}</li>
                    <li>{`Mazamari – Puerto Ocopa de Rio Tambo (50 km)`}</li>
                    <li>{`Mazamari – Llaylla (12km)`}</li>
                </ul>
                <li><h4 id="via-aerea">V&iacute;a A&eacute;reas</h4></li>
                <p style={{ textAlign: 'justify' }}>{`Mazamari cuenta con un aeropuerto comercial (AERÓDROMO) asfaltado
                                        administrado por la Corporación Peruana de Aviación Comercial, cuyas
                                        dimensiones son las siguientes: 1,400 ml de largo por 45 ml de ancho, para
                                        decolaje de aviones de carga y pasajeros solamente en servicio diurno porque
                                        no cuenta con servicio de balizaje.
                                        `}</p>
                <p>{`En la actualidad a través de este aeropuerto se puede realizar cuatro tipos de
                                        vuelos:`}</p>
                <ul>
                    <li>{`Operación policial especial`}</li>
                    <li>{`Operación militar clasificada`}</li>
                    <li>{`Vuelos no regulares (vuelos civiles particulares)`}</li>
                    <li>{`Vuelos regulares (itinerario establecido de empresas aerocomerciales)`}</li>
                </ul>
                <p style={{ textAlign: 'justify' }}>{`Este aeropuerto se utiliza para vuelos de operación policial especial, operación
                                        militar clasificada, vuelos regulares con itinerario establecido, solo es utilizado
                                        por aviones por aviones de pequeño y mediano fuselaje como avionetas en
                                        vuelos no regulares; helicópteros, aviones militares tipo Antonov y Hércules.
                                        En la actualidad los vuelos comerciales se están manifestando con mayor
                                        constancia, generalmente a las ciudades de Atalaya, Pucallpa, Lima, Jauja,
                                        Cuzco y vuelos militares de acción cívica, por lo tanto, las autoridades locales
                                        deben gestionar ante las empresas aerocomerciales el establecimiento de un
                                        itinerario regular que integre esta zona con las ciudades más importantes del
                                        país.`}</p>
                <li><h4 id="via-fluida">V&iacute;a Fluida</h4></li>
                <p style={{ textAlign: 'justify' }}>{`Las poblaciones que se encuentren al este del distrito en la margen izquierda
                                        del Rio Ene, se comunican desde Puerto Anapati con la capital del distrito a
                                        través de embarcaciones pequeñas como botes a motor fuera de borda o en
                                        balsas elaboradas con madera conocida como topa o plato de balsa y estos
                                        solo van de bajada a diferencia de los botes a motor fuera de borda que si lo
                                        hacen en ambas direcciones. – La población de esta zona que se dirige a la
                                        capital del distrito o en tránsitos a otras ciudades lo hace en un viaje por el Rio
                                        Ene aguas abajo hasta la desembocadura del Rio Perene luego aguas arriba y
                                        a la margen derecha de este Rio se encuentra Puerto Ocopa una Comunidad
                                        Nativa con muchas historias que se convierte en el anexo de la integración
                                        puesto que hasta la comunidad llega carretera afirmada de 60km. Desde la
                                        ciudad de Mazamari.
                                        `}</p>
                <p style={{ textAlign: 'justify' }}>{`En la actualidad las comunicaciones entre Puerto Ocopa y las poblaciones del
                                        Rio Ene se manifiesten con una relativa fluidez, dos días a la semana los botes
                                        programan sus salidas hasta Puerto Porvenir o a Puerto Anapati, igualmente
                                        el regreso lo programan los días a la semana y la población también se
                                        acostumbró a esta programación, los viajeros toman sus precauciones, desde
                                        Puerto Anapati es más fácil comunicarse con las poblaciones que se
                                        encuentran aguas arriba en los departamentos de Ayacucho y Cuzco, por esta
                                        razón la mayoría de colonos asentados en esta parte del Distrito de Mazamari
                                        son cuzqueños y ayacuchanos.
                                        `}<br />
                    {`Desde Puerto Ocopa salen botes a motor fuera de borda con destino a la
                                        Provincia de Atalaya en el Departamento de Ucayali, la salida de los bonos es
                                        todos los días, hay más fluidez en el movimiento de carga y pasajeros`}</p>
            </ul>
        </ol>
    </div>
</>
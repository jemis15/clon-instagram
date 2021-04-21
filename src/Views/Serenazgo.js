import React from 'react';

import img_perfil from '../assets/images/web/images.jfif';

export default function Serenazgo() {
        return <div className="container my-5  shadow" style={{ maxWidth: "900px", backgroundColor: "#F5F5F5", border: '2px solid #008000' }}>
                <div className="mx-n3" style={{ backgroundColor: "#008000" }} >
                        <h3 className="text-center  p-3" style={{ color: 'white' }}>Serenazgos</h3>
                </div>
                <div class="row p-5" >
                        <div class="col-sm-7">
                                <p >Hemos implementado la plataforma de atención al vecino que nos permita acudir a una emergencia en cualquier lugar del Distrito
                Seguimos un protocolo integral de atención que culmina con el informe de la acción tomada al recurrente.</p>
                                <p>Otra herramienta es el servicio de Whatsapp 948675008 para reportar directamente a Seguridad Ciudadana sobre las
                    incidencias que pudieran ocurrir  en el distrito o en la vía pública. Una vez enviado el reporte, que puede ir acompañado de fotos, videos y audios, la Central Alerta Mazamari dispone la intervención inmediata y, en algunos casos, con apoyo de efectivos de la Policía Nacional del Perú (PNP), así como de personal de la Compañía de Bomberos.</p>
                        </div>
                        <div class="col-sm-5">
                                <img src={img_perfil} alt="perfil" class="imgPerfil rounded" /><br /><br />
                                <li style={{ listStyle: "none" }}><em><i class="fas fa-phone-alt m-2"> </i>  Teléfono: 948675008</em></li>
                                <li style={{ listStyle: "none" }}><em><i class="fab fa-whatsapp m-2"></i> Whatsapp:  948675008</em></li>
                        </div>
                </div>
                <div class="row pl-5 pr-5 pb-5">
                        <div class="col">
                                <div className="shadow p-3 mb-5 bg-white rounded p-2 position-relative">
                                        <a href="#" class="text-warning stretched-link align-center">SATIPO ENVÍA AYUDA HUMANITARIA A DAMNIFICADOS</a><br /><br />

                                        <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left" style={{ Width: "300px", marginRight: "20px", marginBottom: "20px" }} />
                                        <p>El Gobierno local de Satipo ha enviado ayuda humanitaria a los damnificados del
                                    Distrito de Perené - Chanchamayo...</p>
                                        <div style={{ borderTop: "3px solid green" }} ></div>
                                        <div class="clearfix mt-2">
                                                <i class="fab fa-whatsapp m-2"></i>
                                                <i class="fab fa-facebook-square"></i>
                                                <button type="button" class="btn btn-success btn-sm float-right">Ver Mas</button>
                                        </div>
                                </div>
                        </div>
                        <div class="col">
                                <div className="shadow p-3 mb-5 bg-white rounded p-2 position-relative">
                                        <a href="#" class="text-warning stretched-link align-center">SATIPO ENVÍA AYUDA HUMANITARIA A DAMNIFICADOS</a><br /><br />

                                        <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left" style={{ Width: "300px", marginRight: "20px", marginBottom: "20px" }} />
                                        <p>El Gobierno local de Satipo ha enviado ayuda humanitaria a los damnificados del
                                    Distrito de Perené - Chanchamayo...</p>
                                        <div style={{ borderTop: "3px solid green" }} ></div>
                                        <div class="clearfix mt-2">
                                                <i class="fab fa-whatsapp m-2"></i>
                                                <i class="fab fa-facebook-square"></i>
                                                <button type="button" class="btn btn-success btn-sm float-right">Ver Mas</button>
                                        </div>
                                </div>
                        </div>
                        <div class="col">
                                <div className="shadow p-3 mb-5 bg-white rounded p-2 position-relative">
                                        <a href="#" class="text-warning stretched-link align-center">SATIPO ENVÍA AYUDA HUMANITARIA A DAMNIFICADOS</a><br /><br />

                                        <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left" style={{ Width: "300px", marginRight: "20px", marginBottom: "20px" }} />
                                        <p>El Gobierno local de Satipo ha enviado ayuda humanitaria a los damnificados del
                                    Distrito de Perené - Chanchamayo...</p>
                                        <div style={{ borderTop: "3px solid green" }} ></div>
                                        <div class="clearfix mt-2">
                                                <i class="fab fa-whatsapp m-2"></i>
                                                <i class="fab fa-facebook-square"></i>
                                                <button type="button" class="btn btn-success btn-sm float-right">Ver Mas</button>
                                        </div>
                                </div>
                        </div>
                        <div class="col">
                                <div className="shadow p-3 mb-5 bg-white rounded p-2 position-relative">
                                        <a href="#" class="text-warning stretched-link align-center">SATIPO ENVÍA AYUDA HUMANITARIA A DAMNIFICADOS</a><br /><br />

                                        <img src={img_perfil} alt="perfil" class="imgPerfil rounded-left" style={{ Width: "300px", marginRight: "20px", marginBottom: "20px" }} />
                                        <p>El Gobierno local de Satipo ha enviado ayuda humanitaria a los damnificados del
                                    Distrito de Perené - Chanchamayo...</p>
                                        <div style={{ borderTop: "3px solid green" }} ></div>
                                        <div class="clearfix mt-2">
                                                <i class="fab fa-whatsapp m-2"></i>
                                                <i class="fab fa-facebook-square"></i>
                                                <button type="button" class="btn btn-success btn-sm float-right">Ver Mas</button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
}
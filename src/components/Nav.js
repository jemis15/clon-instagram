import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import imgHistoria from '../assets/images/icons/nav/mazamari/historia.svg';
import imgTurismo from '../assets/images/icons/nav/mazamari/mochila.svg';
import imgRestaurante from '../assets/images/icons/nav/mazamari/tienda.svg';
import imgHoteles from '../assets/images/icons/nav/mazamari/hotel.svg';
import imgAgroindustria from '../assets/images/icons/nav/mazamari/harvest.svg';
import imgPlatosTipicos from '../assets/images/icons/nav/mazamari/restaurante.svg';
import imgDirecctorio from '../assets/images/icons/nav/contacto/smartphone.svg';
import imgSedes from '../assets/images/icons/nav/contacto/oficina.svg';
import imgSugerencias from '../assets/images/icons/nav/contacto/sugerencias.svg';
import imgLibroReclamaciones from '../assets/images/icons/nav/contacto/libro.svg';
import imgDirectorio from '../assets/images/icons/nav/seguridad/directorio-telefonico.svg';
import imgCodisec from '../assets/images/icons/nav/seguridad/target.svg';
import imgSeguridadCiudadana from '../assets/images/icons/nav/seguridad/amigos.svg';
import imgSeguridadYSaludEnElTrabajo from '../assets/images/icons/nav/seguridad/construction-worker.svg';
import imgSerenazgo from '../assets/images/icons/nav/seguridad/policeman.svg';
import imgVasoDeLeche from '../assets/images/icons/nav/programas/leche.svg';
import imgAdultoMayor from '../assets/images/icons/nav/programas/grandparents.svg';
import imgPiced from '../assets/images/icons/nav/programas/familia.svg';
import imgDemuna from '../assets/images/icons/nav/programas/demuna.svg';
import imgOmaped from '../assets/images/icons/nav/programas/persona-discapacitada.svg';
import imgTributoMunicipal from '../assets/images/icons/nav/informacion-linea/iconos-de-dinero.svg';
import imgLicenciaFuncionamiento from '../assets/images/icons/nav/informacion-linea/licencias.svg';
import imgRegistroCivil from '../assets/images/icons/nav/informacion-linea/registro-civil.svg';
import imgEmergencia from '../assets/images/icons/nav/informacion-linea/emergencia.svg';
import imgTransportePublico from '../assets/images/icons/nav/informacion-linea/taxi.svg';
import imgLicenciaEdificaciones from '../assets/images/icons/nav/informacion-linea/ingeniero.svg';
import imgComiteControlInterno from '../assets/images/icons/nav/informacion-linea/director-de-la-silla.svg';
import imgCodigoEtica from '../assets/images/icons/nav/informacion-linea/justa.svg';
import imgProgramaMultianualInvercion from '../assets/images/icons/nav/informacion-linea/tendencia.svg';
import imgSaneamiento from '../assets/images/icons/nav/informacion-linea/agua.svg';
import imgSolicitudAccesoInformacion from '../assets/images/icons/nav/informacion-linea/atribucion.svg';
import imgPresupuestoParticipativo from '../assets/images/icons/nav/informacion-linea/induccion.svg';
import imgOrdenanzaMunicipal from '../assets/images/icons/nav/normativa/corte.svg';
import imgAcuerdosConsejo from '../assets/images/icons/nav/normativa/contrato.svg';
import imgResolucionConsejoMunicipal from '../assets/images/icons/nav/normativa/paper.svg';
import imgDecretoAlcaldia from '../assets/images/icons/nav/normativa/decreto.svg';
import imgResolucionesAlcaldia from '../assets/images/icons/nav/normativa/resolucionesalcaldia.svg';
import imgAgendaConsejoOrdinario from '../assets/images/icons/nav/normativa/agendaconsejoordinario.svg';
import imgAgendaConsejoExtraOrdinario from '../assets/images/icons/nav/normativa/agendaconsejoextaordinario.svg';
import imgResolucionesGerencia from '../assets/images/icons/nav/normativa/resolucionesgerencia.svg';
import imgCCI from '../assets/images/icons/nav/normativa/codigocuenta.svg';
import imgConveniosSuscritos from '../assets/images/icons/nav/normativa/apretonmano.svg';
import imgPdf from '../assets/images/icons/nav/normativa/google-docs.svg'
import imgActa from '../assets/images/icons/nav/normativa/actas.svg'
// import imgDatosGenerales from '../assets/images/icons/nav/transparencia/datosgenerales.svg';
// import imgPlaneamiento from '../assets/images/icons/nav/transparencia/planeamiento.svg';
import imgPresupuesto from '../assets/images/icons/nav/transparencia/presupuesto.svg';
import imgProyectosInversion from '../assets/images/icons/nav/transparencia/proyecto.svg';
// import imgParticipacionCiudadana from '../assets/images/icons/nav/transparencia/participacion.svg';
// import imgPersonal from '../assets/images/icons/nav/transparencia/personal.svg';
// import imgContratacionBienesServicios from '../assets/images/icons/nav/transparencia/contratacion.svg';
// import imgNormasPublicas from '../assets/images/icons/nav/transparencia/normas.svg';
// import imgNoticiasInstitucion from '../assets/images/icons/nav/transparencia/noticias.svg';
// import imgAnuncios from '../assets/images/icons/nav/transparencia/anuncios.svg';
import imgComunicadosNotaDePrensa from '../assets/images/icons/nav/transparencia/comunicados.svg';
// import imgBoletines from '../assets/images/icons/nav/transparencia/periodico.svg';
import imgAlcalde from '../assets/images/icons/nav/transparencia/alcalde.svg';
import imgRegidores from '../assets/images/icons/nav/municipalidad/regidores.svg';
import imgGerencias from '../assets/images/icons/nav/municipalidad/gerencias.svg';
import imgOrganigrama from '../assets/images/icons/nav/municipalidad/estructura-jerarquica.svg';
import imgVisionMision from '../assets/images/icons/nav/municipalidad/objetivo.svg';
import imgSistemaControlInterno from '../assets/images/icons/nav/municipalidad/empujar.svg';
// import imgConsejoMunicipal from '../assets/images/icons/nav/transparencia/consejomunicipal.svg';
// import imgMunicipalidad from '../assets/images/icons/nav/transparencia/municipalidad.svg';
// import imgDocumentosImportantes from '../assets/images/icons/nav/transparencia/documentosimportantes.svg';

export default function AppNav() {
    return <nav className="nav-header">
        <ul className="mb-0 position-relative d-flex align-items-center list-unstyled">
            <ItemNavigation>
                <NavigationItem label="Mazamari" grupo="mazamari" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/mazamari/historia" image={imgHistoria} titulo="Historia" />
                        <LinkItem to="/mazamari/turismos" image={imgTurismo} titulo="Turismo" />
                        <LinkItem to="/mazamari/restaurantes" image={imgRestaurante} titulo="Restaurante" />
                        <LinkItem to="/mazamari/hoteles" image={imgHoteles} titulo="Hoteles" />
                        <LinkItem to="/mazamari/agroindustrias" image={imgAgroindustria} titulo="Agroindustrias" />
                        <LinkItem to="/mazamari/gastronomias" image={imgPlatosTipicos} titulo="Gastronomia" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavigationItem label="Municipalidad" grupo="muni" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/muni/alcalde" image={imgAlcalde} titulo="Alcalde" />
                        <LinkItem to="/muni/regidores" image={imgRegidores} titulo="Regidores" />
                        <LinkItem to="/muni/funcionarios" image={imgGerencias} titulo="Funcionarios" />
                        <LinkItem to="/muni/comisiones" image={imgPresupuesto} titulo="Comision Permanente" />
                        <LinkItem to="/muni/organigrama" image={imgOrganigrama} titulo="Organigrama" />
                        <LinkItem to="/muni/vision_mision" image={imgVisionMision} titulo="Mision y Vision" />
                        <LinkItem to="/muni/control_interno" image={imgSistemaControlInterno} titulo="Sistema de Control Interno" />
                        <LinkItem to="/muni/proyectos" image={imgProyectosInversion} titulo="Proyectos" />
                        <LinkItem to="/muni/convocatorias" image={imgComunicadosNotaDePrensa} titulo="Convocatorias CAS" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavigationItem label="Normatividad" grupo="normativa" />
                <DropMenu>
                    <div className="mb-3 pt-4 nav_link-grid">
                        <LinkItem to="/normativa?tipo=ordenanzas-municipal" image={imgOrdenanzaMunicipal} titulo="Ordenanza Municipal" />
                        <LinkItem to="/normativa?tipo=acuerdos-de-consejo" image={imgAcuerdosConsejo} titulo="Acuerdos de Consejo" />
                        <LinkItem to="/normativa?tipo=resoluciones-de-consejo" image={imgResolucionConsejoMunicipal} titulo="Resoluci&oacute;n de Consejo Municipal" />
                        <LinkItem to="/normativa?tipo=actas-de-sesion-ordinario" image={imgActa} titulo="Actas de Sesi&oacute;n de Consejo Ordinario" />
                        <LinkItem to="/normativa?tipo=actas-de-sesion-extraordinario" image={imgActa} titulo="Actas de Consejo Extraordinarios" />
                        <LinkItem to="/normativa?tipo=decretos-de-alcaldia" image={imgDecretoAlcaldia} titulo="Decretos de Alcaldia" />
                        <LinkItem to="/normativa?tipo=resoluciones-de-alcaldia" image={imgResolucionesAlcaldia} titulo="Resoluciones de Alcaldia" />
                        <LinkItem to="/normativa" image={imgAgendaConsejoOrdinario} titulo="Agenda de Sesi&oacute;n de Consejo Ordinario" />
                        <LinkItem to="/normativa" image={imgAgendaConsejoExtraOrdinario} titulo="Agenda de Sesi&oacute;n de Consejo Extraordinario" />
                        <LinkItem to="/normativa?tipo=resoluciones-de-gerencia" image={imgResolucionesGerencia} titulo="Resoluci&oacute;nes de Gerencia Municipal" />
                        <LinkItem to="/normativa?tipo=directivas" image={imgDirecctorio} titulo="Directivas Institucionales" />
                        <LinkItem to="/normativa" image={imgCCI} titulo="CCI Actas de Sesi&oacute;n Extraordinario" />
                        <LinkItem to="/normativa" image={imgConveniosSuscritos} titulo="Convenios Suscritos" />
                    </div>
                    <div>
                        <h4 className="px-4 text-small text-muted">Instrumentos de gesti&oacute;n</h4>
                        <div className="px-3 pb-4">
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="MOF" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="ROF" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="TUPA" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="CAP" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="MAPRO" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="POI" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="RIC" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="PDC" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="PDC AL 2030" />
                            <SubLinkItem to="/normativa" image={imgPdf} titulo="PEI" />
                        </div>
                    </div>
                </DropMenu>
            </ItemNavigation>
            {/* <ItemNavigation>
                <NavigationItem label="Transparencia" grupo="transparencia" />
                <DropMenu>
                    <div className="mb-3 pt-4 nav_link-grid">
                        <LinkItem to="/transparencia" image={imgDatosGenerales} titulo="Datos generales" />
                        <LinkItem to="/transparencia" image={imgPlaneamiento} titulo="Planeamiento" />
                        <LinkItem to="/transparencia" image={imgPresupuesto} titulo="Presupuesto" />
                        <LinkItem to="/transparencia" image={imgProyectosInversion} titulo="Proyectos de Inversi&oacute;n" />
                        <LinkItem to="/transparencia" image={imgParticipacionCiudadana} titulo="Participacion Ciudadana" />
                        <LinkItem to="/transparencia" image={imgPersonal} titulo="Personal" />
                        <LinkItem to="/transparencia" image={imgContratacionBienesServicios} titulo="Contratacion de Bienes y Servicios" />
                        <LinkItem to="/transparencia" image={imgNormasPublicas} titulo="Normas P&uacute;blicas" />
                    </div>
                    <h4 className="px-3 text-color-lighter font-weight-600 text-small">Agenda</h4>
                    <div className="mb-3 nav_link-grid">
                        <LinkItem to="/transparencia" image={imgAlcalde} titulo="Alcalde" />
                        <LinkItem to="/transparencia" image={imgConsejoMunicipal} titulo="Consejo Municipal" />
                        <LinkItem to="/transparencia" image={imgMunicipalidad} titulo="Municipalidad" />
                    </div>
                    <h4 className="px-3 text-color-lighter font-weight-600 text-small">Documentos importantes</h4>
                    <div className="pb-4 nav_link-grid">
                        <LinkItem to="/transparencia" image={imgDocumentosImportantes} titulo="Documentos de OCI" />
                        <LinkItem to="/transparencia" image={imgNoticiasInstitucion} titulo="Noticias de la Instituci&oacute;n" />
                        <LinkItem to="/transparencia" image={imgAnuncios} titulo="Anuncios" />
                        <LinkItem to="/transparencia" image={imgComunicadosNotaDePrensa} titulo="Comunicados y Nota de Prensa" />
                        <LinkItem to="/transparencia" image={imgBoletines} titulo="Boletines" />
                    </div>
                </DropMenu>
            </ItemNavigation> */}
            <ItemNavigation>
                <NavigationItem label="Informaci&oacute;n en l&iacute;nea" grupo="c" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/c/t/tributos-municipales/formas-y-lugares-de-pago" image={imgTributoMunicipal} titulo="Tributo Municipal" />
                        <LinkItem to="/c/licencia_funcionamiento" image={imgLicenciaFuncionamiento} titulo="Licencia de Funcionamiento" />
                        <LinkItem to="/c/registrocivil" image={imgRegistroCivil} titulo="Registro Civil" />
                        <LinkItem to="/c/transporte_publico" image={imgEmergencia} titulo="Defensa Civil" />
                        <LinkItem to="/c/transporte_publico" image={imgTransportePublico} titulo="Transporte Publico" />
                        <LinkItem to="/c/Licencia_Edificacion" image={imgLicenciaEdificaciones} titulo="Licencias de Edificaciones" />
                        <LinkItem to="/c/ComiteControlInterno" image={imgComiteControlInterno} titulo="Comite de Control Interno" />
                        <LinkItem to="/c/CodigoEtica" image={imgCodigoEtica} titulo="C&oacute;digo &Eacute;tica" />
                        <LinkItem to="/c/multianual" image={imgProgramaMultianualInvercion} titulo="Programa Multianual de Inversi&oacute;n" />
                        <LinkItem to="/c/saneamiento" image={imgSaneamiento} titulo="Saneamiento" />
                        <LinkItem to="/c/PresupuestoParticipativo" image={imgPresupuestoParticipativo} titulo="Presupuesto Participativo" />
                        <LinkItem to="/c" image={imgSolicitudAccesoInformacion} titulo="Solicitud de Acceso a la Informaci&oacute;n" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavigationItem label="Programas" grupo="programas" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/programas/vasoleche" image={imgVasoDeLeche} titulo="Vaso de Leche" />
                        <LinkItem to="/programas/demuna" image={imgDemuna} titulo="Demuna" />
                        <LinkItem to="/programas/omaped" image={imgOmaped} titulo="Omaped" />
                        <LinkItem to="/programas/adultomayor" image={imgAdultoMayor} titulo="Adulto Mayor" />
                        <LinkItem to="/programas/piced" image={imgPiced} titulo="Piced" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavigationItem label="Seguridad" grupo="seguridad" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem image={imgDirectorio} to="/seguridad/Direcctorio" titulo="Directorio" />
                        <LinkItem image={imgCodisec} to="/seguridad/codisec" titulo="Codisec" />
                        <LinkItem image={imgSeguridadCiudadana} to="/seguridad/Serenazgo" titulo="Seguridad Ciudadana" />
                        <LinkItem image={imgSeguridadYSaludEnElTrabajo} to="/seguridad/Direcctorio" titulo="Seguridad y Salud en el Trabajo" />
                        <LinkItem image={imgSerenazgo} to="/seguridad/serenazgo" titulo="Serenazgo" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavigationItem label="Contactos" grupo="contactos" />
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/contactos/directorio-telefono" image={imgDirecctorio} titulo="Directorio de Telefono" />
                        <LinkItem to="/contactos/sucursales" image={imgSedes} titulo="Sede Principal y Sucursal" />
                        <LinkItem to="/realizarreclamo" image={imgSugerencias} titulo="Sugerencias" />
                        <LinkItem to="/realizarreclamo" image={imgLibroReclamaciones} titulo="Libro de Reclamaciones y Quejas" />
                    </div>
                </DropMenu>
            </ItemNavigation>
        </ul>
    </nav>
}

function ItemNavigation({ children }) {
    return <li className="me-1 item-navigation">
        {children}
    </li>
}

function DropMenu({ children, className, style }) {
    return <section className={`drop-menu rounded-3 shadow ${className}`} style={style}>
        {children}
    </section>
}

function SubLinkNavigation({ children, to }) {
    return <NavLink className="px-5 py-2 text-small font-weight-400 text-decoration-none d-block" to={to}>
        {children}
    </NavLink>
}

const LinkItem = ({ image, titulo, descripcion, to, nuevo }) => (
    <Link to={to} className="nav_link-item text-decoration-none d-flex align-items-center py-1 px-3 color-text">
        {image && <div className="me-3">
            <img width="32" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small font-weight-600">{titulo} {nuevo && <SpanNuevo />}</p>
            <p className="mb-0 text-small">{descripcion}</p>
        </div>
    </Link>
);
const SubLinkItem = ({ to, image, titulo }) => (
    <Link to={to} className="me-3 px-2 rounded link-normal color-text text-decoration-none d-inline-flex align-items-center">
        {image && <div className="me-2">
            <img width="17" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small">{titulo}</p>
        </div>
    </Link>
);

const LinkNavigationEspecial = ({ to, image, titulo, nuevo }) => (
    <Link to={to} className="nav_link-item text-decoration-none d-flex align-items-center py-2 px-3 color-text">
        {image && <div className="me-3">
            <img width="17" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small font-weight-600">{titulo} {nuevo && <SpanNuevo />}</p>
        </div>
    </Link>
)

const NavigationItem = ({ label, grupo }) => {
    const { pathname } = useLocation();
    const path = pathname.split('/');
    const active = path[1] === grupo;

    return <div className={`nav__link ${active && 'active'} rounded-pill font-weight-600 text-small`}>{label}</div>
}

const SpanNuevo = () => (
    <span className="px-2 rounded-pill small bg-danger text-white">Nuevo</span>
)
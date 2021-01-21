import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
import imgServir from '../assets/images/icons/nav/programas/ayuda.svg';
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
import imgDatosGenerales from '../assets/images/icons/nav/transparencia/datosgenerales.svg';
import imgPlaneamiento from '../assets/images/icons/nav/transparencia/planeamiento.svg';
import imgPresupuesto from '../assets/images/icons/nav/transparencia/presupuesto.svg';
import imgProyectosInversion from '../assets/images/icons/nav/transparencia/proyecto.svg';
import imgParticipacionCiudadana from '../assets/images/icons/nav/transparencia/participacion.svg';
import imgPersonal from '../assets/images/icons/nav/transparencia/personal.svg';
import imgContratacionBienesServicios from '../assets/images/icons/nav/transparencia/contratacion.svg';
import imgNormasPublicas from '../assets/images/icons/nav/transparencia/normas.svg';
import imgNoticiasInstitucion from '../assets/images/icons/nav/transparencia/noticias.svg';
import imgAnuncios from '../assets/images/icons/nav/transparencia/anuncios.svg';
import imgComunicadosNotaDePrensa from '../assets/images/icons/nav/transparencia/comunicados.svg';
import imgBoletines from '../assets/images/icons/nav/transparencia/periodico.svg';
import imgAlcalde from '../assets/images/icons/nav/transparencia/alcalde.svg';
import imgConsejoMunicipal from '../assets/images/icons/nav/transparencia/consejomunicipal.svg';
import imgMunicipalidad from '../assets/images/icons/nav/transparencia/municipalidad.svg';
import imgDocumentosImportantes from '../assets/images/icons/nav/transparencia/documentosimportantes.svg';
import imgGerencias from '../assets/images/icons/nav/municipalidad/gerencias.svg';
import imgRegidores from '../assets/images/icons/nav/municipalidad/regidores.svg';

export default function AppNav() {
    let location = useLocation();

    return <nav className="nav">
        <ul className="mb-0 position-relative d-flex align-items-center list-unstyled">
            <ItemNavigation>
                <NavLink
                    className="nav-link text-small font-weight-600"
                    to="/historia">
                    Mazamari
                </NavLink>
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/historia" image={imgHistoria} titulo="Historia" />
                        <LinkItem to="/NavMazamari/Tours" image={imgTurismo} titulo="Turismo" />
                        <LinkItem to="/NavMazamari/Restaurantes" image={imgRestaurante} titulo="Restaurante" />
                        <LinkItem to="/NavMazamari/Hoteles" image={imgHoteles} titulo="Hoteles" />
                        <LinkItem to="/NavMazamari/Agroindustrias" image={imgAgroindustria} titulo="Agroindustrias" />
                        <LinkItem to="/NavMazamari/Platos_Tipicos" image={imgPlatosTipicos} titulo="Platos tipicos" />
                    </div>
                    <div className="py-4 d-none" style={{ width: '300px' }}>
                        <LinkNavigation to="/gastronomiayturismo">Gastronomia y Turismo</LinkNavigation>
                        <LinkNavigation to="/NavMazamari/Tours">Turismo</LinkNavigation>
                        <LinkNavigation to="/NavMazamari/Restaurantes">Restaurantes</LinkNavigation>
                        <LinkNavigation to="/NavMazamari/Hoteles">Hoteles</LinkNavigation>
                        <LinkNavigation to="/NavMazamari/Agroindustrias">Agroindustrias</LinkNavigation>
                        <LinkNavigation to="/NavMazamari/Platos_Tipicos">Platos Tipicos</LinkNavigation>
                        <LinkNavigation to="/historia">Historia</LinkNavigation>
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Municipalidad
                </NavLink>
                <DropMenu>
                    <Row className="py-4">
                        <Col md="4">
                            <LinkNavigationEspecial image={imgAlcalde} titulo="Alcalde" to="/alcalde" />
                            <LinkNavigationEspecial image={imgRegidores} titulo="Regidores" to="/" />
                            <ul className="list-unstyled">
                                <li>
                                    <SubLinkNavigation to="/">Funcionarios Municipales</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">Comición Permanentes</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">Organigrama</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">Misión y Visión</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">Sistema de Control Interno</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">Convocatorias CAS</SubLinkNavigation>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <LinkNavigationEspecial image={imgGerencias} titulo="Gerencias" to="/" />
                            <ul className="list-unstyled">
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA MUNICIPAL</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE ADMINISTRACION Y FINANZAS</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE ADMINISTRACION TRIBUTARIA</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE PLANEAMIENTO Y PRESUPUESTO</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE ASESORIA JURIDICA</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE DESARROLLO URBANO Y RURAL</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE DESARROLLO ECONOMICO TERRITORIAL</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE GESTION AMBIENTAL Y SERVICIOS PUBLICOS</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE DESARROLLO SOCIAL HUMANO</SubLinkNavigation>
                                </li>
                                <li>
                                    <SubLinkNavigation to="/">GERENCIA DE DESARROLLO DE COMUNIDADES INDIGENAS</SubLinkNavigation>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/Normativa">
                    Normatividad
                </NavLink>
                <DropMenu>
                    <div className="mb-3 pt-4 nav_link-grid">
                        <LinkItem to="/" image={imgOrdenanzaMunicipal} titulo="Ordenanza Municipal" />
                        <LinkItem to="/" image={imgAcuerdosConsejo} titulo="Acuerdos de Consejo" />
                        <LinkItem to="/" image={imgResolucionConsejoMunicipal} titulo="Resoluci&oacute;n de Consejo Municipal" />
                        <LinkItem to="/" image={imgActa} titulo="Actas de Sessi&oacute;n de Consejo Ordinario" />
                        <LinkItem to="/" image={imgActa} titulo="Actas de Consejo Extraordinarios" />
                        <LinkItem to="/" image={imgDecretoAlcaldia} titulo="Decretos de Alcaldia" />
                        <LinkItem to="/" image={imgResolucionesAlcaldia} titulo="Resoluciones de Alcaldia" />
                        <LinkItem to="/" image={imgAgendaConsejoOrdinario} titulo="Agenda de Sessi&oacute;n de Consejo Ordinario" />
                        <LinkItem to="/" image={imgAgendaConsejoExtraOrdinario} titulo="Agenda de Sessi&oacute;n de Consejo Extraordinario" />
                        <LinkItem to="/" image={imgResolucionesGerencia} titulo="Resoluci&oacute;n de Gerencia Municipal" />
                        <LinkItem to="/" image={imgDirecctorio} titulo="Directivas Institucionales" />
                        <LinkItem to="/" image={imgCCI} titulo="CCI Actas de Sessi&oacute;n Extraordinario" />
                        <LinkItem to="/" image={imgConveniosSuscritos} titulo="Convenios Suscritos" />
                    </div>
                    <div>
                        <h4 className="px-4 text-small text-muted">Instrumentos de gestion</h4>
                        <div className="px-3 pb-4">
                            <SubLinkItem to="/" image={imgPdf} titulo="MOF" />
                            <SubLinkItem to="/" image={imgPdf} titulo="ROF" />
                            <SubLinkItem to="/" image={imgPdf} titulo="TUPA" />
                            <SubLinkItem to="/" image={imgPdf} titulo="CAP" />
                            <SubLinkItem to="/" image={imgPdf} titulo="MAPRO" />
                            <SubLinkItem to="/" image={imgPdf} titulo="POI" />
                            <SubLinkItem to="/" image={imgPdf} titulo="RIC" />
                            <SubLinkItem to="/" image={imgPdf} titulo="PDC" />
                            <SubLinkItem to="/" image={imgPdf} titulo="PDC AL 2030" />
                            <SubLinkItem to="/" image={imgPdf} titulo="PEI" />
                        </div>
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Transparencia
                </NavLink>
                <DropMenu>
                    <div className="mb-3 pt-4 nav_link-grid">
                        <LinkItem to="/" image={imgDatosGenerales} titulo="Datos generales" />
                        <LinkItem to="/" image={imgPlaneamiento} titulo="Planeamiento" />
                        <LinkItem to="/" image={imgPresupuesto} titulo="Presupuesto" />
                        <LinkItem to="/" image={imgProyectosInversion} titulo="Proyectos de Inversi&oacute;n" />
                        <LinkItem to="/" image={imgParticipacionCiudadana} titulo="Participacion Ciudadana" />
                        <LinkItem to="/" image={imgPersonal} titulo="Personal" />
                        <LinkItem to="/" image={imgContratacionBienesServicios} titulo="Contratacion de Bienes y Servicios" />
                        <LinkItem to="/" image={imgNormasPublicas} titulo="Normas P&uacute;blicas" />
                    </div>
                    <h4 className="px-3 text-color-lighter font-weight-600 text-small">Agenda</h4>
                    <div className="mb-3 nav_link-grid">
                        <LinkItem to="/" image={imgAlcalde} titulo="Alcalde" />
                        <LinkItem to="/" image={imgConsejoMunicipal} titulo="Consejo Municipal" />
                        <LinkItem to="/" image={imgMunicipalidad} titulo="Municipalidad" />
                    </div>
                    <h4 className="px-3 text-color-lighter font-weight-600 text-small">Documentos importantes</h4>
                    <div className="pb-4 nav_link-grid">
                        <LinkItem to="/" image={imgDocumentosImportantes} titulo="Documentos de OCI" />
                        <LinkItem to="/" image={imgNoticiasInstitucion} titulo="Noticias de la Instituci&oacute;n" />
                        <LinkItem to="/" image={imgAnuncios} titulo="Anuncios" />
                        <LinkItem to="/" image={imgComunicadosNotaDePrensa} titulo="Comunicados y Nota de Prensa" />
                        <LinkItem to="/" image={imgBoletines} titulo="Boletines" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/c">
                    Informacion en linea
                </NavLink>
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/c" image={imgTributoMunicipal} titulo="Tributo Municipal" />
                        <LinkItem to="/c/licencia_funcionamiento" image={imgLicenciaFuncionamiento} titulo="Licencia de Funcionamiento" />
                        <LinkItem to="/c/transporte_publico" image={imgRegistroCivil} titulo="Registro Civil" />
                        <LinkItem to="/c/transporte_publico" image={imgEmergencia} titulo="Defensa Civil" />
                        <LinkItem to="/c/Licencia_Edificacion" image={imgTransportePublico} titulo="Transporte Publico" />
                        <LinkItem to="/c/ComiteControlInterno" image={imgLicenciaEdificaciones} titulo="Licencias de Edificaciones" />
                        <LinkItem to="/c/CodigoEtica" image={imgComiteControlInterno} titulo="Comite de Control Interno" />
                        <LinkItem to="/c/CodigoEtica" image={imgCodigoEtica} titulo="Codigo Etica" />
                        <LinkItem to="/" image={imgProgramaMultianualInvercion} titulo="Programa Multianual de Inversi&oacute;n" />
                        <LinkItem to="/" image={imgSaneamiento} titulo="Saneamiento" />
                        <LinkItem to="/c/PresupuestoParticipativo" image={imgPresupuestoParticipativo} titulo="Presupuesto Participativo" />
                        <LinkItem to="/" image={imgSolicitudAccesoInformacion} titulo="Solicitud de Acceso a la Informaci&oacute;n" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/">
                    Programas
                </NavLink>
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/" image={imgVasoDeLeche} titulo="Vaso de Leche" />
                        <LinkItem to="/" image={imgDemuna} titulo="Demuna" />
                        <LinkItem to="/" image={imgOmaped} titulo="Omaped" />
                        <LinkItem to="/" image={imgAdultoMayor} titulo="Adulto Mayor" />
                        <LinkItem to="/" image={imgPiced} titulo="Piced" />
                        <LinkItem to="/" image={imgServir} titulo="Servir" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Seguridad
                </NavLink>
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem image={imgDirectorio} to="/Direcctorio" titulo="Directorio" />
                        <LinkItem image={imgCodisec} to="/Direcctorio" titulo="Codisec" />
                        <LinkItem image={imgSeguridadCiudadana} to="/Serenazgo" titulo="Seguridad Ciudadana" />
                        <LinkItem image={imgSeguridadYSaludEnElTrabajo} to="/Direcctorio" titulo="Seguridad y Salud en el Trabajo" />
                        <LinkItem image={imgSerenazgo} to="/" titulo="Serenasgo" />
                    </div>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/DirectorioTelefono">
                    Contactos
                </NavLink>
                <DropMenu>
                    <div className="py-4 nav_link-grid">
                        <LinkItem to="/" image={imgDirecctorio} titulo="Directorio de Telefono" />
                        <LinkItem to="/" image={imgSedes} titulo="Sede Principal y Sucursal" />
                        <LinkItem to="/" image={imgSugerencias} titulo="Sugerencias" />
                        <LinkItem to="/" image={imgLibroReclamaciones} titulo="Libro de Reclamaciones y Quejas" />
                    </div>
                </DropMenu>
            </ItemNavigation>
        </ul>
    </nav>
}

function ItemNavigation({ children }) {
    return <li className="mr-3 item-navigation">
        {children}
    </li>
}

function DropMenu({ children, className, style }) {
    return <section className={`drop-menu rounded-lg shadow ${className}`} style={style}>
        {children}
    </section>
}

function LinkNavigation({ children, to }) {
    return <NavLink className="px-4 py-2 text-small font-weight-600 text-decoration-none d-block" to={to}>
        {children}
    </NavLink>
}

function SubLinkNavigation({ children, to }) {
    return <NavLink className="px-5 py-2 text-small font-weight-400 text-decoration-none d-block" to={to}>
        {children}
    </NavLink>
}

const LinkItem = ({ image, titulo, descripcion, to }) => (
    <Link to={to} className="nav_link-item text-decoration-none d-flex align-items-center py-2 px-3 color-text">
        {image && <div className="mr-4">
            <img width="32" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small font-weight-600">{titulo}</p>
            <p className="mb-0 text-small">{descripcion}</p>
        </div>
    </Link>
);
const SubLinkItem = ({ to, image, titulo }) => (
    <Link to={to} className="mr-3 px-2 rounded link-normal color-text text-decoration-none d-inline-flex align-items-center">
        {image && <div className="mr-2">
            <img width="17" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small">{titulo}</p>
        </div>
    </Link>
);

const LinkNavigationEspecial = ({ to, image, titulo }) => (
    <Link to={to} className="nav_link-item text-decoration-none d-flex align-items-center py-2 px-3 color-text">
        {image && <div className="mr-3">
            <img width="17" src={image} alt="links header" />
        </div>}
        <div>
            <p className="mb-0 text-small font-weight-600">{titulo}</p>
        </div>
    </Link>
)
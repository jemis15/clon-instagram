import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNav() {
    return <nav className="nav align-self-center ml-auto">
        <ul className="d-flex align-items-center list-unstyled mb-0">
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/historia">
                    Mazamari
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/historia">
                        Historia
                    </LinkNavigation>
                    <ul className="list-unstyled">
                        <li>
                            <SubLinkNavigation to="/login">
                                Evolucion
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">
                                Alcaldes
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/Himno">
                                Himno
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">
                                Escudo
                            </SubLinkNavigation>
                        </li>
                    </ul>
                    <hr />
                    <LinkNavigation to="/gastronomiayturismo">
                        Gastronomia y turismo
                        </LinkNavigation>
                    <LinkNavigation to="/LugaresTuristicos">
                        Turismo
                    </LinkNavigation>
                    <LinkNavigation to="/NavMazamari/Restaurantes">
                        Restaurantes
                    </LinkNavigation>
                    <LinkNavigation to="/NavMazamari/Hoteles">
                        Hoteles
                    </LinkNavigation>
                    <LinkNavigation to="/NavMazamari/Agroindustrias">
                        Agroindustrias
                    </LinkNavigation>
                    <LinkNavigation to="/NavMazamari/Platos_Tipicos">
                        Platos Tipicos
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Municipalidad
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/PerfilA">
                        Alcalde
                    </LinkNavigation>
                    <LinkNavigation to="/Presentacion">
                        Regidores
                    </LinkNavigation>
                    <LinkNavigation to="/Funcionarios">
                        Funcionarios municipales
                    </LinkNavigation>
                    <LinkNavigation to="/Comisiones">
                        Comicion permanentes
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Organigrama
                    </LinkNavigation>
                    <LinkNavigation to="/Vision_Mision">
                        Mision y Vision
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Sistema de control interno
                    </LinkNavigation>
                    <LinkNavigation to="/ConvocatoriaCass">
                        Convocatoras CAS
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/Normativa">
                    Normatividad
                </NavLink>
                <DropMenu>
                    <h4 className="text-small text-muted">Instrumentos de gestion</h4>
                    <ul className="list-unstyled">
                        <li>
                            <SubLinkNavigation to="/login">MOF</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">ROF</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">TUPA</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">CAP</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">MAPRO</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">POI</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">RIC</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">PDC</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">PDC AS 2030</SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/login">PEI</SubLinkNavigation>
                        </li>
                    </ul>
                    <hr />
                    <LinkNavigation to="/login">
                        Resolucion de concejo Municipal
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Actas de session de consejo ordinario
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Actas de session de consejo extraordinarios
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Decretos de Alcaldia
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Resoluciones de Alcaldia
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Agenda de session de consejo extraordinario
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Resoluciones de gerencia municipal
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Directivas institucionales
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        CCI actas de session extraordinaria
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Convenios suscritos
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Transparencia
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/login">
                        Datos generales
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Planeamiento y organizacion
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Presupuesto
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Proyectos de inversion
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Participacion ciudadana
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Personal contratacion de bienes y servicios
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Normas publicas
                    </LinkNavigation>
                    <hr />
                    <h4 className="text-small text-muted">Otros</h4>
                    <ul className="list-unstyled">
                        <li>
                            <SubLinkNavigation to="/">
                                Agenda
                            </SubLinkNavigation>
                            <ul className="list-unstyled">
                                <li className="pl-4">
                                    <SubLinkNavigation to="/">
                                        Alcalde de consejo Municipal
                                    </SubLinkNavigation>
                                </li>
                                <li className="pl-4">
                                    <SubLinkNavigation to="/">
                                        Municipalidad
                                    </SubLinkNavigation>
                                </li>
                            </ul>
                            <hr />
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Documentos importantes
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Documentos de OCI
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Noticias de la institucion
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Anuncios
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Comunicado y nota de prensa
                            </SubLinkNavigation>
                        </li>
                        <li>
                            <SubLinkNavigation to="/">
                                Boletines
                            </SubLinkNavigation>
                        </li>
                    </ul>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/c">
                    Informacion en linea
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/c">
                        Tributo Municipal
                    </LinkNavigation>
                    <LinkNavigation to="/c/licencia_funcionamiento">
                        Licencia de Funcionamiento
                    </LinkNavigation>
                    <LinkNavigation to="/c/RegistroCivil">
                        Registro Civil
                    </LinkNavigation>
                    <LinkNavigation to="/c/transporte_publico">
                        Transporte Publico
                    </LinkNavigation>
                    <LinkNavigation to="/c/Licencia_Edificacion">
                        Licencias de Edificaciones
                    </LinkNavigation>
                    <LinkNavigation to="/c/ComiteControlInterno">
                        Comite de control Interno
                    </LinkNavigation>
                    <LinkNavigation to="/c/CodigoEtica">
                        Codigo de Etica
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Programa multianual de invercion
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Saneamiento
                    </LinkNavigation>
                    <LinkNavigation to="/c/PresupuestoParticipativo">
                        Presupuesto participativo
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Programas
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/">
                        Vaso de Leche
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Demuna
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Omaped
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Adulto Mayor
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Piced
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Servir
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Seguridad
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/Direcctorio">
                        Directorio
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Codisec
                    </LinkNavigation>
                    <LinkNavigation to="/Serenazgo">
                        Seguridad ciudadana
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Seguridad y salud en el trabajo
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/login">
                    Servicios
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/">
                        Servicio de seguridad ciudadana
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Defenza Civil
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Vivero Municipal
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Solicitud de acceso a la informacion
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link text-small font-weight-600" to="/DirectorioTelefono">
                    Contactos
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/DirectorioTelefono">
                        Directorio de telefono
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Sede Principal y Sucursal
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Sugerencias
                    </LinkNavigation>
                    <LinkNavigation to="/QuejaReclamo">
                        Libro de reclamaciones y quejas
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
        </ul>
    </nav>
}

function ItemNavigation({ children }) {
    return <li className="mr-3 item-navigation position-relative">
        {children}
    </li>
}

function DropMenu({ children }) {
    return <section className="drop-menu rounded-lg shadow border position-absolute">
        {children}
    </section>
}

function LinkNavigation({ children, to }) {
    return <NavLink className="py-2 text-small font-weight-600 text-decoration-none d-block" to={to}>
        {children}
    </NavLink>
}

function SubLinkNavigation({ children, to }) {
    return <NavLink className="py-2 text-small font-weight-400 text-decoration-none d-block" to={to}>
        {children}
    </NavLink>
}
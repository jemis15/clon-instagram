import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNav() {
    return <nav className="nav align-self-center ml-auto">
        <ul className="d-flex align-items-center list-unstyled mb-0">
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/">
                    Inicio
                </NavLink>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/historia">
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
                            <SubLinkNavigation to="/login">
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
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
                    Municipalidad
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/login">
                        Alcalde
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Regidores
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Funcionarios municipales
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Comicion permanentes
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Organigrama
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Mision y Vision
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Sistema de control interno
                    </LinkNavigation>
                    <LinkNavigation to="/login">
                        Convocatoras CAS
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
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
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
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
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
                    Informacion en linea
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/">
                        Tributo Municipal
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Licencia de Funcionamiento
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Registro Civil
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Transporte Publico
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Licencias de Edificaciones
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Comite de control Interno
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Codigo de Etica
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Programa multianual de invercion
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Saneamiento
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Presupuesto participativo
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
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
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
                    Seguridad
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/">
                        Directorio
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Codisec
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Seguridad ciudadana
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Seguridad y salud en el trabajo
                    </LinkNavigation>
                </DropMenu>
            </ItemNavigation>
            <ItemNavigation>
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
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
                <NavLink className="px-0 nav-link color-text text-small font-weight-600" to="/login">
                    Contactos
                </NavLink>
                <DropMenu>
                    <LinkNavigation to="/">
                        Directorio de telefono
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Sede Principal y Sucursal
                    </LinkNavigation>
                    <LinkNavigation to="/">
                        Sugerencias
                    </LinkNavigation>
                    <LinkNavigation to="/">
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
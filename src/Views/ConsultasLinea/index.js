import React, { useEffect, useRef } from 'react';
import { NavLink, Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import TransportePublico from './TransportePublico';
import RegistroCivil from './RegistroCivil';
import LicenciaFuncionamiento from './LicenciaFuncionamiento';
import LicenciaEdificacion from './LicenciaEdificacion';
import TributoMunicipal from './TributoMunicipal';
import ComiteControlInterno from './ComiteControlInterno';
import CodigoEtica from './CodigoEtica';
import PresupuestoParticipativo from './PresupuestoParticipativo';
import Saneamiento from './Saneamiento';
import Multianual from './Multianual';

import FormasYLugaresDePago from './TributoMunicipal/FormasYLugaresDePago';
import PlazoYCronogramaDePago from './TributoMunicipal/PlazoYCronogramaDePago';
import Legislacion from './TributoMunicipal/Legislacion';
import Formularios from './TributoMunicipal/Formularios';
import ImpuestoPredial from './TributoMunicipal/ImpuestoPredial';
import ArbitriosMunicipales from './TributoMunicipal/ArbitriosMunicipales';
import InpuestoAlcabala from './TributoMunicipal/InpuestoAlcabala';
import FraccionarioTributario from './TributoMunicipal/FraccionarioTributario';
import MultasTributarias from './TributoMunicipal/MultasTributarias';
import Facultades from './TributoMunicipal/Facultades';
import Procesos from './TributoMunicipal/Procesos';
import Contribuyentes from './TributoMunicipal/Contribuyentes';

export default function ConsultaIndex() {
  const { path, url } = useRouteMatch();
  return <div className="container-xxl my-4">
    <Switch>
      <Route path={`${path}/t`} render={() => <ConsultaLinea />} />
      <Route path={`${path}/licencia_funcionamiento`} render={() => <LicenciaFuncionamiento />} />
      <Route path={`${path}/transporte_publico`} render={() => <TransportePublico />} />
      <Route path={`${path}/licencia_edificacion`} render={() => <LicenciaEdificacion />} />
      <Route path={`${path}/registrocivil`} render={() => <RegistroCivil />} />
      <Route path={`${path}/comiteControlinterno`} render={() => <ComiteControlInterno />} />
      <Route path={`${path}/codigoetica`} render={() => <CodigoEtica />} />
      <Route path={`${path}/presupuestoparticipativo`} render={() => <PresupuestoParticipativo />} />
      <Route path={`${path}/saneamiento`} render={() => <Saneamiento />} />
      <Route path={`${path}/multianual`} render={() => <Multianual />} />
      <Redirect to={`${url}/tributo_municipal`} />
    </Switch>
  </div>
}

function ConsultaLinea() {
  const { path, url } = useRouteMatch();
  return <>
    <div className="row">
      <aside className="col-md-3">
        <nav className="informacion-links" style={{
          position: 'sticky',
          top: 'calc(var(--header-height) + var(--topbar-height) + 1.5rem)',
          maxHeight: 'calc(100vh - var(--header-height) - var(--topbar-height) - 1.5rem)',
        }}>
          <ul className="list-unstyled">
            <LinkCollapsedTributoMunicipal className="mb-1" />
            <LinkCollapsedOrientacionTributaria className="mb-1" />
            <LinkCollapsedTramites className="mb-1" />
            <LinkCollapsedGerenciaAdministracion className="mb-1" />
          </ul>
        </nav>
      </aside>
      <div className="col-md-9">
        <Switch>
          <Route path={`${path}/tributos-municipales/formas-y-lugares-de-pago`} render={() => <FormasYLugaresDePago />} />
          <Route path={`${path}/tributos-municipales/plazo-y-cronograma-de-pago`} render={() => <PlazoYCronogramaDePago />} />
          <Route path={`${path}/tributos-municipales/legislacion`} render={() => <Legislacion />} />
          <Route path={`${path}/tributos-municipales/formularios`} render={() => <Formularios />} />

          <Route path={`${path}/orientacion-triburatia/impuesto-predial`} render={() => <ImpuestoPredial />} />
          <Route path={`${path}/orientacion-triburatia/arbitrios-municipales`} render={() => <ArbitriosMunicipales />} />
          <Route path={`${path}/orientacion-triburatia/impuesto-vehicular`} render={() => null} />
          <Route path={`${path}/orientacion-triburatia/impuesto-al-alcabala`} render={() => <InpuestoAlcabala />} />
          <Route path={`${path}/orientacion-triburatia/fraccionamiento-tributario`} render={() => <FraccionarioTributario />} />
          <Route path={`${path}/orientacion-triburatia/multas-tributarias`} render={() => <MultasTributarias />} />

          <Route path={`${path}/gerencia-administracion-tributaria/funciones`} render={() => null} />
          <Route path={`${path}/gerencia-administracion-tributaria/objetivos`} render={() => null} />
          <Route path={`${path}/gerencia-administracion-tributaria/mision`} render={() => null} />
          <Route path={`${path}/gerencia-administracion-tributaria/vision`} render={() => null} />
          <Route path={`${path}/gerencia-administracion-tributaria/facultades`} render={Facultades} />
          <Route path={`${path}/gerencia-administracion-tributaria/procesos`} render={Procesos} />
          <Route path={`${path}/gerencia-administracion-tributaria/contribuyentes`} render={Contribuyentes} />
          <Route path={`${path}/consulta`} render={() => <TributoMunicipal />} />

          <Redirect to={`${url}/tributos-municipales/formas-y-lugares-de-pago`} />
        </Switch>
      </div>
    </div>
  </>
};


const LinkCollapsedTributoMunicipal = (props) => {
  const { url } = useRouteMatch();
  return <li className={props.className}>
    <BtnAside dataTarget="#tributomunicipal-collapse" urlActive={`${url}/tributos-municipales`}>Tributos Municipales</BtnAside>
    <div className="collapse" id="tributomunicipal-collapse">
      <ul className="list-unstyled">
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/tributos-municipales/formas-y-lugares-de-pago`}>Formas y lugares de pago</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/tributos-municipales/plazo-y-cronograma-de-pago`}>Plazo y cronograma de pago</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/tributos-municipales/legislacion`}>Legislaci&oacute;n</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/tributos-municipales/formularios`}>Formularios</NavLink></li>
      </ul>
    </div>
  </li>
}

const LinkCollapsedOrientacionTributaria = (props) => {
  const { url } = useRouteMatch();
  return <li className={props.className}>
    <BtnAside dataTarget="#orientaciontributaria-collapse" urlActive={`${url}/orientacion-triburatia`}>Orientaci&oacute;n Tributaria</BtnAside>
    <div className="collapse" id="orientaciontributaria-collapse">
      <ul className="list-unstyled">
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/impuesto-predial`}>Impuesto Predial</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/arbitrios-municipales`}>Arbitrios Municipales</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/impuesto-vehicular`}>Impuesto Vehicular</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/impuesto-al-alcabala`}>Impuesto al Alcabala</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/fraccionamiento-tributario`}>Fraccionamiento Tributario</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/orientacion-triburatia/multas-tributarias`}>Multas tributarias</NavLink></li>
      </ul>
    </div>
  </li>
}

const LinkCollapsedTramites = (props) => {
  const { url } = useRouteMatch();
  return <li className={props.className}>
    <BtnAside dataTarget="#tramites-collapse" urlActive={`${url}/tramites`}>Tramites</BtnAside>
    <div className="collapse" id="tramites-collapse">
      <ul className="list-unstyled"></ul>
    </div>
  </li>
}

const LinkCollapsedGerenciaAdministracion = (props) => {
  const { url } = useRouteMatch();
  return <li className={props.className}>
    <BtnAside dataTarget="#gerenciaadministracion-collapse" urlActive={`${url}/gerencia-administracion-tributaria`}>Gerencia de Administraci&oacute;n Tributaria</BtnAside>
    <div className="collapse" id="gerenciaadministracion-collapse">
      <div className="my-2 ps-3 text-smaller">SUB GERENCIA DE RECAUDACIÓN Y CONTROL TRIBUTARIO</div>
      <ul className="list-unstyled">
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/funciones`}>Funciones <span className="text-danger">Copiar del MOF</span></NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/objetivos`}>Objetivos</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/mision`}>Misi&oacute;n</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/vision`}>Visi&oacute;n</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/facultades`}>Facultades</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/procesos`}>Procesos</NavLink></li>
        <li><NavLink className="d-inline-block rounded small" activeClassName="fw-bold" to={`${url}/gerencia-administracion-tributaria/contribuyentes`}>Contribuyentes</NavLink></li>
      </ul>
    </div>
  </li>
}

const BtnAside = (props) => {
  const { pathname } = useLocation();
  const myButton = useRef(null);
  useEffect(() => {
    if (pathname.indexOf(props.urlActive) !== -1) {
      myButton.current.click();
    }
  }, []);

  return <button
    ref={myButton}
    type="button"
    className="btn d-inline-flex align-items-center"// rotate del chev
    data-bs-toggle="collapse"
    data-bs-target={props.dataTarget}
    aria-expanded="false">
    {props.children}
  </button>
};
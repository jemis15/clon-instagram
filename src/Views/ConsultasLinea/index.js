import React, {useState} from 'react';
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import TransportePublico from './TransportePublico';
import RegistroCivil from './RegistroCivil';
import LicenciaFuncionamiento from './LicenciaFuncionamiento';
import LicenciaEdificacion from './LicenciaEdificacion';
import TributoMunicipal from './TributoMunicipal';
import ComiteControlInterno from './ComiteControlInterno';
import CodigoEtica from './CodigoEtica';
import PresupuestoParticipativo from './PresupuestoParticipativo';

export default function ConsultaLinea () {

  return (<div className="container">
      <div className="menu_contenido d-flex mt-3">
        <div className="menu_consulta border-right pr-3">
          <div className="d-flex">
            <div className="mr-2"  style={{width:"10px", height:"2rem", background:"green"}}></div>
            <h2>Consultas en Linea</h2>
          </div>
          <ul className="list-unstyled mt-3">
            <li className="border-bottom ">
              <NavLink to="/c/tributo_municipal" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Tributo Municipal
              </NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/licencia_funcionamiento" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Licencia de Funcionamiento
              </NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/RegistroCivil" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">Registro Civil</NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/c/transporte_publico" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Transaporte Público
              </NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/Licencia_Edificacion"activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Licencia de Edificaciones
              </NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/ComiteControlInterno"activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Comite de Control Interno
              </NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/CodigoEtica"activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Codigo Ética
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/c/PerfilA"  activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Programa Multianial de Inversión
              </NavLink>
            </li>
            <li className="border-bottom  ">
              <NavLink to="/c/PerfilA" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">Saneamiento</NavLink>
            </li>
            <li className="border-bottom">
              <NavLink to="/c/PresupuestoParticipativo"activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Presupuesto Participativo
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contenido_consulta flex-fill px-4">
          <Switch>
            <Route path="/c/tributo_municipal">
              <TributoMunicipal/>
            </Route>
            //----------------------------//
            <Route path="/c/licencia_funcionamiento">
                <LicenciaFuncionamiento/>
            </Route>
            // -------------------------------------------------------//
            <Route path="/c/transporte_publico">
              <TransportePublico />
            </Route>
            //--------------------//
            <Route path="/c/Licencia_Edificacion">
            <LicenciaEdificacion/>
            </Route>
            //-------------------------------//
            <Route path="/c/RegistroCivil">
                <RegistroCivil />
            </Route>
            //--------------------------------//
            <Route path="/c/ComiteControlInterno">
              <ComiteControlInterno/>
            </Route>
            //--------------------------------//
            <Route path="/c/Codigoetica">
              <CodigoEtica/>
            </Route>
            //--------------------------------//
            <Route path="/c/PresupuestoParticipativo">
              <PresupuestoParticipativo/>
            </Route>

            <Redirect to="/c/tributo_municipal" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

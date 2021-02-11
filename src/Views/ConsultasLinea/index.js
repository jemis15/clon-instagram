import React, { useState } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
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

export default function ConsultaLinea() {

  return (<div className="container">
    <div className="menu_contenido d-flex mt-3">
      <div className="contenido_consulta flex-fill px-4">
        <Switch>
          <Route path="/c/tributo_municipal">
            <TributoMunicipal />
          </Route>
            //----------------------------//
            <Route path="/c/licencia_funcionamiento">
            <LicenciaFuncionamiento />
          </Route>
            // -------------------------------------------------------//
            <Route path="/c/transporte_publico">
            <TransportePublico />
          </Route>
            //--------------------//
            <Route path="/c/Licencia_Edificacion">
            <LicenciaEdificacion />
          </Route>
            //-------------------------------//
            <Route path="/c/RegistroCivil">
            <RegistroCivil />
          </Route>
            //--------------------------------//
            <Route path="/c/ComiteControlInterno">
            <ComiteControlInterno />
          </Route>
            //--------------------------------//
            <Route path="/c/Codigoetica">
            <CodigoEtica />
          </Route>
            //--------------------------------//
            <Route path="/c/PresupuestoParticipativo">
            <PresupuestoParticipativo />
          </Route>
          {/* ----------------- */}
          <Route path="/c/Saneamiento">
            <Saneamiento />
          </Route>
            //-------------------------
            <Route path="/c/Multianual">
            <Multianual />
          </Route>

          <Redirect to="/c/tributo_municipal" />
        </Switch>
      </div>
    </div>
  </div>
  );
}

import React from "react";
import { NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import Gastronomias from "./Gastronomia/Lista";
import GastronomiaEditar from "./Gastronomia/Editar";
import Turismos from "./Turismo/Lista";
import TurismoEditar from "./Turismo/Editar";
import ViewCarousel from "./Carousel";
import ViewGrupoLink from "./GrupoLink";
import Banners from "./Banner/Lista";
import BannerEditar from "./Banner/Editar";
import Markers from "./Markers";

export default function Frame({showAlert}) {
  const { path, url } = useRouteMatch()

  return (
    <div className="frame">
      <div className="px-3 py-3 shadow-sm frame-header bg-white">
        <NavLink
          to={`${url}/carouseles`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Carousel
        </NavLink>
        <NavLink
          to={`${url}/linkintereses`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Link de intereses
        </NavLink>
        <NavLink
          to={`${url}/markers`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Markers
        </NavLink>
        <NavLink
          to={`${url}/banners`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Banners
        </NavLink>
        <NavLink
          to={`${url}/gastronomias`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Gastronomia
        </NavLink>
        <NavLink
          to={`${url}/turismos`}
          className="mr-2 py-1 px-2 frame-button rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Turismo
        </NavLink>
      </div>
      <Switch>
        <Route path={`${path}/carouseles`}>
          <ViewCarousel />
        </Route>
        <Route path={`${path}/linkintereses`}>
          <ViewGrupoLink showAlert={showAlert} />
        </Route>
        <Route path={`${path}/markers`}>
          <Markers showAlert={showAlert} />
        </Route>
        <Route path={`${path}/gastronomias`} exact>
          <Gastronomias />
        </Route>
        <Route path={`${path}/gastronomias/:gastronomia_id`}>
          <GastronomiaEditar />
        </Route>
        <Route path={`${path}/turismos`} exact>
          <Turismos />
        </Route>
        <Route path={`${path}/turismos/:turismo_id`}>
          <TurismoEditar />
        </Route>
        <Route path={`${path}/banners`} exact>
          <Banners />
        </Route>
        <Route path={`${path}/banners/:banner_id`}>
          <BannerEditar />
        </Route>
        <Redirect to={`${path}/carouseles`} />
      </Switch>
    </div>
  );
}
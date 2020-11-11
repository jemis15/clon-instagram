import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

import ViewTurismo from "./Frame/Turismo";
import ViewCarousel from "./Frame/Carousel";
import ViewGrupoLink from "./Frame/GrupoLink";

export default function Frame() {
  return (
    <>
      <div className="border-bottom py-2 px-3">
        <NavLink
          to="/frame/carouseles"
          className="pr-1 py-2 px-3 button-nav-j rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Carousel
        </NavLink>
        <NavLink
          to="/frame/linkintereses"
          className="pr-1 py-2 px-3 button-nav-j rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Link de intereses
        </NavLink>
        <NavLink
          to="/frame/grupolinks"
          className="pr-1 py-2 px-3 button-nav-j rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Grupo link
        </NavLink>
        <NavLink
          to="/frame/gastronomias"
          className="pr-1 py-2 px-3 button-nav-j rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Gastronomia
        </NavLink>
        <NavLink
          to="/frame/turismos"
          className="pr-1 py-2 px-3 button-nav-j rounded-lg text-decoration-none d-inline-block"
          activeClassName="active">
          Turismo
        </NavLink>
      </div>
      <Switch>
        <Route path="/frame/carouseles">
          <ViewCarousel />
        </Route>
        <Route path="/frame/linkintereses">
          <ViewGrupoLink />
        </Route>
        <Route path="/frame/grupolinks">
          <ViewGrupoLink />
        </Route>
        <Route path="/frame/gastronomias">
          <ViewGrupoLink />
        </Route>
        <Route path="/frame/turismos">
          <ViewTurismo />
        </Route>
        <Redirect to="/frame/carouseles" />
      </Switch>
    </>
  );
}
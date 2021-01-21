import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Link, NavLink, Route } from 'react-router-dom';
import ListAgroindustrias from './ListAgroindustrias';
import ListPlatosTipicos from './ListPlatosTipicos';
import ListRestaurantes from './ListRestaurantes';
import ListHoteles from './ListHoteles';
import Tours from './Tours';

export default function (){
    return (<div className="container">
      <div className="menu_contenido d-flex mt-3">
        <div className="menu_consulta border-right pr-3">
          <div className="d-flex">
            <div className="mr-2"  style={{width:"10px", height:"2rem", background:"green"}}></div>
            <h2>Turismo Y Gatronomia</h2>
          </div>
          <ul className="list-unstyled mt-3">
            <li className="border-bottom ">
              <NavLink to="/NavMazamari/Tours" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Turismo
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/NavMazamari/Restaurantes" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Restaurantes
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/NavMazamari/Platos_Tipicos" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Platos Tipicos
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/NavMazamari/Hoteles" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Hoteles
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/NavMazamari/Agroindustrias" activeClassName="active" className="menunav-link d-block text-decoration-none py-2 px-3">
                Agroindustrias
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="contenido_consulta flex-fill px-4">
          <Switch>
            <Route path="/NavMazamari/Tours">
                <Tours/>
            </Route>
            <Route path="/NavMazamari/Restaurantes">
                <ListRestaurantes/>
            </Route>
            <Route path="/NavMazamari/Platos_tipicos">
                <ListPlatosTipicos/>
            </Route>
            <Route path="/NavMazamari/Hoteles">
                <ListHoteles/>
            </Route>
            <Route path="/NavMazamari/Agroindustrias">
                <ListAgroindustrias/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
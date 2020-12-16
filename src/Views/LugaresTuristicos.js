 import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import DetallesTurismo from './DetallesTurismo';

export default function LugaresTuristicos (){
    return <div className="container my-5 border" >
        <div className="mx-n3" style={{backgroundColor:"green", color:'white'}} >
            <h1 className="text-center px-n2  p-3" style={{color:'white'}}>Turismo</h1>
        </div>
        <label className="p-3" id="descripcion">La palabra turismo —según la OMT Organización Mundial del Turismo— comprende «las actividades que 
            realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual durante
            un período de tiempo inferior a un año, con fines de ocio, negocios u otros».1​2​ Si no se realiza 
            pernoctación, se consideran excursionistas
            Los turistas y excursionistas forman el total de visitantes.
        </label>
        <h4 className="text-center">Lugares Turisticos</h4>
        <Button href="/RegistroTurismo">Nuevo</Button>
        <div className="menu_contenido d-flex mt-3 border" >
        <div className="menu_Turismo pr-3" style={{width:'30%', borderRight: '3px solid var(--red-700)'}} >
          <ul className="list-unstyled mt-3">
            <li className="border-bottom ">
              <NavLink to="/lugaresturisticos/descripcionTurismo" activeClassName="active" className="menuturismo-link d-block text-decoration-none py-2 px-3">
                Catarata Las Vegas
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/lugaresturisticos/turismo2" activeClassName="active" className="menuturismo-link d-block text-decoration-none py-2 px-3">
                Catarata Las Vegas
              </NavLink>
            </li>
            <li className="border-bottom ">
              <NavLink to="/lugaresturisticos/turismo3" activeClassName="active" className="menuturismo-link d-block text-decoration-none py-2 px-3">
                Catarata Las Vegas
              </NavLink>
            </li>
            </ul>
            </div>
            <div className="contenido_turismo flex-fill px-4">
                <Switch>
                    <Route path="/lugaresturisticos/descripcionTurismo">
                    <DetallesTurismo/>
                    </Route>
                    <Route path="/lugaresturisticos/turismo2">
                    <DetallesTurismo/>
                    </Route>
                    <Route path="/lugaresturisticos/turismo3">
                    <DetallesTurismo/>
                    </Route>
                    <Redirect to="/lugaresturisticos/descripcionTurismo"/>
                </Switch>
            </div>
        
        </div>
    </div>
}
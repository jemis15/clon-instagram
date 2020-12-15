import React from 'react';
import {col, Row, Card, Nav, Button} from 'react-bootstrap';
export default function Certificacion () {
  return (
    <div className="container border rounded pl-4 pr-4" style={{maxWidth: '700px'}}>
      <div className=" p-3 bg-success mx-n4">
      <h3 className="text-center">CERTIFICACIONES O COPIAS DE PARTIDAS</h3>
      <h6 className="text-center">Nacimiento Matrimonio Difuncion</h6>
      </div>
      <br />
        <div>
          {' '}
          <b>DESCRIPCIÓN:</b>
          <label className="pl-5 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam alias molestias corrupti assumenda architecto eos dignissimos, consequuntur temporibus aliquam ducimus, non eum, delectus aperiam distinctio tenetur. Fugit, exercitationem pariatur!
          </label>
        </div>
        <div className="Informacion p-5" >
            <ul className="list-unstyled mt-3">
                        <li className="border-bottom py-3">
                          <b>Requisitos</b>
                          <div className="float-right font-italic">copia de DNI</div>
                        </li>
                        <li className="border-bottom py-3">
                          <b>Costos</b>
                          <div className="float-right font-italic">
                            Copia de partida de nacimiento S/. 451
                          </div>
                        </li>
                        <li className="border-bottom py-3">
                          <b>Plazo de Entrega</b>
                          <div className="float-right font-italic">
                            15 días Hábiles
                          </div>
                        </li>
                        <li className="border-bottom py-3">
                          <b>Horario</b>
                          <div className="float-right font-italic">8:00 am- 5:00 pm</div>
                        </li>
                        <li className="border-bottom py-3">
                          <b>Telefono</b>
                          <div className="float-right font-italic">
                            962345871
                          </div>
                        </li>
                        <li className="border-bottom py-3">
                          <b>Email</b>
                          <div className="float-right font-italic">
                            RegistroCivil@gmail.com
                          </div>
                        </li>
                      </ul>
                    
        </div>
    </div>
  );
}

import React from 'react';
import { Form, Table } from 'react-bootstrap';

export default function EmpTransportePublico(){
    return<div className=" container my-2 p-3">
    <Form>
            <Table  border="2px">
                <thead>
                    <tr>
                        <th scope="col" colspan="2" className="text-center" style={{background:'#D13311', color:'white'}}>Empresa de Transporte Público 
                        <h4 style={{color:'white'}}>LOS TIGRES S.A.C</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"  style={{width:"50px"}}>Representante</th>
                    <td >Mark</td>
                    </tr>
                    <tr>
                    <th scope="row">Dirección</th>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">Teléfono</th>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">Correo</th>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">N° Partida</th>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">Resolución</th>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">Ruc</th>
                    <td>Thornton</td>
                    </tr>
                </tbody>
            </Table>
    </Form>
    </div>
}
import React from 'react';
import { Form, Table } from 'react-bootstrap';

export default function DetalleProyecto(){
    return <div className="container my-5  " style={{width:'800px'}}>
        <Form className="p-5 shadow">
        <div className="mb-4 " style={{borderBottom:'6px solid #EDD016', color:'#008000'}}>
            <p className="mb-0">FORMULARIO PARA</p>
            <h3 style={{color:'#008000'}}> Registro De Proyectos</h3>
        </div>
            <h4 className="text-center mb-3">NOMBRE DEL PROYECTO</h4>
            <p>El martes 04 de setiembre se realizó la premiación del I Concurso Incubadoras de la Innovación Educativa, en Mazamari, en el marco del programa de financiamiento Escuelas Semilla, cuyo propósito es mejorar el proceso de gestión escolar a través de los proyectos en las instituciones educativas de este distrito.  Tanto el Fondo Nacional de Desarrollo de la Educación Peruana (FONDEP),  la Municipalidad Distrital de Mazamari  y la UGEL Satipo premiaron a 11 escuelas de la región, quienes destacaron por sus iniciativas que reúne esfuerzos de tres niveles de gobierno.
        </p>
        <Table size="sm" border="2px">
            <thead >
            <tr>
                <th scope="col" colspan="5" className="text-center" style={{background:'var(--red-700)', color:'white'}}>
                    Ficha de Información Técnica
                </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td  rowspan="2" style={{width:'200px'}} ><b>Proyecto</b></td>
                <td colspan="4" >jdf</td>
                </tr>
                <tr>
                <td style={{width:'200px'}}><b>Código Inversión</b></td>
                <td colspan="3">dferdef</td>
                </tr>
                <tr>
                <td><b>Unidad Ejecutora</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Ubicación</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Objetivo General</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Justificación</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Metas</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Modalidad de Ejecución</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Entidad Financiera</b> </td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Monto de Inversión </b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Población Beneficiaria</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td rowspan="2" ><b>Tiempo de Ejecución</b></td>
                <td  rowSpan="2" >yrfg</td>
                <td style={{width:'150px'}}><b>Fecha Inicio</b></td>
                <td colspan="2">  rhdghg</td>
                </tr>
                <tr>
                <td><b>Fecha Finalizada</b></td>
                <td colspan="2">ksfndif</td>
                </tr>
                <tr>
                <td><b>Principal Actividad</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Resultados Esperados</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
                <tr>
                <td><b>Impacto Ambiental</b></td>
                <td colSpan="4">cbjhg</td>
                </tr>
            </tbody>
            </Table>
        </Form>
    </div>
}
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ConsultaVehicular() {

    return <div>
        <Row className="mb-5">
            <Col className="mb-3">
                <label className="form-label">Propietario de Vehiculo: </label>
                <select className="form-select">
                    <option>Jose Ramos Rojas</option>
                </select>
            </Col>
            <Col className="mb-3">
                <label className="form-label">Placa:</label>
                <select className="form-select">
                    <option>iuhfweiu</option>
                </select>
            </Col>
            <Col className="mb-3">
                <label className="form-label">Codigo MDM:</label>
                <select className="form-select">
                    <option>iuhfweiu</option>
                </select>
            </Col>
        </Row>
        <div className="table-responsive">
            <table className="table table-sm table-bordered border-dark">
                <thead className="text-smaller">
                    <tr>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Color</th>
                        <th>Motor</th>
                        <th>Conductor</th>
                        <th className="text-nowrap">Serie Chasis</th>
                        <th className="text-nowrap">Serie Motor</th>
                        <th>Ejes</th>
                        <th>Asientos</th>
                        <th>Ruedas</th>
                        <th>Carrocería</th>
                        <th className="text-nowrap">N° Tarjeta</th>
                        <th>Titulo</th>
                        <th className="text-nowrap">Fecha Titulo</th>
                        <th>Propietario</th>
                        <th className="text-nowrap">Dirección Propietario</th>
                        <th className="text-nowrap">Teléfono Propietario</th>
                        <th>Conductor</th>
                        <th className="text-nowrap">N° Licencia</th>
                        <th className="text-nowrap">Fecha Emisión Licencia</th>
                        <th className="text-nowrap">Fecha Caducidad Lic.</th>
                        <th>Empresa</th>
                        <th className="text-nowrap">N° Flota</th>
                        <th className="text-nowrap">N° Poliza</th>
                        <th className="text-nowrap">Fecha Inicio Poliza</th>
                        <th className="text-nowrap">Fecha Fin Poliza</th>
                    </tr>
                </thead>
                <tbody className="text-small">
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
import React from 'react';
import { Row } from 'react-bootstrap';

export default function Papeletas() {
    return <div>
        <Row className="mb-5">
            <div className="mb-3 col-md-6">
                <label className="form-label">Propietario de Vehiculo:</label>
                <select className="form-select">
                    <option>Opcion 1</option>
                </select>
            </div>
            <div className="mb-3 col-md-6">
                <label className="form-label">Papeleta por Infracción:</label>
                <select className="form-select">
                    <option>Velocidad</option>
                </select>
            </div>
            <div className="mb-3 col-md-6">
                <label className="form-label">Inspector:</label>
                <select className="form-select">
                    <option>Ramón Suarez Veliz</option>
                </select>
            </div>
            <div className="mb-3 col-md-6">
                <label className="form-label">Año: </label>
                <select className="form-select">
                    <option>2020</option>
                </select>
            </div>
        </Row>
        <div className="mb-3">
            <table className="table table-sm table-bordered border-dark">
                <thead className="text-smaller">
                    <tr>
                        <th>N° Papeleta</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Color</th>
                        <th>N° Tarjeta</th>
                        <th>Conductor</th>
                        <th>Licencia</th>
                        <th>Lic. Clase</th>
                        <th>Lic. Categoria</th>
                        <th>Lugar Ocurrencia</th>
                        <th>Cod. Infracción</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Obs. Conductor</th>
                        <th>Inspector</th>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
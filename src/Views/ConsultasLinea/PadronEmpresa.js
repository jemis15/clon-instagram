import React from 'react';

export default function PadronEmpresa() {
    return <div>
        <div className="mb-4 clearfix">
            <div className="float-end align-items-center">
                <label className="form-label">Seleccione la Empresa:</label>
                <select className="form-select">
                    <option>Selva Azul</option>
                    <option>Milagros</option>
                    <option>Sarita</option>
                </select>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-sm table-bordered border-dark">
                <thead className="text-smaller">
                    <tr>
                        <th>#</th>
                        <th>Flota</th>
                        <th>Propietario</th>
                        <th>Dirección</th>
                        <th>Celular</th>
                        <th className="text-nowrap">Curso Vial</th>
                        <th>Licencia</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Año</th>
                        <th>Color</th>
                        <th>Serie</th>
                        <th>Motor</th>
                        <th>Chasis</th>
                        <th className="text-nowrap">N° asientos</th>
                        <th className="text-nowrap">Fecha Venc. SOAT</th>
                    </tr>
                </thead>
                <tbody className="text-small">
                    <tr>
                        <td>1</td>
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
import React from 'react';

export default function Certificacion() {
  return (
    <div>
      <h2 className="text-center">CERTIFICACIONES O COPIAS DE PARTIDAS</h2>
      <h4 className="mb-4 text-center">Nacimiento Matrimonio Difunci&oacute;n</h4>
      <div className="mb-4">
        <b>DESCRIPCI&Oacute;N:</b> Expedimos Partidas de Nacimiento, matrimonio y difuci&oacute;n para el uso en el pa&iacute;s y para uso en el extranjero.
      </div>
      <div className="card" >
        <ul className="mb-0 list-group list-group-flush">
          <Item titulo="Requisitos" value="---" />
          <Item titulo="Costos" value="---" />
          <Item titulo="Plazo de Entrega" value="---" />
          <Item titulo="Horario" value="---" />
          <Item titulo="Telefono" value="---" />
          <Item titulo="Email" value="---" />
        </ul>
      </div>
    </div>
  );
}

const Item = ({ titulo, value }) => <li className="list-group-item clearfix">
  <div className="float-start">{titulo}</div>
  <div className="float-end fw-bold">{value}</div>
</li>

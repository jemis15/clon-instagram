import React from 'react';
import { Title1, Title2, MainContent } from '../components/Utilitarios';

const MultasTributarias = () => <MainContent>
    <Title1>MULTAS TRIBUTARIAS</Title1>
    <Title2>¿Qu&eacute; son las multas tributarias?</Title2>
    <p>Son las sanciones pecuniarias que se imponen por la falta de presentación o la presentación tardía de la declaración jurada del Impuesto Predial. Esta declaración puede ser determinativa del impuesto (inscripción, aumento del valor del predio por modificaciones en el mismo o adquisición de nuevos predios) o informativa (descargo). Equivale a un porcentaje de la Unidad Impositiva Tributaria (UIT) vigente a la fecha de la infracción. Esta se aplica al vencimiento del plazo para presentar la declaración jurada que corresponda. La multa tributaria se impone de acuerdo al siguiente detalle:</p>
    <table>
        <thead>
            <tr>
                <th>INFRACCION</th>
                <th>PERSONA NATURAL</th>
                <th>PERSONA JURIDICA</th>
                <th>BASE LEGAL</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>No declarar la adquisición de uno o más predios en el distrito (inscripción)</td>
                <td>50% de la UIT</td>
                <td>100% de la UIT</td>
                <td>Art. 176.1 (TUO del Código Tributario)</td>
            </tr>
            <tr>
                <td>No declararla adquisición adicional de uno o más predios en el distrito (si ya declara otros)</td>
                <td>50% del tributo omitido</td>
                <td>50% del tributo omitido</td>
                <td>Art. 178.1 (TUO del Código Tributario)</td>
            </tr>
            <tr>
                <td>No declarar las modificaciones realizadas en predio existente (aumento de valor)</td>
                <td>50% del tributo omitido</td>
                <td>50% del tributo omitido</td>
                <td>Art. 178.1 (TUO del Código Tributario)</td>
            </tr>
            <tr>
                <td>No declarar la transferencia de uno o más predios (baja)</td>
                <td>1% de la UIT</td>
                <td>0% de la UIT</td>
                <td>Art. 176.2 (TUO del Código Tributario)</td>
            </tr>
        </tbody>
    </table>
</MainContent>

export default MultasTributarias;
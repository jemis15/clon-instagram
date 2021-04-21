import React from 'react';
import GraficoContribuyente from "../../../assets/images/grafico-contribuyentes.png";
import { Title1, MainContent } from '../components/Utilitarios';

const Procesos = () => <MainContent>
    <Title1>Procesos de la Administración Tributaria</Title1>
    <p>Son las siguientes:</p>
    <img src={GraficoContribuyente} className="img-fluid" alt="grafico contribuyentes" />
    <p>Como Sub Gerencia de Recaudación nos encargamos de los siguientes procesos:</p>
    <p><span><b>Macroproceso de orientación y atención</b>.-</span> Está conformado por aquellas actividades que buscan brindar una adecuada orientación a los contribuyentes para que con toda la información necesaria los ciudadanos puedan cumplir sus obligaciones tributarias y la administración tributaria mantenga un correcto registro de datos. </p>
    <p><span><b>Macroproceso de registro y determinación de la deuda</b>.-</span> Es el conjunto de actividades que permitirá mantener actualizada la base de datos de la administración tributaria, conteniendo la información de los contribuyentes, predios, declaraciones juradas y la fiscalización correspondiente, a fin de determinar el Impuesto Predial.</p>
    <p><span><b>Macroproceso de gestión de cuenta</b>.-</span> Comprende las actuaciones de control y seguimiento de la deuda, independientemente de la etapa y estado de las cuentas. Abarca los procesos de cobranza ordinaria, cobranza coactiva y el control de deuda para la emisión oportuna de los valores tributarios, el monitoreo adecuado de los fraccionamientos y el seguimiento de los saldos por cobrar. </p>
    <p><span><b>Macroproceso de notificaciones</b>.-</span> Abarca aquellas actividades destinadas a las notificaciones de actos administrativos y diversas comunicaciones que emita la administración tributaria dentro de sus procedimientos de gestión, con la finalidad que estas se realicen de manera efectiva de acuerdo con las disposiciones legales vigentes, para así asegurar la celeridad, legalidad y economía procesal.</p>
</MainContent>

export default Procesos;
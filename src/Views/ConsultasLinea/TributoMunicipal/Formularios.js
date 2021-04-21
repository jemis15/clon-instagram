import React from 'react';
import {Title1, Title2, MainContent} from '../components/Utilitarios';

const Formularios = () => <MainContent>
    <Title1>FORMULARIOS</Title1>
    <Title2>Hoja Resumen (HR)</Title2>
    <p>Descargar formato (PDF) / Ver instructivo de llenado (PDF)</p>
    <p>El formulario Hoja de Resumen (HR) debe contener los siguientes datos:</p>
    <ol>
        <li><b>Identificación del Contribuyente:</b> Se deberá completar la información del propietario del predio (persona natural o jurídica).</li>
        <li><b>Domicilio Fiscal:</b> Es el lugar fijado dentro del territorio nacional para todo efecto tributario. Deberá estar ubicado dentro del radio urbano de la jurisdicción de Mazamari.</li>
        <li><b>Información del Representante Legal:</b> En el caso de personas jurídicas, se deberá señalar los datos del representante legal y su domicilio legal.</li>
        <li><b>Motivo de la declaración:</b> Se deberá indicar cuál es el motivo de la declaración del (los) predio(s) involucrado(s). Entre los motivos están: por transferencia de propiedad, por modificación de la base imponible, por descargo, por presentación anual de la Declaración Jurada, por rectificatoria, etcétera. Se deberá establecer también el régimen en el cual está involucrado: Afecto, inafecto, exonerado o exonerado parcial.</li>
    </ol>
    <Title1>Predio Urbano (PU)</Title1>
    <p>Descargar formato (PDF) / Ver instructivo de llenado (PDF)</p>
    <p>El formulario Predio Urbano (PU) debe contener los siguientes datos:</p>
    <ol>
        <li><b>Identificación del predio:</b> Se deberá completar la información referente a la condición de propiedad (propietario único, sucesión indivisa, poseedor o tenedor, sociedad conyugal, condómino y porcentaje de condominio).</li>
        <li><b>Ubicación del predio:</b> Se deberá indicar la dirección del predio gravado.</li>
        <li><b>Datos relativos al predio:</b> Se deberá indicar el estado del predio (terreno sin construir, en construcción, terminado), así también el tipo y uso, de acuerdo a las opciones planteadas en el formulario.</li>
        <li><b>Datos para determinar el autovalúo:</b> En esta parte del formulario se completará la información específica del predio, teniendo como referencia la Tabla de Valores Unitarios de Edificación que publica cada año el Ministerio de Vivienda y la depreciación establecida en el Reglamento Nacional de Tasaciones.</li>
    </ol>
    <Title2>Predio Rural (PR)</Title2>
    <p>Descargar formato (PDF) / Ver instructivo de llenado (PDF)</p>
    <p>El formulario Predio Rural (PR) debe contener los siguientes datos:</p>
    <ol>
        <li><b>Identificación del predio:</b> Se deberá completar la información referente a la condición de propiedad (propietario único, sucesión indivisa, poseedor o tenedor, sociedad conyugal, condómino y porcentaje de condominio).</li>
        <li>Ubicación del predio: Se deberá indicar la dirección del predio gravado.</li>
        <li><b>Datos relativos al predio:</b> Se deberá indicar el estado del predio (terreno sin construir, en construcción, terminado), así también el tipo y uso, de acuerdo a las opciones planteadas en el formulario.</li>
        <li><b>Datos para determinar el autovalúo:</b> En esta parte del formulario se completará la información específica del predio, teniendo como referencia la Tabla de Valores Unitarios de Edificación que publica cada año el Ministerio de Vivienda y la depreciación establecida en el Reglamento Nacional de Tasaciones.</li>
    </ol>
    <Title2>Declaración Jurada de Adulto Mayor</Title2>
    <p>Descargar formato (PDF) / Ver instructivo de llenado (PDF)</p>
    <p>Este formulario sirve para acceder al beneficio de descuento de 50 UIT de la base imponible del Impuesto Predial a partir del año 2017 a favor de los adultos mayores que cumplan con los requisitos indicados en la Ley N° 30490  “Ley del Adulto Mayor” – DS 401-2016-EF.</p>
</MainContent>

export default Formularios;
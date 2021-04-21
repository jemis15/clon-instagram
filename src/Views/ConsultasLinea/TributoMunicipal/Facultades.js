import React from 'react';
import {Title1, MainContent} from '../components/Utilitarios';
import FacultadesAdministracionTributaria from '../../../assets/images/facultades-de-la-administracion-tributaria.png';

const Facultades = () => <MainContent>
    <Title1>Facultades de la Administración Tributaria</Title1>
    <p>Son las siguientes:</p>
    <img src={FacultadesAdministracionTributaria} className="img-fluid" alt="facultades de administracion tributaria" />
    <p>Como Sub Gerencia de Recaudación nos encargamos de las siguientes facultades:</p>
    <p><span><b>Facultad de Determinación</b>.-</span> Consiste en identificar la generación de hechos gravados que representan una obligación tributaria, el sujeto obligado al pago, la base imponible y el monto del tributo. </p>
    <p><span><b>Facultad de Recaudación</b>.-</span> Consiste en la recepción del pago de las deudas tributarias.</p>
</MainContent>

export default Facultades;
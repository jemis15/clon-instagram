import React from 'react';
import { Link } from 'react-router-dom';
import LogoBancoNacion from '../../../assets/images/logo_banco_de_la_nacion.jpg';
import { Title1, Title2, MainContent } from '../components/Utilitarios';

const FormasYLugaresDePago = () => <MainContent>
    <Title1>FORMAS Y LUGARES DE PAGO</Title1>
    <Title2>Pago Presencial</Title2>
    <p>Puede realizar personalmente sus pagos en la caja de nuestro local municipal.</p>
    <p><b>Caja de la Municipalidad Distrital de Mazamari</b></p>
    <ul>
        <li>Dirección: Av. Perú N° 849, Cercado (1° piso)</li>
        <li>Horario de atención: De Lunes a Viernes:</li>
        <li>Mañana: De 8:00 am a 1:00 pm</li>
        <li>Tardes: De 3:00 pm a 5:00 pm</li>
    </ul>
    <Title2>Agencias bancarias</Title2>
    <p>Puede pagar su Impuesto Predial y Arbitrios Municipales, en la siguiente agencia bancaria:</p>
    <div className="mb-3 d-flex">
        <img src={LogoBancoNacion} alt="banco de la nacion logotipo" />
        <div>
            <dl>
                <dt>Cta. Cte. N° 00-473-002183</dt>
                <dd>Para el pago del Impuesto Predial.</dd>
                <dt>Cta. Cte. N° 00-473-002054</dt>
                <dd>Para el pago de los Arbitrios Municipales y otros.</dd>
            </dl>
        </div>
    </div>
    <h5>Pasos:</h5>
    <ol>
        <li>Consultar vía telefónica al (064) 548187 para que se le brinde el estado de cuenta. Válido sólo para el día.</li>
        <li>Realice el depósito de los montos que serán indicados en cada una de las cuentas corrientes correspondientes.</li>
        <li>Sírvase escanear el voucher de depósito y remitir al correo <a className="link-danger" href="mailto:gat@munimazari.gob.pe">gat@munimazari.gob.pe</a> para su conformidad de pago y ser descargado en nuestro Sistema de Recaudación Tributaria Municipal.</li>
    </ol>
    <div className="text-center mt-5">
        <Link to="/c/t/consulta" className="btn btn-lg btn-outline-primary rounded-pill">Conozca su deuda</Link>
    </div>
</MainContent>


export default FormasYLugaresDePago
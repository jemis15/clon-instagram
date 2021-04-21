import moment from 'moment';
import React from 'react';
import { Title1, Title2, MainContent } from '../components/Utilitarios';

const PlazoYCronogramaDePago = () => <MainContent>
    <Title1>PLAZOS Y CRONOGRAMA DE PAGO</Title1>
    <Title2>Cronograma de pago del IMPUESTO PREDIAL</Title2>
    <p>Usted tiene dos opciones para pagar el Impuesto Predial:</p>
    <ol>
        <li>Pago al contado. Bajo esta modalidad usted puede pagar el impuesto hasta el 26 de febrero de 2021, sin ningún tipo de recargo por reajuste o intereses, siendo ampliado mediante ordenanza municipal hasta el último día hábil del mes de mayo (31 mayo).</li>
        <li>Pago en cuotas. Usted puede pagar en cuotas según las fechas de vencimiento:</li>
    </ol>
    <table>
        <thead>
            <tr>
                <th>N&uacute;mero de cuota</th>
                <th>Fecha de vencimiento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1°</td>
                <td>31 de mayo del 2021</td>
            </tr>
            <tr>
                <td>2°</td>
                <td>31 de mayo del 2021</td>
            </tr>
            <tr>
                <td>3°</td>
                <td>31 de agosto del 2021</td>
            </tr>
            <tr>
                <td>3°</td>
                <td>30 de noviembre del 2021</td>
            </tr>
        </tbody>
    </table>
    <p>
        <b>Importante:</b> Las cuotas serán equivalentes a un cuarto del impuesto total y serán reajustadas de acuerdo a la variación acumulada del Índice de Precios al por Mayor (IPM) que publica el Instituto Nacional de Estadística e Informática (INEI), por el periodo comprendido desde el mes de vencimiento de pago de la primera cuota y el mes precedente al pago.
    </p>
    <Title2>Cronograma de pago  de los ARBITRIOS MUNICIPALES</Title2>
    <p>Las fechas para pagar los arbitrios municipales son:</p>
    <table>
        <thead>
            <tr>
                <th>Cuota</th>
                <th>Mes</th>
                <th>Vencimiento</th>
            </tr>
        </thead>
        <tbody>
            {[
                { number: 1, fecha: "2021-01-01" },
                { number: 2, fecha: "2021-02-01" },
                { number: 3, fecha: "2021-03-01" },
                { number: 4, fecha: "2021-04-01" },
                { number: 5, fecha: "2021-05-01" },
                { number: 6, fecha: "2021-06-01" },
                { number: 7, fecha: "2021-07-01" },
                { number: 8, fecha: "2021-08-01" },
                { number: 9, fecha: "2021-09-01" },
                { number: 10, fecha: "2021-10-01" },
                { number: 11, fecha: "2021-11-01" },
                { number: 12, fecha: "2021-12-01" },
            ].map(fecha => {
                const mom = moment(fecha.fecha, 'YYYY-MM-DD')
                return <tr key={fecha.number}>
                    <td>{fecha.number}°</td>
                    <td><div className="text-capitalize">{mom.format('MMMM')}</div></td>
                    <td>{mom.endOf('month').format('LL')}</td>
                </tr>
            })}
        </tbody>
    </table>
    <Title2 className="mt-3">¿Existe algún incentivo si pago por adelantado los arbitrios del 2021?</Title2>
    <p>A la actualidad existe descuentos hasta el 80% de descuento por las cuotas en pronto pago siempre en cuando no se adeude predial ni arbitrios al 2020 (contribuyentes puntuales), cuyo vencimiento es el 31 de mayo 2021; posterior a ello descuento del 50% por pronto pago desde el 01 de junio hasta el 31 de agosto, finalizando con 25% descuento por pronto pago desde el 01 setiembre al 31 diciembre.</p>
</MainContent>

export default PlazoYCronogramaDePago;
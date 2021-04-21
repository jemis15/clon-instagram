import moment from 'moment';
import React from 'react';
import { Title1, Title2, MainContent } from '../components/Utilitarios';

const ArbitriosMunicipales = () => <MainContent>
    <Title1>ARBITRIOS MUNICIPALES</Title1>
    <Title2>¿Qué son los Arbitrios Municipales?</Title2>
    <p>Son las tasas que se liquidan por la prestación o mantenimiento de un servicio público real o potencial, individualizado por contribuyente.</p>
    <p>Los servicios en mención comprenden:</p>
    <ul>
        <li><b><u>Servicio de limpieza pública</u>:</b> Se refiere al servicio de: (1) barrido de calles y espacios públicos, pistas, veredas, parques y bermas y (2) recolección de residuos sólidos comunes y escombros provenientes de los predios, así como transporte, descarga, transferencia y disposición final de los desechos sólidos</li>
        <li><b><u>Servicio de Mantenimiento de parques y jardines</u>:</b> Comprende los servicios de implementación, recuperación, mantenimiento, mejoras y monitoreo permanente de las principales vías públicas para su atención inmediata. Todo ello destinado a atender prioritariamente los parques, jardines, bermas y demás áreas verdes de uso público, así como la recolección de maleza, su transporte y disposición final.</li>
        <li><b><u>Servicio de serenazgo</u>:</b> Servicio que brindará la organización, implementación, mantenimiento y mejora de la vigilancia pública, protección civil y atención de emergencias para procurar una mayor seguridad ciudadana en el distrito, en colaboración con la Policía Nacional del Perú.</li>
    </ul>
    <p>La tasa que corresponde pagar por cada uno de estos servicios constituye los arbitrios municipales. Cuando en el predio, el o los poseedores lo destinen a más de un uso diferente, se cobrarán los arbitrios municipales separadamente, considerando el uso destinado a cada una de las áreas.</p>
    <Title2>¿Quiénes están obligados al pago de Arbitrios Municipales?</Title2>
    <p>Están obligados al pago de estos tributos, los propietarios de los predios ubicados en el distrito de Mazamari (en calidad de contribuyentes).</p>
    <Title2>¿Cómo se han determinado los Arbitrios Municipales para el año 2021?</Title2>
    <p>La determinación de Arbitrios Municipales en Mazamari obedece a la Ordenanza N° 012-2020-MPM, que establece el régimen tributario de los arbitrios municipales de barrido de calles, recolección de residuos sólidos domiciliarios, parques y jardines y serenazgo del año 2021, de acuerdo con las cuales se han establecido los siguientes criterios de distribución:</p>
    <p><b><u>Limpieza pública - Barrido de calles</u></b></p>
    <table>
        <tbody>
            <tr>
                <td>Criterio determinante</td>
                <td>a)	Frontis del predio (metros lineales)</td>
            </tr>
            <tr>
                <td>Criterio complementario</td>
                <td>b)	Frecuencia de barrido</td>
            </tr>
        </tbody>
    </table>
    <p><b><u>Limpieza pública – Recojo de residuos sólidos</u></b></p>
    <table>
        <tbody>
            <tr>
                <td>1.	Uso Casa Habitación Criterio determinante</td>
                <td>
                    <ol>
                        <li>Peso promedio de residuos sólidos recolectados</li>
                        <li>N&uacute;mero de personas</li>
                        <li>Tamaño del predio (m<sup>²</sup>)</li>
                        <li>Zonificación</li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td>2.	Otros usos Criterio complementario</td>
                <td>
                    <ol>
                        <li>Uso del predio</li>
                        <li>Peso promedio de residuos sólidos recolectados</li>
                        <li>Tamaño del predio (m<sup>²</sup>)</li>
                        <li>Zonificación</li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
    <p><b><u>Parques y jardines</u></b></p>
    <table>
        <tbody>
            <tr>
                <td>Criterio determinante</td>
                <td>
                    <ol>
                        <li>
                            Ubicación del predio<br />
                            Categoría 01: Frente a parque y/o área verde<br />
                            Categoría 02: Cerca de parque y/o área verde<br />
                            Categoría 03: Frente a avenida con berma arbolada<br />
                            Categoría 04: Ubicación en otras zonas<br />
                        </li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td>Criterio complementario</td>
                <td>
                    <ol>
                        <li>Nivel de afluencia</li>
                        <li>Disfrute potencial</li>
                        <li>Zonas de servicio</li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
    <p><b><u>Serenazgo</u></b></p>
    <table>
        <tbody>
            <tr>
                <td>Criterio determinante</td>
                <td>
                    <ol>
                        <li>Zonificación del predio</li>
                        <li>Uso del predio</li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td>Criterio complementario</td>
                <td>
                    <ol>
                        <li>Índice de peligrosidad</li>
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
    <p>Los criterios de distribución guardan relación con los criterios básicos establecidos por el Tribunal Constitucional.</p>
    <Title2>¿De qué forma y hasta cuando puedo pagar los arbitrios Municipales?</Title2>
    <p>Las fechas para pagar los arbitrios municipales son de forma mensual:</p>
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

    <Title1>PREGUNTAS FRECUENTES</Title1>
    <Title2>¿Por qué deben pagarse los Arbitrios Municipales?</Title2>
    <p>Porque de acuerdo con lo establecido en el Texto Único Ordenado de la Ley de Tributación Municipal aprobado por D.S. N° 156-2004-EF, las municipalidades brindan a sus vecinos los servicios de limpieza pública (barrido de calles y recojo de residuos sólidos), mantenimiento de parque y jardines, así como servicios de serenazgo. El costo que representa para el municipio la prestación de dichos servicios debe ser distribuido entre todos los contribuyentes.</p>
    <Title2>¿Existen algún tipo de exoneración en el pago de los Arbitrios Municipales?</Title2>
    <p>Solamente existe exoneraciones al 75% para predios dedicados a la educación y salud en todos los niveles que sean estatales y 50% al sector privado (en los arbitrios de recojo de residuos solios, barrido de calles, parques y jardines y Serenazgo), así mismo 75% en recojo de residuos sólidos y barrido de calles; 100% Serenazgo y parques y jardines a predios de la policía Nacional .</p>
    <Title2>Si yo alquilo mi predio ¿quién es el obligado al pago de los Arbitrios Municipales?</Title2>
    <p>Aun así, existiese un acuerdo de alquiler entre el propietario y el inquilino, donde éste último asumiría el pago de los arbitrios. La Administración Tributaria obligará a usted como propietario a asumir la responsabilidad de cancelar los arbitrios en su calidad de contribuyente.</p>
    <Title2>Mi predio es un terreno sin construir ¿debo pagar por Arbitrios Municipales?</Title2>
    <p>Los propietarios de terrenos sin construir están obligados al pago del Arbitrio de Serenazgo; y del Arbitrio de Barrido de Calles sólo en caso su vía se encuentre asfaltada.</p>
    <Title2>Soy propietario de un predio en Mazamari pero no vivo ahí ¿por qué debo pagar mis Arbitrios Municipales?</Title2>
    <p>Son contribuyentes obligados al pago de los Arbitrios Municipales aquellos propietarios de predios ubicados en el distrito de Mazamari, sin hacer excepción alguna si habita o no en dicho predio; ya que se grava la prestación efectiva del servicio así como la potencialidad de recibirlo, es decir la posibilidad que tiene el vecino para disfrutar, del servicio público prestado por la Municipalidad.</p>
</MainContent>

export default ArbitriosMunicipales;
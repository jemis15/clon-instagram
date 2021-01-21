import React from 'react';
import {  Button, Card, Nav, Tab } from 'react-bootstrap';
import pdf from '../assets/images/web/Ley-28716-Ley-de-control-interno-de-las-entidades-del-estado.pdf';
import pdf1 from '../assets/images/web/resolucion-de-contraloria-320-2006-CG-normas-control-interno.pdf';
import pdf2 from '../assets/images/web/resolucion-de-contraloria-320-2006-CG-fe-erratas.pdf';
import pdf3 from '../assets/images/web/rc_146-2019-cg.pdf';
import pdf4 from '../assets/images/web/directiva-codigo-de-etica.pdf';
import pdf5 from '../assets/images/web/directiva-codigo-de-etica.pdf';
import pdf6 from '../assets/images/web/directiva-codigo-de-etica.pdf';
import pdf7 from '../assets/images/web/directiva-codigo-de-etica.pdf';

export default function SistemaControlInterno (){
    return <div className="container my-5">
        <Tab.Container  defaultActiveKey="#link1">
    <div className="cabecera border-bottom d-flex flex-nowrap" >
                <h2 className="py-2">Sistema de Control Interno</h2>
              </div>
            <Card className="mt-3">
                <Card.Header>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link action href="#link1">Normativa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link action href="#link2">Procesos de ISCI en la MDM</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Card.Header>
                <Tab.Content className="px-4 my-4">
                    <Tab.Pane eventKey="#link1">
                        <ol type="1" className="mx-5">
                            <li className="mb-2">
                                <a HREF={pdf} TARGET="_blank">
                                Ley-28716-Ley-de-control-interno-de-las-entidades-del-estado
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href={pdf1} target="_blank">Resolución de Contraloría 320-2006-CG, que aprobó las “Normas de Control Interno”</a> 
                            </li>
                            <li className="mb-2">
                                <a href={pdf2} target="_blank">Fe de erratas a la Resolución de Contraloría n.º 320-2006-CG</a> 
                            </li>
                            <li className="mb-2">
                                <a href={pdf3} target="_blank">Resolución de Contraloría 140-2019-CG, que aprobó la Directiva N° 006-2019-CG/INTEG "Implementación del Sistema de Control Interno en las entidades del Estado"</a> 
                            </li>
                            <li className="mb-2">
                                <a href={pdf4} target="_blank">Código de Ética</a> 
                            </li>
                        </ol>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        <ol type="1" className="mx-5">
                            <li className="mb-2">
                                <a href={pdf5} target="_blank">Entregable - Diagnóstico de la Cultura Organizacional</a> 
                            </li>
                            <li className="mb-2">
                                <a href={pdf6} target="_blank">Entregable - Plan de Acción Anual - Sección Medidas de Remediación</a> 
                            </li>
                            <li className="mb-2">
                                <a href={pdf7} target="_blank">Entregable - Plan de Acción Anual - Sección de Medidas de Control</a> 
                            </li>
                        </ol>
                    </Tab.Pane>
                </Tab.Content>
                </Card>
            </Tab.Container>
        </div>
}
import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';

export default function DirectorioTelefono(){
    return <div className="container border rounded my-5" style={{width:'700px'}}>
        <h1 className="bg-success mx-n3 text-center">Direcctorio de Telefonos </h1>
        <Row className="mt-3 border-bottom my-3">
            <Col>
            <Form.Group >
                <Form.Label><h4>Anexo</h4></Form.Label>
                <Form.Control type="text" placeholder="Ingresar Anexo" />
            </Form.Group>
            </Col>
            <Col xs='auto'>
            <button type="button" class="btn btn-info mt-3">
                Buscar
                <i class="fas fa-search pl-2" />
            </button>
            </Col>
            <Col xs='auto' className="float-right text-center">
                <h4>Telefono Central</h4>
                <p>064-54187</p>
            </Col>
        </Row>
            <Row>
                <Col sm='6'>
                <div className="CajaSec" >
                    <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                        <p className="textodic">Secretaria General / Operadora <span className=" float-right pl-3 ">#21</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Serv. Educativos e Inclusion Social <span className=" float-right pl-3">#22</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Ger.  de  Des  Social y Gestión  Comunitaria Participativa  <span className=" float-right pl-3">#23</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Sb-Ger. Administración 
                        Tributaria (Rentas) <span className=" float-right pl-3">#24</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Mesa de Partes <span className=" float-right pl-3">#25</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Oficina de Registro Civil<span className=" float-right pl-3">#26</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Sub-Gerencia Servicios Públicos<span className=" float-right pl-3">#27</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Gerencia de Desarrollo de Domunidades Indígenas<span className=" float-right pl-3">#28</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Unidad de Almacén<span className=" float-right pl-3">#29</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Alcaldía<span className=" float-right pl-3">#30</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Secretaria Gerencia Municipal y Gerencia Municipal<span className=" float-right pl-3">#31</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Serenazgo y Procuratoria<span className=" float-right pl-3">#32</span></p>
                    </li>
                    </ul>

                </div>
                </Col>
                <Col sm='6'>
                <div className="CajaSec" >
                    <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                        <p className="textodic">Sub Gerencia Maquinarias <span className=" float-right pl-3 ">#33</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Sb-Ger. Presupuesto y Coperación Técnica<span className=" float-right pl-3">#34</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Sub Ger. Desarrollo Urbano y Rural / Obras  <span className=" float-right pl-3">#35</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Unidad de Arquitectura y Catastro <span className=" float-right pl-3">#36</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Unidad de Logística y Adquisiciones <span className=" float-right pl-3">#37</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Contabilidad<span className=" float-right pl-3">#38</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Gerencia de Gestión Ambiental y Servicios Públicos<span className=" float-right pl-3">#39</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Unidad de Informática<span className=" float-right pl-3">#40</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Unidad RR.HH / Archivo / Administración<span className=" float-right pl-3">#41</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Imagen Institucional<span className=" float-right pl-3">#42</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Desarrollo economico Productivo<span className=" float-right pl-3">#43</span></p>
                    </li>
                    <li className="mb-2">
                        <p className="textodic">Tesoreria<span className=" float-right pl-3">#44</span></p>
                    </li>
                    </ul>

                </div>
                </Col>
            </Row>
    </div>
}
import React from 'react';
import {Col, Form} from 'react-bootstrap';
import img_alcalde1 from '../assets/images/web/policia.jpg';

export default function Alcaldes () {
  return (
    <div className="containerhi"style={{background: "skyblue"}}>
    <div className="container py-3" style={{width: '800px'}}>
      <h1 className="text-center">Alcaldes de Mazamari</h1>

      <Form className="py-5 px-3" >
        <Form.Row className="mb-4">
          <Col xs="auto">
            <img
              src={img_alcalde1}
              alt="alcalde1"
              style={{width: '100px', height: '150px', border: 'solid'}}/>
          </Col>
          <Col>
            <h3>
              <i class="fa fa-user-circle pr-2" aria-hidden="true" />
              Marcelino Camaren Torres
            </h3>
            <p>
              <i class="fa fa-shopping-bag pr-2" aria-hidden="true" />
              Alcalde 2015-2018
            </p>
            <a href="#" style={{color: 'skyblue'}}>
              {' '}<i class="fa fa-file pr-2" aria-hidden="true" />Hoja de vida
            </a>
          </Col>
          <Col xs="auto">
            <img
              src={img_alcalde1}
              alt="alcalde"
              style={{width: '100px', height: '150px', border: 'solid'}}
            />
          </Col>
          <Col>
            <h3>
              <i class="fa fa-user-circle pr-2" aria-hidden="true" />
              Marcelino Camaren Torres
            </h3>
            <p>
              <i class="fa fa-shopping-bag pr-2" aria-hidden="true" />
              Alcalde 2015-2018
            </p>
            <a href="#" style={{color: 'skyblue'}}>
              {' '}<i class="fa fa-file pr-2" aria-hidden="true" />Hoja de vida
            </a>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <img
              src={img_alcalde1}
              alt="alcalde"
              style={{width: '100px', height: '150px', border: 'solid'}}/>
          </Col>
          <Col>
            <h3>
              <i class="fa fa-user-circle pr-2" aria-hidden="true" />
              Marcelino Camaren Torres
            </h3>
            <p>
              <i class="fa fa-shopping-bag pr-2" aria-hidden="true" />
              Alcalde 2015-2018
            </p>
            <a href="#" style={{color: 'skyblue'}}>
              {' '}<i class="fa fa-file pr-2" aria-hidden="true" />Hoja de vida
            </a>
          </Col>
          <Col xs="auto">
            <img
              src={img_alcalde1}
              alt="alcalde"
              style={{width: '100px', height: '150px', border: 'solid'}}/>
          </Col>
          <Col>
            <h3>
              <i class="fa fa-user-circle pr-2" aria-hidden="true" />
              Marcelino Camaren Torres
            </h3>
            <p>
              <i class="fa fa-shopping-bag pr-2" aria-hidden="true" />
              Alcalde 2015-2018
            </p>
            <a href="#" style={{color: 'skyblue'}}>
              {' '}<i class="fa fa-file pr-2" aria-hidden="true" />Hoja de vida
            </a>
          </Col>
        </Form.Row>
      </Form>
    </div>
    </div>
  );
}

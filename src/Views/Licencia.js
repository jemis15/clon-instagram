import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Col, Modal, Row} from 'react-bootstrap';

export default function Licencia () {
  const [modal, setModal] = useState (false);
  const [resultado, setResultado] = useState (null);

  async function buscar () {
    setModal (true);
    try {
      //const {data: apiBusqueda} = await Axios.get ('/apimuni/users/1');
      const {data: apiBusqueda} = await Axios.get ('/apimuni/users');
      setResultado ({apiBusqueda});
      console.log (apiBusqueda);
    } catch (error) {
      console.log (error);
    }
  }

  const toggleModal = () => setModal (!modal);

  return (
    <div className="container p-5" style={{maxWidth: "700px", backgroundColor:"#F5F5F5"}}>
      <div className="card ">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Consulta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TributoMuniDocument">Información</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Row>
            <Col sm="2">
              <label> <strong>Año Licencia: </strong></label>
            </Col>
            <Col sm="3">
              <input
                type="date"
                className="form-control border-dark"
                name="fecha"
                step="2"
              />
            </Col>
            <Col sm="2">
              <label> <strong>N° Licencia: </strong> </label>
            </Col>
            <Col sm="3">
              <input
                type="text"
                className="form-control border-dark"
                placeholder="N° Licencia"
              />
            </Col>
            <Col sm="2">
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={buscar}
              >
                {' '}
                Buscar Licencia
                <i className="fas fa-search-plus" />
              </button>
            </Col>
          </Row><br />

          <Modal show={modal} onHide={toggleModal}>
            <Modal.Header> <h3>LICENCIA DE FUNCIONAMIENTO</h3></Modal.Header>
            <Modal.Body>
              {resultado
                ? <OkeyBusqueda id={resultado.id}/>

                : <p>Ups no hay resultados de la busqueda</p>}
            </Modal.Body>
          </Modal>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header badge badge-warning">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {' '}
                    LICENCIA DE FUNCIONAMIENTO
                    {' '}
                    <span style={{fontSize: '20PX'}}>N° </span>
                  </h5>
                </div>

                <div className="modal-body">
                  <form>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Razón Social:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Representante:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Dni:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Dirección:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Ruc N°:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Año y N° Licencia Funcionamiento:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div>
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Estado:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function OkeyBusqueda({id}) {
    return <form>{id} hola
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Razón Social:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Representante:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Dni:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Dirección:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Ruc N°:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div className="mb-2">
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Año y N° Licencia Funcionamiento:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>
                    <div>
                      <font style={{fontSize: '16px', fontWeight: 'bold'}}>
                        Estado:
                        {' '}
                        <span style={{fontSize: '15px', fontWeight: 'normal'}}>
                          Bella Durmiente{' '}
                        </span>
                      </font>
                    </div>


                    
                  </form>



}
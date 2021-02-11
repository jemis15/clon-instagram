import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Form, Table } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SeguimientoReclamo() {
  let query = useQuery();
  const { libro } = useParams();
  const [loading, setLoading] = useState(false);
  const [librosReclamacion, setLibrosReclamacion] = useState([]);
  let numero = 0;

  useEffect(() => {
    const source = Axios.CancelToken.source();
    async function loadReclamacion() {
      try {
        setLoading(true);
        if (query.get('type')) {
          const { data: apiReclamacion } = await Axios.get(`/apimuni/libroreclamaciones/${libro}?type=anonimo`, {
            cancelToken: source.token
          });
          setLibrosReclamacion(apiReclamacion);
        } else {
          const { data: apiReclamacion } = await Axios.get(`/apimuni/libroreclamaciones/${libro}`, {
            cancelToken: source.token
          });
          setLibrosReclamacion(apiReclamacion);
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    loadReclamacion();

    return () => source.cancel('Cancelado');
  }, [libro, query.get('type')]);

  return <div className="container my-5 p-5">
    <Card>
      <Card.Header style={{ background: '#008000', color: 'white', borderBottom: '3px solid #EDD016' }} as="h5">SEGUIMIENTO </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Ingrese su n&uacute;mero de dni, ruc o carnet de extranjeria</Form.Label>
            <div className="text-smaller mb-3">En caso hayas registrado como anonimo, ingrese el numero del libro que se le mostro al momento del registro del libro.</div>
            <Form.Control type="text" placeholder="N° Incidencia" />
          </Form.Group>
          <Button className="mb-3" variant="primary">Buscar</Button>
        </Form>
        <Table bordered size="sm">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Tipo Incidencia</th>
              <th>Nombre</th>
              <th>Área</th>
              <th>Detalles</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {librosReclamacion.map(libro => (
              <tr key={libro.id}>
                <td>{numero++}</td>
                <td>{libro.created_at}</td>
                <td>{libro.tipoIncidencia}</td>
                <td>{libro.nombres}</td>
                <td>{libro.areaReclamo}</td>
                <td>{libro.descripcionIncidencia}</td>
                <td>{libro.observacion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </div>
}

const PageNoFound = () => (
  <div className="text-center mt-5">
    {'Esta pagina no es a encontrado'}
    <div className="text-center">
      <Button>Ir a inicio</Button>
    </div>
  </div>
)
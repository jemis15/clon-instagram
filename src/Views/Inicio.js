import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import MultiItemsCarousel from '../components/MultiItemsCarousel';

import image from '../assets/images/icons/camara.svg'
import flayer_1 from '../assets/images/FLAYER_1.png';
import flayer_2 from '../assets/images/FLAYER_2.png';
import flayer_3 from '../assets/images/FLAYER_3.png';
import Axios from 'axios';

export default function Inicio({ user }) {
  const [grupoLinks, setGrupoLinks] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);

  useEffect(() => {
    async function loadLinks() {
      const { data: apiLinks } = await Axios.get('/apimuni/grupolinkstipo/with/links');
      setGrupoLinks(apiLinks);
    }

    loadLinks();
  }, []);

  const toggleModalEditar = () => setModalEditar(!modalEditar);

  return <div>
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="carousel-banner-inicio"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable>
      <WithStyled image={flayer_1} />
      <WithStyled image={flayer_2} />
      <WithStyled image={flayer_3} />
    </Carousel>

    {/* <form className="bg-dark position-relative d-none d-lg-block">
      <div className="py-3 position-absolute" style={{ bottom: 0, left: 0, right: 0 }}>
        <div className="container position-relative">
          <div className="position-absolute icon-convinado bg-dark text-white rounded-circle d-flex align-items-center justify-content-center">
            <i className="fas fa-sync" />
          </div>
          <div className="d-inline-block h-100" style={{ width: "20%" }}>
            <select className="w-100 h-100 p-3 border-0 d-inline-block">
              <option>opcion 1</option>
              <option>opcion 2</option>
              <option>opcion 3</option>
              <option>opcion 4</option>
            </select>
          </div>
          <div className="d-inline-block h-100" style={{ width: "20%" }}>
            <select className="w-100 h-100 p-3 border-0 d-inline-block">
              <option>opcion 1</option>
              <option>opcion 2</option>
              <option>opcion 3</option>
              <option>opcion 4</option>
            </select>
          </div>
          <div className="d-inline-block h-100" style={{ width: "20%" }}>
            <input className="w-100 h-100 p-3 border-0" type="date" />
          </div>
          <div className="d-inline-block h-100" style={{ width: "20%" }}>
            <input className="w-100 h-100 p-3 border-0" type="date" />
          </div>
          <div className="d-inline-block h-100" style={{ width: "20%" }}>
            <button className="btn-danger p-3 d-inline-block w-100 h-100 border-0">BUSCAR</button>
          </div>
        </div>
      </div>
    </form> */}

    <SaludosAlcalde />

    <MultiItemsCarousel
      title={<><i className="fas fa-link text-primary" /> <span>Links de interes</span></>}
      grupo="principal"
      user={user}
    />

    <div>
      <Container className="py-4">
        <Row>
          <Col md="3" className="d-none">
            <p className="mb-1 px-3 text-small font-weight-600">Intrumentos de gestion</p>
            <ul className="list-unstyled lista_j">
              <li><JLink value="MOF" to="/" /></li>
              <li><JLink value="ROF" to="/" /></li>
              <li><JLink value="TUPA" to="/" /></li>
              <li><JLink value="CAP" to="/" /></li>
              <li><JLink value="MAPRO" to="/" /></li>
              <li><JLink value="POI" to="/" /></li>
              <li><JLink value="RIC" to="/" /></li>
              <li><JLink value="PDC" to="/" /></li>
              <li><JLink value="PDC al 2030" to="/" /></li>
              <li><JLink value="PEI" to="/" /></li>
            </ul>
            <p className="mb-1 px-3 mt-5 text-small font-weight-600">Transparencia</p>
            <ul className="list-unstyled lista_j">
              <li><JLink value="Datos generales" to="/" /></li>
              <li><JLink value="Planeamiento y organización" to="/" /></li>
              <li><JLink value="Presupuesto" to="/" /></li>
              <li><JLink value="Proyecto de inversion" to="/" /></li>
              <li><JLink value="Participacion ciudadana" to="/" /></li>
              <li><JLink value="Personal contratacion de bienes y servicios" to="/" /></li>
              <li><JLink value="Normas públicas" to="/" /></li>
            </ul>
          </Col>
          <Col md="12">
            <Row>
              {grupoLinks.map((grupo, key) => (
                <Col key={grupo.id} md="6">
                  <div className="d-flex">
                    <h3>{grupo.nombre}</h3>
                    <span className="ml-auto cursor-pointer" onClick={toggleModalEditar}>
                      <i className="fas fa-pen text-primary" />
                    </span>
                  </div>
                  <div className="mb-5 p-2 border grid-2 bg-white rounded-lg">
                    {grupo.links.map(link => {
                      return <LinkWithCircleBadge
                        key={link.id}
                        image={`/apimuni/images/grupolinks/${link.image}`}
                        value={link.titulo}
                        to={link.url}
                        hover
                      />
                    })}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    <Modal show={modalEditar} onHide={toggleModalEditar} size="lg">
      <Modal.Header closeButton>Titulo</Modal.Header>
      <Modal.Body><EditarLink /></Modal.Body>
    </Modal>
  </div>
}

function EditarLink() {
  return <div>
    <Row>
      <Col>
        <h4>Datos</h4>
        <div>
          <Form>
            <Form.Group>
              <label>Nombre del link</label>
              <Form.Control type="text" placeholder="Nombre del link" />
            </Form.Group>
            <Form.Group>
              <label>Descripcion</label>
              <Form.Control as="textarea" placeholder="Descripcion del link" />
            </Form.Group>
          </Form>
        </div>
      </Col>
      <Col className="align-self-start">
        <h4>Vista preliminar</h4>
        <div className="d-flex justity-content-center align-self-center">
          <LinkWithCircleBadge image={image} value="Esto es un texto para el link" />
        </div>
      </Col>
    </Row>

  </div>
}

function LinksEditar() {
  return <div>
    <div>
      <Form>
        <Form.Group className="position-relative">
          <span className="position-absolute" style={{ top: '50%', left: '1rem', transform: 'translateY(-50%)' }}>
            <i className="fas fa-search" />
          </span>
          <Form.Control className="pl-5" type="search" placeholder="Buscar..." />
        </Form.Group>
      </Form>
    </div>
    <div className="grid-2">
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover active />
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover />
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover />
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover />
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover />
      <LinkWithCircleBadge className="p-1 border" image={image} value="hola mundo" hover />
    </div>
  </div>
}

function WithStyled({ image }) {
  return <div className="inicio-banner">
    <a href="#hola">
      <img
        src={image}
        loading="lazy"
        alt="banner header"
      />
    </a>
  </div>
}

function SaludosAlcalde() {
  return <div className="py-5">
    <Container className="py-3">
      <Row>
        <Col className="mb-3 mb-lg-0" lg="6">
          <img
            className="w-100"
            src="http://munimazamari.gob.pe/wp-content/uploads/2019/10/maxi.jpg"
            alt="alcalde de mazamari"
          />
        </Col>
        <Col lg="6">
          <h3 className="mb-0">Marcelino Camarena Torres</h3>
          <p className="mb-2 color-text-light text-small">Alcalde Distrital de Mazamari</p>
          <p className="mb-0 text-small">
            Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión.
            Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari.
            La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.
                </p>
        </Col>
      </Row>
    </Container>
  </div>
}

function JLink({ value, to, className }) {
  return <a
    href={to}
    className={`px-3 py-2 ${className} rounded-lg text-small text-decoration-none d-block`}>
    <span>{value}</span>
  </a>
}

function LinkWithCircleBadge({ image, value, to, className, active, hover }) {
  return <a href={to}
    target="_blank"
    className={`marker ${active && 'active'} ${hover && 'hover'} rounded-lg d-flex text-decoration-none ${className}`}>
    <div>
      <CircleBadge className="mr-3">
        <img src={image} className="img-fluid w-50" loading="lazy" alt="link" />
      </CircleBadge>
    </div>
    <div className="text-small font-weight-600 w-100 align-self-center">
      <span>{value}</span>
    </div>
  </a>
}

function CircleBadge({ className, children }) {
  return <div className={`circle-badge shadown-sm ${className}`}>
    {children}
  </div>
}
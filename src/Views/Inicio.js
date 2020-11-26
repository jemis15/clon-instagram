import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import MultiItemsCarousel from '../components/MultiItemsCarousel';
import Section from '../components/Section';
import Posts from '../components/Posts';
import Markers from '../components/Markers';

import fotoAlcalde from '../assets/images/img1.jpg';
import imagebanner from '../assets/images/FLAYER_2_A.png';

export default function Inicio({ user }) {
  return <>
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
      <WithStyled />
      <WithStyled />
      <WithStyled />
    </Carousel>

    <form className="bg-dark position-relative d-none d-lg-block">
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
    </form>

    <SaludosAlcalde />
    {/* <Saludo2 /> */}

    <MultiItemsCarousel
      title={<><i className="fas fa-link text-primary" /> <span>Links de interes</span></>}
      grupo="principal"
    />

    <div className="mt-5 mb-5">
      <Section />
    </div>

    <Row className="py-xl justify-content-between px-3" noGutters>
      <Col className="content-markers">
        <div className="sticky-from-header-30">
          <Markers grupo="primario" className="border-bottom pb-3" />
          <h5 className="px-3">Plataformas</h5>
          <Markers grupo="plataforma" />
        </div>
      </Col>
      <Col className="content-posts">
        <Posts user={user} all />
      </Col>
      <Col className="content-markers">
        <div className="sticky-from-header-30">
          <Markers grupo="primario" />
        </div>
      </Col>
    </Row>
  </>
}

function WithStyled() {
  return <div className="text-center">
    <a href="#to" className="d-block">
      <img
        src={imagebanner}
        className="w-100"
        loading="lazy"
        alt="banner header"
      />
    </a>
  </div>
}

function SaludosAlcalde() {
  return <div className="saludo-alcalde py-5">
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

function Saludo2() {
  return <div className="saludo-alcalde py-xl">

    <Container className="pb-5 clearfix py-5 rounded-lg" style={{ background: 'var(--green-700)' }}>
      <img
        className="rounded img-fluid float-left mr-4 border rounded bg-white p-2 pb-4"
        src={fotoAlcalde}
        alt="alcalde de mazamari"
      />
      <div className="pb-3 mb-2">
        <h2 className="h1 mb-0 text-center text-white">Marcelino Camarena Torres</h2>
        <p className="mb-0 color-text-light text-center text-white">Alcalde Distrital de Mazamari</p>
      </div>
      <p className="mb-0 text-white">
        Tenemos el firme propósito de transformar de manera estructural la gestión del distrito con un enfoque innovador, coherente y eficaz. Nuestro gobierno actuará en tres ejes fundamentales: política pública de desarrollo humano, desarrollo sostenible y economía local. Los vecinos de Mazamari deben tener todas las condiciones para realizar sus actividades en el distrito. Es así que los primeros 90 días de gestión realizaremos, consultas vecinales, un censo socio económico y el presupuesto participativo. Esta información marcará nuestra gestión.
        Finalmente, quiero transmitirles nuestro ideal de gobierno: "No hay que darle a nuestro distrito el tiempo que nos sobra, sino el tiempo que se merece". Seamos los grandes agentes y voluntarios del cambio. En todos está el poder de construir un nuevo Mazamari.
        La seguridad es el derecho por excelencia y es nuestra responsabilidad. Es así que nos proponemos crear fronteras vivas, un sistema de video vigilancia articulado para instaurar el orden y a la par generar conciencia de ayuda y apoyo a nuestro prójimo que nos necesita en adversidades. El equilibrio medioambiental y creación de zonas ecoturísticas será uno de nuestros ejes de desarrollo.
              </p>
    </Container>
  </div>
}
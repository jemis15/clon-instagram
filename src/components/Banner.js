import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

function Banner({ id }) {
  const banner_id = id;
  const [banner, setBanner] = useState(null);
  const [bannerUpdate, setBannerUpdate] = useState({
    titulo: '',
    descripcion: ''
  });
  const [loading, setLoading] = useState(true);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [updatingBanner, setUpdatingBanner] = useState(false);

  useEffect(() => {
    async function loadBanner() {
      try {
        // indica que se esta obteniendo datos de la base de datos
        setLoading(true);
        // api para obtener datos de banner desde la base de datos
        const { data: apiBanner } = await Axios.get(`/apimuni/banners/${banner_id}`);
        // guardando los datos obtenidos desde la api
        setBanner(apiBanner);
        // se termino de cargar
        setLoading(false);
      } catch (error) {
        console.log(banner);
        // se termino de cargar
        setLoading(false);
      }
    }

    loadBanner();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (updatingBanner) {
      return null;
    }

    try {
      // indica que se esta actualizando el banner
      setUpdatingBanner(true);
      // api para actualizar datos del banner
      const { data: apiBanner } = await Axios({
        method: 'patch',
        url: `/apimuni/banners/${banner_id}`,
        params: bannerUpdate
      });
      // actualizando el estado del banner con los datos actualizados del banner
      setBanner(apiBanner);
      // la actualizacion a finalizado
      setUpdatingBanner(false)
      setModalUpdate(false);
    } catch (error) {
      console.log(error);
      // la actualizacion a finalizado
      setUpdatingBanner(false)
      setModalUpdate(false);
    }
  }

  async function handleSelectImage(e) {
    if (uploadingImage) {
      return;
    }

    try {
      // indica que se esta subiendo una imagen
      setUploadingImage(true);
      // preparando datos para enviarselo al servidor mediante una api 
      var formDataImage = new FormData();
      formDataImage.append('imagebanners', e.target.files[0]);
      // cabecerar de tipo file para enviar al servidor
      const config = {
        headers: {
          'Content-Type': "multipart/form-data"
        }
      }
      // api para actualizar y subir una imagen
      const { data: apiBanner } = await Axios.post(`/apimuni/banners/${banner_id}/upload`, formDataImage, config);
      // actulizando el estado del banner con datos actualizados
      setBanner(apiBanner);
      // se termino de subir la imagen satisfactoriamente
      setUploadingImage(false)
    } catch (error) {
      console.log(error);
      // se termino de subir la imagen con errores
      setUploadingImage(false)
    }
  }

  function showModalUpdate() {
    setModalUpdate(true);
    setBannerUpdate(banner)
  }
  function hideModalUpdate() {
    setModalUpdate(false);
    setBannerUpdate(banner);
  }

  const handleInputChange = (e) => setBannerUpdate({
    ...bannerUpdate,
    [e.target.name]: e.target.value
  });

  if (loading) {
    return <p>Cargando...</p>
  }

  return <div className="banner edit">
    <Container>
      <Row>
        <Col md="7" className="align-self-center banner-info">
          <div className="position-relative">
            <h1 className="banner-title text-center text-md-left">
              {banner.titulo}
            </h1>
            <p className="banner-descripcion text-center text-md-left">
              {banner.descripcion}
            </p>

            <div className="options top-right">
              <span className="icon" onClick={showModalUpdate}>
                <i className="fas fa-pencil" />
              </span>
            </div>
          </div>
        </Col>
        <Col md="5" className="align-self-center img-banner">
          <div className="banner-content-image position-relative">
            <img src={`/apimuni/images/banners/${banner.image}`}
              className="img-fluid rounded-lg"
              alt="gastonomia y turismo"
              loading="lazy"
            />
            <div className="options center">
              <label className="icon mb-0 pb-0">
                <i className="fas fa-arrow-up" />
                <input
                  type="file"
                  className="d-none"
                  onChange={handleSelectImage}
                />
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    <Modal show={modalUpdate} onHide={hideModalUpdate}>
      <Modal.Header closeButton>Editar</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <label>Titulo</label>
            <Form.Control
              type="text"
              name="titulo"
              value={bannerUpdate.titulo}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <label>Descripcion</label>
            <Form.Control
              as="textarea"
              name="descripcion"
              rows="10"
              value={bannerUpdate.descripcion}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="text-right">
            <Button
              className="mr-2"
              variant="light"
              onClick={hideModalUpdate}>
              Cancelar
            </Button>
            <Button type="submit">
              {updatingBanner ? 'Actualizando...' : 'Actualizar'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  </div>
}

export default Banner;
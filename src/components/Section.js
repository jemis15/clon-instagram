import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Section() {
  const [grupoLinksTipoWithLinks, setGrupoLinksTipoWithLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadLinks() {
      const { data: apiGrupoLinksTipoWithLinks } = await Axios.get('/apimuni/grupolinkstipo/with/links');
      setGrupoLinksTipoWithLinks(apiGrupoLinksTipoWithLinks);
    }

    loadLinks();
  }, []);

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <Container>
        <Row>
          {grupoLinksTipoWithLinks.map(grupoLinkWithLinks => (
            <Col lg="6" className="mb-4" key={grupoLinkWithLinks.id}>
              <SectionItem
                icon={<i className={grupoLinkWithLinks.icon} />}
                title={grupoLinkWithLinks.nombre}
                grid>
                  {grupoLinkWithLinks.links.map(link => (
                    <VinculoLink 
                    key={link.id} 
                    image={link.image && `/apimuni/images/grupolinks/${link.image}`} 
                    texto={link.titulo} 
                    url={link.url}
                    />
                  ))}
              </SectionItem>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function SectionItem({ icon, title, children, grid, center }) {
  return <div>
    <div><span className={`section-header gradient-green-yellow`}>{icon} {title}</span></div>
    <div className={`section-body ${grid && 'grid-2'} ${center && 'd-flex justify-content-center'} border p-4 overflow-auto`} >
      {children}
    </div>
  </div>
}

function VinculoLink({ image, texto, url }) {
  const style = {
    borderRadius: '10px',
  }
  
  if (!image) {
    return null;
  }

  return <a href={url}
  target="_blank"
    className="d-flex p-2 text-white text-decoration-none gradient-green-yellow hover-gradient-gren-yellow" style={style}>
    <div className="p-2 mr-3">
      <img src={image} width="40" alt="link" />
    </div>
    <div className="text-left text-smaller w-100 align-self-center">
      <span>{texto}</span>
    </div>
  </a>
}

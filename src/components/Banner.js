import React from 'react';
import { Container } from 'react-bootstrap';

function Banner() {
  return <>
    <div className="position-relative bg-dark">
      <Container>
        <div className="text-white">
          <h2
            className="text-center title-1"
            style={{ paddingTop: '50px', paddingBottom: '50px' }}
          >ALCALDE Y REGIDORES GESTION 2019 - 2020</h2>
        </div>
      </Container>
    </div>
  </>
}

export default Banner;
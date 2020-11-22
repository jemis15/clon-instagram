import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Markers({ grupo, className }) {
    const [markers, setMarkers] = useState([]);
  
    useEffect(() => {
      async function loadMarkadores() {
        try {
          const { data: apiMarkers } = await Axios.get(`/apimuni/markers/type/${grupo}`);
          setMarkers(apiMarkers);
        } catch (error) {
          console.log(error);
        }
      }
  
      loadMarkadores();
    }, []);
  
    return <ul className={`list-unstyled ${className}`}>
      {markers.map(marker => (
        <li key={marker.id}>
          <Marker
            to={marker.url}
            image={marker.image}
            markText={marker.nombre}
            interno={marker.interno}
          />
        </li>
      ))}
    </ul>
  }
  
  function Marker({ image, markText, to, interno }) {
    if (!interno) {
      return <a
        href={to}
        target="_blank"
        className="link-navigation-inicio py-2 px-3 text-decoration-none d-flex align-items-center">
        <MarkerImage image={`/apimuni/images/markers/${image}`} />
        <span className="texto font-weight-600 text-small">{markText}</span>
      </a>
    }
  
    return <Link to={`/${to}`}
      className="link-navigation-inicio py-2 px-3 text-decoration-none d-flex align-items-center">
      <MarkerImage image={`/apimuni/images/markers/${image}`} />
      <span className="texto font-weight-600 text-small">{markText}</span>
    </Link>
  }
  
  function MarkerImage({ image }) {
    return <img
      src={image}
      className="mr-3"
      width="36"
      height="36"
      loading="lazy"
      alt="marker"
    />
  }
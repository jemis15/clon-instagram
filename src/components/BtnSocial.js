import React from 'react';

export default function BtnSocial({ className, size, social, fill }) {
  let icon;

  switch (social) {
    case "facebook":
      icon = <i className="fab fa-facebook-f" />;
      break;
    case "youtube":
      icon = <i className="fab fa-youtube" />;
      break;
    case "twitter":
      icon = <i className="fab fa-twitter" />;
      break;
    case "whatsapp":
      icon = <i className="fab fa-whatsapp" />;
      break;
    case "pinterest":
      icon = <i className="fab fa-pinterest-p" />;
      break;

    default:
      break;
  }

  const style = {
    width: '2em',
    height: '2em',
  }
  return <a className={`${className} btn-${size} social ${fill ? `btn-${social}-fill` : `btn-${social}`} d-inline-block d-flex justify-content-center align-items-center`}
    href="#social"
    style={style}>
    <span>{icon}</span>
  </a>
}
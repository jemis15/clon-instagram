import React from 'react';

export default function BtnSocial({ className, size, social, url, fill }) {
  let icon;
  let urlSocial;

  switch (social) {
    case "facebook":
      icon = <i className="fab fa-facebook-f" />;
      urlSocial = 'https://facebook.com/';
      break;
    case "youtube":
      icon = <i className="fab fa-youtube" />;
      urlSocial = 'https://youtube.com/c/';
      break;
    case "twitter":
      icon = <i className="fab fa-twitter" />;
      urlSocial = 'https://twitter.com/';
      break;
    case "instagram":
      icon = <i className="fab fa-instagram" />;
      urlSocial = 'https://instagram.com/';
      break;

    default:
      break;
  }

  const style = {
    width: '2em',
    height: '2em',
  }
  return <a className={`${className} btn-${size} social ${fill ? `btn-${social}-fill` : `btn-${social}`} d-inline-block d-flex justify-content-center align-items-center`}
    href={urlSocial + url}
    target="_blank"
    style={style}>
    <span>{icon}</span>
  </a>
}
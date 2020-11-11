import React, { useState } from 'react';

export default function NavMovile({ active, closeNav }) {
  const [links, setLinks] = useState({
    link1: false,
    link2: false,
    link3: false,
  });
  return <div className={`menu-movile ${active && 'active'}`} >
    <div className="overlay" onClick={closeNav} />
    <div className="menu-nav border bg-white h-100">
      <div className="pt-2" />
      <ul className="list-unstyled">
        <li className={`navnavitem ${links.link1 && 'active'}`}
          onClick={() => setLinks({ ...links, link1: !links.link1 })}>
          <div className="navnavlink">
            <MenuLink label="Turismo" icon={<i className="far fa-grin-tears" />} chevron />
          </div>
          <ul className="list-unstyled">
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
          </ul>
        </li>
        <li className={`navnavitem ${links.link2 && 'active'}`}
          onClick={() => setLinks({ ...links, link2: !links.link2 })}>
          <div className="navnavlink">
            <MenuLink label="Nosotros" icon={<i className="far fa-grin-tears" />} chevron />
          </div>
          <ul className="list-unstyled">
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
          </ul>
        </li>
        <li className={`navnavitem ${links.link3 && 'active'}`}
          onClick={() => setLinks({ ...links, link3: !links.link3 })}>
          <div className="navnavlink">
            <MenuLink label="Servicios" icon={<i className="far fa-grin-tears" />} chevron />
          </div>
          <ul className="list-unstyled">
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
            <li><SubMenuLink label="Sub menu link" /></li>
          </ul>
        </li >
        <li>
          <div>
            <MenuLink label="Instrumentos de gestion" icon={<i className="far fa-grin-tears" />} />
          </div>
        </li>
      </ul >
    </div>
  </div >
}

function MenuLink({ label, icon, chevron }) {
  return <a className="d-block text-secondary py-2 px-4 text-decoration-none clearfix" href="#to">
    <span className="mr-2">{icon}</span>
    <span>{label}</span>
    {chevron && <span className="float-right">
      <i className="fas fa-chevron-down navnav-icon-chevron"></i>
    </span>}
  </a>
}

function SubMenuLink({ label }) {
  return <a className="d-block text-secondary text-decoration-none py-2 pl-5 pr-4" href="#item1">{label}</a>
}

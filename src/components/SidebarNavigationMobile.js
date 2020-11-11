import React, { useState } from 'react';

import foto from '../assets/images/default.jpg';

export default function SidebarNavigationMobile({ active, toggle, user }) {
	const [links, setLinks] = useState({
		link1: false,
		link2: false,
		link3: false,
		link6: false,
	});

	return <aside className={`sidebar-navigation-mobile ${active && 'active'}`}>
		<div className="overlay position-fixed" onClick={toggle} />
		<div className="navnav border-top bg-white position-fixed overflow-auto">
			{user && (
				<header>
					<div className={`navnavitem mt-4 ${links.link6 && 'active'}`}>
						<a href="#user" className="d-block pb-3 px-4 text-decoration-none text-dark clearfix border-bottom title-4"
							onClick={() => setLinks({ ...links, link6: !links.link6 })}>
							<span className="mr-2"><img src={foto} alt="usuario avatar" width="40" loading="lazy" /></span>
							<span>FLORES MEZA JAFETT JAMIS</span>
							<span className="float-right">
								<i className="fas fa-chevron-down navnav-icon-chevron"></i>
							</span>
						</a>
						<ul className="list-unstyled mb-0">
							<li><SubMenuLinkPrimary label="Sub menu link" icon={<i className="far fa-grin-tears" />} /></li>
							<li><SubMenuLinkPrimary label="Sub menu link" icon={<i className="far fa-grin-tears" />} /></li>
							<li><SubMenuLinkPrimary label="Sub menu link" icon={<i className="far fa-grin-tears" />} /></li>
							<li><SubMenuLinkPrimary label="Sub menu link" icon={<i className="far fa-grin-tears" />} /></li>
						</ul>
					</div>
				</header>
			)}
			{!user && <div className="pt-2" />}

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
	</aside>
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

function SubMenuLinkPrimary({ label, icon }) {
	return <a className="d-block text-secondary text-decoration-none py-2 px-4" href="#item1">
		<span className="mr-2">{icon}</span>
		<span>{label}</span>
	</a>
}

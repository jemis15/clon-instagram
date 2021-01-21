import React, { useState } from 'react';

export default function SidebarNavigationMobile({ active, toggle, user }) {
	const [links, setLinks] = useState({});

	return <aside className={`sidebar-navigation-mobile ${active && 'active'}`}>
		<div className="overlay position-fixed" onClick={toggle} />
		<div className="navnav border-top bg-white position-fixed overflow-auto">
			{user && (
				<header>
					<div className={`navnavitem mt-4 ${links.link0 && 'active'}`}>
						<a href="#user" className="d-block pb-3 px-4 text-decoration-none text-dark clearfix border-bottom title-4"
							onClick={() => setLinks({ ...links, link0: !links.link0 })}>
							<span className="mr-2">
								<img
									src={`/apimuni/images/faces/${user.image}`}
									alt="usuario avatar"
									width="40"
									loading="lazy"
								/>
							</span>
							<span>{user.nombre}</span>
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
						<MenuLink label="Mazamari" icon={<i className="far fa-globe-americas" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Historia" /></li>
						<li><SubMenuLink label="Turismo" /></li>
						<li><SubMenuLink label="Restaurante" /></li>
						<li><SubMenuLink label="Hoteles" /></li>
						<li><SubMenuLink label="Agroindustrias" /></li>
						<li><SubMenuLink label="Platos T&iacute;picos" /></li>
					</ul>
				</li>
				<li className={`navnavitem ${links.link2 && 'active'}`}
					onClick={() => setLinks({ ...links, link2: !links.link2 })}>
					<div className="navnavlink">
						<MenuLink label="Municipalidad" icon={<i className="far fa-building" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Alcalde" /></li>
						<li><SubMenuLink label="Regidores" /></li>
						<li><SubMenuLink label="Gerencias" /></li>
					</ul>
				</li>
				<li className={`navnavitem ${links.link3 && 'active'}`}
					onClick={() => setLinks({ ...links, link3: !links.link3 })}>
					<div className="navnavlink">
						<MenuLink label="Normatividad" icon={<i className="far fa-file" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Ordenanza Municipal" /></li>
						<li><SubMenuLink label="Acuerdos de consejo" /></li>
						<li><SubMenuLink label="Resoluci&oacute;n de Consejo Municipal" /></li>
						<li><SubMenuLink label="Actas de sessi&oacute;n de Consejo Ordinario" /></li>
						<li><SubMenuLink label="Actas de Consejo Extraordinarios" /></li>
						<li><SubMenuLink label="Decretos de Alcald&iacute;a" /></li>
						<li><SubMenuLink label="Resoluciones de Alcald&iacute;a" /></li>
						<li><SubMenuLink label="Agenda de Sessi&oacute;n de Consejo Ordinario" /></li>
						<li><SubMenuLink label="Agenda de Sessi&oacute;n de Consejo Extraordinario" /></li>
						<li><SubMenuLink label="Resolucion de Gerencia Municipal" /></li>
						<li><SubMenuLink label="Directivas Institucionales" /></li>
						<li><SubMenuLink label="CCI de Sessi&oacute;n Extraordinario" /></li>
						<li><SubMenuLink label="Convenios Suscritos" /></li>
					</ul>
				</li >
				<li className={`navnavitem ${links.link4 && 'active'}`}
					onClick={() => setLinks({ ...links, link4: !links.link4 })}>
					<div className="navnavlink">
						<MenuLink label="Transparencia" icon={<i className="fab fa-slideshare" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Datos Generales" /></li>
						<li><SubMenuLink label="Planeamiento" /></li>
						<li><SubMenuLink label="Presupuesto" /></li>
						<li><SubMenuLink label="Proyecto de Inversi&oacute;n" /></li>
						<li><SubMenuLink label="Participaci&oacute;n Ciudadana" /></li>
						<li><SubMenuLink label="Personal" /></li>
						<li><SubMenuLink label="Contrataci&oacute;n de Bienes y Servicios" /></li>
						<li><SubMenuLink label="Normas P&uacte;blicas" /></li>
						<hr />
						<li><SubMenuLink label="Alcalde" /></li>
						<li><SubMenuLink label="Consejo Municipal" /></li>
						<li><SubMenuLink label="Municipalidad" /></li>
						<hr />
						<li><SubMenuLink label="Documentos de OCI" /></li>
						<li><SubMenuLink label="Noticias de la Instituci&oacute;n" /></li>
						<li><SubMenuLink label="Anuncios" /></li>
						<li><SubMenuLink label="Comunicados y Nota de Prensa" /></li>
						<li><SubMenuLink label="Boletines" /></li>
					</ul>
				</li >
				<li className={`navnavitem ${links.link5 && 'active'}`}
					onClick={() => setLinks({ ...links, link5: !links.link5 })}>
					<div className="navnavlink">
						<MenuLink label="Informaci&oacute;n en Linea" icon={<i className="far fa-database" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Tributo Municipal" /></li>
						<li><SubMenuLink label="Licencia de Funcionamiento" /></li>
						<li><SubMenuLink label="Registro Civil" /></li>
						<li><SubMenuLink label="Defensa Civil " /></li>
						<li><SubMenuLink label="Transporte P&uacute;blico" /></li>
						<li><SubMenuLink label="Licencia de Edificaciones" /></li>
						<li><SubMenuLink label="Comite de Control Interno" /></li>
						<li><SubMenuLink label="Codigo Etica" /></li>
						<li><SubMenuLink label="Programa Multianual de Inverci&oacute;n" /></li>
						<li><SubMenuLink label="Saneamiento" /></li>
						<li><SubMenuLink label="Presupuesto Participativo" /></li>
						<li><SubMenuLink label="Solicitud de Acceso a la Informaci&oacute;n" /></li>
					</ul>
				</li >
				<li className={`navnavitem ${links.link6 && 'active'}`}
					onClick={() => setLinks({ ...links, link6: !links.link6 })}>
					<div className="navnavlink">
						<MenuLink label="Programas" icon={<i className="fas fa-project-diagram" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Vaso de Leche" /></li>
						<li><SubMenuLink label="Demuna" /></li>
						<li><SubMenuLink label="Omaped" /></li>
						<li><SubMenuLink label="Adulto Mayor" /></li>
						<li><SubMenuLink label="Piced" /></li>
						<li><SubMenuLink label="Servir" /></li>
					</ul>
				</li >
				<li className={`navnavitem ${links.link7 && 'active'}`}
					onClick={() => setLinks({ ...links, link7: !links.link7 })}>
					<div className="navnavlink">
						<MenuLink label="Seguridad" icon={<i className="fas fa-shield-alt" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Directorio" /></li>
						<li><SubMenuLink label="Codisec" /></li>
						<li><SubMenuLink label="Seguridad Ciudadana" /></li>
						<li><SubMenuLink label="Seguridad y Salud en el Trabajo" /></li>
						<li><SubMenuLink label="Serenazgo" /></li>
					</ul>
				</li >
				<li className={`navnavitem ${links.link8 && 'active'}`}
					onClick={() => setLinks({ ...links, link8: !links.link8 })}>
					<div className="navnavlink">
						<MenuLink label="Contactos" icon={<i className="fas fa-headset" />} chevron />
					</div>
					<ul className="list-unstyled">
						<li><SubMenuLink label="Directorio de Telefono" /></li>
						<li><SubMenuLink label="Sede Principal y Sucursal" /></li>
						<li><SubMenuLink label="Sugerencias" /></li>
						<li><SubMenuLink label="Libro de Reclamaciones y Queja" /></li>
					</ul>
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

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarNavigationMobile({ active, toggle, user }) {
	const [links, setLinks] = useState({});

	return <aside className={`sidebar-navigation-mobile ${active && 'active'}`}>
		<div className="overlay" onClick={toggle} />
		<div className="navnav border-top bg-white position-fixed overflow-auto">
			{user && (
				<header>
					<div className={`navnavitem mt-4 ${links.link0 && 'active'}`}>
						<a href="#user" className="pb-3 px-4 d-flex text-dark border-bottom text-decoration-none"
							onClick={() => setLinks({ ...links, link0: !links.link0 })}>
							<span className="me-2 align-self-center">
								<img
									src={user.image}
									alt="usuario avatar"
									width="40"
									height="40"
									className="rounded-circle"
									loading="lazy"
								/>
							</span>
							<span>{user.nombre}</span>
							<span className="ms-auto">
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
				{items.map((item, key) => (
					<NavigationLink key={key} item={item} />
				))}
			</ul >
		</div>
	</aside>
}

function SubMenuLinkPrimary({ label, icon }) {
	return <a className="d-block text-secondary text-decoration-none py-2 px-4" href="#item1">
		<span className="me-2">{icon}</span>
		<span>{label}</span>
	</a>
}

const NavigationLink = ({ item }) => {
	const [active, setActive] = useState(false);

	return <>
		<li className={`nav__item ${active && 'expanded'}`}>
			<div className="nav__item-header px-4 py-2 d-flex" onClick={() => setActive(!active)}>
				<span className="me-2">{item.icon}</span>
				<span>{item.name}</span>
				<span className="ms-auto icon-chevron">
					<i className="fas fa-chevron-down" />
				</span>
			</div>
			<ul className="nav__item-links list-unstyled">
				{item.links.map((link, key) => {
					if (!link.url) {
						return <li key={key} className="separador mx-auto my-2"></li>
					}

					return <li key={key}>
						<NavLink
							to={link.url}
							className="px-5 py-2 nav__item-link d-block text-decoration-none"
							activeClassName="active">
							{link.name}
						</NavLink>
					</li>
				})}
			</ul>
		</li>
	</>
}

const items = [
	{
		icon: <i className="far fa-globe-americas" />,
		name: 'Mazamari',
		links: [
			{ name: 'Historia', url: '/mazamari/historia' },
			{ name: 'Turismo', url: '/mazamari/turismos' },
			{ name: 'Restaurante', url: '/mazamari/restaurantes' },
			{ name: 'Hoteles', url: '/mazamari/hoteles' },
			{ name: 'Agroindustrias', url: '/mazamari/agroindustrias' },
			{ name: 'Gastronomia', url: '/mazamari/gatronomias' },
		]
	},
	{
		icon: <i className="far fa-building" />,
		name: 'Municipalidad',
		links: [
			{ name: 'Alcalde', url: '/@alcalde' },
			{ name: 'Regisdores', url: '/equipo' },
			{ name: 'Gerencias', url: '/gerencias' },
		]
	},
	{
		icon: <i className="far fa-file" />,
		name: 'Normatividad',
		links: [
			{ name: 'Ordenanza municipal', url: '/blank/1' },
			{ name: 'Acuerdo de consejo', url: '/blank/2' },
			{ name: 'Resolucion de consejo Municipal', url: '/blank/3' },
			{ name: 'Actas de sesión de consejo ordinario', url: '/blank/4' },
			{ name: 'Actas de consejo extraordinarios', url: '/blank/4' },
			{ name: 'Decretos de alcaldia', url: '/blank/5' },
			{ name: 'Resoluciones de alcaldia', url: '/blank/6' },
			{ name: 'Agenda de sesión de consejo Ordinario', url: '/blank/7' },
			{ name: 'Agenda de sesión de consejo Extraordinario', url: '/blank/8' },
			{ name: 'Resolucion de gerencia municipal', url: '/blank/9' },
			{ name: 'Directivas intitucionales', url: '/blank/10' },
			{ name: 'CCI de sesion extraordinario', url: '/blank/11' },
			{ name: 'Convenios suscritos', url: '/blank/12' },
		]
	},
	{
		icon: <i className="fab fa-slideshare" />,
		name: 'Transparencia',
		links: [
			{ name: 'Datos generales', url: '/datos_generales' },
			{ name: 'Planeamiento', url: '/planeamiento' },
			{ name: 'Presupuesto', url: '/presupuesto' },
			{ name: 'Proyecto de inversión', url: '/proyecto-inversion' },
			{ name: 'Participación ciudadana', url: '/participacion-ciudadana' },
			{ name: 'Personal', url: '/personal' },
			{ name: 'Contratación de bienes y servicios', url: '/blank/6' },
			{ name: 'Normas públicas', url: '/blank/7' },
			{ tipo: 'separador'},
			{ name: 'Alcalde', url: '/blank/8' },
			{ name: 'Consejo municipal', url: '/blank/9' },
			{ name: 'Municipalidad', url: '/blank/10' },
			{ tipo: 'separador'},
			{ name: 'Documentos de OCI', url: '/blank/12' },
			{ name: 'Noticias de la institución', url: '/blank/12' },
			{ name: 'Anuncios', url: '/blank/12' },
			{ name: 'Comunicados y nota de prensa', url: '/blank/12' },
			{ name: 'Boletines', url: '/boletines' },
		]
	},
	{
		icon: <i className="far fa-database" />,
		name: 'Informacion en línea',
		links: [
			{ name: 'Tributo municipal', url: '/tributo-municipal' },
			{ name: 'Licencia de funcionamiento', url: '/licencia-funcionamiento' },
			{ name: 'Registro civil', url: '/registro-civil' },
			{ name: 'Defensa civil', url: '/defensa-civil' },
			{ name: 'Transporte público', url: '/transporte-publico' },
			{ name: 'Licencia de edificaciones', url: '/licencia-edificaciones' },
			{ name: 'Comite de control interno', url: '/comite-control-interno' },
			{ name: 'Codigo etica', url: '/codigo-etica' },
			{ name: 'Programa multianual', url: '/programa-multianual' },
			{ name: 'Saneamiento', url: '/saneamiento' },
			{ name: 'Presupuesto participativo', url: '/presupuesto-participativo' },
			{ name: 'Solicitud de acceso a la información', url: '/solicitud-acceso-infromacion' },
		]
	},
	{
		icon: <i className="far fa-project-diagram" />,
		name: 'Programas',
		links: [
			{ name: 'Vaso de leche', url: '/vaso-leche' },
			{ name: 'Demuna', url: '/demuna' },
			{ name: 'Omaped', url: '/omaped' },
			{ name: 'Adulto mayor', url: '/adulto-mayor' },
			{ name: 'piced', url: '/piced' },
			{ name: 'servir', url: '/servir' }
		]
	},
	{
		icon: <i className="far fa-shield-alt" />,
		name: 'Seguridad',
		links: [
			{ name: 'Directorio', url: '/directorio' },
			{ name: 'Codisec', url: '/codisec' },
			{ name: 'Seguridad ciudadana', url: '/seguridad-ciudadana' },
			{ name: 'Seguridad y salud en el trabajo', url: '/seguridad-salud-trabajo' },
			{ name: 'Serenazgo', url: '/serenazgo' }
		]
	},
	{
		icon: <i className="far fa-headset" />,
		name: 'Contactos',
		links: [
			{ name: 'Directorio de telefono', url: '/directorio-telefono' },
			{ name: 'Sucursal', url: '/sucursal' },
			{ name: 'Sugerencias', url: '/sugerencias' },
			{ name: 'Libro de reclamaciones', url: '/libro-reclamaciones' }
		]
	}
];
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
					<NavigationLink key={key} item={item} toggle={toggle} />
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

const NavigationLink = ({ item, toggle }) => {
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

					return <NLink
						key={key}
						url={link.url}
						toggle={toggle}
						label={link.name}
					/>
				})}
			</ul>
		</li>
	</>
}

const NLink = ({ url, label, toggle }) => {
	const { pathname, search } = useLocation();
	const classActive = url === pathname + search ? 'active' : '';

	return <li>
		<Link
			to={url}
			onClick={toggle}
			className={`px-5 py-2 nav__item-link ${classActive} d-block text-decoration-none`}>
			{label}
		</Link>
	</li>
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
			{ name: 'Gastronomia', url: '/mazamari/gastronomias' },
		]
	},
	{
		icon: <i className="far fa-building" />,
		name: 'Municipalidad',
		links: [
			{ name: 'Alcalde', url: '/muni/alcalde' },
			{ name: 'Regisdores', url: '/muni/regidores' },
			{ name: 'Funcionarios', url: '/muni/funcionarios' },
			{ name: 'Comision Permanente', url: '/muni/comisiones' },
			{ name: 'Organigrama', url: '/muni/organigrama' },
			{ name: 'Visión y Misión', url: '/muni/vision_mision' },
			{ name: 'Proyectos', url: '/muni/proyectos' },
			{ name: 'Convocatorias CAS', url: '/muni/convocatorias' },
		]
	},
	{
		icon: <i className="far fa-file" />,
		name: 'Normatividad',
		links: [
			{ name: 'Ordenanza municipal', url: '/normativa?tipo=ordenanza-municipal' },
			{ name: 'Acuerdo de consejo', url: '/normativa?tipo=acuerdos-de-consejo' },
			{ name: 'Resolucion de consejo Municipal', url: '/normativa?tipo=resoluciones-de-consejo' },
			{ name: 'Actas de sesión de consejo ordinario', url: '/normativa?tipo=actas-de-sesion-ordinario' },
			{ name: 'Actas de consejo extraordinarios', url: '/normativa?tipo=actas-de-sesion-extraordinario' },
			{ name: 'Decretos de alcaldia', url: '/normativa?tipo=decretos-de-alcaldia' },
			{ name: 'Resoluciones de alcaldia', url: '/normativa?tipo=resoluciones-de-alcaldia' },
			{ name: 'Agenda de sesión de consejo Ordinario', url: '/normativa' },
			{ name: 'Agenda de sesión de consejo Extraordinario', url: '/normativa' },
			{ name: 'Resolucion de gerencia municipal', url: '/normativa?tipo=tipo=resoluciones-de-gerencia' },
			{ name: 'Directivas intitucionales', url: '/normativa?tipo=directivas' },
			{ name: 'CCI de sesion extraordinario', url: '/normativa' },
			{ name: 'Convenios suscritos', url: '/normativa' },
		]
	},
	{
		icon: <i className="far fa-database" />,
		name: 'Informacion en línea',
		links: [
			{ name: 'Tributo municipal', url: '/c/t/tributos-municipales/formas-y-lugares-de-pago' },
			{ name: 'Licencia de funcionamiento', url: '/c/licencia_funcionamiento' },
			{ name: 'Registro civil', url: '/c/registrocivil' },
			{ name: 'Defensa civil', url: '/c/defensa-civil' },
			{ name: 'Transporte público', url: '/c/transporte_publico' },
			{ name: 'Licencia de edificaciones', url: '/c/licencia_edificacion' },
			{ name: 'Comite de control interno', url: '/c/comitecontrolinterno' },
			{ name: 'Codigo etica', url: '/c/codigoetica' },
			{ name: 'Programa multianual', url: '/c/multianual' },
			{ name: 'Saneamiento', url: '/c/saneamiento' },
			{ name: 'Presupuesto participativo', url: '/c/presupuestoparticipativo' },
			{ name: 'Solicitud de acceso a la información', url: '/c/solicitud-acceso-informacion' },
		]
	},
	{
		icon: <i className="far fa-project-diagram" />,
		name: 'Programas',
		links: [
			{ name: 'Vaso de leche', url: '/programas/vasoleche' },
			{ name: 'Demuna', url: '/programas/demuna' },
			{ name: 'Omaped', url: '/programas/omaped' },
			{ name: 'Adulto mayor', url: '/programas/adultomayor' },
			{ name: 'piced', url: '/programas/piced' },
			// { name: 'servir', url: '/programas/servir' }
		]
	},
	{
		icon: <i className="far fa-shield-alt" />,
		name: 'Seguridad',
		links: [
			{ name: 'Directorio', url: '/seguridad/directorio' },
			{ name: 'Codisec', url: '/seguridad/codisec' },
			{ name: 'Seguridad ciudadana', url: '/seguridad/serenazgo' },
			{ name: 'Seguridad y salud en el trabajo', url: '/seguridad/seguridad-salud-trabajo' },
			{ name: 'Serenazgo', url: '/seguridad/serenazgo' }
		]
	},
	{
		icon: <i className="far fa-headset" />,
		name: 'Contactos',
		links: [
			{ name: 'Directorio de telefono', url: '/contactos/directorio-telefono' },
			{ name: 'Sucursal', url: '/contactos/sucursal' },
			{ name: 'Sugerencias', url: '/contactos/realizarreclamo' },
			{ name: 'Libro de reclamaciones', url: '/contactos/realizarreclamo' }
		]
	}
];
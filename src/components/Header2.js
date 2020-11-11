import React from 'react';
import { Link } from 'react-router-dom';

import AppNav from './Nav2';
import Avatar from './utilitarios/Avatar';

import logo from '../assets/images/logo.png';
import { Button } from 'react-bootstrap';

export default function Header({ toggle, user }) {
	return <header className="header d-flex justify-content-center align-items-center border-bottom">
		<div className="container-fluid d-flex">
			<Link className="mr-4" to="/">
				<img src={logo} width="60px" alt="logo mazamari" />
			</Link>
			<AppNav />
			<div className="ml-auto d-flex align-self-center align-items-center">
				{user ?
					<div className="rounded-circle overflow-hidden">
						<Link to="/james" className="d-inline-block">
							<Avatar image={user.avatar} size="sm" initials="FM" className="mb-0" />
						</Link>
					</div>
					:
					<Button size="sm" as={Link} to="/login">Iniciar session</Button>
				}
				<button
					size="sm"
					className="border-0 bg-transparent d-inline-block d-lg-none ml-2 button-bars"
					onClick={toggle}>
					<i className="fas fa-bars fa-2x" />
				</button>
			</div>
		</div>
	</header>
}
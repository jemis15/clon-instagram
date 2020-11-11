import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import logo from '../assets/images/logo.png';
import BtnSocial from './BtnSocial';

export default function Footer() {
	return <>
		<footer className="footer">
			<div>
				<Container className="py-5">
					<Row>
						<Col md="3" className="text-center text-md-left">
							<img src={logo} alt="municipalidad de mazamari" width="150" />
						</Col>
						<Col md="6">
							<h4 className="text-center text-primary title-2 mb-4">Municipalidad Distrital de Mazamari</h4>
							<ul className="list-unstyled text-center text-secondary">
								<li className="mb-3">
									<span className="mr-3">
										<i className="far fa-clock" />
									</span>
									<span>8:00 am - 1:30 am | 02:30 pm - 05:00 pm</span>
								</li>
								<li className="mb-3">
									<span className="mr-3">
										<i className="far fa-map" />
									</span>
									<span>Plaza Principal S/N – Puerto Prado</span>
								</li>
								<li className="mb-3">
									<span className="mr-3">
										<i className="fas fa-phone-alt" />
									</span>
									<span>(064) 545187</span>
								</li>
								<li className="mb-3">
									<span className="mr-3">
										<i className="far fa-envelope" />
									</span>
									<span>munimazamarimcm@hotmail.com</span>
								</li>
							</ul>
						</Col>
						<Col md="3">
							<div>
								<h5 className="text-center title-2 text-md-left text-primary">Visitantes</h5>
								<div className="text-center text-md-left">
									<div className="contador-visitas py-1 list-unstyled justify-content-start d-inline-block rounded">
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">0</span>
										<span className="contador-number px-3">3</span>
									</div>
									{/* <ul className="list-unstyled contador-visitas__old d-flex justify-content-start">
									<li>1</li>
									<li>0</li>
									<li>0</li>
									<li>8</li>
									<li>8</li>
									<li>3</li>
								</ul> */}

								</div>
							</div>

						</Col>
					</Row>
				</Container>
			</div>

			{/* <div>
				<Container className="py-5">
					<Row>
						<Col md="4" className="border pr-5	">
							<div className="p-4 mb-4 bg-dark text-white shadow rounded-lg">
								<div className="text-center">
									<img src={logo} alt="mazamari" className="img-fluid mb-4" width="150" />
								</div>
								<p>
									Al 2021, Mazamari es un distrito saludable, inclusivo, intercultural, participativo y transparente; con habitantes amables, receptivos y organizados que desarrollan actividades agropecuarias, de transformación y de servicios con criterios de calidad, eficiencia y sostenibilidad”
							</p>
							</div>
							<h5>MUNICIPALIDAD DISTRITAL DE MAZAMARI</h5>
						</Col>
						<Col md="8" className="border pl-5">
							<div className="grid-2 border-bottom pb-4 mb-4">
								<div className="d-flex py-2 px-4 rounded-lg footer-item">
									<div className="mr-4 text-primary"><i className="far fa-map fa-2x" /></div>
									<div className="">
										<h3>Av. Perú N°849</h3>
										<p className="text-dark">Junin - Satipo - Mazamari</p>
									</div>
								</div>
								<div className="d-flex py-2 px-4 rounded-lg footer-item">
									<div className="mr-4 text-primary"><i class="fas fa-phone-volume fa-2x" /></div>
									<div>
										<h3>(064) 545187</h3>
										<p>LLamanos</p>
									</div>
								</div>
							</div>

							<div className="border" style={{ width: '50%' }}>
								<h3>Atenci&oacute;n</h3>
								<ul>
									<li>Lunes a viernes</li>
								</ul>
							</div>
							<div className="socials-footer">
							<ul>
								<li><a href="https://twitter.com/julesforrest">Twitter</a></li>
								<li><a href="https://codepen.io/julesforrest">Codepen</a></li>
								<li><a href="mailto:julesforrest@gmail.com">Email</a></li>
								<li><a href="https://dribbble.com/julesforrest">Dribbble</a></li>
								<li><a href="https://github.com/julesforrest">Github</a></li>
								<li>
									<p>👋</p>
								</li>
							</ul>
						</div>
						</Col>
					</Row>
				</Container>
			</div> */}

			<div>
				<Container className="border-top pt-3 pb-4 border-lg clearfix" style={{ fontSize: '14px' }}>
					<span>&copy; <a href="https://centecp.com" title="centecp.com" target="_blank">CENTECP</a> v1.0.0</span>
					<div className="float-right">
						<ul className="list-unstyled d-flex justify-content-center justify-content-md-start mb-0">
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="facebook" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="twitter" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="youtube" fill /></li>
							<li className="mr-2"><BtnSocial className="rounded-circle" size="sm" social="pinterest" fill /></li>
						</ul>
					</div>
				</Container>
			</div>
		</footer >

		<footer id="dk-footer" className="dk-footer d-none">
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-lg-4">
						<div className="dk-footer-box-info">
							<a href="index.html" className="footer-logo text-center">
								<img src={logo} alt="footer_logo" width="100" />
							</a>
							<p className="footer-info-text">
								Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                        </p>
							<div className="footer-social-link">
								<h3>Follow us</h3>
								<ul>
									<li>
										<a href="#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-google-plus"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
							{/* End Social link */}
						</div>
						{/* End Footer info */}
						<div className="footer-awarad">
							<img src="images/icon/best.png" alt="" />
							<p>Best Design Company 2019</p>
						</div>
					</div>
					{/* End Col */}
					<div className="col-md-12 col-lg-8">
						<div className="row">
							<div className="col-md-6">
								<div className="contact-us">
									<div className="contact-icon">
										<i className="fa fa-map-o" aria-hidden="true"></i>
									</div>
									{/* End contact Icon */}
									<div className="contact-info">
										<h3>Jaipur India</h3>
										<p>5353 Road Avenue</p>
									</div>
									{/* End Contact Info */}
								</div>
								{/* End Contact Us */}
							</div>
							{/* End Col */}
							<div className="col-md-6">
								<div className="contact-us contact-us-last">
									<div className="contact-icon">
										<i className="fa fa-volume-control-phone" aria-hidden="true"></i>
									</div>
									{/* End contact Icon */}
									<div className="contact-info">
										<h3>95 711 9 5353</h3>
										<p>Give us a call</p>
									</div>
									{/* End Contact Info */}
								</div>
								{/* End Contact Us */}
							</div>
							{/* End Col */}
						</div>
						{/* End Contact Row */}
						<div className="row">
							<div className="col-md-12 col-lg-6">
								<div className="footer-widget footer-left-widget">
									<div className="section-heading">
										<h3>Useful Links</h3>
										<span className="animate-border border-black"></span>
									</div>
									<ul>
										<li>
											<a href="#">About us</a>
										</li>
										<li>
											<a href="#">Services</a>
										</li>
										<li>
											<a href="#">Projects</a>
										</li>
										<li>
											<a href="#">Our Team</a>
										</li>
									</ul>
									<ul>
										<li>
											<a href="#">Contact us</a>
										</li>
										<li>
											<a href="#">Blog</a>
										</li>
										<li>
											<a href="#">Testimonials</a>
										</li>
										<li>
											<a href="#">Faq</a>
										</li>
									</ul>
								</div>
								{/* End Footer Widget */}
							</div>
							{/* End col */}
							<div className="col-md-12 col-lg-6">
								<div className="footer-widget">
									<div className="section-heading">
										<h3>Subscribe</h3>
										<span className="animate-border border-black"></span>
									</div>
									{/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
									<p>Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
									<form action="#">
										<div className="form-row">
											<div className="col dk-footer-form">
												<input type="email" className="form-control" placeholder="Email Address" />
												<button type="submit">
													<i className="fa fa-send" />
												</button>
											</div>
										</div>
									</form>
									{/* End form */}
								</div>
								{/* End footer widget */}
							</div>
							{/* End Col */}
						</div>
						{/* End Row */}
					</div>
					{/* End Col */}
				</div>
				{/* End Widget Row */}
			</div>
			{/* End Contact Container */}


			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<span>Copyright © 2019, All Right Reserved Seobin</span>
						</div>
						{/* End Col */}
						<div className="col-md-6">
							<div className="copyright-menu">
								<ul>
									<li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">Terms</a>
									</li>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						{/* End col */}
					</div>
					{/* End Row */}
				</div>
				{/* End Copyright Container */}
			</div>
			{/* End Copyright */}
			{/* Back to top */}
			<div id="back-to-top" className="back-to-top">
				<button className="btn btn-dark d-block" title="Back to Top">
					<i className="fa fa-angle-up"></i>
				</button>
			</div>
			{/* End Back to top */}
		</footer>
	</>;
}
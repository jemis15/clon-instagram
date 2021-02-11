import Axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import './assets/scss/styles.scss';
import "react-multi-carousel/lib/styles.css";

import useEsMobil from './Hoocks/useEsMobil';
import { setToken, deleteToken, getToken } from './Helpers/auth-helpers';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarNavigationMobile from './components/SidebarNavigationMobile';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import Alert from './components/Alert';

import CarouselLink from './Views/Home/components/CarouselLink'
import DetallePost from './Views/DetallePost';
// D7
import P1 from './Views/J1'
import AgregarOperadores from './Views/AgregarOperadores';
import Comisiones from './Views/Comisiones';
import AgregarComisiones from './Views/AgregarComisiones';
import Convocatoria from './Views/Convocaroria';
import AgregarConvocatoria from './Views/AgregarConvocatoria';
import Organigrama from './Views/Organigrama';
import Proyectos from './Views/Proyectos';
import DetalleProyecto from './Views/DetalleProyecto';
import AgregarTransporte from './Views/ConsultasLinea/AgregarTransporte';
import DefensaCivil from './Views/DefensaCivil';
import VasoLeche from './Views/VasoLeche';
import Policlinico from './Views/Policlinico';
import Demuna from './Views/Demuna';
import Omaped from './Views/Omaped';
import AdultoMayor from './Views/AdultoMayor';
import LibroReclamos from './Views/LibroReclamos';
import RealizarReclamo from './Views/RealizarReclamo';
import SeguimientoReclamo from './Views/SeguimientoReclamo';
import SeguridadSalud from './Views/SeguridadSalud';
import Codisec from './Views/Codisec';
import Sucursal from './Views/Sucursal';
import Piced from './Views/Piced';
import SistemaControlInterno from './Views/SistemaControlInterno';
import NormasPublicas from './Views/NormasPublicas';
import DocImportantes from './Views/DocImportantes';
import DocOCI from './Views/DocOCI';
import Comunicados from './Views/Comunicados';
import Boletines from './Views/Boletines';
import Anuncios from './Views/Anuncios';
import DetalleNoticia from './Views/DetalleNoticia';

const Home = lazy(() => import('./Views/Home'));
const Equipo = lazy(() => import('./Views/Equipo'));
const Perfil = lazy(() => import('./Views/Perfil'));
const Login = lazy(() => import('./Views/Login'));
const Historia = lazy(() => import('./Views/Historia'));
const Settings = lazy(() => import('./Views/Settings'));
const GastronomiaAndTurismo = lazy(() => import('./Views/GastronomiaAndTurismo'));
const Gastronomia = lazy(() => import('./Views/Gastronomia/Gastronomia'));
const Turismo = lazy(() => import('./Views/Turismo/Turismo'));
const Blank = lazy(() => import('./Views/Blank'));
const Frame = lazy(() => import('./Views/Frame/Frame'));
const VisionMision = lazy(() => import('./Views/VisionMision'));
const Certificacion = lazy(() => import('./Views/ConsultasLinea/Certificacion'));
const Normativa = lazy(() => import('./Views/Normativa'));
const TributoMuniDocument = lazy(() => import('./Views/TributoMuniDocument'));
const Licencia = lazy(() => import('./Views/Licencia'));
const Regidores = lazy(() => import('./Views/Regidores'));
const PerfilA = lazy(() => import('./Views/PerfilA'));
const ConvocatoriaCass = lazy(() => import('./Views/ConvocatoriaCass'));
const Serenazgo = lazy(() => import('./Views/Serenazgo'));
const Himno = lazy(() => import('./Views/Himno'));
const Presentacion = lazy(() => import('./Views/Presentacion'));
const RegistCivilDocument = lazy(() => import('./Views/RegistCivilDocument'));
const Pages = lazy(() => import('./Views/Pages'));
const Comunidad = lazy(() => import('./Views/Comunidad'));

const ConsultaLinea = lazy(() => import('./Views/ConsultasLinea'));
const Direcctorio = lazy(() => import('./Views/Direcctorio'));
const Alcaldes = lazy(() => import('./Views/Alcaldes'));
const Funcionarios = lazy(() => import('./Views/Funcionarios'));
const DirectorioTelefono = lazy(() => import('./Views/DirectorioTelefono'));
const DescripcionTurismo = lazy(() => import('./Views/DescripcionTurismo'));
const Restaurantes = lazy(() => import('./Views/Restaurantes'));
const Hoteles = lazy(() => import('./Views/Hoteles'));
const Platos_Tipicos = lazy(() => import('./Views/Platos_Tipicos'));
const Agroindustrias = lazy(() => import('./Views/Agroindustrias'));
const NavMazamari = lazy(() => import('./Views/NavMazamari'));
const Agenda = lazy(() => import('./Views/Agenda'));
const ListHoteles = lazy(() => import('./Views/ListHoteles'));
const Noticias = lazy(() => import('./Views/Noticias'));
const InformacionAgro = lazy(() => import('./Views/InformacionAgro'));
const LugaresTuristicos = lazy(() => import('./Views/LugaresTuristicos'));
const RegistroTurismo = lazy(() => import('./Views/RegistroTurismo'));

const GastronomiaDescripcion = lazy(() => import('./Views/Mazamari/GastronomiaDescripcion'));
const MHistoria = lazy(() => import('./Views/Mazamari/Historia'));
const MHoteles = lazy(() => import('./Views/Mazamari/Hoteles'));
const MTurismos = lazy(() => import('./Views/Mazamari/Turismos'));
const MAgroindustrias = lazy(() => import('./Views/Mazamari/Agroindustrias'));
const PostCreate = lazy(() => import('./Views/PostCreate'));
const NewPost = lazy(() => import('./Views/NewPost'));
const NewPostA = lazy(() => import('./Views/publicaciones/Nuevo'));
const Posts = lazy(() => import('./Views/Posts'));
const Error404 = lazy(() => import('./Views/Error404'));

let timeoutAlert;
function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);
  const [topbar, setTopbar] = useState(null);
  const [sidebarNavigationMobile, setSidebarNavigationMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [alert, setAlert] = useState({
    type: '',
    mensaje: '',
    show: false
  });
  const [carouselLink, setCarouselLink] = useState([]);
  const [visitas, setVisitas] = useState('0');
  const [modalBienvenida, setModalBienvenida] = useState(true);
  const esMobil = useEsMobil();
  const [anuncio, setAnuncio] = useState(false);

  useEffect(() => {
    async function loadUser() {
      if (!getToken()) {
        setLoadingUser(false);
        return;
      }

      try {
        setLoadingUser(true);
        const { data: apiUser } = await Axios({
          method: 'POST',
          url: '/apimuni/users/whoami',
          params: { token: getToken() }
        });
        setUser(apiUser);
        setLoadingUser(false);
        document.body.classList.add('logged-in');
      } catch (error) {
        console.log(error);
        setLoadingUser(false);
      }
    }

    async function loadSettings() {
      try {
        const { data: apiSettings } = await Axios.get('/apimuni/settings');
        setSettings(apiSettings);
      } catch (error) {
        console.log(error);
      }
    }

    async function loadTopbar() {
      var topbarLocalStorage = localStorage.getItem('topbar');

      if (topbarLocalStorage && topbarLocalStorage === 'hidden') {
        return;
      }

      try {
        const { data: apiTopbar } = await Axios.get('/apimuni/topbar');
        if (!apiTopbar.active) {
          return;
        }

        // verificamos si contiene la clase has-topbar
        const isClassTopbar = document.body.classList.contains('has-topbar');
        // si no tiene la clase le agregamos la clase has-topbar
        !isClassTopbar && document.body.classList.add('has-topbar');
        setTopbar(apiTopbar);
      } catch (error) {
        console.log(error);
        // verificamos si contiene la clase has-topbar
        const isClassTopbar = document.body.classList.contains('has-topbar');
        // si contiente la clase removemos la clase has-topbar
        isClassTopbar && document.body.classList.remove('has-topbar');
      }
    }

    async function loadCarouselLinkSecundario() {
      const { data: apiCarouselLink } = await Axios.get(`/apimuni/carousellinks/grupo/secundario`);
      setCarouselLink(apiCarouselLink);
    }

    async function loadModalBienvenida() {
      const { data: apiModalBienvenida } = await Axios.get('/apimuni/modalbienvenida');
      setModalBienvenida(apiModalBienvenida);
    }

    async function loadVisitas() {
      try {
        const { data: apiNumberVisitas } = await Axios.get(`/apimuni/visitas`);
        setVisitas(apiNumberVisitas.toString());
      } catch (error) {
        console.log(error);
      }
    }

    loadUser();
    loadSettings();
    loadTopbar();
    loadCarouselLinkSecundario();
    loadModalBienvenida();
    loadVisitas();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnuncio(true);
    }, 5000);
  }, []);

  async function login(user) {
    const { data: apiUser } = await Axios({
      method: 'POST',
      url: '/apimuni/auth',
      params: user
    });

    setToken(apiUser.token);
    setUser(apiUser);
    document.body.classList.add('logged-in');
  }

  function logout() {
    deleteToken();
    setUser(null);
    document.body.classList.remove('logged-in');
  }

  function showTopbar(topbarActualizado) {
    // verificamos si contiene la clase has-topbar
    const isClassTopbar = document.body.classList.contains('has-topbar');
    if (!topbarActualizado.active || topbarActualizado.descripcion === '') {
      // si no tiene la clase le agregamos la clase has-topbar
      isClassTopbar && document.body.classList.remove('has-topbar');
    } else {
      // si no tiene la clase le agregamos la clase has-topbar
      !isClassTopbar && document.body.classList.add('has-topbar');
    }

    setTopbar(topbarActualizado);
  }

  const toggleSidebarMobile = () => {
    setSidebarNavigationMobile(!sidebarNavigationMobile);
  }
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  const showAlert = (type, mensaje) => {
    setAlert({ ...alert, type, mensaje, show: true });
    clearTimeout(timeoutAlert)
    timeoutAlert = setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 5000);
  }
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
    clearTimeout(timeoutAlert);
  }

  const updateLink = (linkOriginal, linkUpdated) => {
    setCarouselLink(carouselLink => {
      const linksActualizados = carouselLink.map(link => {
        if (link !== linkOriginal) {
          return link
        }
        return linkUpdated;
      });
      return linksActualizados;
    });
  }
  const deleteLink = (linkDeleted) => {
    setCarouselLink(carouselLink.filter(link => {
      return link !== linkDeleted;
    }));
  }

  const updateSettings = (settingsUpdated) => {
    setSettings(settingsUpdated);
  }

  return (
    <Router>
      {/* Loading inicial */}
      {/* {loadingUser && <Loading />} */}
      {/* Fin Loading inicial */}

      {topbar && topbar.active && topbar.descripcion && (
        <Topbar topbar={topbar.descripcion} />
      )}

      {/* Transparente header */}
      <Header toggle={toggleSidebarMobile} user={user} settings={settings} />
      {esMobil && <SidebarNavigationMobile
        active={sidebarNavigationMobile}
        toggle={toggleSidebarMobile}
        user={user}
      />}
      {!esMobil && user && <Sidebar
        active={sidebar}
        toggle={toggleSidebar}
        logout={logout}
        user={user}
      />}

      <Rutas
        user={user}
        settings={settings}
        updateSettings={updateSettings}
        showAlert={showAlert}
        showTopbar={showTopbar}
        login={login}
      />

      <CarouselLinksFooter
        links={carouselLink}
        updateLink={updateLink}
        deleteLink={deleteLink}
        showAlert={showAlert}
        user={user}
      />

      { settings && <Footer settings={settings} visitas={visitas} />}

      <Alert type={alert.type} show={alert.show} mensaje={alert.mensaje} onHide={hideAlert} />
      <Options pagefb={settings && settings.facebook} />

      {anuncio && false && (
        // <div className="anuncio p-4 bg-white border rounded shadow-sm">
        //   <button className="close-anuncio" onClick={() => setAnuncio(false)}><i className="far fa-times" /></button>
        //   <h5>Hola 🙂, nos agrada tenerte aqu&iacute; y lamentamos que no encuentres lo que estabas buscando 😔.
        // Estamos trabajando en mejorar la plataforma y que tengas una mejor experiencia.</h5>
        // </div>
        <div className="anuncio p-4 bg-white border rounded shadow-sm">
          <button className="close-anuncio" onClick={() => setAnuncio(false)}><i className="far fa-times" /></button>
          Estamos transmitiendo en vivo "Rendici&oacute;n de cuentas a&ntilde;o fiscal 2020", <a className="text-danger" href="https://www.facebook.com/watch/live/?v=842851029609832&ref=watch_permalink" target="_blank" rel="noopener noreferrer">Ver transmisi&oacute;n. 📹</a>
        </div>
      )}

      {
        modalBienvenida && modalBienvenida.active === 1 && (
          <Modal show={modalBienvenida} onHide={() => setModalBienvenida(false)} size="xl" centered>
            <Modal.Body className="p-0">
              <button className="btn-close_modal" onClick={() => setModalBienvenida(false)}>
                <i className="far fa-plus" />
              </button>
              <img
                src={modalBienvenida.image}
                className="img-fluid"
                alt="bienvenida"
              />
            <div className="bg-transparent" style={{
              position: 'absolute',
              top: '50.5%',
              left: '47.5%',
              transform: 'translate(-50%,-50%)'
            }}>
              <a
              className="px-3 fs-5 text-decoration-none text-white rounded-3 text-nowrap"
                href="https://mesadepartevitual.munimazamari.gob.pe"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'red'
                }}>
                {'CLICK PARA INGRESAR'}
              </a>
            </div>
            </Modal.Body>
          </Modal>
        )
      }
    </Router >
  );
}

function Rutas({ user, settings, updateSettings, showAlert, showTopbar, login }) {
  return <>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/muni/vision_mision" render={() => <VisionMision />} />
        <Route path="/muni/comisiones" render={() => <Comisiones />} />
        <Route path="/muni/organigrama" render={() => <Organigrama />} />
        <Route path="/alcalde" render={() => <PerfilA />} />
        <Route path="/regidores" render={() => <Presentacion />} />
        <Route path="/funcionarios" render={() => <Funcionarios />} />

        {/* mazamari */}
        {/* <Route path="/historia" render={() => <Historia />} /> */}
        <Route path="/mazamari/historia" render={() => <MHistoria />} />
        <Route exact path="/mazamari/gastronomias" render={() => <GastronomiaAndTurismo user={user} />} />
        <Route path="/mazamari/gastronomias/:titulo" render={() => <GastronomiaDescripcion user={user} />} />
        <Route path="/mazamari/turismos" render={() => <MTurismos user={user} />} />
        <Route path="/mazamari/agroindustrias" render={() => <MAgroindustrias user={user} />} />
        <Route path="/mazamari/hoteles" render={() => <MHoteles user={user} />} />


        {/* normativa */}
        <Route path="/normativa" render={() => <Normativa />} />

        {/* programas */}
        <Route path="/programas/vasoleche" render={() => <VasoLeche />} />
        <Route path="/programas/demuna" render={() => <Demuna />} />
        <Route path="/programas/omaped" render={() => <Omaped />} />
        <Route path="/programas/adultomayor" render={() => <AdultoMayor />} />
        <Route path="/programas/piced" render={() => <Piced />} />

        {/* Seguridad */}
        <Route path="/seguridad/direcctorio" render={() => <Direcctorio />} />
        <Route path="/seguridad/serenazgo" render={() => <Serenazgo />} />
        <Route path="/seguridad/codisec" render={() => <Codisec />} />
        <Route path="/seguridad/seguridadsalud" render={() => <SeguridadSalud />} />

        {/* Contactos */}
        <Route path="/contactos/sucursales" render={() => <Sucursal />} />


        {/* otros secundarios */}
        <Route path="/login" render={() => <Login login={login} />} />

        {/* mejorar diseños */}
        <Route path="/p" render={() => <Pages />} />
        <Route path="/Licencia" render={() => <Licencia />} />
        <Route path="/equipo" render={() => <Equipo />} />
        <Route exact path="/comunidad" render={() => <Comunidad user={user} />} />
        <Route exact path="/@:nickname" render={() => <Perfil user={user} />} />
        <Route path="/Agenda" render={() => <Agenda />} />
        <Route exact path="/posts" render={() => <Posts />} />
        <Route path="/posts/titulo/:title_post" render={() => <DetallePost />} />
        <Route path="/publicaciones/videos/:title_video" render={() => <div className="d-flex justify-content-center align-items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jsILLcm5uug" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>} />
        <Route path="/Proyectos" render={() => <Proyectos />} />
        <Route path="/DetalleProyecto" render={() => <DetalleProyecto />} />
        <Route path="/contactos/LibroReclamos" render={() => <LibroReclamos />} />
        <Route path="/RealizarReclamo" render={() => <RealizarReclamo />} />
        <Route path="/libroreclamaciones/:libro" render={() => <SeguimientoReclamo />} />

        <Route path="/Certificacion" render={() => <Certificacion />} />
        <Route path="/TributoMuniDocument" render={() => <TributoMuniDocument />} />
        <Route path="/Regidores" render={() => <Regidores />} />
        <Route path="/ConvocatoriaCass" render={() => <ConvocatoriaCass />} />
        <Route path="/Himno" render={() => <Himno />} />
        <Route path="/RegistCivilDocument" render={() => <RegistCivilDocument />} />
        <Route path="/blank" render={() => <Blank />} />
        <Route path="/gastronomias/:titulo" render={() => <Gastronomia />} />
        <Route path="/turismos/:titulo" render={() => <Turismo />} />
        <Route path="/c/" render={() => <ConsultaLinea />} />
        <Route path="/Alcaldes" render={() => <Alcaldes />} />
        <Route path="/contactos/directorio-telefono" render={() => <DirectorioTelefono />} />
        <Route path="/Descripcionturismo" render={() => <DescripcionTurismo />} />
        <Route path="/Restaurantes" render={() => <Restaurantes />} />
        <Route path="/Hoteles" render={() => <Hoteles />} />
        <Route path="/Platos_Tipicos" render={() => <Platos_Tipicos />} />
        <Route path="/Agroindustrias" render={() => <Agroindustrias />} />
        <Route path="/NavMazamari" render={() => <NavMazamari />} />
        <Route path="/ListHoteles" render={() => <ListHoteles />} />
        <Route path="/Noticias" render={() => <Noticias />} />
        <Route path="/InformacionAgro" render={() => <InformacionAgro />} />
        <Route path="/LugaresTuristicos" render={() => <LugaresTuristicos />} />
        <Route path="/RegistroTurismo" render={() => <RegistroTurismo />} />
        <Route path="/AgregarOperadores" render={() => <AgregarOperadores />} />
        <Route path="/AgregarComisiones" render={() => <AgregarComisiones />} />
        <Route path="/Convocatoria" render={() => <Convocatoria />} />
        <Route path="/AgregarConvocatoria" render={() => <AgregarConvocatoria />} />
        <Route path="/AgregarTransporte" render={() => <AgregarTransporte />} />
        <Route path="/DefensaCivil" render={() => <DefensaCivil />} />
        <Route path="/Policlinico" render={() => <Policlinico />} />
        <Route path="/SistemaControlInterno" render={() => <SistemaControlInterno />} />
        <Route path="/NormasPublicas" render={() => <NormasPublicas />} />
        <Route path="/DocImportantes" render={() => <DocImportantes />} />
        <Route path="/DocOCI" render={() => <DocOCI />} />
        <Route path="/Comunicados" render={() => <Comunicados />} />
        <Route path="/Boletines" render={() => <Boletines />} />
        <Route path='/Anuncios' render={() => <Anuncios />} />
        <Route exact path="/" render={() => <Home user={user} showAlert={showAlert} />} />

        {user && <>
          <Route path="/post/create/" render={() => <PostCreate />} />
          <Route path="/frame" render={() => <Frame showAlert={showAlert} />} />
          <Route
            path="/settings"
            render={() => <Settings
              user={user}
              settings={settings}
              updateSettings={updateSettings}
              showAlert={showAlert}
              showTopbar={showTopbar}
            />}
          />
          <Route path="/publicaciones/nuevo/:tipo" render={() => <NewPost user={user} />} />
          <Route exact path="/publicaciones/nuevo" render={() => <NewPostA user={user} />} />
        </>}

        <Route default render={() => <Error404 />} />

      </Switch>
    </Suspense>
  </>
}

function Options({ pagefb }) {
  const [facebook, setFacebook] = useState(false);

  function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 10) - 1);
    }
  }

  return <>
    {true && (
      <div className={`facebook shadow ${!facebook && 'd-none'}`}>
        <div
          className="fb-page"
          data-href={`https://www.facebook.com/municipalidadmazamari`}
          data-tabs="timeline"
          data-width="305"
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true">
          <blockquote
            cite="https://www.facebook.com/municipalidadmazamari"
            className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/municipalidadmazamari">Municipalidad Distrital De Mazamari</a>
          </blockquote>
        </div>
      </div>
    )}



    <div className="options-bottom-right">
      {true && (
        <div className="mt-3">
          <button className="btn-animado primary text-white" onClick={() => setFacebook(!facebook)}>
            {facebook ? <i className="fas fa-times fa-2x"></i> : <i className="fab fa-facebook-f fa-2x" />}
          </button>
        </div>
      )}
      {false && (
        <div className="mt-3">
          <button className="btn-animado secondary text-white" onClick={() => scrollUp()}>
            <i className="fas fa-chevron-up fa-2x" />
          </button>
        </div>
      )}
    </div>
  </>
}

function CarouselLinksFooter({ links, user, updateLink, deleteLink, showAlert }) {
  const params = useLocation()
  if (withLinks.indexOf(params.pathname) === -1) {
    return null;
  }


  return <div className="container mb-5">
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className="links"
      containerClass="border rounded-3 bg-white py-3"
      dotListClass=""
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass="px-2"
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 7,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 4,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable>
      {links.map(link => (
        <CarouselLink
          key={link.id}
          link={link}
          updateLink={updateLink}
          deleteLink={deleteLink}
          showAlert={showAlert}
          editable={user}
        />
      ))}
    </Carousel>
  </div>
}

export default App;


const withLinks = ['/'];
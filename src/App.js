import Axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import './assets/scss/styles.scss';
import "react-multi-carousel/lib/styles.css";

import useEsMobil from './Hoocks/useEsMobil';
import { setToken, deleteToken, getToken } from './Helpers/auth-helpers';

import Topbar from './components/Topbar';
import Header from './components/Header2';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SidebarNavigationMobile from './components/SidebarNavigationMobile.js';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import Alert from './components/Alert';

import CarouselLink from './Views/Home/components/CarouselLink'
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
const Dashboard = lazy(() => import('./Views/Dashboard/Dashboard'));
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
const QuejaReclamo = lazy(() => import('./Views/QuejaReclamo'));
const Direcctorio = lazy(() => import('./Views/Direcctorio'));
const Alcaldes = lazy(() => import('./Views/Alcaldes'));
const Dise = lazy(() => import('./Views/Dise'));
const Vis = lazy(() => import('./Views/Vis'));
const Funcionarios = lazy(() => import('./Views/Funcionarios'));
const DirectorioTelefono = lazy(() => import('./Views/DirectorioTelefono'));
const Tours = lazy(() => import('./Views/Tours'));
const DescripcionTurismo = lazy(() => import('./Views/DescripcionTurismo'));
const Restaurantes = lazy(() => import('./Views/Restaurantes'));
const Hoteles = lazy(() => import('./Views/Hoteles'));
const Platos_Tipicos = lazy(() => import('./Views/Platos_Tipicos'));
const Agroindustrias = lazy(() => import('./Views/Agroindustrias'));
const ListaReclamos = lazy(() => import('./Views/ListaReclamos'));
const NavMazamari = lazy(() => import('./Views/NavMazamari'));
const Agenda = lazy(() => import('./Views/Agenda'));
const ListHoteles = lazy(() => import('./Views/ListHoteles'));
const Noticias = lazy(() => import('./Views/Noticias'));
const InformacionAgro = lazy(() => import('./Views/InformacionAgro'));
const LugaresTuristicos = lazy(() => import('./Views/LugaresTuristicos'));
const RegistroTurismo = lazy(() => import('./Views/RegistroTurismo'));

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
  const esMobil = useEsMobil();

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
        // const { data: apiTopbar } = await Axios.get('/apimuni/topbars/active');
        // verificamos si contiene la clase has-topbar
        const isClassTopbar = document.body.classList.contains('has-topbar');
        // si no tiene la clase le agregamos la clase has-topbar
        !isClassTopbar && document.body.classList.add('has-topbar');
        setTopbar('__[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image');
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

    loadUser();
    loadSettings();
    loadTopbar()
    loadCarouselLinkSecundario();
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

  function removeTopbar() {
    localStorage.setItem('topbar', 'hidden');
    const isClassTopbar = document.body.classList.contains('has-topbar');
    isClassTopbar && document.body.classList.remove('has-topbar')
    setTopbar(null);
  }

  function showTopbar(valueTopbar) {
    if (!valueTopbar) {
      // localStorage.setItem('topbar', 'hidden');
      // verificamos si contiene la clase has-topbar
      const isClassTopbar = document.body.classList.contains('has-topbar');
      // si no tiene la clase le agregamos la clase has-topbar
      isClassTopbar && document.body.classList.remove('has-topbar');
      setTopbar(null);
      return;
    }

    localStorage.removeItem('topbar');
    // verificamos si contiene la clase has-topbar
    const isClassTopbar = document.body.classList.contains('has-topbar');
    // si no tiene la clase le agregamos la clase has-topbar
    !isClassTopbar && document.body.classList.add('has-topbar');
    setTopbar(valueTopbar);
  }

  const toggleSidebarMobile = () => {
    setSidebarNavigationMobile(!sidebarNavigationMobile);
  }
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  const showAlert = (type, mensaje) => {
    setAlert({ ...alert, type, mensaje, show: true });// {}
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

      {topbar && <Topbar topbar={topbar} onRemove={removeTopbar} />}

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

      {/* <Banner /> */}

      <Switch>
        <Suspense fallback={<Loading />}>
          {user && <>
            <Route path="/admin" render={() => <Dashboard />} />
            <Route path="/frame" render={() => <Frame />} />
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
          </>}

          <Route path="/vision_mision" render={() => <VisionMision />} />
          <Route path="/Certificacion" render={() => <Certificacion />} />
          <Route path="/Normativa" render={() => <Normativa />} />
          <Route path="/TributoMuniDocument" render={() => <TributoMuniDocument />} />
          <Route path="/Licencia" render={() => <Licencia />} />
          <Route path="/Regidores" render={() => <Regidores />} />
          <Route path="/PerfilA" render={() => <PerfilA />} />
          <Route path="/ConvocatoriaCass" render={() => <ConvocatoriaCass />} />
          <Route path="/Serenazgo" render={() => <Serenazgo />} />
          <Route path="/Himno" render={() => <Himno />} />
          <Route path="/Presentacion" render={() => <Presentacion />} />
          <Route path="/RegistCivilDocument" render={() => <RegistCivilDocument />} />

          <Route path="/" exact render={() => <Home user={user} showAlert={showAlert} />} />
          <Route path="/p" render={() => <Pages />} />
          <Route path="/blank" render={() => <Blank />} />
          <Route path="/historia" render={() => <Historia />} />
          <Route exact path="/gastronomiayturismo" render={() => <GastronomiaAndTurismo />} />
          <Route path="/gastronomias/:titulo" render={() => <Gastronomia />} />
          <Route path="/turismos/:titulo" render={() => <Turismo />} />
          <Route path="/login" exact render={() => <Login login={login} />} />
          <Route path="/equipo" render={() => <Equipo />} />
          <Route path="/comunidad" exact render={() => <Comunidad user={user} />} />
          <Route path="/@:user" exact render={() => <Perfil user={user} />} />

          <Route path="/c" render={() => <ConsultaLinea />} />
          <Route path="/QuejaReclamo" render={() => <QuejaReclamo />} />
          <Route path="/Direcctorio" render={() => <Direcctorio />} />
          <Route path="/Alcaldes" render={() => <Alcaldes />} />
          <Route path="/Dise" render={() => <Dise />} />
          <Route path="/Vis" render={() => <Vis />} />
          <Route path="/Funcionarios" render={() => <Funcionarios />} />
          <Route path="/DirectorioTelefono" render={() => <DirectorioTelefono />} />
          <Route path="/Tours" render={() => <Tours />} />
          <Route path="/Descripcionturismo" render={() => <DescripcionTurismo />} />
          <Route path="/Restaurantes" render={() => <Restaurantes />} />
          <Route path="/Hoteles" render={() => <Hoteles />} />
          <Route path="/Platos_Tipicos" render={() => <Platos_Tipicos />} />
          <Route path="/Agroindustrias" render={() => <Agroindustrias />} />
          <Route path="/ListaReclamos" render={() => <ListaReclamos />} />
          <Route path="/NavMazamari" render={() => <NavMazamari />} />
          <Route path="/Agenda" render={() => <Agenda />} />
          <Route path="/ListHoteles" render={() => <ListHoteles />} />
          <Route path="/Noticias" render={() => <Noticias />} />
          <Route path="/InformacionAgro" render={() => <InformacionAgro />} />
          <Route path="/LugaresTuristicos" render={() => <LugaresTuristicos />}/>
          <Route path="/RegistroTurismo" render={() => <RegistroTurismo/>}/>
          <Route path="/AgregarOperadores" render={() => <AgregarOperadores/>}/>
          <Route path="/Comisiones" render={() => <Comisiones/>}/>
          <Route path="/AgregarComisiones" render={() => <AgregarComisiones/>}/>
          <Route path="/Convocatoria" render={() => <Convocatoria/>}/>
          <Route path="/AgregarConvocatoria" render={() => <AgregarConvocatoria/>}/>
          <Route path="/Organigrama" render={() => <Organigrama/>}/>
          <Route path="/Proyectos" render={() => <Proyectos/>}/>
          <Route path="/DetalleProyecto" render={() => <DetalleProyecto/>}/>
          <Route path="/AgregarTransporte" render={() => <AgregarTransporte/>}/>
          <Route path="/DefensaCivil" render={() => <DefensaCivil/>}/>
          <Route path="/VasoLeche" render={() => <VasoLeche/>}/>
          <Route path="/Policlinico" render={() => <Policlinico/>}/>
          <Route path="/Demuna" render={() => <Demuna/>}/>
          <Route path="/Omaped" render={() => <Omaped/>}/>
          <Route path="/AdultoMayor" render={() => <AdultoMayor/>}/>
          <Route path="/LibroReclamos" render={() => <LibroReclamos/>}/>
          <Route path="/RealizarReclamo" render={() => <RealizarReclamo/>}/>
          <Route path="/SeguimientoReclamo" render={() => <SeguimientoReclamo/>}/>
          <Route path="/SeguridadSalud" render={() => <SeguridadSalud/>}/>
          <Route path="/Codisec" render={() => <Codisec/>}/>
          <Route path="/Sucursal" render={() => <Sucursal/>}/>
          <Route path="/Piced" render={() => <Piced/>}/>
          <Route path="/SistemaControlInterno" render={() => <SistemaControlInterno/>}/>
          <Route path="/NormasPublicas" render={() => <NormasPublicas/>}/>
          <Route path="/DocImportantes" render={() => <DocImportantes/>}/>
          <Route path="/DocOCI" render={() => <DocOCI/>}/>
          <Route path="/Comunicados" render={() => <Comunicados/>}/>
          <Route path="/Boletines" render={() => <Boletines/>}/>
          <Route path='/Anuncios' render={() => <Anuncios/>}/>
          <Route path='/DetalleNoticia' render={() => <DetalleNoticia/>}/>
          <Route exact path="/J1" render={() => <P1 />} />
        </Suspense>
      </Switch>

      <CarouselLinksFooter
        links={carouselLink}
        updateLink={updateLink}
        deleteLink={deleteLink}
        showAlert={showAlert}
        user={user}
      />

      <Alert type={alert.type} show={alert.show} mensaje={alert.mensaje} onHide={hideAlert} />

      {settings && <Footer settings={settings} />}
      <Options />
    </Router >
  );
}

function Options() {
  const [facebook, setFacebook] = useState(false);

  function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 10) - 1);
    }
  }

  return <>
    <div className={`facebook shadow ${!facebook && 'd-none'}`}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/centecp/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/centecp/" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/centecp/">Centro de Tecnología y Créditos del Perú</a>
        </blockquote>
      </div>
    </div>
    <div className="options-bottom-right">
      <div className="mt-3">
        <button className="btn-animado primary text-white" onClick={() => setFacebook(!facebook)}>
          {facebook ? <i className="fas fa-times fa-2x"></i> : <i className="fab fa-facebook-f fa-2x" />}
        </button>
      </div>
      <div className="mt-3">
        <button className="btn-animado secondary text-white" onClick={() => scrollUp()}>
          <i className="fas fa-chevron-up fa-2x" />
        </button>
      </div>
    </div>
  </>
}

function CarouselLinksFooter({ links, user, updateLink, deleteLink, showAlert }) {
  const params = useLocation()
  if (withLinks.indexOf(params.pathname) === -1) {
    return null;
  }


  return <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={3000}
    centerMode={false}
    className="links my-5 pt-3 pb-4 border rounded bg-white"
    containerClass="container"
    dotListClass=""
    draggable={false}
    focusOnSelect={false}
    infinite
    itemClass=""
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
    {links.map((link, key) => (
      <CarouselLink
        key={link.id}
        link={link}
        number={key + 1}
        updateLink={updateLink}
        deleteLink={deleteLink}
        showAlert={showAlert}
        editable={user}
      />
    ))}
  </Carousel>
}

export default App;


const withLinks = ['/'];
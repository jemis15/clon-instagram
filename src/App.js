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
const Certificacion = lazy(() => import('./Views/Certificacion'));
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
          <Route path="/" exact render={() => <Home user={user} showAlert={showAlert} />} />
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
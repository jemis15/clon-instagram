import Axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/styles.scss';

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

import Dashboard from './Views/Dashboard/Dashboard';
import Usuarios from './Views/Usuarios/Usuarios';
// const Inicio = lazy(() => import('./Views/Inicio'));
// const Equipo = lazy(() => import('./Views/Equipo'));
// const Perfil = lazy(() => import('./Views/Perfil'));
// const Login = lazy(() => import('./Views/Login'));
// const Historia = lazy(() => import('./Views/Historia'));
// const Gastronomia = lazy(() => import('./Views/Gastronomia'));
import Inicio from './Views/Inicio';
import Equipo from './Views/Equipo';
import Perfil from './Views/Perfil';
import Login from './Views/Login';
import Historia from './Views/Historia';
import GastronomiaAndTurismo from './Views/GastronomiaAndTurismo';
import Gastronomia from './Views/Gastronomia/Gastronomia';
import Turismo from './Views/Turismo/Turismo';
import Blank from './Views/Blank';
import Frame from './Views/Frame/Frame'
import VisionMision from './Views/VisionMision';
import Certificacion from './Views/Certificacion';
import Normativa from './Views/Normativa';
import TributoMuniDocument from './Views/TributoMuniDocument';
import Licencia from './Views/Licencia';
import Regidores from './Views/Regidores';
import PerfilA from './Views/PerfilA';
import ConvocatoriaCass from './Views/ConvocatoriaCass';
import Serenazgo from './Views/Serenazgo';
import Himno from './Views/Himno';
import Presentacion from './Views/Presentacion';
import RegistCivilDocument from './Views/RegistCivilDocument';
import MultiItemsCarousel from './components/MultiItemsCarousel';

function App() {
  const [user, setUser] = useState(null);
  const [sidebarNavigationMobile, setSidebarNavigationMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const esMobil = useEsMobil();

  useEffect(() => {
    async function loadUser() {
      if (!getToken()) {
        setLoadingUser(false);
        return;
      }

      try {
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

    loadUser();
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

  const toggleSidebarMobile = () => {
    setSidebarNavigationMobile(!sidebarNavigationMobile);
  }
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Router>
      {/* Loading inicial */}
      {loadingUser && <Loading />}
      {/* Fin Loading inicial */}

      <Topbar />

      {/* Transparente header */}
      <Header toggle={toggleSidebarMobile} user={user} />
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
        {/* protected */}
        <Route path="/admin" render={() => <Dashboard />} />
        <Route path="/usuarios" render={() => <Usuarios />} />
        <Route path="/frame" render={() => <Frame />} />
        {/* fin protected */}

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

        <Route path="/blank" render={() => <Blank />} />
        <Route path="/historia" render={() => <Historia />} />
        <Route exact path="/gastronomiayturismo" render={() => <GastronomiaAndTurismo />} />
        <Route path="/gastronomias/:titulo" render={() => <Gastronomia />} />
        <Route path="/turismos/:titulo" render={() => <Turismo />} />
        <Route path="/login" exact render={() => <Login login={login} />} />
        <Route path="/equipo" render={() => <Equipo />} />
        <Route path="/:user" exact render={() => <Perfil />} />
        <Route path="/" render={() => <Inicio />} />
      </Switch>

      {/* ruta de los carousel links */}
      <Switch>
        <Route path="/frame" render={() => null} />
        <Route path="/login" render={() => null} />
        <Route render={() => (
          <MultiItemsCarousel
            title={<><i className="fas fa-link text-primary" /> <span>Links de interes</span></>}
            grupo="secundario"
          />
        )} />
      </Switch>

      <Switch>
        <Route path="/frame" render={() => null} />
        <Route render={() => <Footer />} />
      </Switch>

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

export default App;

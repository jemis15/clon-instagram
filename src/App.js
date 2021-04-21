import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'moment/locale/es';
import './assets/scss/styles.scss';

import useEsMobil from './Hoocks/useEsMobil';
import { UserProvider, useUser } from './Context/user-context';
import { SettingProvider, useSetting } from './Context/setting-context';

import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarNavigationMobile from './components/SidebarNavigationMobile';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import Alert from './components/Alert';
import Routes from './Routes';
import ModalBienvenida from './components/ModalBienvenida';
import Anuncio from './components/Anuncio';

function James() {
  const { loadingUser } = useUser();
  const { loadingSettings } = useSetting();

  return <>
    {(loadingUser || loadingSettings) && <Loading />}
    <Router>
      <HeaderAndSidebar />
      <Routes />
      <AppFooter />
      <Options />
    </Router>
  </>
}

function HeaderAndSidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarNavigationMobile, setSidebarNavigationMobile] = useState(false);
  const esMobil = useEsMobil();
  const { user } = useUser();

  function toggleSidebarMobile() {
    setSidebarNavigationMobile(!sidebarNavigationMobile);
  }
  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  return <>
    {/* Transparente header */}
    <Header toggle={toggleSidebarMobile} />
    {esMobil && <SidebarNavigationMobile
      active={sidebarNavigationMobile}
      toggle={toggleSidebarMobile}
    />}
    {!esMobil && user && <Sidebar
      active={sidebar}
      toggle={toggleSidebar}
    />}
  </>
}

function AppFooter() {
  const { settings } = useSetting();
  const [visitas, setVisitas] = useState(null);

  useEffect(() => {
    async function loadVisitas() {
      try {
        const { data: apiVisitas } = await Axios.get('/v1/visitas');
        setVisitas(apiVisitas);
      } catch (error) {
        console.log(error);
      }
    }
    loadVisitas();
  }, []);

  return <Footer settings={settings} visitas={visitas} />
}

let timeoutAlert;
function App() {
  const { user, loadingUser, logout } = useUser();
  const [settings, setSettings] = useState(null);
  const [topbar, setTopbar] = useState(null);
  const [sidebarNavigationMobile, setSidebarNavigationMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [alert, setAlert] = useState({
    type: '',
    mensaje: '',
    show: false
  });
  const [carouselLink, setCarouselLink] = useState([]);
  const [visitas, setVisitas] = useState(null);
  const esMobil = useEsMobil();

  useEffect(() => {
    // async function loadSettings() {
    //   try {
    //     const { data: apiSettings } = await Axios.get('/v1/settings');
    //     setSettings(apiSettings.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

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

    async function loadVisitas() {
      try {
        const { data: apiVisitas } = await Axios.get(`/apimuni/visitas`);
        setVisitas(apiVisitas);
      } catch (error) {
        console.log(error);
      }
    }

    // loadSettings();
    loadTopbar();
    loadCarouselLinkSecundario();
    loadVisitas();
  }, []);

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

  const updateSettings = (settingsUpdated) => {
    setSettings(settingsUpdated);
  }

  // if (loadingUser) {
  //   return <Loading />
  // }

  return (
    <Router>
      {/* Loading inicial */}
      {loadingUser && <Loading />}
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

      <Routes
        settings={settings}
        updateSettings={updateSettings}
        showAlert={showAlert}
        showTopbar={showTopbar}
        carouselLinks={carouselLink}
      />

      {settings && <Footer settings={settings} visitas={visitas} />}

      <Alert type={alert.type} show={alert.show} mensaje={alert.mensaje} onHide={hideAlert} />
      <Options pagefb={settings && settings.facebook} />

      <ModalImage />
      <LoadAnuncio />
    </Router >
  );
}

function Options() {
  const { settings } = useSetting();
  const [facebook, setFacebook] = useState(false);

  function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 10) - 1);
    }
  }

  if (!settings.facebook) {
    return null;
  }

  return <>
    {settings.facebook && (
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
      {settings.facebook && (
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

const ModalImage = () => {
  const [active, setActive] = useState(true);
  const [modalBienvenida, setModalBienvenida] = useState(null);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    async function loadModalBienvenida() {
      try {
        const { data: apiModalBienvenida } = await Axios.get('/apimuni/modalbienvenida');
        setModalBienvenida(apiModalBienvenida);
      } catch (error) {
        if (Axios.isCancel(error)) {
          return;
        }
        console.log(error);
      }
    }

    let timeOut = setTimeout(loadModalBienvenida, 3000);
    return () => {
      clearTimeout(timeOut);
      source.cancel('Cancelado')
    };
  }, []);

  if (!modalBienvenida || !modalBienvenida.active || !active) {
    return null;
  }

  return <>
    <ModalBienvenida image={modalBienvenida.image} onHide={() => setActive(false)} staticBackdrop />
  </>
}

const LoadAnuncio = () => {
  const [active, setActive] = useState(false);
  const [anuncio, setAnuncio] = useState(null);

  useEffect(() => {
    let anuncio = setTimeout(() => {
      setActive(true);
    }, 3000);

    return () => clearTimeout(anuncio);
  }, []);

  if (!active || !anuncio) {
    return null;
  }

  return <>
    <Anuncio content={anuncio} onHide={() => setActive(false)} />
  </>
}

export default () => (
  <SettingProvider>
    <UserProvider>
      <James />
    </UserProvider>
  </SettingProvider>
);
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation, useParams } from 'react-router-dom';
import Axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import { useUser } from './Context/user-context';

import Loading from './components/Loading';
import DetallePost from './Views/DetallePost';

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
const Alcalde = lazy(() => import('./Views/Alcalde'));
const Alcaldes = lazy(() => import('./Views/Alcaldes'));
const Funcionarios = lazy(() => import('./Views/Funcionarios'));
const Gerencias = lazy(() => import('./Views/Gerencias'));
const DirectorioTelefono = lazy(() => import('./Views/DirectorioTelefono'));
const DescripcionTurismo = lazy(() => import('./Views/DescripcionTurismo'));
const Restaurantes = lazy(() => import('./Views/Mazamari/Restaurantes'));
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
const AprendoEnCasa = lazy(() => import('./Views/AprendoEnCasa'));

const GastronomiaDescripcion = lazy(() => import('./Views/Mazamari/GastronomiaDescripcion'));
const MHistoria = lazy(() => import('./Views/Mazamari/Historia'));
const MHoteles = lazy(() => import('./Views/Mazamari/Hoteles'));
const MTurismos = lazy(() => import('./Views/Mazamari/Turismos'));
const MAgroindustrias = lazy(() => import('./Views/Mazamari/Agroindustrias'));
const PostCreate = lazy(() => import('./Views/PostCreate'));
const NewPost = lazy(() => import('./Views/publicaciones/NewPost'));
const NewPostA = lazy(() => import('./Views/publicaciones/Nuevo'));
const Posts = lazy(() => import('./Views/publications/Posts'));
const Cem = lazy(() => import('./Views/Cem'));
const Error404 = lazy(() => import('./Views/Error404'));
const Publications = lazy(() => import('./Views/publicaciones/Lista'));
const PostDetails = lazy(() => import('./Views/publicaciones/DetalleNoticia'));
const PostNew = lazy(() => import('./Views/publicaciones/New'));

const MyStyle = lazy(() => import('./Views/MyStyle'));

function Rutas({ showAlert, showTopbar, carouselLinks }) {
    const { user } = useUser();
    let location = useLocation();
    let background = location.state && location.state.background;

    return <>
        <Suspense fallback={<Loading />}>
            <Switch location={background || location}>
                <Route exact path="/muni/vision_mision" render={() => <VisionMision />} />
                <Route exact path="/muni/comisiones" render={() => <Comisiones />} />
                <Route exact path="/muni/organigrama" render={() => <Organigrama />} />
                <Route exact path="/muni/alcalde" render={() => <Alcalde />} />
                <Route exact path="/muni/regidores" render={() => <Equipo />} />
                <Route exact path="/muni/funcionarios" render={() => <Gerencias />} />
                <Route exact path="/muni/proyectos" render={() => <MyStyle />} />
                <Route exact path="/muni/convocatorias" render={() => <Convocatoria />} />
                {/* <Route path="/muni/funcionarios" render={() => <Funcionarios />} /> */}

                {/* mazamari */}
                {/* <Route path="/historia" render={() => <Historia />} /> */}
                <Route exact path="/mazamari/historia" render={() => <MHistoria />} />
                <Route exact path="/mazamari/gastronomias" render={() => <GastronomiaAndTurismo />} />
                <Route exact path="/mazamari/gastronomias/:titulo" render={() => <GastronomiaDescripcion />} />
                <Route exact path="/mazamari/turismos" render={() => <MTurismos />} />
                <Route exact path="/mazamari/agroindustrias" render={() => <MAgroindustrias />} />
                <Route exact path="/mazamari/hoteles" render={() => <MHoteles />} />
                <Route exact path="/mazamari/restaurantes" render={() => <Restaurantes />} />

                {/* normativa */}
                <Route exact path="/normativa" render={() => <Normativa />} />

                {/* programas */}
                <Route exact path="/programas/vasoleche" render={() => <VasoLeche />} />
                <Route exact path="/programas/demuna" render={() => <Demuna />} />
                <Route exact path="/programas/omaped" render={() => <Omaped />} />
                <Route exact path="/programas/adultomayor" render={() => <AdultoMayor />} />
                <Route exact path="/programas/piced" render={() => <Piced />} />

                {/* Seguridad */}
                <Route exact path="/seguridad/direcctorio" render={() => <Direcctorio />} />
                <Route exact path="/seguridad/serenazgo" render={() => <Serenazgo />} />
                <Route exact path="/seguridad/codisec" render={() => <Codisec />} />
                <Route exact path="/seguridad/seguridadsalud" render={() => <SeguridadSalud />} />

                {/* Contactos */}
                <Route exact path="/contactos/sucursales" render={() => <Sucursal />} />
                <Route exact path="/contactos/directorio-telefono" render={() => <Direcctorio />} />

                {/* otros secundarios */}
                <Route path="/login" render={() => <Login />} />

                {/* mejorar diseños */}
                <Route path="/p" render={() => <Pages />} />
                <Route exact path="/Licencia" render={() => <Licencia />} />
                <Route exact path="/equipo" render={() => <Equipo />} />
                <Route exact exact path="/comunidad" render={() => <Comunidad />} />
                <Route exact exact path="/@:nickname" render={() => <Perfil />} />
                <Route exact path="/Agenda" render={() => <Agenda />} />
                <Route exact path="/publicaciones" render={() => <Posts />} />
                <Route exact path="/publicaciones/:title" render={() => <DetallePost />} />
                <Route exact path="/Proyectos" render={() => <Proyectos />} />
                <Route exact path="/DetalleProyecto" render={() => <DetalleProyecto />} />
                <Route exact path="/contactos/LibroReclamos" render={() => <LibroReclamos />} />
                <Route exact path="/RealizarReclamo" render={() => <RealizarReclamo />} />
                <Route exact path="/libroreclamaciones/:libro" render={() => <SeguimientoReclamo />} />

                {/* otras vistas */}
                <Route path="/cem" render={() => <Cem />} />{/* centro de emergencia mujer */}
                <Route path="/aprendoencasa" render={() => <AprendoEnCasa />} />{/* centro de emergencia mujer */}

                <Route path="/Certificacion" render={() => <Certificacion />} />
                <Route path="/TributoMuniDocument" render={() => <TributoMuniDocument />} />
                <Route path="/Regidores" render={() => <Regidores />} />
                <Route path="/ConvocatoriaCass" render={() => <ConvocatoriaCass />} />
                <Route path="/Himno" render={() => <Himno />} />
                <Route path="/RegistCivilDocument" render={() => <RegistCivilDocument />} />
                <Route path="/blank" render={() => <Funcionarios />} />
                <Route path="/gastronomias/:titulo" render={() => <Gastronomia />} />
                <Route path="/turismos/:titulo" render={() => <Turismo />} />
                <Route path="/c" render={() => <ConsultaLinea />} />
                <Route path="/alcalde" render={() => <Alcalde />} />
                <Route path="/Descripcionturismo" render={() => <DescripcionTurismo />} />
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
                <Route exact path="/" render={() => <Home showAlert={showAlert} carouselLinks={carouselLinks} />} />

                {user && <>
                    <Route path="/post/create/" render={() => <PostCreate />} />
                    <Route path="/frame" render={() => <Frame showAlert={showAlert} />} />
                    <Route
                        path="/settings"
                        render={() => <Settings
                            showAlert={showAlert}
                            showTopbar={showTopbar}
                        />}
                    />
                    <Route exact path="/posts/detalles/:id" render={() => <PostDetails />} />
                    <Route exact path="/posts/new" render={() => <PostNew />} />
                    <Route exact path="/publicaciones/nuevo/:tipo" render={() => <NewPost />} />
                    <Route exact path="/publicaciones/nuevo" render={() => <NewPostA />} />
                    <Route path="/publicaciones" render={() => <Publications />} />
                </>}

                <Route default render={() => <Error404 />} />

            </Switch>
        </Suspense>
        {background && <>
            <Switch>
                <Route path="/publicaciones/:title" children={(props) => <ModalPublicacion {...props} />} />
            </Switch>
        </>}
    </>
}

const ModalPublicacion = () => {
    const history = useHistory();
    const { title } = useParams();
    const [loading, setLoading] = useState(true);
    const [noticia, setNoticia] = useState(null);
    const [error, setError] = useState(null);
    const [publicacion, setPublicacion] = useState(null);

    const back = (e) => {
        e.stopPropagation();
        history.goBack();
    }

    useEffect(() => {
        document.body.style = 'overflow: hidden';
        const source = Axios.CancelToken.source();
        async function loadNotica() {
            try {
                setLoading(true);
                const { data: apiPublicacion } = await Axios.get(`/v1/posts/details/title?value=${title.split('-').join(' ')}`, {
                    cancelToken: source.token
                });
                setNoticia(apiPublicacion);
                setPublicacion(apiPublicacion);
                setLoading(false);
            } catch (error) {
                if (Axios.isCancel(error)) { return; }
                setLoading(false);
                setError('No se a podido encontrar la noticia.');
                console.log(error);
            }
        }

        loadNotica();
        return () => {
            source.cancel('Cancelado');
            document.body.style = '';
        };
    }, [title]);

    if (loading) {
        return <>
            <div className="blackglass-modal" onClick={back} />
            <div className="text-white" style={{ position: 'fixed', top: '50%', left: '50%', zIndex: 1500, transform: 'translate(-50%,-50%)' }}>
                cargando...
            </div>
        </>;
    }

    if (!noticia) {
        return <div className="text-danger">
            <i className="fas fa-exclamation-triangle" /> {error}
        </div>;
    }

    return <>
        <div className="blackglass-modal" onClick={back} />
        <div
            className="overflow-hidden"
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                zIndex: 1500,
                width: '800px',
                maxWidth: '90vw',
                height: '90vh'
            }}>
            <span className="cursor-pointer" onClick={back} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </span>
            <div className="p-5 h-100 rounded bg-white overflow-auto">
                <h2 className="t1 mb-5 text-center">{noticia.titulo}</h2>
                {publicacion.tipo === 'image'
                    ? <div className="mb-4 text-center">
                        <img
                            className="img-fluid"
                            src={publicacion.image_of_video && publicacion.tipo && publicacion.video_from ? `` : publicacion.image}
                            alt={publicacion.titulo}
                        />
                    </div>
                    : <div className="mb-4 ratio ratio-16x9 bg-light" style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${publicacion.video}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            webkitallfullscreen="true"
                            mozallfullscreen="true"
                            oallowfullscreen="true"
                            msallowfullscreen="true"
                        />
                    </div>
                }
                <div>
                    <MDEditor.Markdown source={publicacion.contenido} />
                </div>
            </div>
        </div>
    </>
}

export default Rutas;
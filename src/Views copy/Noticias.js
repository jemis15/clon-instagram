import React from 'react';
import img_noticia from '../assets/images/web/obras.jfif';

export default function noticias(){
    const style = {
        padding: '10px',
        width: '100%',
        fontFamily: 'sans-serif',
        textAlign: 'left',
        display:' block',
        backgroundColor: '#166a40',
        position: 'absolute',
        color:'white',
        left:' 50%',
        bottom: '0px',
        transform: 'translateX(-50%)',
        textAlign:'center'
    }
    const estilos ={
        width:'20px',
                alignItems:'center',
                backgroundColor:'var(--blue-300)',
                textAlign:'center',
                padding:'4px',
        color:'white'
    }
    return <div className="container my-5" style={{width:'700px'}}>
        <div className="contenido" 
        style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap: '1rem'
            }}>
                <div className="CajaNoticia shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                        Construccion de local comunal
                        </span>
                </div>
                <div className="CajaNoticia shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                        Construccion de local comunal
                        </span>
                </div>
                <div className="CajaNoticia shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                        Construccion de local comunal
                        </span>
                </div>
                <div className="CajaNoticia shadow position-relative"  >
                    <img  src={img_noticia} className="img_restaurante  " style={{
                        overflow:'hidden',
                        width:'100%',
                        height:'100%'}} />
                    <span className="button-tours rounded font-weight-bold"style={style} >
                        Construccion de local comunal
                        </span>
                </div>
        </div>
        <div className="visitas d-flex">
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            <div className="font-weight-bold rounded mt-4 mr-1" style={estilos }>
                0
            </div>
            
        </div>
    </div>
}
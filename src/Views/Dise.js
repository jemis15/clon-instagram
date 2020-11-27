import React from 'react';
import {Col, Form} from 'react-bootstrap';
import img_desk from '../assets/images/web/desk.png';

export default function Dise(){
    return <div className="container container_login my-5 shadow" style={{width:"500px", height:"100px"}}>
        <div className="forms-container">
            <div className="signin-signup">
                <form action="" className="sign-in-form">
                    <h3 className="title">INICIAR SESSION</h3>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Usuario"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="contraseña"/>
                    </div>
                    <input type="submit" value="Iniciar" className="boton btn solid "/>
                    <p className="social-text text-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
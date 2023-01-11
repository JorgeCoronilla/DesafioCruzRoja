import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const NavBarMenu = () => {

    const { setDisplay } = useContext(CreateWelcomeContext);
    const loginLink = () => { setDisplay("login") }
    const signinLink = () => { setDisplay("sign-in") }
    const close = () => {setDisplay("main")}

    return (
        <div>
            <div className='navBarMenu'>
                <div><h6>Inmi</h6></div>
                <div><p onClick={close}>&#10005;</p></div>
            </div>
            <div className='loginSigninNtn'>
                <button className="signinBtn" onClick={signinLink}>Quiero ser miembro</button>
                <button className="loginBtn" onClick={loginLink}>Iniciar sesión</button>
            </div>
            
            <div>
                <div className='menuOptions'>
                <hr/>
                    <p>¿Como funciona?</p>
                    <p>Buscar ayuda</p>
                    <p>Ser voluntario</p>
                    <p>FAQS</p>
                </div>
            </div>
        </div>
    )
}
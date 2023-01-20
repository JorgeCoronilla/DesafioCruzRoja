import React from 'react'

export const FilterMenu = () => {
  return (
    <div>
         <div>
            <div className='navBarMenu'>
            <div><h6><LogoNav/></h6></div>
                <div><p onClick={close}>&#10005;</p></div>
            </div>
            <div className='loginSigninNtn'>
                <button className="signinBtn">Quiero ser miembro</button>
                <button className="loginBtn">Iniciar sesión</button>
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
    </div>
  )
}

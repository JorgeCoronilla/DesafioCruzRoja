import React from 'react'
import spain from '../../media/españa.png'
import { ReactComponent as LogoNav } from '../../media/logo.svg';
import { ReactComponent as Menu } from '../../media/hamburguesa.svg';
export const NavBarCover = ({setDisplay}) => {

    const navMenu1 = () => {
        setDisplay("menu");
    }

    const languages = () => {
        setDisplay("languages")
    }

    const joinUs = () => {
        setDisplay("sign-in")
    }
    return (
        <div>
            <div className='navBarCover'>

                <div><h6><LogoNav/></h6></div>
                 <div className='rightElements'>  
                    <div><button onClick={joinUs}>Unirse</button></div>
                    <div><img onClick={languages} src={spain} alt="Spanish flag" /></div>
                      <div><p onClick={navMenu1}><Menu/></p></div>
                </div>

            </div>

        </div>
    )
}
/*
 <div><img onClick={languages} src={spain} alt="Spanish flag" /></div>
                  */
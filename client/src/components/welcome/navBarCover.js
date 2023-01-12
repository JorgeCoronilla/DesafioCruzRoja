import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import spain from '../../media/spain.png'
export const NavBarCover = () => {

    const { setDisplay} = useContext(CreateWelcomeContext);
    const navMenu1 = () => {
        setDisplay("menu");
    }

    const languages = () => {
        setDisplay("languages")
    }
    return (
        <div>
                <div className='navBarCover'>
                    <div><p onClick={navMenu1}>&#9776;</p></div>
                    <div><h6>Inmi</h6></div>
                    <div><img onClick={languages} src={spain} alt="Spanish flag" /></div>
                </div>
            
        </div>
    )
}

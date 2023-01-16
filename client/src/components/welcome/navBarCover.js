import React from 'react'
import spain from '../../media/spain.png'


export const NavBarCover = ({setDisplay}) => {


    const navMenu1 = () => {
        setDisplay("menu");
    }

    const languages = () => {
        setDisplay("languages")
    }
    return (
        <div>
            <div className='navBarCover'>

                <div><h6>Ayuda</h6></div>
                    
                <div className='rightElements'>  
                    <div><button onClick={languages}>Unirse</button></div>
                    <div><img onClick={languages} src={spain} alt="Spanish flag" /></div>
                     <div><p onClick={navMenu1}>&#9776;</p></div>
                </div>

            </div>

        </div>
    )
}
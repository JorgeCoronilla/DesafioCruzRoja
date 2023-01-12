import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
export const CategoryFinder = () => {

    const { setDisplay } = useContext(CreateWelcomeContext);
    const openCatMenu = () => {
        setDisplay("pop");
    }
    return (
        <div>
            <div className='homeContainer'>
                <div className='homeSection1'>
                    <h2>Encuentra a una<br />persona que te<br />pueda ayudar</h2>
                    <div className='submitContainer'>
                        <div className='handsicon'></div>
                        <div className='submitText'>¿En qué necesitas ayuda?</div>
                        <div onClick={openCatMenu}className='findicon'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

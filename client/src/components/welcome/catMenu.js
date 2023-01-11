import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const CatMenu = () => {

    const { setDisplay } = useContext(CreateWelcomeContext);
    const close = () => {setDisplay("main")}

    return (
        <div>
            <div className='catMenu'>
                <p className='catMenuTitle'>Necesito ayuda en</p>
                <div><span onClick={close}>&#10005;</span></div>
            </div>
            <div>
                <div className='catMenuOptions'>
                <hr/>
                    <div>
                        <img />
                        <p>Soporte emocional</p>
                    </div>
                    <div>
                        <img />
                        <p>Ser voluntario</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

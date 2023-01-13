import React, { useContext } from 'react'
import { CreateWelcomeContext } from '../providers/createWelcomeContex';
import { GrClose } from 'react-icons/gr'
export const CatMenu = () => {

    const { setDisplay } = useContext(CreateWelcomeContext);
    const close = () => {setDisplay("main")}

    return (
        <div>
            <div className='catMenu'>
                <div className='catMenuTitle'><p >Necesito ayuda en</p></div> 
                <div><span onClick={close}><GrClose /></span></div>
            </div>
            <div>
                <div className='catMenuOptions'>
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

import React from 'react'
import { GrStepsOption } from 'react-icons/gr';
import  popImg  from '../../media/registro-app.png'
export const PopRegister = ({setDisplay, pop, setPop}) => {

   
    const close = () => { setDisplay("main");
setPop(!pop) }
    const loginLink = () => { setDisplay("login") }
    const signinLink = () => { setDisplay("sign-in") }

    return (
        <div className='popContainer'>
            <div className="emptySpace" onClick={close}>
            </div>
            <div className='curve'>
                <div className='whiteSpace'></div>
            </div>
            <div className='popReg'>
                <div>
                <img src={popImg} alt="registro"  /></div>
                <div className='popTitle'><p>Ya casi estas!</p></div>
                <div className="popText"><p>lorem copy kjsahdksg laksdjklasdkja askjdhaksjdasd</p></div>
                <button type="submit" className="siginButton" onClick={loginLink} >Iniciar sesión</button>
                <button type="submit" className="regButton" onClick={signinLink}>Hazte miembro</button>
            </div>
        </div>
    )
}



import React, { useContext, useState } from 'react'
import { defaultFetch } from '../helpers/defaultFetch';
import { useNavigate } from 'react-router-dom'
import { Alert } from '../modals/alert';
import { CreateWelcomeContext } from '../providers/createWelcomeContex';

export const SignIn = () => {
    const { display, setDisplay, message, setMessage, showAlert, setShowAlert } = useContext(CreateWelcomeContext)
    const navigate = useNavigate();
    

    const sigInSub = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };

        //Envía correo de confirmación
        const res = await defaultFetch("http://localhost:3001/sign-in", "POST", userEmail);

        if (res) {
            setMessage("Correo enviado correctamente")
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false);
                navigate("/")
            }, 3000)

        } else {
            setMessage("Perdona, algo ha salido mal, vuelve a intentarlo")
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false);
            }, 3000)
        }

    }

    return (
        <div>
            {showAlert &&
                <Alert message={message} />
            }
            <div className='signinContainer'>
                <form onSubmit={sigInSub}>
                    <h4>Copy marketing para incentivar el registro</h4>
                        <input type="email" required name="email" minLength="5" maxLength="40" />
                    <button type="submit" value="Registrarse" className='registerBtn'>Hazte miembro</button>
                </form>
            </div>

        </div>
    )
}
